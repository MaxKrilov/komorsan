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

}


