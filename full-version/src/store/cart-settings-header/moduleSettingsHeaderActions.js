/*=========================================================================================
  File Name: moduleSettingsHeaderActions.js
  Description: SettingsHeader Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuejs, HTML Template
  Author: Krylov
==========================================================================================*/

import axios from "../../axios.js"
export default {
  GET_DATA_BASE_ALL_INSTANCE ({ commit, payload }) {
    commit('SET_DATA_BASE_INSTANCE', payload)
  },

}


