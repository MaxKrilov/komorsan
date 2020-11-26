/*=========================================================================================
  File Name: moduleMapLeafletMutations.js
  Description: MapLeaflet Module Mutations
  ----------------------------------------------------------------------------------------
  Item Name: Vuejs, HTML Template
  Author: Krylov
==========================================================================================*/
import Vue from 'vue'
// import { SET_MAP_INSTANCE } from '../name_mutation.js'
// export default
const moduleMapLeafletMutations = {
  // Instance
SET_MAP_INSTANCE (state, mapInstance) {
    state.mapInstance = mapInstance

    // state.mapInstance = Object.assign({}, mapInstance)
    // state.mapInstance = mapInstance.slice()
    // state.mapInstance = JSON.parse(JSON.stringify(mapInstance))
  },
  SET_FETCHING_LOCATIONS (state, fetching) {
    state.fetchingLocations = fetching
  },
  SET_LOCATIONS: (state, locations) => {
    state.locations = locations

    // let index = state.locations.findIndex(loc => loc.graph_node_idgraph_node_id == locations.graph_node_idgraph_node_id)
    // let index = state.locations.map(loc => {
    //   Vue.set(state.locations, loc, locations)
    // })
    // index === -1 ? state.locations.push(locations) :  Vue.set(state.locations, index, locations);
    // Vue.set(state.locations, index, locations)
  },
}
export default moduleMapLeafletMutations
