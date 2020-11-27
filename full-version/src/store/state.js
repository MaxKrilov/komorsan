/*=========================================================================================
  File Name: state.js
  Description: Vuex Store - state
  ----------------------------------------------------------------------------------------
   Item Name: Vuejs, HTML Template
   Author: Krylov
==========================================================================================*/

import navbarSearchAndPinList from "@/layouts/components/navbar/navbarSearchAndPinList"
import themeConfig from "@/../themeConfig.js"
import colors from "@/../themeConfig.js"

// /////////////////////////////////////////////
// Helper
// /////////////////////////////////////////////

// *From Auth - Data will be received from auth provider
const userDefaults = {
  uid         : 0,                // From Auth
  displayName : "Максим Крылов", // From Auth
  about       : "Да что тут скажешь!",
  photoURL    : require("@/assets/images/portrait/small/komorsan__admin.jpg"), // From Auth
  status      : "online",
  userRole    : "admin"
}

const userInfoLocalStorage = JSON.parse(localStorage.getItem("userInfo")) || {}

// Set default values for active-user
// More data can be added by auth provider or other plugins/packages
const getUserInfo = () => {
  let userInfo = {}

  // Update property in user
  Object.keys(userDefaults).forEach((key) => {
    // If property is defined in localStorage => Use that
    userInfo[key] = userInfoLocalStorage[key] ?  userInfoLocalStorage[key] : userDefaults[key]
  })

  // Include properties from localStorage
  Object.keys(userInfoLocalStorage).forEach((key) => {
    if(userInfo[key] == undefined && userInfoLocalStorage[key] != null) userInfo[key] = userInfoLocalStorage[key]
  })

  return userInfo
}

// /////////////////////////////////////////////
// State
// /////////////////////////////////////////////

const state = {
    status                  : '',
    token                   : localStorage.getItem('token') || '',
    user                    : {},
    AppActiveUser           : getUserInfo(),
    bodyOverlay             : false,
    isVerticalNavMenuActive : true,
    mainLayoutType          : themeConfig.mainLayoutType || "vertical",
    navbarSearchAndPinList  : navbarSearchAndPinList,
    reduceButton            : themeConfig.sidebarCollapsed,
    verticalNavMenuWidth    : "default",
    verticalNavMenuItemsMin : false,
    scrollY                 : 0,
    starredPages            : navbarSearchAndPinList["pages"].data.filter((page) => page.is_bookmarked),
    theme                   : themeConfig.theme || "light",
    themePrimaryColor       : colors.primary,
    // mapInstance             : null,
    // locations               : [],
    // Can be used to get current window with
    // Note: Above breakpoint state is for internal use of sidebar & navbar component
    windowWidth: null,
}

export default state
