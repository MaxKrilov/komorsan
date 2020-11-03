/*=========================================================================================
  File Name: moduleMonitoringManagement.js
  Description: Monitoring Module
  ----------------------------------------------------------------------------------------

  Item Name: Vuejs, HTML Template
  Author: Krylov
==========================================================================================*/


import state from './moduleMonitoringManagementState.js'
import mutations from './moduleMonitoringManagementMutations.js'
import actions from './moduleMonitoringManagementActions.js'
import getters from './moduleMonitoringManagementGetters.js'

export default {
  isRegistered: false,
  namespaced: true,
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
}

