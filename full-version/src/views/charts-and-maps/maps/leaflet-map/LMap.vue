<!-- =========================================================================================
    File Name: LMap.vue
    Description: Leaflet Map (one-party) - Imports page portions
    ----------------------------------------------------------------------------------------
    Item Name: Vuejs, HTML Template
    Author: Krylov
========================================================================================== -->

<template>
  <div :style="styleObj" class="rel">
    <div ref="mapContainer" :style="mapStyle" class="l-map"></div>

<!--    <v-map  :zoom="zoom" :center="center">-->
<!--      <v-tilelayer :url="url" :attribution="attribution"></v-tilelayer>-->
<!--      <v-marker :lat-lng="marker"></v-marker>-->
<!--      <v-marker v-for="item in markers" :key="item.id" :lat-lng="item.latlng" @l-add="$event.target.openPopup()">-->
<!--        <v-popup :content="item.content"></v-popup>-->
<!--      </v-marker>-->
<!--    </v-map>-->

  </div>
</template>

<script>
  import {mapState, mapMutations} from 'vuex'
  import 'leaflet/dist/leaflet.css'
  import L from 'leaflet'

  import deviceIcon from '../../../../render-Ui/map-leaflet/main.js'

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
        devices : L.layerGroup(),
        // locations: [],
        // zoom: 6,
        // center: [47.413220, -1.219482],
        // url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
        // attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        // marker: L.latLng(47.413220, -1.219482),
        //
        // markers: [
        //   {
        //     id: 1,
        //     latlng: L.latLng(47.417220, -1.222482),
        //     content: 'Hi! this is my popup data'
        //   },
        //   {
        //     id: 2,
        //     latlng: L.latLng(47.417220, -1.25),
        //     content: 'Another'
        //   }
        // ]

      }
    },
    // components: {
    //   'v-map': Vue2Leaflet.Map,
    //   'v-tilelayer' :Vue2Leaflet.TileLayer,
    //   'v-marker': Vue2Leaflet.Marker,
    //   L
    // },
    // computed: {
    //   ...mapState('mapModule', ['mapInstance', 'locations'])
    // },
    computed: {
      // ...mapGetters('mapModule',['allLocations']),
      ...mapState('map', ['mapInstance', 'locations'])
  },
    methods: {
      ...mapMutations( 'map', ['SET_MAP_INSTANCE']),
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
        // подключаем слой карты mapbox.light
        var mapboxLight = L.tileLayer(
          'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw',
          {id: 'mapbox.light', attribution: mbAttr}
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


        var offlineKaliningradMaps = L.tileLayer(
          // 'doc/map-files/tiles-kaliningrad-11.09.18/{z}/{x}/{y}.png',
          'tiles/{z}/{x}/{y}.png',
          {
            attribution: mbAttr,
            // minZoom: 8,
            maxZoom: 14
          }
        );
        // let devices = L.layerGroup();
        let substations = L.layerGroup();
        let consumers = L.layerGroup();
        let lines = L.layerGroup();
        let linesDamaged = L.layerGroup();


        var baseLayers = {
          "Mapbox Streets": mapboxStreets,
          "Mapbox Satellite": mapboxSatellite,
          "Mapbox Shades of gray": mapboxLight,
          "Offline maps OSM": offlineKaliningradMaps ,
          "OSM": osm
        };
        var overlays  =  {
          "Devices": this.devices,
          "Substations": substations,
          "Consumers": consumers,
          "lines damaged": linesDamaged,
          "Lines of devices": lines
        };
        // создаём карту
        const map = L.map(this.$refs.mapContainer,
          {
          center: [55.752432, 37.618923],
          zoom: 6,
          //minZoom: 0,
          //maxZoom: 15,
          // layers: [mapboxStreets, devices]
          layers: [mapboxStreets, this.devices,
            // deviceType_BSPI_KSPD,
            substations, consumers, linesDamaged, lines]
        });
        // добавляем слои на карту
        L.control.layers(baseLayers, overlays).addTo(map);

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
        // this.SET_MAP_INSTANCE( this.createMapInstance())
        this.$store.commit("map/SET_MAP_INSTANCE",this.createMapInstance())

      },
      renderMarkers (loc, devType){
        const checkDevTypeForSvg = () => {
          if (devType === 2593 || devType === 2593) return createDeviceIconOnMap_2593()
          else return createDeviceIconOnMapIKZ()
        }
        // добавляем иконку в слой devices
        const marker = L.marker([
          loc.graph_node_describe.gps_lat,
          loc.graph_node_describe.gps_lng
        ], {
          icon: L.divIcon({
            // className: 'ship-div-icon ' + 'map__' + loc.uuid,
            className: 'ship-div-icon',
            iconAnchor: [15, 15],
            html: deviceIcon.createDeviceIconOnMap(loc, devType).outerHTML
          }),
          title: "localeNameOfDevice " + ': ' + loc.device_name.String,
          zIndexOffset: 30000,
          uuid: loc.uuid
        })
          // .addTo(layer)
          .bindPopup(
            '<b>' + 'localeNameOfDevice ' + ':</b> ' + loc.device_name.String +
            '<br><b>' + "localeTypeOfDevice" + ':</b> ' +
            '<br><b>' + "localeLastConnectionTime" + ':</b> '
          );
        return marker
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
          for (const loc of this.locations) {
            if (loc['graph_node_describe'].gps_lat && loc['graph_node_describe'].gps_lng) {
              if (loc['graph_node_type'] === 1) {
                let devType = loc['device_type'].Int64
                let marker = this.renderMarkers(loc, devType).addTo(this.devices)
                this.markers.push(marker)
                // if (
                //   (loc['device_type'].Int64 === 2593) ||
                //   (loc['device_type'].Int64 === 2592)
                // ) {
                //   // let devType = loc['device_type'].Int64
                //   // let markerRIC = deviceIcon.createDeviceIconOnMap_2593(loc, L)
                //   // this.mapInstance.addLayer(markerRIC)
                //   // this.markers.push(markerRIC)
                //
                //   let markerRIC = this.renderMarkers(loc, devType )
                //   markerRIC.addTo(this.devices)
                //   this.markers.push(markerRIC)
                // } else {
                //   // let markerIKZ = deviceIcon.createDeviceIconOnMapIKZ(loc, this.devices, L)
                //   // this.mapInstance.addLayer(markerIKZ)
                //   // markerIKZ.addTo( this.mapInstance);
                //   // this.markers.push(markerIKZ)
                //   // mySvg = deviceIcon.createDeviceIconOnMapIKZ(loc)
                //   // let devType = loc['device_type'].Int64
                //   let markerIKZ = this.renderMarkers(loc, devType)
                //   markerIKZ.addTo(this.devices)
                //   this.markers.push(markerIKZ)
                // }

              }
            }
            // if (loc.graph_node_describe.gps_lat && loc.graph_node_describe.gps_lng) {
            //   let markerIKZ = deviceIconIKZ.createDeviceIconOnMapIKZ(loc)
            //   this.mapInstance.addLayer( markerIKZ )
            //   this.markers.push( markerIKZ )
            // }
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
      this.renderMap()

    },
    beforeDestroy () {
      if (this.mapInstance) {
        this.mapInstance.remove()
        this.SET_MAP_INSTANCE(null)
      }
    },
    watch: {
      locations () {
        this.removeMarkers()
        this.addMarkers()
        this.fitAllMarkers()

      }
    },
    created () {
      // this.fixBug()
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
