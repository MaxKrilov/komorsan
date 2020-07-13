<!-- =========================================================================================
    File Name: LeafletMap.vue
    Description: Leaflet Map (third-party) - Imports page portions
    ----------------------------------------------------------------------------------------
    Item Name: Vuejs, HTML Template
    Author: Krylov
========================================================================================== -->

<template>
<!-- wqq-->
<!--    <l-map :zoom="zoom" :center="center">-->
    <l-map ref="map">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker :lat-lng="marker"></l-marker>
    </l-map>
  </div>
</template>

<script>
  import L from 'leaflet';
  import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
  import 'leaflet/dist/leaflet.css';


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
          marker: L.latLng(47.413220, -1.219482)        }
    },
    components: {
        LMap,
        LTileLayer,
        LMarker,
    },
    mounted() {

        // this.map = L.map(this.$refs.map).setView([ 55.75222, 37.61556 ], 13);

    },
  }
</script>
<style scoped>
  #AppMap {
    height: 500px;
    width: 800px;
  }
</style>
