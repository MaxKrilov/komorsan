<!-- =========================================================================================
  File Name: TheNavbar.vue
  Description: Navbar component
  Component Name: TheNavbar
  ----------------------------------------------------------------------------------------
  Item Name: Vuejs, HTML Template
  Author: Krylov
========================================================================================== -->


<template>
  <div class="relative">

    <div class="vx-navbar-wrapper" :class="classObj">

      <vs-navbar class="vx-navbar navbar-custom navbar-skelton" :color="navbarColorLocal" :class="textColor">

        <!-- SM - OPEN SIDEBAR BUTTON -->
        <feather-icon class="sm:inline-flex xl:hidden cursor-pointer p-2" icon="MenuIcon" @click.stop="showSidebar" />

        <bookmarks :navbarColor="navbarColor" v-if="windowWidth >= 992" />

<!--        <div id="clock">-->
<!--          <p class="date">{{date | clock('datetime')}}</p>-->

<!--          <p class="text">DIGITAL CLOCK with Vue.js</p>-->
<!--        </div>-->
        <clock />

        <vs-spacer />

        <i18n />

        <search-bar class="mr-5" />

        <list-settings-header />

<!--        <notification-drop-down />-->

        <profile-drop-down />

      </vs-navbar>
    </div>
  </div>
</template>


<script>

import Bookmarks            from "./components/Bookmarks.vue"
import I18n                 from "./components/I18n.vue"
import SearchBar            from "./components/SearchBar.vue"
import ListSettingsHeader   from "./components/ListSettingsHeader.vue"
// import NotificationDropDown from "./components/NotificationDropDown.vue"
import ProfileDropDown      from "./components/ProfileDropDown.vue"
import Clock                from "./components/Clock.vue"


export default {
  name: "the-navbar-vertical",
  props: {
    navbarColor: {
      type: String,
      default: "#fff",
    },
  },
  components: {
    Bookmarks,
    I18n,
    SearchBar,
    ListSettingsHeader,
    // NotificationDropDown,
    ProfileDropDown,
    Clock,
  },
  computed: {
    navbarColorLocal() {
      return this.$store.state.theme === "dark" && this.navbarColor === "#fff" ? "#2e3a59" : this.navbarColor
    },
    verticalNavMenuWidth() {
      return this.$store.state.verticalNavMenuWidth
    },
    textColor() {
      return {'text-white': (this.navbarColor !== '#2e3a59' && this.$store.state.theme === 'dark') || (this.navbarColor !== '#fff' && this.$store.state.theme !== 'dark')}
    },
    windowWidth() {
      return this.$store.state.windowWidth
    },

    // NAVBAR STYLE
    classObj() {
      if (this.verticalNavMenuWidth === "default")      return "navbar-default"
      else if (this.verticalNavMenuWidth === "reduced") return "navbar-reduced"
      else if (this.verticalNavMenuWidth)              return "navbar-full"
    },
  },
  methods: {
    showSidebar() {
      this.$store.commit('TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE', true);
    }
  },

}
</script>

