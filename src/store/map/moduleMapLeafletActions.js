/*=========================================================================================
  File Name: moduleMapLeafletActions.js
  Description: MapLeaflet Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuejs, HTML Template
  Author: Krylov
==========================================================================================*/

import axios from "../../axios.js"
const moduleMapLeafletActions = {
  GET_MAP_INSTANCE ({ commit, payload }) {
    commit('SET_MAP_INSTANCE', payload)
  },
  FETCH_LOCATIONS({commit, dispatch}) {
    if ( dispatch('auth/getStatusAuth', null, {root:true}) ){
      const newPromise = new Promise((resolve, reject) => {
        const path = '/api/v1/graph_nodes';
        axios.get(path, {headers: {"Content-Type": "application/json"}})
          .then((locations) => {
            if (locations.status === 200) {
              commit('SET_LOCATIONS', locations.data)
              commit('SET_FETCHING_LOCATIONS', null)
            }
            return resolve(locations.data)
          })
          .catch((error) => {
            reject(error)
          })
      })
      commit('SET_FETCHING_LOCATIONS', newPromise)
      return newPromise
    }
  },
  FETCHING_DEFAULT ({ dispatch, commit, state }) {
    if (state.fetchingLocations) {
      return state.fetchingLocations
    }
    return dispatch('FETCH_LOCATIONS').then(res => {
      commit('SET_FETCHING_LOCATIONS', res)
    })
  },
}



export default  moduleMapLeafletActions
