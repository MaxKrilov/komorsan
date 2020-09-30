/*=========================================================================================
  File Name: moduleSettingsHeaderActions.js
  Description: SettingsHeader Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuejs, HTML Template
  Author: Krylov
==========================================================================================*/

import axios from "../../axios.js"
export default {
  // get a list of all databases
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
    // checking the current user database
    const newPromise = new Promise((resolve, reject) => {
      const path = '/api/v1/auth_status';
      axios.get(path, {headers: {"Content-Type": "application/json"}})
        .then((res) => {
          if(res.status === 200) {
            commit('AUTH_STATUS', res.data)
          }
          return resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
    commit('AUTH_STATUS', newPromise)
    return newPromise
  },
  async CHECK_SELECT_DATA_BASE ({dispatch} ) {
    return await dispatch('GET_STATUS_AUTH').then(res => {

      // commit('SET_FETCHING_LOCATIONS', res)
    })
  },

  SET_CURRENT_USER_DATABASE ({ commit }, payload) {
    // changing the current user database
    const newPromise = new Promise((resolve, reject) => {
      const path = '/api/v1/database/switch/' + payload;
      axios.post(path, {headers: {"Content-Type": "application/json"}})
        .then((res) => {
          if(res.status === 200) { // Database has been successully switched
            commit('SWITCH_DATABASE', res.data)
          }
          return resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
    commit('SWITCH_DATABASE', newPromise)
    return newPromise
  },
}


