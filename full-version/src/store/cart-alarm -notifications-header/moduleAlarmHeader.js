/*=========================================================================================
  File Name: moduleAlarmHeader.js
  Description: AlarmHeader Module
  ----------------------------------------------------------------------------------------

  Item Name: Vuejs, HTML Template
  Author: Krylov
==========================================================================================*/


import state from './moduleSettingsHeaderState.js'
import mutations from './moduleSettingsHeaderMutations.js'
import actions from './moduleSettingsHeaderActions.js'
import getters from './moduleSettingsHeaderGetters.js'

export default {
  namespaced: true,
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
}

