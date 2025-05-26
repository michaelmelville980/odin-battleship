module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: { node: "current" },
        // don’t transform import/export to CommonJS:
        modules: false
      }
    ]
  ]
};
