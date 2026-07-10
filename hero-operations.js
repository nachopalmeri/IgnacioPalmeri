(function exposeHeroOperations(root) {
  function projectNdcToMap({ x, y, z }) {
    return {
      x: Math.min(1, Math.max(0, (x + 1) / 2)),
      y: Math.min(1, Math.max(0, (1 - y) / 2)),
      visible:
        x >= -1 && x <= 1 && y >= -1 && y <= 1 && z >= -1 && z <= 1,
    };
  }

  function createActivationCoordinator({
    initialKey = 'jobbot',
    hasDestination,
    focus,
    navigate,
    onStateChange = () => {},
    onError = () => {},
  }) {
    const hardReasons = new Set(['superseded', 'route-change', 'destroy']);
    const bypassReasons = new Set(['reduced-motion', 'webgl-unavailable']);
    let state = 'idle';
    let committedKey = initialKey;
    let previewKey = null;
    let current = null;
    let nextId = 0;
    let destroyed = false;

    function snapshot() {
      return { state, committedKey, previewKey };
    }

    function emit() {
      onStateChange(snapshot());
    }

    function report(code, key) {
      onError({ code, key });
    }

    function finishIdle(transaction = null) {
      if (transaction && (!current || current.id !== transaction.id)) return;
      if (transaction) current = null;
      state = 'idle';
      previewKey = null;
      emit();
    }

    async function commitNavigation(transaction) {
      if (
        destroyed ||
        !current ||
        current.id !== transaction.id ||
        transaction.navigationCommitted
      ) {
        return;
      }

      transaction.navigationCommitted = true;
      state = 'navigating';
      emit();

      let ok = false;
      try {
        ok = await navigate(transaction.key);
      } catch {
        ok = false;
      }

      if (!current || current.id !== transaction.id) return;
      if (!ok) report('navigation-failed', transaction.key);
      finishIdle(transaction);
    }

    function cancelCurrent(reason) {
      const transaction = current;
      if (!transaction) return;

      transaction.cameraAbort.abort(reason);
      if (hardReasons.has(reason)) {
        if (current && current.id === transaction.id) current = null;
        finishIdle();
      }
    }

    function preview(key) {
      if (destroyed || current) return;
      previewKey = key;
      state = 'previewing';
      emit();
    }

    function clearPreview() {
      if (destroyed || current) return;
      previewKey = null;
      state = 'idle';
      emit();
    }

    async function activate(key) {
      if (destroyed) return;
      if (!hasDestination(key)) {
        report('missing-destination', key);
        finishIdle();
        return;
      }

      cancelCurrent('superseded');
      const transaction = {
        id: ++nextId,
        key,
        cameraAbort: new AbortController(),
        navigationCommitted: false,
      };
      current = transaction;
      committedKey = key;
      previewKey = null;
      state = 'focusing';
      emit();

      try {
        await focus(key, { signal: transaction.cameraAbort.signal });
        await commitNavigation(transaction);
      } catch (error) {
        const reason = error?.cause || transaction.cameraAbort.signal.reason;
        if (error?.name === 'AbortError' && bypassReasons.has(reason)) {
          await commitNavigation(transaction);
        } else if (
          current &&
          current.id === transaction.id &&
          !hardReasons.has(reason)
        ) {
          finishIdle(transaction);
        }
      }
    }

    function interrupt(reason) {
      cancelCurrent(reason);
    }

    function routeSettled(ok) {
      if (!current) return;
      if (!ok) report('navigation-failed', current.key);
      finishIdle(current);
    }

    function renderCurrent() {
      emit();
      return previewKey || committedKey;
    }

    function destroy() {
      cancelCurrent('destroy');
      destroyed = true;
    }

    emit();

    return {
      preview,
      clearPreview,
      activate,
      interrupt,
      routeSettled,
      renderCurrent,
      destroy,
      snapshot,
    };
  }

  root.HeroOperations = { projectNdcToMap };
  root.HeroOperations.createActivationCoordinator = createActivationCoordinator;
})(globalThis);
