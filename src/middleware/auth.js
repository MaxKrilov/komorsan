/*=========================================================================================
  File Name: auth.js
  Description: auth.js vue(js) file
  ----------------------------------------------------------------------------------------
  Item Name: Vue_komorsan - Vuejs, HTML &  Dashboard Template
	Author : krylov
==========================================================================================*/


export default function auth ({ next, store }){
 // if(!store.getters.auth.loggedIn){
 //   if(!store.getters['cartSettingsHeader/auth']['loggedIn']){
     if(!store.getters['cartSettingsHeader/statusAuthorization']['isResponseAuthStatus']){
     return next({
        name: 'page-login'
     })
 }
 return next()
}
