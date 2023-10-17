const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

 module.exports = withModuleFederationPlugin({

   name: 'cityPage',

   exposes: {
     // Adjusted line:
     './Module': './src/app/city-info/city-info.module.ts'
   },

   shared: {
     ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
   },

 });