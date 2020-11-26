import mock from "@/fake-db/mock.js"

const data = {
  products: [
    {
      "id": 712,
      "device_name": "ИКЗ-31",
      "description": "ОП.Ф.З.К.23.ПВ.8",
      "img": require('@/assets/images/devices-icon/ИКЗ-С.svg'),
      "date_time": "11.11 20:30:34",
      "event_status": "авария",
      "pillar": "опора 1433",
      "coords": "57.37436, 37.169851",
      "is_online": "C",
      "event": "ОЗЗ С вперед устойчивое"
    },
    {
      "id": 713,
      "device_name": "ИКЗ-32",
      "description": "ОП.Ф.З.К.23.ПВ.7",
      "img": require('@/assets/images/devices-icon/ИКЗ-С.svg'),
      "date_time": "11.11 20:30:24",
      "event_status": "сообщение",
      "pillar": "опора 1427",
      "coords": "57.37455, 37.169857",
      "is_online": "C",
      "event": "ОЗЗ С назад устойчивое"
    },
    {
      "id": 714,
      "device_name": "ИКЗ-33",
      "description": "ОП.Ф.З.К.23.ПВ.9",
      "img": require('@/assets/images/devices-icon/ИКЗ-А.svg'),
      "date_time": "11.11 10:30:44",
      "event_status": "авария",
      "pillar": "опора 1425",
      "coords": "57.37437, 37.1698750",
      "is_online": "A",
      "event": "комплект не на связи"
    },
    {
      "id": 715,
      "device_name": "ИКЗ-31",
      "description": "ОП.Ф.З.К.23.ПВ.8",
      "img": require('@/assets/images/devices-icon/ИКЗ-С.svg'),
      "date_time": "11.11 20:30:34",
      "event_status": "авария",
      "pillar": "опора 1433",
      "coords": "57.37436, 37.169851",
      "is_online": "C",
      "event": "ОЗЗ С вперед устойчивое"
    },
    {
      "id": 716,
      "device_name": "ИКЗ-32",
      "description": "ОП.Ф.З.К.23.ПВ.7",
      "img": require('@/assets/images/devices-icon/ИКЗ-С.svg'),
      "date_time": "11.11 20:30:24",
      "event_status": "сообщение",
      "pillar": "опора 1427",
      "coords": "57.37455, 37.169857",
      "is_online": "C",
      "event": "ОЗЗ С назад устойчивое"
    },
    {
      "id": 717,
      "device_name": "ИКЗ-33",
      "description": "ОП.Ф.З.К.23.ПВ.9",
      "img": require('@/assets/images/devices-icon/ИКЗ-А.svg'),
      "date_time": "11.11 10:30:44",
      "event_status": "авария",
      "pillar": "опора 1425",
      "coords": "57.37437, 37.1698750",
      "is_online": "A",
      "event": "комплект не на связи"
    },
    {
      "id": 718,
      "device_name": "ИКЗ-31",
      "description": "ОП.Ф.З.К.23.ПВ.8",
      "img": require('@/assets/images/devices-icon/ИКЗ-С.svg'),
      "date_time": "11.11 20:30:34",
      "event_status": "сообщение",
      "pillar": "опора 1433",
      "coords": "57.37436, 37.169851",
      "is_online": "C",
      "event": "ОЗЗ С вперед устойчивое"
    },
    {
      "id": 719,
      "device_name": "ИКЗ-32",
      "description": "ОП.Ф.З.К.23.ПВ.7",
      "img": require('@/assets/images/devices-icon/ИКЗ-С.svg'),
      "date_time": "11.11 20:30:24",
      "event_status": "сообщение",
      "pillar": "опора 1427",
      "coords": "57.37455, 37.169857",
      "is_online": "C",
      "event": "ОЗЗ С назад устойчивое"
    },
    {
      "id": 720,
      "device_name": "ИКЗ-33",
      "description": "ОП.Ф.З.К.23.ПВ.9",
      "img": require('@/assets/images/devices-icon/ИКЗ-А.svg'),
      "date_time": "11.11 10:30:44",
      "event_status": "сообщение",
      "pillar": "опора 1425",
      "coords": "57.37437, 37.1698750",
      "is_online": "A",
      "event": "комплект не на связи"
    },
    {
      "id": 721,
      "device_name": "ИКЗ-34ВЛ",
      "description": "ОП.Ф.З.К.23.ПВ.7",
      "img": require('@/assets/images/devices-icon/ИКЗ-С.svg'),
      "date_time": "11.11 20:30:24",
      "event_status": "авария",
      "pillar": "опора 1427",
      "coords": "57.37455, 37.169857",
      "is_online": "C",
      "event": "ОЗЗ С назад устойчивое"
    },
    {
      "id": 722,
      "device_name": "ИКЗ-34ВЛ",
      "description": "ОП.Ф.З.К.23.ПВ.8",
      "img": require('@/assets/images/devices-icon/ИКЗ-С.svg'),
      "date_time": "11.11 20:30:34",
      "event_status": "авария",
      "pillar": "опора 1433",
      "coords": "57.37436, 37.169851",
      "is_online": "C",
      "event": "ОЗЗ С вперед устойчивое"
    },
    {
      "id": 723,
      "device_name": "ИКЗ-34ВЛ",
      "description": "ОП.Ф.З.К.23.ПВ.9",
      "img": require('@/assets/images/devices-icon/ИКЗ-А.svg'),
      "date_time": "11.11 10:30:44",
      "event_status": "сообщение",
      "pillar": "опора 1425",
      "coords": "57.37437, 37.1698750",
      "is_online": "A",
      "event": "комплект не на связи"
    },
  ]
}


mock.onGet("/api/data-list/products").reply(() => {
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

  let item = data.products.find((item) => item.id === itemId)
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
