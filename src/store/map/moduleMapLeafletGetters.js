/*=========================================================================================
  File Name: moduleMapLeafletGetters.js
  Description: MapLeaflet Module Getters
  ----------------------------------------------------------------------------------------
  Item Name: Vuejs, HTML Template
  Author: Krylov
==========================================================================================*/


export default {
  locationAll (state) {
    return state.locations
  },
  getStatusAuthorization: s => s.isResponseAuthStatus,
}
