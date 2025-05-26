module.exports = {
  extensionsToTreatAsEsm: [".js"],
  transform: {
    "^.+\\.js$": ["babel-jest", { configFile: "./babel.config.cjs" }]
  },

  testEnvironment: "node"
};