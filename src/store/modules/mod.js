/*=========================================================================================
  File Name: modules
  Description: Vuex store
  ----------------------------------------------------------------------------------------
  Item Name: Vuejs, HTML Template
  Author: Krylov
==========================================================================================*/



// import moduleEventsManagement from './events/moduleEventsManagement.js'
// import moduleDataList from './data-list/moduleDataList.js'
import moduleMapLeaflet from './modules/map/moduleMapLeaflet.js'
import moduleListDevices from './modules/frameListDevices/moduleListDevices.js'
import moduleAuth from './modules/auth/moduleAuth.js'
import moduleSettingsHeader from './modules/cart-settings-header/moduleSettingsHeader.js'
import moduleAlarmHeader from './modules/cart-alarm -notifications-header/moduleAlarmHeader.js'

const mod = {
  //   // events: moduleEventsManagement,
  map: moduleMapLeaflet,
  frameListDevices: moduleListDevices,
  auth: moduleAuth,
  cartSettingsHeader: moduleSettingsHeader,
  cartAlarmNotificationsHeader: moduleAlarmHeader,
  // dataList: moduleDataList, // test -- add in rep
}
// const mod =() => ({
//   //   // events: moduleEventsManagement,
//   'map': moduleMapLeaflet,
//   'frameListDevices': moduleListDevices,
//   'auth': moduleAuth,
//   'cartSettingsHeader': moduleSettingsHeader,
//   'cartAlarmNotificationsHeader': moduleAlarmHeader,
//   // dataList: moduleDataList, // test -- add in rep
// })
export default mod
