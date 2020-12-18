/*=========================================================================================
  File Name: moduleAlarmHeaderActions.js
  Description: AlarmHeader Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuejs, HTML Template
  Author: Krylov
==========================================================================================*/

import axios from "../../axios.js"

export default {
  // retrieve -- all displayed unacknowledged   'auth', ['logoutGet', 'getStatusAuth']
  GET_ALL_DISPLAY_UNACKNOWLEDGED_EVENTS: async ({commit, dispatch}) => {
    if (await dispatch('auth/getStatusAuth', null, {root:true}) ){
       const path = '/api/v1/event_groups?sort=first_event_time&order=desc&read=last&filter=0';
       let  data  =  await axios.get(path, {headers: {"Content-Type": "application/json"}})
       commit('SET_DISPLAY_UNACKNOWLEDGED_EVENTS', data.data)
     }

  },
}


