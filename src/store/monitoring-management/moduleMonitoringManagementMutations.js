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
  SET_DEVICES(state, devices) {
    state.devices = devices
  },
  REMOVE_RECORD(state, itemId) {
      const userIndex = state.devices.findIndex((u) => u.id == itemId)
      state.devices.splice(userIndex, 1)
  },
}
