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
export const strict = false

// import moduleTodo from './todo/moduleTodo.js'
// import moduleCalendar from './calendar/moduleCalendar.js'
// import moduleChat from './chat/moduleChat.js'
// import moduleEmail from './email/moduleEmail.js'
import moduleMapLeaflet from './map/moduleMapLeaflet.js'
import moduleListDevices from './frameListDevices/moduleListDevices.js'
import moduleAuth from './auth/moduleAuth.js'
import moduleECommerce from './eCommerce/moduleECommerce.js'

//
// import mapModule from '@/views/charts-and-maps/maps/leaflet-map/map.js'



export default new Vuex.Store({
    getters,
    mutations,
    state,
    actions,
    modules: {
        // todo: moduleTodo,
        // calendar: moduleCalendar,
        // chat: moduleChat,
        // email: moduleEmail,
        // leaflet_map: mapModule,
        map: moduleMapLeaflet,
        frameListDevices: moduleListDevices,
        auth: moduleAuth,
        eCommerce: moduleECommerce,
    },
    strict: process.env.NODE_ENV !== 'production'
})
