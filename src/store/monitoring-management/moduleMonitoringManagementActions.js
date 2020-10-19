/*=========================================================================================
  File Name: moduleMonitoringActions.js
  Description: Monitoring Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuejs, HTML Template
  Author: Krylov
==========================================================================================*/

import axios from "@/axios.js"
import getKitsStates from "@/http/requests/indication/sets/index.js"
// import getKitsStates from "../../http/requests/indication/sets/index.js"
export default {
  // addItem({ commit }, item) {
  //   return new Promise((resolve, reject) => {
  //     axios.post("/api/data-list/", {item: item})
  //       .then((response) => {
  //         commit('ADD_ITEM', Object.assign(item, {id: response.data.id}))
  //         resolve(response)
  //       })
  //       .catch((error) => { reject(error) })
  //   })
  // },
  fetchDevicesFromApi({ commit }){
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
  },
  fetchIndicationFromApi({ commit }, payload){
    return new Promise((resolve, reject) => {
      getKitsStates.getKitsStates(payload)
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
  },

}
