/*=========================================================================================
  File Name: guest.js
  Description: guest.js vue(js) file
  ----------------------------------------------------------------------------------------
  Item Name: Vue_komorsan - Vuejs, HTML &  Dashboard Template
	Author : krylov
==========================================================================================*/

export default function guest ({ next, store }){
  if(store.getters['auth/isAuthenticated']['logged_In']){

    console.log('----- guest ');
    // console.log(store.getters['auth/isAuthenticated']['logged_In']);
    console.log( store._actions['auth/logoutGet']);
    console.log('---- guest ');

        return next({
           name: 'dashboard-analytics'
        })
    }

    return next()
   }
