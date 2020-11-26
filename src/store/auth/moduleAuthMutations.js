/*=========================================================================================
  File Name: moduleAuthMutations.js
  Description: Auth Module Mutations
  ----------------------------------------------------------------------------------------
   Item Name: Vuejs, HTML Template
   Author: Krylov
==========================================================================================*/

import axios from "../../http/axios/index.js"

export default {
  SET_BEARER(state, accessToken) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken
    // axios.defaults.withCredentials = true;
  },
  auth_request(state){
    state.status = 'loading'
  },
  auth_status(state, isResponseAuthStatus){
    state.isResponseAuthStatus = isResponseAuthStatus
    state.user.logged_In = true
  },
  // logout_Get(state, isLogoutGet){
  //   state.isLogoutGet = isLogoutGet
  //   state.user.logged_In = false
  // },
  logged_In_Get(state, logged_In){
    state.user.logged_In = logged_In
  },

  auth_success(state, token, user){
    state.status = 'success'
    state.token = token
    state.user = user
    // axios.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken
  },
  auth_error(state){
    state.status = 'error'
  },
  logout(state){
    state.status = ''
    state.token = ''
  },
}
