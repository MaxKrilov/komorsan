/*=========================================================================================
  File Name: moduleEventsActions.js
  Description: Events Module Actions
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
  GET_EVENTS_GROUP({ commit }){
   return new Promise((resolve, reject) => {
     const path = '/api/v1/events?group';
      axios.get(path, {headers: {"Content-Type": "application/json"}})
        .then(response => {
          // console.log('---data-indication')
          // console.log(response.data )
          // console.log('---data-indication')
          if(response.status === 200) {
            commit('SET_EVENTS_GROUP', response)
            resolve(response)

          }
        })
        .catch(error => {
          reject(error)
        })
    })
  },

   GET_EVENTS_FROM_API: async ({ commit, dispatch } ) => {
      const path = '/api/v1/event_groups';
      let dataGroups  =  await axios.get(path, {headers: {"Content-Type": "application/json"}})
      commit('SET_EVENTS_FROM_API', dataGroups)
      return await dispatch('GET_EVENTS_GROUP').then(response => {
        // console.log('---response-indication')
        // console.log(response.data )
        // console.log('---response-indication')
        if(response.status === 200) {
          commit('SET_EVENTS_GROUP', response)

          resolve(response)

        }
      })
      .catch(error => {
        reject(error)
      })
  },
  // GET_EVENTS_FROM_API({ commit, dispatch  }){
  //  return new Promise((resolve, reject) => {
  //     // const path = '/api/v1/devices';
  //    const path = '/api/v1/event_groups';
  //     axios.get(path, {headers: {"Content-Type": "application/json"}})
  //       .then(response => {
  //         console.log('---response-indication')
  //         console.log(response.data )
  //         console.log('---response-indication')
  //         if(response.status === 200) {
  //           commit('SET_EVENTS_FROM_API', response)
  //
  //           resolve(response)
  //
  //         }
  //       })
  //       .catch(error => {
  //         reject(error)
  //       })
  //   })
  // },
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
