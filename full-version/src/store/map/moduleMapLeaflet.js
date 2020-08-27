/*=========================================================================================
  File Name: moduleMapLeaflet.js
  Description: MapLeaflet Module
  ----------------------------------------------------------------------------------------

  Item Name: Vuejs, HTML Template
  Author: Krylov
==========================================================================================*/

// import LOCATIONS from "../../views/charts-and-maps/maps/leaflet-map/LOCATIONS.json";
import state from './moduleMapLeafletState.js'
import mutations from './moduleMapLeafletMutations.js'
import actions from './moduleMapLeafletActions.js'
import getters from './moduleMapLeafletGetters.js'

export default {
  // LOCATIONS,
  // locations               : [],
  namespaced: true,
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
}

