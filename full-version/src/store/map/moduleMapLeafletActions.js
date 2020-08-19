/*=========================================================================================
  File Name: moduleMapLeafletActions.js
  Description: MapLeaflet Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuejs, HTML Template
  Author: Krylov
==========================================================================================*/

// import axios from "@/axios.js"
//
// export default {
//   FETCH_LOCATIONS ({commit, state}) {
//     if (state.fetchingLocations) {
//       return state.fetchingLocations
//     }
//     const promise =  new Promise((resolve, reject) => {
//       const path = '/api/v1/graph_nodes';
//       axios.get(path, {headers: {"Content-Type": "application/json"}})
//         .then((response) => {
//           if(response.status === 200) {
//
//             commit('SET_LOCATIONS', response)
//             commit('SET_FETCHING_LOCATIONS', null)
//             resolve(response)
//           }
//         })
//         .catch((error) => {
//           reject(error)
//         })
//     })
//     commit('SET_FETCHING_LOCATIONS', promise)
//     return promise
//   },
// }



import LOCATIONS from "@/views/charts-and-maps/maps/leaflet-map/LOCATIONS.json";

export default {

  FETCH_LOCATIONS ({commit, state}) {
    if (state.fetchingLocations) {
      return state.fetchingLocations
    }

    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('SET_LOCATIONS', LOCATIONS.slice(0, 10))

        setTimeout(() => {
          commit('SET_LOCATIONS', LOCATIONS)
          commit('SET_FETCHING_LOCATIONS', null)
          resolve()
        }, 2000)

      }, 2000)
    })
    commit('SET_FETCHING_LOCATIONS', promise)
    return promise
  }
}
