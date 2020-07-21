<!-- =========================================================================================
    File Name: LeafletMap.vue
    Description: Leaflet Map (third-party) - Imports page portions
    ----------------------------------------------------------------------------------------
    Item Name: Vuejs, HTML Template
    Author: Krylov
========================================================================================== -->

<template>
  <vx-card title="Basic" code-toggler>
    <div id="AppMap">
<!--    <l-map :zoom="zoom" :center="center">-->
    <l-map ref="mapContainer">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker :lat-lng="marker"></l-marker>
    </l-map>
  </div>
  </vx-card>
</template>

<script>
  import L from 'leaflet';
  import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
  import 'leaflet/dist/leaflet.css';

  // Store Module
  import  moduleMapLeaflet from '@/store/map/moduleMapLeaflet.js';

  import { mapState, mapMutations, mapActions } from 'vuex';

  // const mymap = L.map('AppMap').setView([55.75222, 37.61556], 13);
  //
  // const attribution = '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors';
  //
  // const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  // const tiles = L.tileLayer (tileUrl, {attribution});
  // tiles.addTo (mymap)

  export default {
    name: 'LeafletMap',
    data() {
        return {
          zoom:13,
          center: L.latLng(47.413220, -1.219482),
          url:'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
          marker: L.latLng(47.413220, -1.219482),
          markers: [],
        }
    },
    components: {
        LMap,
        LTileLayer,
        LMarker,
    },
    computed: {
      ...mapState('mapLeaflet', ['mapInstance', 'locations'])
    },
    methods: {
      ...mapMutations('mapLeaflet', ['SET_MAP_INSTANCE']),
      ...mapActions('mapLeaflet', ['FETCH_LOCATIONS']),
      fixBug () {
        // https://github.com/Leaflet/Leaflet/issues/4968
        L.Marker.prototype.options.icon = L.icon({
          iconRetinaUrl,
          iconUrl,
          shadowUrl,
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          tooltipAnchor: [16, -28],
          shadowSize: [41, 41]
        })
      },
      createMapInstance () {
        const map = L.map(this.$refs.mapContainer, { preferCanvas: true }).setView([52.6325793, 4.7239896], 13)
        const mapLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          zoom:13,
          center: L.latLng(47.413220, -1.219482),
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        })
        map.addLayer(mapLayer)
        return map
      },
      renderMap () {
        this.createMapInstance()
        this.SET_MAP_INSTANCE(this.createMapInstance())
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
            if (loc.lat && loc.lon) {
              const marker = L.marker(new L.LatLng(loc.lat, loc.lon), { title: loc.title })
              this.mapInstance.addLayer(marker)
              this.markers.push(marker)
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
    mounted () {
      this.renderMap()
      // this.map = L.map(this.$refs.map).setView([ 55.75222, 37.61556 ], 13);
      // console.log(this.$store._modulesNamespaceMap.mapLeaflet)
      this.FETCH_LOCATIONS()
      // this.$store._modulesNamespaceMap['mapLeaflet/'].context.dispatch('FETCH_LOCATIONS')
      // this.$store.dispatch('mapLeaflet', 'FETCH_LOCATIONS')
    },
    beforeDestroy () {
      if (this.mapInstance) {
        this.mapInstance.remove()
        this.SET_MAP_INSTANCE(null)
      }
    },
    watch: {
      locations (inTo, inFrom) {
        this.removeMarkers()
        this.addMarkers()
        this.fitAllMarkers()
      }
    },
    created () {
      if(!moduleMonitoringManagement.isRegistered) {
        this.$store.registerModule('mapLeaflet', moduleMapLeaflet)
        moduleMapLeaflet.isRegistered = true
      }
      this.fixBug()
    },

  }
</script>
<style scoped>
  #AppMap {
    width: 100%;
    height: 300px;
  }
</style>
