/*=========================================================================================
  File Name: guest.js
  Description: guest.js vue(js) file
  ----------------------------------------------------------------------------------------
  Item Name: Vue_komorsan - Vuejs, HTML &  Dashboard Template
	Author : krylov
==========================================================================================*/


export default function guest ({ next, store }){

  if(store.getters['auth/isAuthenticated']['isLoggedIn'] !== false){

    return next({
      name: 'monitoring'
    })

  }

  return next()
}
