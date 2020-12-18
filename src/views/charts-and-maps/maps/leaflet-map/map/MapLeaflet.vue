
<!-- =========================================================================================
    File Name: MapLeaflet.vue
    Description: Map Leaflet  (third-party) - Imports page portions
    ----------------------------------------------------------------------------------------
    Item Name: Vuejs, HTML Template
    Author: Krylov
========================================================================================== -->

<template>

  <div style="height: 500px; width: 100%">
    <div style="height: 200px overflow: auto;">
      <p>Center: {{ currentCenter }}</p>
      <p>zoom: {{ currentZoom }}</p>
    </div>
    <l-map
      :zoom="zoom"
      :center="center"
      :options="mapOptions"
      style="height: 80%"
      @update:center="centerUpdate"
      @update:zoom="zoomUpdate"
    >
      <!--      @mouse-over-index-tr="mouseOverIndexTr"-->
      <!--      @mouse-leave-index-tr="mouseLeaveIndexTr"-->
      <!--      @mouse-selected="mouseSelected"-->
      <l-tile-layer
        :url="url"
        :attribution="attribution"
      />
      <l-marker v-for="item in locations" :icon="icon" :key="item.graph_node_id" :lat-lng="latLng(item['graph_node_describe'].gps_lat, item['graph_node_describe'].gps_lng)" @l-add="$event.target.openPopup()" >
        <l-popup>
        </l-popup>
      </l-marker>
    </l-map>
  </div>

</template>

<script>
  import  { latLng, icon } from "leaflet";
  import icoIkz from './ikz.svg'
  import { LMap, LTileLayer, LMarker, LPopup, LTooltip, LIcon } from "vue2-leaflet";
  // import redIcon from '../../../../../render-Ui/map-leaflet/icon-svg/ikz.js'
  export default {
    name: "MapLeaflet",
    props: {
      locations: {
        type: Array
      },
    },
    components: {
      LMap,
      LTileLayer,
      LMarker,
      LPopup,
      LTooltip,
      LIcon
    },
    data() {
      return {
        markers: [],
        zoom: 6,
        center: latLng(55.752432, 37.618923),
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution:
          '&copy; <a style="color:green">Коморсан</a> contributors',
        withPopup: latLng(47.41322, -1.219482),
        withTooltip: latLng(47.41422, -1.250482),
        currentZoom: 11.5,
        currentCenter: latLng(47.41322, -1.219482),
        showParagraph: false,
        mapOptions: {
          zoomSnap: 0.5
        },
        icon: icon({
          // iconUrl: './../../../../../assets/images/icon-svg/ikz.svg',
          iconUrl: icoIkz,
          iconAnchor: [15, 15], //loc,devType
          iconSize: [32, 37],
        }),

      };
    },
    computed: {
    },
    methods: {

      // getIcon() {
      //   return redIcon;
      // },
      // mouseSelected(index){
      // },
      // mouseOverIndexTr : function(){
      //   this.$emit('mouse-over-index-trs')
      // },
      // mouseLeaveIndexTr: function(){
      //   this.$emit('mouse-leave-index-trs')
      // },

      zoomUpdate(zoom) {
        this.currentZoom = zoom;
      },
      centerUpdate(center) {
        this.currentCenter = center;
      },
      showLongText() {
        this.showParagraph = !this.showParagraph;
      },
      latLng(lat, lng){
        return latLng(lat, lng);
      },
    },
  };
</script>

<style>

</style>

