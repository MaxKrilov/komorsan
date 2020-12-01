/*=========================================================================================
  File Name: auth.js
  Description: auth.js vue(js) file
  ----------------------------------------------------------------------------------------
  Item Name: Vue_komorsan - Vuejs, HTML Template
	Author : krylov
==========================================================================================*/


import axios from "../axios";

export default function authLogged ({ to, from, next, store, nextMiddleware }){
  const guard = () => {
    // check for valid auth status
    // console.log('to', to);
    const path = '/api/v1/auth_status';
    axios.get(path, {headers: {"Content-Type": "application/json"}})
      .then((res) => {
        if(res.status === 200) {
          return next()
        }
      })
      .catch((error) => {
        if (error.status === 'Request failed with status code 403') return
        return next({
          name: 'page-login'
        })
      })
  }

  if(store.getters['auth/isAuthenticated']['isLoggedIn'] === false){
    guard(to, from, next)

 }
    return nextMiddleware()
}
