/*=========================================================================================
  File Name: auth.js
  Description: auth.js vue(js) file
  ----------------------------------------------------------------------------------------
  Item Name: Vue_komorsan - Vuejs, HTML Template
	Author : krylov
==========================================================================================*/


export default function authLogged ({ next, store, nextMiddleware }){

  if(store.getters['auth/isAuthenticated']['logged_In'] === false){

    return next({
      name: 'page-login'
    })

 }
    return nextMiddleware()
}
