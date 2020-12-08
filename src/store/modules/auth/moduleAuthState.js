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
import axios from "../../../axios";

export default {
    isUserLoggedIn: () => {

        let isAuthenticated = false

        // get firebase current user
        const firebaseCurrentUser = firebase.auth().currentUser

        if (auth.isAuthenticated() || firebaseCurrentUser) isAuthenticated = true
        else isAuthenticated = false

        return (localStorage.getItem('userInfo') && isAuthenticated)
    },
    // isResponseAuthStatus: '',
    isDisplayAuthenticated: '',
    user: {
      isLoggedIn: false,
      isSubscribed: false
    }
}
