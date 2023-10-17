const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const {
  shareAll,
} = require("@angular-architects/module-federation/webpack");
const share = mf.share;
const packageDeps = require('./package.json');
const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "cityPage",
    publicPath: "auto",
    scriptType: 'text/javascript'
  },
  optimization: {
    runtimeChunk: false
  },   
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "cityPage",
      filename: "remoteEntry.js",
      exposes: {
        // For microfrontends
        './Module': './src/app/city-info/city-info.module.ts'
      },

        // For remotes (please adjust)
        // name: "mfe1",
        // filename: "remoteEntry.js",
        // exposes: {
        //     './Component': './/src/app/app.component.ts',
        // },        
        
        // For hosts (please adjust)
        // remotes: {
        //     "mfe1": "http://localhost:3000/remoteEntry.js",

        // },

        shared: share({
          ...shareAll({
            singleton: true,
            strictVersion: true,
            requiredVersion: "auto",
          }),
          ...sharedMappings.getDescriptors()
        })
        
    }),
    sharedMappings.getPlugin()
  ],
};