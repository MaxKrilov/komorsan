<template>
  <div class="the-navbar__user-meta flex items-center" v-if="statusAuthorization.username">
<!--    v-if="statusAuthorization.username-->
    <div class="text-right leading-tight hidden sm:block">
      <p class="font-semibold">{{ isDisplayAuthenticated['authorizationLoginName']}}</p>
      <small>{{isDisplayAuthenticated['authorizationLoginRole']}}</small>
    </div>

    <vs-dropdown vs-custom-content vs-trigger-click class="cursor-pointer">

      <div class="con-img ml-3">
        <img v-if="activeUserInfo.photoURL" key="onlineImg" :src="activeUserInfo.photoURL" alt="user-img" width="40" height="40" class="rounded-full shadow-md cursor-pointer block" />
      </div>

      <vs-dropdown-menu class="vx-navbar-dropdown">
        <ul style="min-width: 9rem">

          <li
            class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
            @click="$router.push('/pages/profile').catch(() => {})">
            <feather-icon icon="UserIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Admmin</span>
          </li>

          <li
            class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
            @click="$router.push('/pages/profile').catch(() => {})">
            <feather-icon icon="UserIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Settings</span>
          </li>

          <vs-divider class="m-1" />

          <li
            class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
            @click="logout">
            <feather-icon icon="LogOutIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Logout</span>
          </li>
        </ul>
      </vs-dropdown-menu>
    </vs-dropdown>
  </div>
</template>

<script>
// import firebase from 'firebase/app'
import 'firebase/auth'
import {mapGetters, mapActions} from 'vuex'
export default {
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters( 'auth', ['isAuthenticated']),
    ...mapGetters( 'cartSettingsHeader', ['statusAuthorization', 'isDisplayAuthenticated']),
    activeUserInfo() {
      // return this.$store.getters.isDisplayAuthenticated
      return this.$store.state.AppActiveUser
    }
  },
  methods: {
    ...mapActions( 'auth', ['logoutGet', 'getStatusAuth']  ),
    checkLogin() {
      this['getStatusAuth']().then(() => {
      }).catch(() =>{})
      return true
    },
    async logout() {
        // if user is logged in via sessionCookie
        if (this['logoutGet']()){
          await this['logoutGet']()
        }
        // logout -> redirect
        this.$router.push('/pages/login').catch(() => {})
    },
  },
  created () {
    if(!this.checkLogin()){
      this.logout()
    }
  },
}
</script>
