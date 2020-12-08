/*=========================================================================================
  File Name: moduleListDevices.js
  Description: frameListDevices Module
  ----------------------------------------------------------------------------------------
  Item Name: Vuejs, HTML Template
  Author: Krylov
==========================================================================================*/


import state from './moduleListDevicesState.js'
import mutations from './moduleListDevicesMutations.js'
import actions from './moduleListDevicesActions.js'
import getters from './moduleListDevicesGetters.js'

export default {
  namespaced: true,
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
}
