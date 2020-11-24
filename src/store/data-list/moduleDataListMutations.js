/*=========================================================================================
  File Name: moduleCalendarMutations.js
  Description: Calendar Module Mutations
  ----------------------------------------------------------------------------------------
  Item Name: Vuejs, HTML Template
  Author: Krylov
==========================================================================================*/


export default {
  ADD_ITEM(state, item) {
    state.deviceIcon.unshift(item)
  },
  SET_DEVICE_ICON(state, deviceIcon) {
    state.deviceIcon = deviceIcon
  },
  // SET_LABELS(state, labels) {
  //   state.eventLabels = labels
  // },
  UPDATE_DEVICE_ICON(state, deviceIcon) {
      const deviceIconIndex = state.products.findIndex((p) => p.id === deviceIcon.id)
      Object.assign(state.products[deviceIconIndex], deviceIcon)
  },
  REMOVE_ITEM(state, itemId) {
      const ItemIndex = state.products.findIndex((p) => p.id === itemId)
      state.deviceIcon.splice(ItemIndex, 1)
  },
}
