/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  Strucutre:
          url     => router path
          name    => name to display in sidebar
          slug    => router path name
          icon    => Feather Icon component/icon name
          tag     => text to display on badge
          tagColor  => class to apply on badge element
          i18n    => Internationalization
          submenu   => submenu of current item (current item will become dropdown )
                NOTE: Submenu don't have any icon(you can add icon if u want to display)
          isDisabled  => disable sidebar item/group
  ----------------------------------------------------------------------------------------
  Item Name: Vuejs, HTML Template
  Author: Krylov
==========================================================================================*/


export default [
  // {
  //   url: "/apps/email",
  //   name: "Email",
  //   slug: "email",
  //   icon: "MailIcon",
  //   i18n: "Email",
  // },
  // {
  //   url: null,
  //   name: "Dashboard",
  //   tag: "2",
  //   tagColor: "warning",
  //   icon: "HomeIcon",
  //   i18n: "Dashboard",
  //   submenu: [
  //     {
  //       url: '/dashboard/analytics',
  //       name: "Analytics",
  //       slug: "dashboard-analytics",
  //       i18n: "Analytics",
  //     },
  //     // {
  //     //   url: '/dashboard/ecommerce',
  //     //   name: "eCommerce",
  //     //   slug: "dashboard-ecommerce",
  //     //   i18n: "eCommerce",
  //     // },
  //     {
  //       url: '/dashboard/ag-grid-table',
  //       name: "devices-table",
  //       slug: "dashboard-devices",
  //       i18n: "Devices",
  //     },
  //   ]
  // },
  {
    header: "Apps",
    icon: "PackageIcon",
    i18n: "Apps",
    items: [
      {
        url: null,
        name: "Monitoring",
        tag: "1",
        tagColor: "warning",
        icon: "MonitorIcon",
        i18n: "Monitoring",
        submenu: [
          // {
          //   url: '/apps/monitoring/monitoring-list',
          //   name: "List",
          //   slug: "app-monitoring-list",
          //   i18n: "List",
          // },
          {
            url: '/apps/monitoring/list-view',
            name: "List",
            slug: "app-monitoring-list",
            i18n: "List",
          },
          // {
          //   url: '/apps/monitoring/monitoring-view/268',
          //   name: "View",
          //   slug: "app-monitoring-view'",
          //   i18n: "View",
          // },
          // {
          //   url: '/apps/monitoring/monitoring-edit/268',
          //   name: "Edit",
          //   slug: "app-monitoring-edit",
          //   i18n: "Edit",
          // },
        ]
      },
    ]
  },
  /* ==="Test Charts " === */
  {
    header: "Charts Test for Sergey",
    icon: "PieChartIcon",
    i18n: "Maps",
    items: [
      {
        url: null,
        name: "Charts",
        icon: "PieChartIcon",
        tag: '3',
        tagColor: 'success',
        i18n: "Charts",
        submenu: [
          {
            url: '/charts-and-maps/charts/apex-charts-test',
            name: "Apex Charts",
            slug: "extra-component-charts-apex-charts",
            i18n: "ApexCharts",
          },
          {
            url: '/charts-and-maps/charts/chartjs',
            name: "chartjs",
            slug: "extra-component-charts-chartjs",
            i18n: "chartjs",
          },
          {
            url: '/charts-and-maps/charts/echarts-test',
            name: "echarts",
            slug: "extra-component-charts-echarts",
            i18n: "echarts",
          },
        ]
      },
    ]
  },
  /* ==="Charts & Maps" === */
  // {
  //   header: "Maps",
  //   icon: "PieChartIcon",
  //   i18n: "Maps",
  //   items: [
  //     {
  //       url: null,
  //       name: "Charts",
  //       icon: "PieChartIcon",
  //       tag: '3',
  //       tagColor: 'success',
  //       i18n: "Charts",
  //       submenu: [
  //         {
  //           url: '/charts-and-maps/charts/apex-charts',
  //           name: "Apex Charts",
  //           slug: "extra-component-charts-apex-charts",
  //           i18n: "ApexCharts",
  //         },
  //         {
  //           url: '/charts-and-maps/charts/chartjs',
  //           name: "chartjs",
  //           slug: "extra-component-charts-chartjs",
  //           i18n: "chartjs",
  //         },
  //         {
  //           url: '/charts-and-maps/charts/echarts',
  //           name: "echarts",
  //           slug: "extra-component-charts-echarts",
  //           i18n: "echarts",
  //         },
  //       ]
  //     },
  //     {
  //       url: '/charts-and-maps/maps/google-map',
  //       name: "Google Map",
  //       icon: "MapIcon",
  //       slug: "extra-component-maps-google-map",
  //       i18n: "GoogleMap",
  //     },
  //     {
  //       url: '/charts-and-maps/maps/leaflet-map',
  //       name: "Leaflet Map",
  //       icon: "MapIcon",
  //       slug: "extra-component-maps-leaflet-map",
  //       i18n: "LeafleteMap",
  //     },
  //   ]
  // },
  // /* ==="Others" === */
  // {
  //   header: "Others",
  //   icon: "MoreHorizontalIcon",
  //   i18n: "Others",
  //   items: [
  //     {
  //       url: null,
  //       name: "Menu Levels",
  //       icon: "MenuIcon",
  //       i18n: "MenuLevels",
  //       submenu: [
  //         {
  //           url: null,
  //           name: "Menu Level 2.1",
  //           i18n: "MenuLevel2p1",
  //         },
  //         {
  //           url: null,
  //           name: "Menu Level 2.2",
  //           i18n: "MenuLevel2p2",
  //           submenu: [
  //             {
  //               url: null,
  //               name: "Menu Level 3.1",
  //               i18n: "MenuLevel3p1",
  //             },
  //             {
  //               url: null,
  //               name: "Menu Level 3.2",
  //               i18n: "MenuLevel3p2",
  //             },
  //           ]
  //         },
  //       ]
  //     },
  //     {
  //       url: null,
  //       name: "Disabled Menu",
  //       icon: "EyeOffIcon",
  //       i18n: "DisabledMenu",
  //       isDisabled: true,
  //     },
  //     {
  //       url: null,
  //       name: "Support",
  //       icon: "SmileIcon",
  //       i18n: "Support",
  //       submenu: [
  //         {
  //           url: '/',
  //           name: "Documentation",
  //           icon: "BookOpenIcon",
  //           slug: "external",
  //           i18n: "Documentation",
  //           target: "_blank"
  //         },
  //         {
  //           url: '/',
  //           name: "Raise Support",
  //           icon: "LifeBuoyIcon",
  //           slug: "external",
  //           i18n: "RaiseSupport",
  //           target: "_blank"
  //         },
  //       ]
  //     },
  //   ]
  // },
]

