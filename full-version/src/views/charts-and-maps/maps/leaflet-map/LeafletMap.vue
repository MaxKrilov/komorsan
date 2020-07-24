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


<!--  import L from 'leaflet';-->
<!--  import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';-->
<!--  import 'leaflet/dist/leaflet.css';-->



<!--  import { mapState, mapMutations, mapActions } from 'vuex';-->


<!--<template>-->
<!--  <div class="home" :style="gridStyle">-->
<!--&lt;!&ndash;    <nav-bar :styleObj="leftStyle" />&ndash;&gt;-->
<!--    <l-map :styleObj="rightStyle" />-->
<!--  </div>-->
<!--</template>-->

<script>
  import L from 'leaflet';
  // import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
  import 'leaflet/dist/leaflet.css';

  import LMap from './LMap.vue'
  import store from '@/store/store.js'
  // import store from '../../../../store/store.js'
  import {mapActions, mapMutations} from 'vuex'
  // Store Module
  // import mapModule from './map.js';
  // store.registerModule('mapModule', mapModule)
  import moduleMapLeaflet from '@/store/map/moduleMapLeaflet.js'
  // store.registerModule('mapModule', moduleMapLeaflet)
  export default {
    name: 'leafletMap',
    components: {
      LMap,
    },
    data () {
      return { // CSS Grid
        gridStyle: {
          display: 'grid',
          gridTemplate: '1fr / 1fr 5fr'
        },
        leftStyle: {
          gridArea: '1 / 1 / 1 / 1'
        },
        rightStyle: {
          gridArea: '1 / 2 / 1 / 2'
        }
      }
    },
    methods: {
      ...mapActions('mapModule', ['FETCH_LOCATIONS']),

    },
    created () {

    },
    mounted () {
      console.log('----- .1');
      // console.log(this.$store._modulesNamespaceMap);
      console.log('---- 1---');
      // this.$store.registerModule('mapModule',  moduleMapLeaflet)

      // console.log(this.$store._modulesNamespaceMap.mapModule)
      // this.FETCH_LOCATIONS()
      // this.$store._modulesNamespaceMap['mapModule/'].context.dispatch('FETCH_LOCATIONS')
      // this.$store.dispatch('mapModule', 'FETCH_LOCATIONS')
      this.$store.dispatch('mapModule/FETCH_LOCATIONS')
    }
  }
</script>
