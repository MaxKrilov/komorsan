/*=========================================================================================
  File Name: moduleCalendarGetters.js
  Description: Calendar Module Getters
  ----------------------------------------------------------------------------------------
  Item Name: Vuejs, HTML Template
  Author: Krylov
  ==========================================================================================*/


export default {
  // getItem: state => (productId) => state.products.find((product) => product.id == productId),
  getItem: state => (deviceIconId) => state.deviceIcon.find((icon) => icon.id === deviceIconId),
}
