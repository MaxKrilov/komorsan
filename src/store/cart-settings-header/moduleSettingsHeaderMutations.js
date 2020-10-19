/*=========================================================================================
  File Name: moduleSettingsHeaderMutations.js
  Description: SettingsHeader Module Mutations
  ----------------------------------------------------------------------------------------
  Item Name: Vuejs, HTML Template
  Author: Krylov
==========================================================================================*/

export default {
  // Instance
  SET_DATABASE_INSTANCE (state, allDataBases) {  // get a list of all databases
    state.allDataBases = allDataBases
  },
  AUTH_STATUS(state, isResponseAuthStatus){  // checking the current user database
    state.isResponseAuthStatus = isResponseAuthStatus
  },
  SWITCH_DATABASE(state, isDataBaseCurrentOfName){  // checking the current user database
    state.isDataBaseCurrentOfName = isDataBaseCurrentOfName
  }
}
