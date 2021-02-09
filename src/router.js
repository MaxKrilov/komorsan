/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
  Object Strucutre:
                    path => router path
                    name => router name
                    component(lazy loading) => component to load
                    meta : {
                      rule => which user can have access (ACL)
                      breadcrumb => Add breadcrumb to specific page
                      pageTitle => Display title besides breadcrumb
                    }
  ----------------------------------------------------------------------------------------
  Item Name: Vue_komorsan - Vuejs, HTML &  Dashboard Template
	Author : krylov
==========================================================================================*/


import Vue from 'vue'
import Router from 'vue-router'
// import auth from "@/auth/authService";
import guest from './middleware/guest'
import authLogged  from './middleware/auth'
import middlewarePipeline from './middlewarePipeline'
// import firebase from 'firebase/app'
import 'firebase/auth'
import store from "./store/store.js"
// import axios from "./axios";
Vue.use(Router)



const router = new Router({
    mode: 'history', // "hash" | "history" | "abstract"
    base: process.env.BASE_URL,
    scrollBehavior () {
        return { x: 0, y: 0 }
    },
    routes: [

        {
    // =============================================================================
    // MAIN LAYOUT ROUTES
    // =============================================================================
            path: '',
            component: () => import('./layouts/main/Main.vue'),
            children: [
        // =============================================================================
        // Theme Routes
        // =============================================================================
                {
                    path: '/',
                    redirect: '/apps/monitoring/list-view'
                },
                // {
                //     path: '/dashboard/analytics',
                //     name: 'dashboard-analytics',
                //     component: () => import('./views/DashboardAnalytics.vue'),
                //     meta: {
                //         middleware: [
                //           authLogged
                //         ],
                //         rule: 'editor',
                //     }
                // },
                {
                  path: '/dashboard/ag-grid-table',
                  name: 'devices-table',
                  component: () => import('./views/devices-table/DevicesTable.vue'),
                  meta: {
                    middleware: [
                      authLogged
                    ],
                    breadcrumb: [
                      { title: 'Home', url: '/' },
                      { title: 'device Table', active: true },
                    ],
                    pageTitle: 'devices Table',
                    rule: 'editor'
                  },
                },
        // =============================================================================
        // Application Routes
        // =============================================================================
                {
                  path: '/apps/monitoring/monitoring-list',
                  name: 'app-monitoring-list',
                  component: () => import('@/views/apps/monitoring/monitoring-list/MonitoringList.vue'),
                  meta: {
                    middleware: [
                      authLogged
                    ],
                    breadcrumb: [
                      { title: 'Home', url: '/' },
                      { title: 'Devices' },
                      { title: 'List', active: true },
                    ],
                    pageTitle: 'Monitoring List',
                    rule: 'editor'
                  },
                },
                {
                  path: '/apps/monitoring/list-view',
                  name: 'monitoring',
                  component: () => import('@/views/apps/monitoring/list-view/DataMonitoringListListView.vue'),
                  meta: {
                    middleware: [
                      authLogged
                    ],
                    // breadcrumb: [
                    //   { title: 'Home', url: '/' },
                    //   { title: 'List View', active: true },
                    // ],
                    // pageTitle: 'Monitoring',
                    rule: 'editor'
                  },
                },


        // =============================================================================
        // Pages Routes
        // =============================================================================

                {
                    path: '/pages/user-settings',
                    name: 'page-user-settings',
                    component: () => import('@/views/pages/user-settings/UserSettings.vue'),
                    meta: {
                      middleware: [
                        authLogged
                      ],
                      breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Pages' },
                            { title: 'User Settings', active: true },
                        ],
                        pageTitle: 'Settings',
                        rule: 'editor'
                    },
                },

              // =============================================================================
              // CHARTS TEST
              // =============================================================================
              {
                path: '/charts-and-maps/charts/apex-charts-test',
                name: 'extra-component-charts-apex-charts',
                component: () => import('@/views/charts-and-maps/charts/apex-charts-test/ApexCharts.vue'),
                meta: {
                  middleware: [
                    authLogged
                  ],
                  breadcrumb: [
                    { title: 'Home', url: '/' },
                    { title: 'Тестовое задание' },
                    { title: 'Графики', active: true },
                  ],
                  pageTitle: 'Графики',
                  rule: 'editor'
                },
              },

              // =============================================================================
              // CHARTS & MAPS
              // =============================================================================
                {
                    path: '/charts-and-maps/charts/apex-charts',
                    name: 'extra-component-charts-apex-charts',
                    component: () => import('@/views/charts-and-maps/charts/apex-charts/ApexCharts.vue'),
                    meta: {
                     middleware: [
                       authLogged
                     ],
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Charts & Maps' },
                            { title: 'Apex Charts', active: true },
                        ],
                        pageTitle: 'Apex Charts',
                        rule: 'editor'
                    },
                },
                {
                    path: '/charts-and-maps/charts/chartjs',
                    name: 'extra-component-charts-chartjs',
                    component: () => import('@/views/charts-and-maps/charts/chartjs/Chartjs.vue'),
                    meta: {
                      middleware: [
                        authLogged
                      ],
                      breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Charts & Maps' },
                            { title: 'chartjs', active: true },
                        ],
                        pageTitle: 'chartjs',
                        rule: 'editor'
                    },
                },
                {
                    path: '/charts-and-maps/charts/echarts',
                    name: 'extra-component-charts-echarts',
                    component: () => import('@/views/charts-and-maps/charts/echarts/Echarts.vue'),
                    meta: {
                      middleware: [
                        authLogged
                      ],
                      breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Charts & Maps' },
                            { title: 'echarts', active: true },
                        ],
                        pageTitle: 'echarts',
                        rule: 'editor'
                    },
                },
                {
                    path: '/charts-and-maps/maps/google-map',
                    name: 'extra-component-maps-google-map',
                    component: () => import('@/views/charts-and-maps/maps/google-map/GoogleMap.vue'),
                    meta: {
                      middleware: [
                        authLogged
                      ],
                      breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Charts & Maps' },
                            { title: 'Google Map', active: true },
                        ],
                        pageTitle: 'Google Map',
                        rule: 'editor'
                    },
                },
                {
                  path: '/charts-and-maps/maps/leaflet-map',
                  name: 'extra-component-maps-leaflet-map',
                  component: () => import('@/views/charts-and-maps/maps/leaflet-map/LeafletMap.vue'),
                  meta: {
                    middleware: [
                      authLogged
                    ],
                    breadcrumb: [
                      { title: 'Home', url: '/' },
                      { title: 'Charts & Maps' },
                      { title: 'Leaflet Map', active: true },
                    ],
                    pageTitle: 'Leaflet Map',
                    rule: 'editor'
                  },
                },

        // =============================================================================
        // EXTENSIONS
        // =============================================================================

                {
                    path: '/extensions/i18n',
                    name: 'extra-component-i18n',
                    component: () => import('@/views/components/extra-components/I18n.vue'),
                    meta: {
                      middleware: [
                        authLogged
                      ],
                      breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Extensions' },
                            { title: 'I18n', active: true },
                        ],
                        pageTitle: 'I18n',
                        rule: 'editor'
                    },
                },
            ],
        },
    // =============================================================================
    // FULL PAGE LAYOUTS
    // =============================================================================
        {
            path: '',
            component: () => import('@/layouts/full-page/FullPage.vue'),
            children: [
        // =============================================================================
        // PAGES
        // =============================================================================
                {
                    path: '/callback',
                    name: 'auth-callback',
                    component: () => import('@/views/Callback.vue'),
                    meta: {
                      middleware: [
                        guest
                      ],
                      rule: 'editor'
                    }
                },
                {
                    path: '/pages/login',
                    name: 'page-login',
                    component: () => import('@/views/pages/login/Login.vue'),
                    meta: {
                    middleware: [
                      guest
                      ],
                      rule: 'editor'
                    }
                },
                {
                    path: '/pages/register',
                    name: 'page-register',
                    component: () => import('@/views/pages/register/Register.vue'),
                    meta: {
                      middleware: [
                        guest
                      ],
                      rule: 'editor'
                    }
                },
                {
                    path: '/pages/forgot-password',
                    name: 'page-forgot-password',
                    component: () => import('@/views/pages/ForgotPassword.vue'),
                    meta: {
                      middleware: [
                        guest
                      ],
                      rule: 'editor'
                    }
                },
                {
                    path: '/pages/reset-password',
                    name: 'page-reset-password',
                    component: () => import('@/views/pages/ResetPassword.vue'),
                    meta: {
                      middleware: [
                        guest
                      ],
                      rule: 'editor'
                    }
                },
                {
                    path: '/pages/lock-screen',
                    name: 'page-lock-screen',
                    component: () => import('@/views/pages/LockScreen.vue'),
                    meta: {
                      middleware: [
                        guest
                      ],
                      rule: 'editor'
                    }
                },
                {
                    path: '/pages/comingsoon',
                    name: 'page-coming-soon',
                    component: () => import('@/views/pages/ComingSoon.vue'),
                    meta: {
                      middleware: [
                        guest
                      ],
                      rule: 'editor'
                    }
                },
                {
                    path: '/pages/error-404',
                    name: 'page-error-404',
                    component: () => import('@/views/pages/Error404.vue'),
                    meta: {
                      middleware: [
                        guest
                      ],
                      rule: 'editor'
                    }
                },
                {
                    path: '/pages/error-500',
                    name: 'page-error-500',
                    component: () => import('@/views/pages/Error500.vue'),
                    meta: {
                      middleware: [
                        guest
                      ],
                      rule: 'editor'
                    }
                },
                {
                    path: '/pages/not-authorized',
                    name: 'page-not-authorized',
                    component: () => import('@/views/pages/NotAuthorized.vue'),
                    meta: {
                      middleware: [
                        guest
                      ],
                      rule: 'editor'
                    }
                },
                {
                    path: '/pages/maintenance',
                    name: 'page-maintenance',
                    component: () => import('@/views/pages/Maintenance.vue'),
                    meta: {
                      middleware: [
                        guest
                      ],
                      rule: 'editor'
                    }
                },
            ]
        },
        // Redirect to 404 page, if no match found
        {
          path: '*',
          redirect: '/pages/error-404',
          meta: {
            middleware: [
              guest
            ],
            rule: 'editor'
          }
        }
    ],
})





// router.beforeEach((to, from, next) => {
  //
  // if(to.matched.some(record => record.meta.requiresAuth)) {
  //   console.log('--to-- .22r');
  //   console.log(to.meta.requiresAuth);
  //   console.log('--to-- 22r');

  //   if (localStorage.getItem('jwt') == null) {
  //     next({
  //       path: '/login',
  //       params: { nextUrl: to.fullPath }
  //     })
  //   } else {
  //     let user = JSON.parse(localStorage.getItem('user'))
  //     if(to.matched.some(record => record.meta.is_admin)) {
  //       if(user.is_admin == 1){
  //         next()
  //       }
  //       else{
  //         next({ name: 'userboard'})
  //       }
  //     }else {
  //       next()
  //     }
  //   }
  // } else if(to.matched.some(record => record.meta.guest)) {
  //   if(localStorage.getItem('jwt') == null){
  //     next()
  //   }
  //   else{
  //     next({ name: 'userboard'})
  //   }
  // }else {
  //   next()
  // }
// })



// router.beforeEach((to, from, next) => {
//
//   console.log('--to-- .22r');
//   // console.log(to.meta.requiresAuth);
//   // console.log(store.getters.statusAuthorization['username']);
//   // console.log(store.getters['cartSettingsHeader/isDisplayAuthenticated']['authorizationLoginName']);
//   console.log(store.getters['cartSettingsHeader/isDisplayAuthenticated']['authorizationLoginName']);
//   console.log('--to-- 22r');
  //
  // const currentUser = store.getters['cartSettingsHeader/isDisplayAuthenticated']['authorizationLoginName'];
  // const requireAuth = to.matched.some(record => record.meta.requiresAuth);
  // // if(requireAuth && !currentUser){
  // //   // return next({
  // //   //   name: 'apps/monitoring/monitoring-list'
  // //   // })
  // //   return router.push({ path: '/pages/login', query: { to: to.path } })
  // // } else {
  // //
  // //   // return router.push({ path: 'apps/monitoring/monitoring-list', query: { to: to.path } })
  // // }
  // if(requireAuth && !currentUser){
  //    next({name:'page-login'})
  //    // router.push({ path: '/pages/login', query: { to: to.path } })
  // }else{
  //    // router.push({ path: 'apps/monitoring/monitoring-list', query: { to: to.path } })
  //    // next({name:'app-monitoring-list'})
  //   next()
  // }


  // return next()

  // firebase.auth().onAuthStateChanged(() => {

        // get firebase current user
        // const firebaseCurrentUser = firebase.auth().currentUser

        // if (
        //     to.path === "/pages/login" ||
        //     to.path === "/pages/forgot-password" ||
        //     to.path === "/pages/error-404" ||
        //     to.path === "/pages/error-500" ||
        //     to.path === "/pages/register" ||
        //     to.path === "/callback" ||
        //     to.path === "/pages/comingsoon" ||
        //     (auth.isAuthenticated() || firebaseCurrentUser)
        // ) {
        //     return next();
        // }

        // If auth required, check login. If login fails redirect to login page
        // if(to.meta.authRequired) {
        //   if (!(auth.isAuthenticated() || firebaseCurrentUser)) {
        //     router.push({ path: '/pages/login', query: { to: to.path } })
        //   }
        // }
        //
        // return next()
        // Specify the current path as the customState parameter, meaning it
        // will be returned to the application after auth
        // auth.login({ target: to.path });

    // });

// });


    router.afterEach(() => {
      // Remove initial loading
      const appLoading = document.getElementById('loading-bg')
      if (appLoading) {
        appLoading.style.display = "none";
      }
    })

    router.beforeEach((to, from, next) => {

      const publicPages = [
          "/pages/login",
          "/pages/forgot-password",
          "/pages/error-404",
          "/pages/error-500",
          "/pages/register" ,
          "/callback"
      ]

      const authRequired = !publicPages.includes(to.path)

      if (!to.meta.middleware && authRequired) {
        return next('/pages/login')
        }
        const middleware = to.meta.middleware
        const context = {
          to,
          from,
          next,
          store
        }

        return middleware[0]({
          ...context,
          nextMiddleware: middlewarePipeline(context, middleware, 1)
        })

      })

export default router
