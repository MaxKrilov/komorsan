/*=========================================================================================
  File Name: moduleAlarmHeaderMutations.js
  Description: AlarmHeader Module Mutations
  ----------------------------------------------------------------------------------------
  Item Name: Vuejs, HTML Template
  Author: Krylov
==========================================================================================*/

export default {
  // Instance
  SET_DISPLAY_UNACKNOWLEDGED_EVENTS (state, isResponseUnacknowledged) {  // display of all unacknowledged events
    state.isResponseUnacknowledged = isResponseUnacknowledged
  },
}
