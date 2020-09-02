

export default {
  createDeviceIconOnMap (loc,devType ){
  // createDeviceIconOnMapIKZ(loc, layer, L) {
    const createDeviceIconOnMapIKZ = () => {
  // createDeviceIconOnMapIKZ(loc) {
    var colorDevice;
    var localeEventTime = loc.last_connect.String;
    var balunAntraks;

    // переход к информации о приборе возможен всем ролям у которых есть привилегия readDeviceSettings (у роли диспетчера привилегии нет)
    // if ( window.readDeviceSettings == true ) {
    //   balunAntraks = '<br><br>' + '<a href="' + urlCreatePlasemark + '/device.html?uuid=' + loc.uuid + '">' + localeGoToPageOfInformationOnDeviceName + '</a>';
    // } else {
    //   balunAntraks = '';
    // }
    //
    // convertTypeOfDevice( loc.device_type.Int64 );  // преобразовать Тип прибора из цифр в его название (находится в functions-transofm-into-devices.js)

    // Создаём тег SVG
    var mysvg;
    mysvg = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
    mysvg.setAttribute('width', '30');
    mysvg.setAttribute('height', '30');
    mysvg.setAttribute('attr', loc.graph_node_id);
    mysvg.setAttribute('id', 'map_icon' + loc.uuid);
    // Создаём элемент rect
    var newElement;
    newElement = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
    newElement.setAttribute('cx', 15);
    newElement.setAttribute('cy', 15);
    newElement.setAttribute('r', 13.8);
    newElement.setAttribute('stroke-width', 2.4);
    newElement.setAttribute('class', 'icons-on-map');
    newElement.setAttribute('id', 'map_' + loc.uuid);

    if (loc.missed_connections.Valid == true
    ) {
      // colorDevice = loc.missed_connections.Int64;
      colorDevice = loc.is_online;
    }
    colorDevice = loc.is_online;

    if (colorDevice > 0) {
      // зеленый цвет
      if (loc.blinker.Valid == false) {  // нет блинкера (бспи) - серый фон прибора
        newElement.setAttribute('fill', 'lightgray');
        newElement.setAttribute('stroke', 'green');
      } else {
        if (loc.blinker.String == '0') {  // блинкер не активен - чёрный фон прибора
          // чёрный фон
          newElement.setAttribute('fill', 'black');
          newElement.setAttribute('stroke', 'green');
        }
        if (loc.blinker.String == '1') {  // блинкер активен - жёлтый фон прибора
          // жёлтый фон
          newElement.setAttribute('fill', 'yellow');
          newElement.setAttribute('stroke', 'green');
        }
      }

    } else if (colorDevice == 0) {

      // красный цвет
      if (loc.blinker.Valid == false) {  // нет блинкера (бспи) - серый фон прибора
        // серый фон
        newElement.setAttribute('fill', 'lightgray');
        newElement.setAttribute('stroke', 'red');
      } else {
        if (loc.blinker.String == '0') {  // блинкер не активен - чёрный фон прибора
          // чёрный фон
          newElement.setAttribute('fill', 'black');
          newElement.setAttribute('stroke', 'red');
        }
        if (loc.blinker.String == '1') {  // блинкер активен - жёлтый фон прибора
          // жёлтый фон
          newElement.setAttribute('fill', 'yellow');
          newElement.setAttribute('stroke', 'red');
        }
      }

    } else {
      // серый цвет
      if (loc.blinker.Valid == false) {  // нет блинкера (бспи) - серый фон прибора
        // серый фон
        newElement.setAttribute('fill', 'lightgray');  // фон
        newElement.setAttribute('stroke', 'gray');  // рамка
      } else {
        if (loc.blinker.String == '0') {  // блинкер не активен - чёрный фон прибора
          // чёрный фон
          newElement.setAttribute('fill', 'black');
          newElement.setAttribute('stroke', 'gray');
        }
        if (loc.blinker.String == '1') {  // блинкер активен - жёлтый фон прибора
          // жёлтый фон
          newElement.setAttribute('fill', 'yellow');
          newElement.setAttribute('stroke', 'gray');
        }
      }
    }

    // Помещаем rect в наш svg
    mysvg.appendChild(newElement);
    // // добавляем иконку в слой devices
    // const marker = L.marker([
    //   loc.graph_node_describe.gps_lat,
    //   loc.graph_node_describe.gps_lng
    // ], {
    //   icon: L.divIcon({
    //     // className: 'ship-div-icon ' + 'map__' + loc.uuid,
    //     className: 'ship-div-icon',
    //     iconAnchor: [15, 15],
    //     html: mysvg.outerHTML
    //   }),
    //   title: "localeNameOfDevice " + ': ' + loc.device_name.String,
    //   zIndexOffset: 30000,
    //   uuid: loc.uuid
    // })
    //   .addTo(layer)
    //   .bindPopup(
    //   '<b>' + 'localeNameOfDevice ' + ':</b> ' + loc.device_name.String +
    //   '<br><b>' + "localeTypeOfDevice" + ':</b> ' +
    //   '<br><b>' + "localeLastConnectionTime" + ':</b> ' + localeEventTime.replace('<br>', '')
    // );
    //
    return mysvg
  }

   const createDeviceIconOnMap_2593 = () => {
      var colorDevice;
      var localeEventTime = loc.last_connect.String
      var balunAntraks;

      // // переход к информации о приборе возможен всем ролям у которых есть привилегия readDeviceSettings (у роли диспетчера привилегии нет)
      // if ( window.readDeviceSettings == true ) {
      //   balunAntraks = '<br><br>' + '<a href="' + urlCreatePlasemark + '/device.html?uuid=' + loc.uuid + '">' + localeGoToPageOfInformationOnDeviceName + '</a>';
      // } else {
      //   balunAntraks = '';
      // }

      // convertTypeOfDevice( loc.device_type.Int64 );  // преобразовать Тип прибора из цифр в его название (находится в functions-transofm-into-devices.js)
      // Создаём тег SVG
      var mysvg;
      mysvg = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
      mysvg.setAttribute('width', '24.153');
      mysvg.setAttribute('height', '28.535');
      mysvg.setAttribute('attr', loc.graph_node_id);
      mysvg.setAttribute('viewBox', '0 0 20.678 21.308');
      mysvg.setAttribute('id', 'map_icon' + loc.uuid);
      var g_main_layer = document.createElementNS("http://www.w3.org/2000/svg", 'g');
      g_main_layer.setAttribute('id', 'main_layer');
      g_main_layer.setAttribute('transform', 'translate(-13.526 -44.229)');
      var g_main_layer_1 = document.createElementNS("http://www.w3.org/2000/svg", 'g');
      g_main_layer_1.setAttribute('id', 'main_layer_1');
      g_main_layer_1.setAttribute('fill', '#fff');
      g_main_layer_1.setAttribute('fill-rule', 'evenodd');
      g_main_layer_1.setAttribute('stroke', '#007500');
      g_main_layer_1.setAttribute('stroke-width', '1.5875');
      var g_main_layer_2 = document.createElementNS("http://www.w3.org/2000/svg", 'g');
      g_main_layer_2.setAttribute('id', 'main_layer_2');
      g_main_layer_2.setAttribute('fill', 'none');
      g_main_layer_2.setAttribute('transform', 'translate(-13.526 -44.229)');
      var g_main_layer_3 = document.createElementNS("http://www.w3.org/2000/svg", 'g');
      g_main_layer_3.setAttribute('id', 'locker');
      g_main_layer_3.setAttribute('transform', 'matrix(.012499 0 0 .012499 25.684 44.229)');
      // Создаём элемент rect
      var newElement;
      newElement = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
      newElement.setAttribute('fill', '#fff');
      newElement.setAttribute('stroke-width', '1.5875');
      newElement.setAttribute('id', 'map_' + loc.uuid);
      newElement.setAttribute('x', 15.899);
      newElement.setAttribute('y', 47.219);
      newElement.setAttribute('width', '15.95');
      newElement.setAttribute('height', '15.95');
      newElement.setAttribute('stroke', '#007500');
      newElement.setAttribute('transform', 'translate(-13.526 -44.229)');
      var newElement_2;
      newElement_2 = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
      newElement_2.setAttribute('class', 'icons-on-map');
      newElement_2.setAttribute('width', '19.102');
      newElement_2.setAttribute('height', '19.106');
      newElement_2.setAttribute('x', 14.314);
      newElement_2.setAttribute('y', 45.643);
      newElement_2.setAttribute('stroke-width', '1.5764');
      var newPath, newPath_left, newPath_right;
      newPath_left = document.createElementNS("http://www.w3.org/2000/svg", 'path');
      newPath_right = document.createElementNS("http://www.w3.org/2000/svg", 'path');
      newPath_left.setAttribute('d', 'm15.106 54.907h3.7042');
      newPath_right.setAttribute('d', 'm28.943 54.907h3.7042');
      newPath_left.setAttribute('fill', '#fff');
      newPath_left.setAttribute('fill-rule', 'evenodd');
      newPath_left.setAttribute('stroke', '#007500');
      newPath_left.setAttribute('stroke-width', '1.5875');
      newPath_right.setAttribute('fill', '#fff');
      newPath_right.setAttribute('fill-rule', 'evenodd');
      newPath_right.setAttribute('stroke', '#007500');
      newPath_right.setAttribute('stroke-width', '1.5875');
      newPath_left.setAttribute('transform', 'translate(-13.526 -44.229)');
      newPath_right.setAttribute('transform', 'translate(-13.526 -44.229)');
      var newPath_2;
      newPath_2 = document.createElementNS("http://www.w3.org/2000/svg", 'path');
      newPath_2.setAttribute('id', 'opened');
      newPath_2.setAttribute('d', 'm19.841 54.907h7.9428');
      newPath_2.setAttribute('stroke', '#007500');
      newPath_2.setAttribute('stroke-width', '1.5875');
      var newPath_3;
      newPath_3 = document.createElementNS("http://www.w3.org/2000/svg", 'path');
      newPath_3.setAttribute('id', 'closed');
      newPath_3.setAttribute('d', 'm23.812 50.673v8.4666');
      newPath_3.setAttribute('stroke', '#007500');
      newPath_3.setAttribute('stroke-width', '1.5875');
      newPath_3.setAttribute('visible', 'false');
      var newPath_4;
      newPath_4 = document.createElementNS("http://www.w3.org/2000/svg", 'path');
      newPath_4.setAttribute('id', 'locker_path');
      // newPath_4.setAttribute('d',
      //   `m292.68 0c-94.389 0-171.18 76.791-171.18 171.18v97.767c0 1.111-1.371 2.983-2.448
      //      3.341-9.257 3.087-16.775 5.762-23.657 8.415-8.207 3.164-14.397 12.259-14.397 21.157v224.64c0
      //      8.837 6.15 17.94 14.305 21.172 63.097 25.003 129.5 37.678 197.38 37.678s134.28-12.678 197.38-37.681c8.152-3.231
      //      14.299-12.332 14.299-21.169v-224.64c0-8.898-6.189-17.993-14.4-21.16-6.885-2.653-14.402-5.328-23.652-8.415-1.074-
      //      0.358-2.445-2.231-2.445-3.342v-97.766c-5e-3 -94.389-76.794-171.18-171.18-171.18zm-46.626 370.28c0-25.769 20.875-46.622
      //      46.623-46.622 25.746 0 46.621 20.851 46.621 46.622 0 17.075-9.629 31.371-23.311 39.475v77.081c0 12.886-10.426 23.311-23.311
      //      23.311-12.886 0-23.311-10.425-23.311-23.311v-77.081c-13.681-8.104-23.311-22.4-23.311-39.475zm158.95-199.1v84.355c-36.834-7.926-
      //      74.623-11.94-112.31-11.943-37.666 0-75.447 4.015-112.34 11.934v-84.346c0-61.935 50.386-112.32 112.32-112.32 61.933-1e-3 112.32 50.385 112.32 112.32z
      //      `);


      // cur_vals_uuid();

      let cur_Vals = 0

      if (loc.missed_connections.Valid == true) {
        colorDevice = loc.is_online;
      }
      colorDevice = loc.is_online;
      if (Number.isNaN(colorDevice) == false) {  // прибор ещё не выходил на связь - серый цвет прибора
        // серый цвет
        if (colorDevice == '0') {  // прибор // серый фон
          newElement.setAttribute('fill', 'lightgray');  // фон rect class="rect1"// newElement.setAttribute('stroke', 'gray');   // рамка rect class="rect1"
          newElement.setAttribute('stroke', 'red');   // рамка2   g id="main_layer_1"
          newPath_left.setAttribute('stroke', 'red');   // рамка path d="m15
          newPath_right.setAttribute('stroke', 'red');   // рамка path d="m28
          document.getElementById('closed').style.display = 'none'; // newPath_3 рамка closed
          document.getElementById('locker_path').style.display = 'none'; // newPath_4 рамка locker
          newPath_2.setAttribute('stroke', 'red');   // рамка opened
        } else if (colorDevice > '0') {
          if (Number.isNaN(cur_Vals.closed) == false) {
            // undefined
            if (cur_Vals.closed == '1') {
              newElement.setAttribute('fill', '#fff');  // фон rect class="rect1"// newElement.setAttribute('stroke', 'gray');   // рамка rect class="rect1"
              newElement.setAttribute('fill', '#fff');  // фон рамка2  g id="main_layer_1"
              newElement.setAttribute('stroke', 'green');   // рамка2   g id="main_layer_1"
              newPath_left.setAttribute('stroke', 'green');   // рамка path d="m15
              newPath_right.setAttribute('stroke', 'green');   // рамка path d="m28
              newPath_3.setAttribute('stroke', 'maroon');  // рамка closed
              document.getElementById('opened').style.display = 'none';   // newPath_2 рамка opened
              document.getElementById('locker_path').style.display = 'none'; // newPath_4 рамка locker
            } else if (cur_Vals.closed == '0') {
              newElement.setAttribute('fill', '#fff');  // фон rect class="rect1"// newElement.setAttribute('stroke', 'gray');   // рамка rect class="rect1"
              newElement.setAttribute('fill', '#fff');  // фон рамка2  g id="main_layer_1"
              newElement.setAttribute('stroke', 'green');   // рамка2   g id="main_layer_1"
              newPath_left.setAttribute('stroke', 'green');   // рамка path d="m15
              newPath_right.setAttribute('stroke', 'green');   // рамка path d="m28
              document.getElementById('closed').style.display = 'none'; // newPath_3 рамка closed
              newPath_2.setAttribute('stroke', 'green');   // рамка opened
              document.getElementById('locker_path').style.display = 'none'; // newPath_4 рамка locker
            } else {
              if (cur_Vals.int_lock == 1) {
                document.getElementById('locker_path').style.display = 'block'; // newPath_4 рамка locker
              }
            }
          }
          if (cur_Vals.alarm == 1 && cur_Vals.closed == 1) {
            newElement.setAttribute('fill', 'red');  // фон rect class="rect1"
            newElement.setAttribute('fill', '#fff');  // фон рамка2  g id="main_layer_1"
            newElement.setAttribute('stroke', 'green');   // рамка2   g id="main_layer_1"
            newPath_left.setAttribute('stroke', 'green');   // рамка path d="m15
            newPath_right.setAttribute('stroke', 'green');   // рамка path d="m28
            newPath_3.setAttribute('stroke', 'maroon');  // рамка closed
            document.getElementById('opened').style.display = 'none';   // newPath_2 рамка opened
            document.getElementById('locker_path').style.display = 'none'; // newPath_4 рамка locker
          }
        } else {
          newElement.setAttribute('fill', 'lightgray');  // фон rect class="rect1"// newElement.setAttribute('stroke', 'gray');   // рамка rect class="rect1"
          newElement.setAttribute('fill', 'gray');  // фон рамка2  g id="main_layer_1"
          newElement.setAttribute('stroke', 'gray');   // рамка2   g id="main_layer_1"
          newPath_left.setAttribute('stroke', 'gray');   // рамка path d="m15
          newPath_right.setAttribute('stroke', 'gray');   // рамка path d="m28
          newPath_2.setAttribute('stroke', 'gray');   // рамка opened
          document.getElementById('closed').style.display = 'none'; // newPath_3 рамка closed
          document.getElementById('locker_path').style.display = 'none'; // newPath_4 рамка locker
        }
      }
      mysvg.append(newElement);
      mysvg.appendChild(newPath_left);
      mysvg.appendChild(newPath_right);
      mysvg.appendChild(g_main_layer_2);
      g_main_layer_2.append(newPath_2);
      g_main_layer_2.append(newPath_3);
      g_main_layer_2.append(newElement_2);
      mysvg.append(g_main_layer_3);
      g_main_layer_3.append(newPath_4);

      // добавляем иконку в слой devices
      // let marker = L.marker([
      //   loc.graph_node_describe.gps_lat,
      //   loc.graph_node_describe.gps_lng
      // ], {
      //   icon: L.divIcon({
      //     className: 'ship-div-icon',
      //     iconAnchor: [16, 16],
      //     html: mysvg.outerHTML
      //   }),
      //   title: 'localeNameOfDevice' + ': ' + loc.device_name.String,
      //   // riseOnHover: true,
      //   zIndexOffset: 30000
      // })
      //   // .addTo(devices)
      //   .bindPopup(
      //     '<b>' + 'localeNameOfDevice' + ':</b> ' + loc.device_name.String +
      //     '<br><b>' + 'localeTypeOfDevice' + ':</b> ' +
      //     '<br><b>' + 'localeLastConnectionTime' + ':</b> ' + localeEventTime.replace('<br>', '')
      //   )
      // return marker
      return mysvg
    }
  if (devType === 2593 || devType === 2593) return createDeviceIconOnMap_2593()
  else return createDeviceIconOnMapIKZ()
  }
}
