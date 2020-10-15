export default {
  pages: {
    key: "title",
    data: [
      // DASHBOARDS
      {title: "Analytics Dashboard",        url: "/dashboard/analytics",                icon: "HomeIcon",           is_bookmarked: false},
      {title: "eCommerce Dashboard",        url: "/dashboard/ecommerce",                icon: "HomeIcon",           is_bookmarked: false},
      {title: "agGrid Table",               url: "/dashboard/ag-grid-table",            icon: "HomeIcon",           is_bookmarked: false},



    ]
  },
  files: {
    key:"file_name",
    data: [
    ]
  },
  contacts: {
    key:"name",
    data: [
      {img: require("@/assets/images/portrait/small/komorsan__admin.jpg"), name: "m", email: "", time: "15/01/2020"},
    ]
  },
}
