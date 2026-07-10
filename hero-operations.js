(function exposeHeroOperations(root) {
  function projectNdcToMap({ x, y, z }) {
    return {
      x: Math.min(1, Math.max(0, (x + 1) / 2)),
      y: Math.min(1, Math.max(0, (1 - y) / 2)),
      visible:
        x >= -1 && x <= 1 && y >= -1 && y <= 1 && z >= -1 && z <= 1,
    };
  }

  root.HeroOperations = { projectNdcToMap };
})(globalThis);
