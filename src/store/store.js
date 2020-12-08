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
// export const strict = false
// import moduleEventsManagement from './events/moduleEventsManagement.js'
// import moduleDataList from './modules/data-list/moduleDataList.js'
// import moduleMapLeaflet from './modules/map/moduleMapLeaflet.js'
// import moduleListDevices from './modules/frameListDevices/moduleListDevices.js'
// import moduleAuth from './modules/auth/moduleAuth.js'
// import moduleSettingsHeader from './modules/cart-settings-header/moduleSettingsHeader.js'
// import moduleAlarmHeader from './modules/cart-alarm -notifications-header/moduleAlarmHeader.js'
// import mod from './modules/index.js'
// const requireContext = mod

const mod = {

  auth: 'moduleAuth',

}

const modules = requireContext.keys()
// const modules = Object.keys(mod)
  .map(file => {
    console.log('---file');
    console.log(require.context('./modules', true, /.*\.js$/).keys());
    console.log('--file');
    console.log('---file');
    console.log(Object.keys(mod));
    console.log('--file');
    // return ['moduleAuth', require.context('./modules', true, /.*\.js$/) ]
    [file.replace(/(^.\/)|(\.js$)/g, ''), requireContext(file)]
  })
  .reduce((modules, [name, module]) => {

    if (module.namespaced === undefined) {
      module.namespaced = true
    }

    return { ...modules, [name]: module }
  }, {})

export default new Vuex.Store({
  getters,
  mutations,
  state,
  actions,
  modules
  // modules: {
  //   // events: moduleEventsManagement,
  //   map: moduleMapLeaflet,
  //   frameListDevices: moduleListDevices,
  //   auth: moduleAuth,
  //   cartSettingsHeader: moduleSettingsHeader,
  //   cartAlarmNotificationsHeader: moduleAlarmHeader,
  //   dataList: moduleDataList, // test -- add in repo
  // },
  // strict: process.env.NODE_ENV !== 'production'
})
