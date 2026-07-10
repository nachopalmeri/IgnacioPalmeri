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
