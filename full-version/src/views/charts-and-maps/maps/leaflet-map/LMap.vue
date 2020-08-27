<template>
  <div :style="styleObj" class="rel">
    <div ref="mapContainer" :style="mapStyle" class="l-map"></div>
  </div>
</template>

<script>
  import {mapState, mapMutations, mapGetters, mapActions} from 'vuex'

  import 'leaflet/dist/leaflet.css'
  import L from 'leaflet'
  // BUG https://github.com/Leaflet/Leaflet/issues/4968
  import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png'
  import iconUrl from 'leaflet/dist/images/marker-icon.png'
  import shadowUrl from 'leaflet/dist/images/marker-shadow.png'



  // import moduleMapLeaflet from '../../../../store/map/moduleMapLeaflet.js'
  // import store from '../../../../store/store.js'
  // store.registerModule('mapModule', moduleMapLeaflet)
  export default {
    name: 'LMap',
    props: {
      styleObj: {
        type: Object,
      }
    },
    data () {
      return {
        mapStyle: {
          width: '100%',
          height: '300px'
        },
        markers: [],

      }
    },
    // computed: {
    //   ...mapState('mapModule', ['mapInstance', 'locations'])
    // },
    computed: {
      // ...mapGetters('mapModule',['allLocations']),
      ...mapState('map', ['mapInstance', 'locations'])
  },
    methods: {
      ...mapMutations( 'map', ['SET_MAP_INSTANCE']),
      // ...mapActions( ['map/GET_MAP_INSTANCE']),

      fixBug () {
        // https://github.com/Leaflet/Leaflet/issues/4968
        // L.Marker.prototype.options.icon = L.icon({
        //   // iconRetinaUrl,
        //   // iconUrl,
        //   // shadowUrl,
        //   iconSize: [25, 41],
        //   iconAnchor: [12, 41],
        //   popupAnchor: [1, -34],
        //   tooltipAnchor: [16, -28],
        //   shadowSize: [41, 41]
        // })
      },
      createMapInstance () {
        // прописываем подпись на карте
        let mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
          '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
          'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
// подключаем слой карты mapbox.streets
        let mapboxStreets = L.tileLayer(
          'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw',
          {id: 'mapbox.streets', attribution: mbAttr}
        );
// подключаем слой карты mapbox.satellite
        let mapboxSatellite = L.tileLayer(
          'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw',
          {id: 'mapbox.satellite', attribution: mbAttr}
        );
        let osm = L.tileLayer(
          'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          {
            attribution: mbAttr,
            // minNativeZoom: 6,
            maxZoom: 15,
            // maxNativeZoom: 15,
            toggleDisplay: true,
            zoomLevelFixed: true
          }
        );
        let devices = L.layerGroup();
        let substations = L.layerGroup();
        let consumers = L.layerGroup();
        let lines = L.layerGroup();
        let linesDamaged = L.layerGroup();

        // создаём карту
        const map = L.map(this.$refs.mapContainer, {
          center: [55.752432, 37.618923],
          zoom: 6,
          //minZoom: 0,
          //maxZoom: 15,
          // layers: [mapboxStreets, devices]
          layers: [mapboxStreets, devices,
            // deviceType_BSPI_KSPD,
            substations, consumers, linesDamaged, lines]
        });
        // добавляем слои на карту
        // L.control.layers(baseLayers, overlays).addTo(map);

// добавляем шасштаб на карту
        L.control.scale().addTo(map);

        // const map = L.map(this.$refs.mapContainer, { preferCanvas: true }).setView([52.6325793, 4.7239896], 13)
        // const mapLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        //   maxZoom: 18,
        //   attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        // })
        //
        // map.addLayer(mapLayer)
        return map
      },
      renderMap () {
        console.log('----- marker');
        console.log(this.$store.state.map);
        console.log('---- marker');

        // this.$store.dispatch('mapModule/SET_MAP_INSTANCE')
        // this.createMapInstance()
        // this.$store.dispatch('map/GET_MAP_INSTANCE',  this.createMapInstance())
        // this.GET_MAP_INSTANCE( this.createMapInstance())
        this.SET_MAP_INSTANCE( this.createMapInstance())
        // this.$store.commit("SET_MAP_INSTANCE",this.createMapInstance())
        // this.$store.dispatch("SET_MAP_INSTANCE",this.createMapInstance())
        // this.createMapInstance()
        // this.$store.dispatch('mapModule/SET_MAP_INSTANCE')
        // this.createMapInstance()
        // return this.$store.state.mapModule.SET_MAP_INSTANCE(this.createMapInstance())
        // this.createMapInstance()
        // this.$store._modulesNamespaceMap['mapModule/'].context.dispatch('SET_MAP_INSTANCE')
        // this.$store.registerModule('mapLeaflet', moduleMapLeaflet)
      },
      removeMarkers () {
        if (this.mapInstance) {
          // this.markers
          for (const marker of this.markers) {
            this.mapInstance.removeLayer(marker)
          }
        }
      },
      addMarkers () {
        if (this.mapInstance) {
          // console.log('----- 1 marker');
          // console.log(this.locations);
          // console.log('---- 1 marker');
          for (const loc of this.locations) {
            if (loc.graph_node_describe.gps_lat && loc.graph_node_describe.gps_lng) {
              // createDeviceIconOnMap()
              // function createDeviceIconOnMap() {
                var colorDevice;
                var localeEventTime =  loc.last_connect.String ;
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
                mysvg.setAttribute('width','30');
                mysvg.setAttribute('height','30');
                mysvg.setAttribute('attr', loc.graph_node_id);
                mysvg.setAttribute('id', 'map_icon' + loc.uuid);
                // Создаём элемент rect
                var newElement;
                newElement = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
                newElement.setAttribute('cx', 15);
                newElement.setAttribute('cy', 15);
                newElement.setAttribute('r',  13.8);
                newElement.setAttribute('stroke-width', 2.4);
                newElement.setAttribute('class', 'icons-on-map');
                newElement.setAttribute('id', 'map_' + loc.uuid);

                if ( loc.missed_connections.Valid == true ) {
                  // colorDevice = loc.missed_connections.Int64;
                  colorDevice = loc.is_online;
                }
                colorDevice = loc.is_online;

/// ============================================================================================
                if ( colorDevice > 0 ) {
                  // зеленый цвет
                  if ( loc.blinker.Valid == false ) {  // нет блинкера (бспи) - серый фон прибора
                    newElement.setAttribute('fill', 'lightgray');
                    newElement.setAttribute('stroke', 'green');
                  } else {
                    if ( loc.blinker.String == '0' ) {  // блинкер не активен - чёрный фон прибора
                      // чёрный фон
                      newElement.setAttribute('fill', 'black');
                      newElement.setAttribute('stroke', 'green');
                    }
                    if ( loc.blinker.String == '1' ) {  // блинкер активен - жёлтый фон прибора
                      // жёлтый фон
                      newElement.setAttribute('fill', 'yellow');
                      newElement.setAttribute('stroke', 'green');
                    }
                  }

                } else if ( colorDevice == 0 ) {

                  // красный цвет
                  if ( loc.blinker.Valid == false ) {  // нет блинкера (бспи) - серый фон прибора
                    // серый фон
                    newElement.setAttribute('fill', 'lightgray');
                    newElement.setAttribute('stroke', 'red');
                  } else {
                    if ( loc.blinker.String == '0' ) {  // блинкер не активен - чёрный фон прибора
                      // чёрный фон
                      newElement.setAttribute('fill', 'black');
                      newElement.setAttribute('stroke', 'red');
                    }
                    if ( loc.blinker.String == '1' ) {  // блинкер активен - жёлтый фон прибора
                      // жёлтый фон
                      newElement.setAttribute('fill', 'yellow');
                      newElement.setAttribute('stroke', 'red');
                    }
                  }

                } else  {
                  // серый цвет
                  if ( loc.blinker.Valid == false ) {  // нет блинкера (бспи) - серый фон прибора
                    // серый фон
                    newElement.setAttribute('fill', 'lightgray');  // фон
                    newElement.setAttribute('stroke', 'gray');  // рамка
                  } else {
                    if ( loc.blinker.String == '0' ) {  // блинкер не активен - чёрный фон прибора
                      // чёрный фон
                      newElement.setAttribute('fill', 'black');
                      newElement.setAttribute('stroke', 'gray');
                    }
                    if ( loc.blinker.String == '1' ) {  // блинкер активен - жёлтый фон прибора
                      // жёлтый фон
                      newElement.setAttribute('fill', 'yellow');
                      newElement.setAttribute('stroke', 'gray');
                    }
                  }

                }


                // Помещаем rect в наш svg
                mysvg.appendChild(newElement);
                // добавляем иконку в слой devices
                const marker = L.marker([
                  loc.graph_node_describe.gps_lat,
                  loc.graph_node_describe.gps_lng
                ], {
                  icon: L.divIcon({
                    // className: 'ship-div-icon ' + 'map__' + loc.uuid,
                    className: 'ship-div-icon',
                    iconAnchor: [15, 15],
                    html: mysvg.outerHTML
                  }),
                  title: "localeNameOfDevice "+ ': ' + loc.device_name.String,
                  // riseOnHover: true,
                  zIndexOffset: 30000,
                  uuid: loc.uuid
                }).bindPopup(
                  '<b>' + 'localeNameOfDevice '+ ':</b> ' + loc.device_name.String +
                  '<br><b>' + "localeTypeOfDevice" + ':</b> ' +
                  '<br><b>' + "localeLastConnectionTime" + ':</b> ' + localeEventTime.replace('<br>', '')

                );

                this.mapInstance.addLayer(marker)
                this.markers.push(marker)

              // const marker = L.marker(new L.LatLng(loc.graph_node_describe.gps_lat, loc.graph_node_describe.gps_lng), { title: loc.device_name.String })
              // this.mapInstance.addLayer(marker)
              // this.markers.push(marker)

            }
          }
        }
      },
      fitAllMarkers () {
        if (this.mapInstance && this.markers.length) {
          const group = L.featureGroup(this.markers)
          this.mapInstance.fitBounds(group.getBounds())
        }
      }
    },
    async mounted () {
      // this.$store.registerModule('mapModule',  moduleMapLeaflet)
      this.renderMap()
    },
    beforeDestroy () {
      if (this.mapInstance) {
        this.mapInstance.remove()
        // this.SET_MAP_INSTANCE(null)
      }
    },
    watch: {
      locations () {
        // console.log('----1- locations');
        // console.log(this.locations);
        // console.log('----1 locations');
        this.removeMarkers()
        this.addMarkers()
        this.fitAllMarkers()
      }
    },
    created () {

      this.fixBug()
    }
  }
</script>

<style scoped>
  .rel {
    position: relative;
  }
  .l-map {
    height: 150px;
  }
</style>
