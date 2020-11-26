/*=========================================================================================
  File Name: guest.js
  Description: guest.js vue(js) file
  ----------------------------------------------------------------------------------------
  Item Name: Vue_komorsan - Vuejs, HTML &  Dashboard Template
	Author : krylov
==========================================================================================*/

import router from "../router";

export default function guest ({ next, store }){

  if(store.getters['auth/isAuthenticated']['logged_In'] !== false){


    return next({
      name: 'monitoring'
    })

    }

    return next()
   }
