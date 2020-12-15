/*=========================================================================================
  File Name: moduleMonitoringMutations.js
  Description: Monitoring Module Mutations
  ----------------------------------------------------------------------------------------
  Item Name: Vuejs, HTML Template
  Author: Krylov
==========================================================================================*/


export default {
  // API
  SET_DEVICES_FROM_API(state, devices) {
    state.devices = devices
  },
  SET_USERS(state, users) {
    state.users = users
  },
  REMOVE_RECORD(state, itemId) {
      const userIndex = state.users.findIndex((u) => u.id == itemId)
      state.users.splice(userIndex, 1)
  },
}
