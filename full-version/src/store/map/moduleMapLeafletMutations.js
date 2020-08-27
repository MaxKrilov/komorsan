/*=========================================================================================
  File Name: moduleMapLeafletMutations.js
  Description: MapLeaflet Module Mutations
  ----------------------------------------------------------------------------------------
  Item Name: Vuejs, HTML Template
  Author: Krylov
==========================================================================================*/

// import { SET_MAP_INSTANCE } from '../name_mutation.js'
export default {
  // Instance
SET_MAP_INSTANCE (state, mapInstance) {
    state.mapInstance = mapInstance
    // state.mapInstance = Object.assign({}, mapInstance)
    // state.mapInstance = mapInstance.slice()
    // state.mapInstance = JSON.parse(JSON.stringify(mapInstance))
    // console.log('----1- mapInstance');
    // console.log(state.mapInstance);
    // console.log('----1 mapInstance');
  },
  SET_FETCHING_LOCATIONS (state, fetching) {
    // console.log('----state.fetchingLocations');
    // console.log(fetching)
    // console.log('----state.fetchingLocations');

      state.fetchingLocations = fetching

  },
  SET_LOCATIONS: (state, locations) => {
    state.locations = [...locations]
  },
}
