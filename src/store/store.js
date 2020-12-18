/*=========================================================================================
  File Name: store.js
  Description: Vuex store
  ----------------------------------------------------------------------------------------
  Item Name: Vuejs, HTML Template
  Author: Krylov
==========================================================================================*/


import Vue from 'vue'
import Vuex from 'vuex'

import state from "./state"
import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"

Vue.use(Vuex)
/*   export const strict = false    */
// import moduleEventsManagement from './events/moduleEventsManagement.js'
import moduleDataList from './data-list/moduleDataList.js'
import moduleMapLeaflet from './map/moduleMapLeaflet.js'
import moduleListDevices from './frameListDevices/moduleListDevices.js'
import moduleAuth from './auth/moduleAuth.js'
import moduleSettingsHeader from './cart-settings-header/moduleSettingsHeader.js'
import moduleAlarmHeader from './cart-alarm -notifications-header/moduleAlarmHeader.js'




/*
    ==== there is a problem using ===

    const modules = requireContext.keys()
      .map(file => {
        [file.replace(/(^.\/)|(\.js$)/g, ''), requireContext(file)]
      })
      .reduce((modules, [name, module]) => {

        if (module.namespaced === undefined) {
          module.namespaced = true
        }

        return { ...modules, [name]: module }
      }, {})
*/

export default new Vuex.Store({
  getters,
  mutations,
  state,
  actions,
  // modules
  modules: {
    // events: moduleEventsManagement,
    map: moduleMapLeaflet,
    frameListDevices: moduleListDevices,
    auth: moduleAuth,
    cartSettingsHeader: moduleSettingsHeader,
    cartAlarmNotificationsHeader: moduleAlarmHeader,
    dataList: moduleDataList,
  },
  // strict: process.env.NODE_ENV !== 'production'
})
