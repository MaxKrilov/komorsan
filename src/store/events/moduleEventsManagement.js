/*=========================================================================================
  File Name: moduleMonitoringManagement.js
  Description: Monitoring Module
  ----------------------------------------------------------------------------------------

  Item Name: Vuejs, HTML Template
  Author: Krylov
==========================================================================================*/


import state from './moduleEventsManagementState.js'
import mutations from './moduleEventsManagementMutations.js'
import actions from './moduleEventsManagementActions.js'
import getters from './moduleEventsManagementGetters.js'

export default {
  isRegistered: false,
  namespaced: true,
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
}

