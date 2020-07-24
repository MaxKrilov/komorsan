/*=========================================================================================
  File Name: moduleMapLeafletMutations.js
  Description: MapLeaflet Module Mutations
  ----------------------------------------------------------------------------------------
  Item Name: Vuejs, HTML Template
  Author: Krylov
==========================================================================================*/


export default {
  // Instance
  SET_MAP_INSTANCE(state, mapInstance) {
    state.mapInstance = mapInstance
  },
  SET_FETCHING_LOCATIONS (state, fetching) {
    state.fetchingLocations = fetching
  },
  SET_LOCATIONS (state, locations) {
    state.locations = locations
  },
}
