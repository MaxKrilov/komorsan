/*=========================================================================================
  File Name: moduleSettingsHeaderMutations.js
  Description: SettingsHeader Module Mutations
  ----------------------------------------------------------------------------------------
  Item Name: Vuejs, HTML Template
  Author: Krylov
==========================================================================================*/

export default {
  // Instance
  SET_DATABASE_INSTANCE (state, allDataBases) {
    state.allDataBases = allDataBases

    // state.allDataBases = Object.assign({}, allDataBases)
    // state.allDataBases = mapInstance.slice()
    // state.allDataBases = JSON.parse(JSON.stringify(allDataBases))
  },
  AUTH_STATUS(state, isResponseAuthStatus){
    state.isResponseAuthStatus = isResponseAuthStatus
  },
}
