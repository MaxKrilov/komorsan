/*=========================================================================================
  File Name: vue.config.js
  Description: configuration file of vue
  ----------------------------------------------------------------------------------------
  Item Name: Vuejs, HTML Template
  Author: Krylov
==========================================================================================*/


module.exports = {
  devServer: {
    proxy: {

      "/api/v1/": {
        target: "http://10.10.20.12:8081",
        pathRewrite:  {'^/api/v1/#' : '/api/v1/'},
        secure: false,
        changeOrigin: true,
        ws: true,
      }
    },
  }
};


