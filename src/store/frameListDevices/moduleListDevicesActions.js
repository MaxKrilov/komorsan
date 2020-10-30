/*=========================================================================================
  File Name: moduleListDevicesActions.js
  Description: frameListDevices Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuejs, HTML Template
  Author: Krylov
==========================================================================================*/

import axios from "@/axios.js"

export default {

  GET_DEVICES_FROM_API({ commit }){


    // const instance = axios.create();
    // instance.defaults.headers.common = {};
    // instance.defaults.headers.common.accept = 'application/json';
    // var axiosCrossDomain = axios;
    // delete axiosCrossDomain.defaults.headers.common["X-CSRF-TOKEN"];
    return new Promise((resolve, reject) => {
      const path = '/api/v1/devices';
      axios.get(path, {headers: {"Content-Type": "application/json"}})
        .then((response) => {

          if(response.status === 200) {
            commit('SET_DEVICES_FROM_API', response)
            resolve(response)
          }
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}
