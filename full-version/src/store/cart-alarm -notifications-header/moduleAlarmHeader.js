/*=========================================================================================
  File Name: moduleAlarmHeader.js
  Description: AlarmHeader Module
  ----------------------------------------------------------------------------------------

  Item Name: Vuejs, HTML Template
  Author: Krylov
==========================================================================================*/


import state from './moduleAlarmHeaderState.js'
import mutations from './moduleAlarmHeaderMutations.js'
import actions from './moduleAlarmHeaderActions.js'
import getters from './moduleAlarmHeaderGetters.js'

export default {
  namespaced: true,
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
}

