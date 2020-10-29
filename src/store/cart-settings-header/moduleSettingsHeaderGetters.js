/*=========================================================================================
  File Name: moduleSettingsHeaderGetters.js
  Description: SettingsHeader Module Getters
  ----------------------------------------------------------------------------------------
  Item Name: Vuejs, HTML Template
  Author: Krylov
==========================================================================================*/


export default { // checking the selected BD
  allDataBasesGetters:    s =>  s.allDataBases,
  dataBaseCurrentOfName:  s =>  s.isDataBaseCurrentOfName,
  statusAuthorization:    s =>  s.isResponseAuthStatus,
  isDisplayAuthenticated: (s, getters) =>  { // set the display of Name for User
    if (  (getters.statusAuthorization['username'] === '---') &&
          (getters.statusAuthorization['privileges'] === '---')
    )
      return {
        authorizationLoginName : 'antrax_eng_',
        authorizationLoginRole : 'admin antraks'
      }
    else return {
      authorizationLoginName : getters.statusAuthorization['username'],
      authorizationLoginRole : getters.statusAuthorization['rolename']
    }

  },
  // auth(s) {
  //   return s.user
  // }
}


