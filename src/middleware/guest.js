/*=========================================================================================
  File Name: guest.js
  Description: guest.js vue(js) file
  ----------------------------------------------------------------------------------------
  Item Name: Vue_komorsan - Vuejs, HTML &  Dashboard Template
	Author : krylov
==========================================================================================*/


export default function guest ({ next, store }){
    // if(store.getters.auth.loggedIn){
    //   if(store.getters['cartSettingsHeader/auth']['loggedIn']){
        if(store.getters['cartSettingsHeader/statusAuthorization']['isResponseAuthStatus']){
        return next({
           name: 'dashboard-analytics'
        })
    }

    return next()
   }
