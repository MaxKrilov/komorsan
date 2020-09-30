/*=========================================================================================
  File Name: moduleSettingsHeaderGetters.js
  Description: SettingsHeader Module Getters
  ----------------------------------------------------------------------------------------
  Item Name: Vuejs, HTML Template
  Author: Krylov
==========================================================================================*/


export default { // checking the selected BD
  allDataBasesGetters:    s =>  s.allDataBases,
  statusAuthorization:    s =>  s.isResponseAuthStatus,
  dataBaseCurrentOfName:  s =>  s.isDataBaseCurrentOfName,
}
