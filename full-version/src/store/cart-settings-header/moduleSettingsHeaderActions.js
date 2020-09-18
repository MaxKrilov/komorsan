/*=========================================================================================
  File Name: moduleSettingsHeaderActions.js
  Description: SettingsHeader Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuejs, HTML Template
  Author: Krylov
==========================================================================================*/

import axios from "../../axios.js"
export default {
  GET_DATA_BASE_ALL_INSTANCE ({ commit }) {
    const newPromise = new Promise((resolve, reject) => {
      const path = '/api/v1/databases';
      axios.get(path, {headers: {"Content-Type": "application/json"}})
        .then((res) => {
          if(res.status === 200) {
            commit('SET_DATABASE_INSTANCE', res.data)
          }
          return resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
    commit('SET_DATABASE_INSTANCE', newPromise)
    return newPromise
  },
  GET_STATUS_AUTH ({ commit }) {
    const newPromise = new Promise((resolve, reject) => {
      const path = '/api/v1/auth_status';
      axios.get(path, {headers: {"Content-Type": "application/json"}})
        .then((res) => {
          if(res.status === 200) {
            console.log('----- .11r');
            console.log(res.data);
            console.log('---- 11r');
            commit('AUTH_STATUS', res.data)
          }
          return resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
    // commit('AUTH_STATUS', newPromise)
    return newPromise
  },
  CHECK_SELECT_DATA_BASE ({dispatch} ) {
    return dispatch('GET_STATUS_AUTH').then(res => {
      console.log('----- .22r');
      console.log(res );
      console.log('---- 22r');
      // commit('SET_FETCHING_LOCATIONS', res)
    })
  },

}


