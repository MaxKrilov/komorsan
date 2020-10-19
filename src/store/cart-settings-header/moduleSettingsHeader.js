/*=========================================================================================
  File Name: moduleSettingsHeader.js
  Description: SettingsHeader Module
  ----------------------------------------------------------------------------------------

  Item Name: Vuejs, HTML Template
  Author: Krylov
==========================================================================================*/


import state from './moduleSettingsHeaderState.js'
// import mutations from './moduleSettingsHeaderMutations.js'
import mutations from './moduleSettingsHeader_Mutations.js'
import actions from './moduleSettingsHeaderActions.js'
import getters from './moduleSettingsHeaderGetters.js'

export default {
  namespaced: true,
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
}

