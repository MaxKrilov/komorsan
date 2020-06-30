/*=========================================================================================
  File Name: moduleAuthState.js
  Description: Auth Module State
  ----------------------------------------------------------------------------------------
  Item Name: Vuejs, HTML Template
  Author: Krylov
==========================================================================================*/


import auth from "@/auth/authService";
import firebase from 'firebase/app'
import 'firebase/auth'
import axios from "../../axios";

export default {
    isUserLoggedIn: () => {
      // axios.defaults.withCredentials = true;
      // const path1 = 'http://10.10.20.12:8081/api/v1/devices';
      // axios({
      //   method: 'GET',
      //   url: path1,
      //   headers: {"Content-Type" : "application/json"},
      // });
      //   const path = 'http://10.10.20.12:8081/api/v1/auth_status';
      //   axios({
      //     method: 'GET',
      //     url: path,
      //   });

        let isAuthenticated = false

        // get firebase current user
        const firebaseCurrentUser = firebase.auth().currentUser

        if (auth.isAuthenticated() || firebaseCurrentUser) isAuthenticated = true
        else isAuthenticated = false

        return (localStorage.getItem('userInfo') && isAuthenticated)
    },
}
