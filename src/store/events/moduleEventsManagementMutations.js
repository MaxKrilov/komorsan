/*=========================================================================================
  File Name: moduleEventsMutations.js
  Description: events Module Mutations
  ----------------------------------------------------------------------------------------
  Item Name: Vuejs, HTML Template
  Author: Krylov
==========================================================================================*/


export default {
  // API
  SET_EVENTS_FROM_API(state, events) {
    state.events = events
  },
  SET_EVENTS_GROUP(state, eventsGroup) { //query and output of devices involved in the event group, generation of the "Events" table for each device
    state.eventsGroup = eventsGroup
  },
  // REMOVE_RECORD(state, itemId) {
  //     const userIndex = state.devices.findIndex((u) => u.id === itemId)
  //     state.devices.splice(userIndex, 1)
  // },
}
