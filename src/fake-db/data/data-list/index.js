import mock from "@/fake-db/mock.js"

const data = {
  products: [
    {
      "id": 721,
      "device_name": "ИКЗ-34ВЛ",
      "description": "ОП.Ф.З.К.23.ПВ.7",
      "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/products/06.png",
      "date_time": "11.11 20:30:24",
      "order_status": "авария",
      "pillar": "опора 1427",
      "coords": "57.37455, 37.169857",
      "is_online": "C"
    },
    {
      "id": 722,
      "device_name": "ИКЗ-34ВЛ",
      "description": "ОП.Ф.З.К.23.ПВ.8",
      "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/products/02.png",
      "date_time": "11.11 20:30:34",
      "order_status": "авария",
      "pillar": "опора 1433",
      "coords": "57.37436, 37.169851",
      "is_online": "C"
    },
    {
      "id": 723,
      "device_name": "ИКЗ-34ВЛ",
      "description": "ОП.Ф.З.К.23.ПВ.9",
      "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/products/01.png",
      "date_time": "11.11 10:30:44",
      "order_status": "сообщение",
      "pillar": "опора 1425",
      "coords": "57.37437, 37.1698750",
      "is_online": "A"
    },

  ]
}


mock.onGet("/api/data-list/products").reply(() => {
  console.log('---1');
  console.log( data.products );
  console.log('--1');
  return [200, JSON.parse(JSON.stringify(data.products)).reverse()];
});

// POST : Add new Item
mock.onPost("/api/data-list/products/").reply((request) => {

  // Get event from post data
  let item = JSON.parse(request.data).item

  const length = data.products.length
  let lastIndex = 0
  if(length){
    lastIndex = data.products[length - 1].id
  }
  item.id = lastIndex + 1

  data.products.push(item)

  return [201, {id: item.id}]
})

// Update Product
mock.onPost(/\/api\/data-list\/products\/\d+/).reply((request) => {

  const itemId = request.url.substring(request.url.lastIndexOf("/")+1)

  let item = data.products.find((item) => item.id == itemId)
  Object.assign(item, JSON.parse(request.data).item)

  return [200, item]
})

// DELETE: Remove Item
mock.onDelete(/\/api\/data-list\/products\/\d+/).reply((request) => {

  const itemId = request.url.substring(request.url.lastIndexOf("/")+1)

  const itemIndex = data.products.findIndex((p) => p.id == itemId)
  data.products.splice(itemIndex, 1)
  return [200]
})
