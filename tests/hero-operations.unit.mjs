import assert from 'node:assert/strict';

await import('../hero-operations.js');

const { projectNdcToMap } = globalThis.HeroOperations || {};

assert.deepEqual(projectNdcToMap({ x: -1, y: 1, z: 0 }), {
  x: 0,
  y: 0,
  visible: true,
});
assert.deepEqual(projectNdcToMap({ x: 1, y: -1, z: 0 }), {
  x: 1,
  y: 1,
  visible: true,
});
assert.deepEqual(projectNdcToMap({ x: 1.2, y: 0, z: 0 }), {
  x: 1,
  y: 0.5,
  visible: false,
});
assert.equal(projectNdcToMap({ x: 0, y: 0, z: 2 }).visible, false);

const { createActivationCoordinator } = globalThis.HeroOperations;

function deferred() {
  let resolve;
  let reject;
  const promise = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return { promise, resolve, reject };
}

function harness({ navigationResult = true } = {}) {
  const focuses = [];
  const navigations = [];
  const states = [];
  const errors = [];
  const focus = (key, { signal }) => {
    const operation = deferred();
    signal.addEventListener(
      'abort',
      () => {
        const error = new DOMException('Aborted', 'AbortError');
        error.cause = signal.reason;
        operation.reject(error);
      },
      { once: true },
    );
    focuses.push({ key, operation });
    return operation.promise;
  };
  const coordinator = createActivationCoordinator({
    initialKey: 'jobbot',
    hasDestination: (key) => ['jobbot', 'prode', 'labs'].includes(key),
    focus,
    navigate: async (key) => {
      navigations.push(key);
      return navigationResult;
    },
    onStateChange: (state) => states.push(state),
    onError: (error) => errors.push(error),
  });
  return { coordinator, focuses, navigations, states, errors };
}

function testPreviewState() {
  const { coordinator } = harness();
  assert.deepEqual(coordinator.snapshot(), {
    state: 'idle',
    committedKey: 'jobbot',
    previewKey: null,
  });
  coordinator.preview('prode');
  assert.equal(coordinator.snapshot().state, 'previewing');
  assert.equal(coordinator.snapshot().previewKey, 'prode');
  coordinator.clearPreview();
  assert.deepEqual(coordinator.snapshot(), {
    state: 'idle',
    committedKey: 'jobbot',
    previewKey: null,
  });
}

async function testSupersede() {
  const { coordinator, focuses, navigations } = harness();
  const jobbotActivation = coordinator.activate('jobbot');
  const prodeActivation = coordinator.activate('prode');
  focuses[1].operation.resolve();
  await Promise.all([jobbotActivation, prodeActivation]);
  assert.deepEqual(navigations, ['prode']);
  assert.equal(coordinator.snapshot().state, 'idle');
}

async function testExactlyOnce(reason) {
  const { coordinator, focuses, navigations } = harness();
  const activation = coordinator.activate('labs');
  coordinator.interrupt(reason);
  coordinator.interrupt(reason);
  focuses[0].operation.resolve();
  await activation;
  await Promise.resolve();
  assert.deepEqual(navigations, ['labs']);
}

async function testHardCancel(reason) {
  const { coordinator, navigations } = harness();
  const activation = coordinator.activate('prode');
  coordinator.interrupt(reason);
  await activation;
  assert.deepEqual(navigations, []);
  assert.equal(coordinator.snapshot().state, 'idle');
}

async function testMissingDestination() {
  const { coordinator, errors } = harness();
  await coordinator.activate('missing');
  assert.deepEqual(errors, [{ code: 'missing-destination', key: 'missing' }]);
  assert.equal(coordinator.snapshot().state, 'idle');
}

async function testNavigationFailure() {
  const { coordinator, focuses, errors } = harness({ navigationResult: false });
  const activation = coordinator.activate('prode');
  focuses[0].operation.resolve();
  await activation;
  assert.deepEqual(errors, [{ code: 'navigation-failed', key: 'prode' }]);
  assert.equal(coordinator.snapshot().state, 'idle');
}

async function testStateSequence() {
  const { coordinator, focuses, states } = harness();
  const activation = coordinator.activate('prode');
  focuses[0].operation.resolve();
  await activation;
  assert.deepEqual(
    states.map(({ state }) => state),
    ['idle', 'focusing', 'navigating', 'idle'],
  );
}

testPreviewState();
await testSupersede();
await testExactlyOnce('webgl-unavailable');
await testExactlyOnce('reduced-motion');
await testHardCancel('route-change');
await testHardCancel('destroy');
await testMissingDestination();
await testNavigationFailure();
await testStateSequence();

console.log('hero operations unit tests passed');
