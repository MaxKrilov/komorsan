// import LOCATIONS from './LOCATIONS.json'
//
// const postsModule = {
//   namespaced: true,
//   state: {
//     fetchingLocations: null,
//     locations: [],
//   },
//   getters: {},
//   mutations: {
//     SET_MAP_INSTANCE (state, mapInstance) {
//       state.mapInstance = mapInstance
//     },
//     SET_FETCHING_LOCATIONS (state, fetching) {
//       state.fetchingLocations = fetching
//     },
//     SET_LOCATIONS (state, locations) {
//       state.locations = locations
//     },
//   },
//   actions: {
//     FETCH_LOCATIONS ({commit, state}) {
//       if (state.fetchingLocations) {
//         return state.fetchingLocations
//       }
//
//       const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//           commit('SET_LOCATIONS', LOCATIONS.slice(0, 10))
//
//           setTimeout(() => {
//             commit('SET_LOCATIONS', LOCATIONS)
//             commit('SET_FETCHING_LOCATIONS', null)
//             resolve()
//           }, 2000)
//
//         }, 2000)
//       })
//       commit('SET_FETCHING_LOCATIONS', promise)
//       return promise
//     }
//   },
// }
//
// export default postsModule
