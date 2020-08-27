/*=========================================================================================
  File Name: moduleMapLeafletActions.js
  Description: MapLeaflet Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuejs, HTML Template
  Author: Krylov
==========================================================================================*/

// import axios from "@/axios.js"
import axios from "../../axios.js"
export default {
  GET_MAP_INSTANCE ({ commit, payload }) {

    commit('SET_MAP_INSTANCE', payload)
  },
  FETCH_LOCATIONS({commit, state}, locations) {
    // if (state.fetchingLocations) {
    //   locations = [...state.locations]
    //   return [...state.fetchingLocations]
    // }

    const newPromise = new Promise((resolve, reject) => {
      const path = '/api/v1/graph_nodes';
      axios.get(path, {headers: {"Content-Type": "application/json"}})
        .then((locations) => {
          if(locations.status === 200) {
            // console.log('----- [...locations.data]');
            // console.log([...locations.data]);
            // console.log('---- [...locations.data]');

            commit('SET_LOCATIONS', [...locations.data])
            // commit('SET_FETCHING_LOCATIONS', null)

            return [...locations.data]
            // context.dispatch('SET_LOCATIONS', response.data)
          }
          return resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })

    // commit('SET_FETCHING_LOCATIONS', {newPromise})
    return newPromise
  },
  FETCHING_DEFAULT ({ dispatch, commit, state }) {
    if (state.fetchingLocations) {
      return [...state.fetchingLocations]
    }

    return dispatch('FETCH_LOCATIONS').then((newPromise) => {
      state.locations.push(newPromise.data);
      console.log('----newPromise');
      console.log(newPromise)
      console.log('----newPromise');
      commit('SET_FETCHING_LOCATIONS', {newPromise})
    })
  },

  // FETCH_LOCATIONS: async (context,payload) => {
  //   let { newData } = await axios.get('/api/v1/graph_nodes')
  //     .then((locations) => {
  //       if (locations.status === 200) {
  //         context.commit('SET_LOCATIONS',locations.data.slice())
  //         return locations.data
  //       }
  //     })
  //
  //   // context.commit('SET_FETCHING_LOCATIONS', data)
  // },

}



// import LOCATIONS from "@/views/charts-and-maps/maps/leaflet-map/LOCATIONS.json";
// import LOCATIONS from "../../views/charts-and-maps/maps/leaflet-map/LOCATIONS.json";
//
// export default {
//
//   FETCH_LOCATIONS ({commit, state}) {
//     if (state.fetchingLocations) {
//       return state.fetchingLocations
//     }
//
//     const promise = new Promise((resolve, reject) => {
//       setTimeout(() => {
//         commit('SET_LOCATIONS', LOCATIONS.slice(0, 10))
//
//         // setTimeout(() => {
//         //   commit('SET_LOCATIONS', LOCATIONS)
//         //   commit('SET_FETCHING_LOCATIONS', null)
//         //   resolve()
//         // }, 2000)
//
//       }, 2000)
//     })
//     commit('SET_FETCHING_LOCATIONS', promise)
//     return promise
//   }
// }
