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

import moduleMapLeaflet from './map/moduleMapLeaflet.js'
import moduleListDevices from './frameListDevices/moduleListDevices.js'
import moduleAuth from './auth/moduleAuth.js'


//
// import mapModule from '@/views/charts-and-maps/maps/leaflet-map/map.js'



export default new Vuex.Store({
    getters,
    mutations,
    state,
    actions,
    modules: {
        map: moduleMapLeaflet,
        frameListDevices: moduleListDevices,
        auth: moduleAuth,
    },
    // strict: process.env.NODE_ENV !== 'production'
})
