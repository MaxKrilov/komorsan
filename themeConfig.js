/*=========================================================================================
  File Name: themeConfig.js
  Description: Theme configuration
  ----------------------------------------------------------------------------------------
  Item Name: Vuejs, HTML Template
  Author: krylov
==========================================================================================*/

// MAIN COLORS - VUESAX THEME COLORS
let colors = {
	// '#7367F0'
  primary : '#8fcc90',
	success : '#28C76F',
	danger  : '#EA5455',
	warning : '#FF9F43',
	dark    : '#1E1E1E',
}

// CONFIGS
const themeConfig = {
  disableCustomizer : false,       // options[Boolean] : true, false(default)
  disableThemeTour  : false,       // options[Boolean] : true, false(default)
  footerType        : "hidden",    // options[String]  : hidden(default) /static / sticky
  hideScrollToTop   : false,       // options[Boolean] : true, false(default)
  mainLayoutType    : "vertical",  // options[String]  : vertical(default) / horizontal
  navbarColor       : "#fff",      // options[String]  : HEX color / rgb / rgba / Valid HTML Color name - (default: #fff)
  navbarType        : "sticky",    // options[String]  : hidden(default) / static / sticky / floating
  routerTransition  : "zoom-fade", // options[String]  : zoom-fade / slide-fade / fade-bottom / fade / zoom-out / none(default)
  rtl               : false,       // options[Boolean] : true, false(default)
  sidebarCollapsed  : false,       // options[Boolean] : true, false(default)
  theme             : "semi-dark", // options[String]  : "semi-dark"(default), "dark", "light"
  // #f0f0f3
  // Not required yet - WIP
  userInfoLocalStorageKey: "userInfo",

  // NOTE: themeTour will be disabled in screens < 1200. .
}

import Vue from 'vue'
import Vuesax from 'vuesax'
Vue.use(Vuesax, { theme:{ colors }, rtl: themeConfig.rtl })

export default themeConfig
