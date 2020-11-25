/*=========================================================================================
  File Name: auth.js
  Description: auth.js vue(js) file
  ----------------------------------------------------------------------------------------
  Item Name: Vue_komorsan - Vuejs, HTML &  Dashboard Template
	Author : krylov
==========================================================================================*/


import {mapActions} from "vuex";

export default function authLogged ({ next, store, nextMiddleware }){
  if(!store.getters['auth/isAuthenticated']['logged_In'] ){

    // console.log('---- auth ');
    // // console.log(store.getters['auth/isAuthenticated']['logged_In']);
    // console.log(store._actions['auth/logoutGet']);
    // console.log('---- auth ');


     return next({
        name: 'page-login'
     })

 }

  return nextMiddleware()
}
