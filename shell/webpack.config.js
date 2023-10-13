const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const packageDeps = require("./package.json");
const {
  shareAll,
} = require("@angular-architects/module-federation/webpack");
const sharedMappings = new mf.SharedMappings();
sharedMappings.register(path.join(__dirname, "tsconfig.json"), [
  /* mapped paths to share */
]);

module.exports = {
  resolve: {
    fallback: {
      path: false,
      fs: false,
    },
  },
  output: {
    uniqueName: "shell",
    publicPath: "auto",
  },
  optimization: {
    runtimeChunk: false,
  },

  plugins: [
    new ModuleFederationPlugin({
      // For remotes (please adjust)
      // name: "shell",
      // filename: "remoteEntry.js",
      // exposes: {
      //     './Component': './/src/app/app.component.ts',
      // },

      // For hosts (please adjust)
      // remotes: {
      //     "mfe1": "http://localhost:3000/remoteEntry.js",

      // },

      shared: {
        ...shareAll({
          singleton: true,
          strictVersion: true,
          requiredVersion: "auto",
        }),
      },
    }),
  ],
};
