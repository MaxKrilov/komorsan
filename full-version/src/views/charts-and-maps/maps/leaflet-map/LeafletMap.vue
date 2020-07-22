<!-- =========================================================================================
    File Name: LeafletMap.vue
    Description: Leaflet Map (third-party) - Imports page portions
    ----------------------------------------------------------------------------------------
    Item Name: Vuejs, HTML Template
    Author: Krylov
========================================================================================== -->

<!--<template>-->
<!--  <vx-card title="Basic" code-toggler>-->
<!--    <div id="AppMap">-->
<!--&lt;!&ndash;    <l-map :zoom="zoom" :center="center">&ndash;&gt;-->
<!--    <l-map ref="mapContainer">-->
<!--      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>-->
<!--      <l-marker :lat-lng="marker"></l-marker>-->
<!--    </l-map>-->
<!--  </div>-->
<!--  </vx-card>-->
<!--</template>-->


<!--  import L from 'leaflet';-->
<!--  import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';-->
<!--  import 'leaflet/dist/leaflet.css';-->



<!--  import { mapState, mapMutations, mapActions } from 'vuex';-->


<template>
  <div class="home" :style="gridStyle">
<!--    <nav-bar :styleObj="leftStyle" />-->
    <l-map :styleObj="rightStyle" />
  </div>
</template>

<script>

  import LMap from './LMap.vue'
  import store from '@/store/store.js'
  // import store from '../../../../store/store.js'
  import { mapActions } from 'vuex'
  // Store Module
  import mapModule from './map.js';
  store.registerModule('mapModule', mapModule)
  export default {
    name: 'posts',
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
      ...mapActions('mapModule', ['FETCH_LOCATIONS'])
    },
    mounted () {
      // this.$store.registerModule('mapModule', mapModule)
      // console.log(this.$store._modulesNamespaceMap.mapModule)
      // this.FETCH_LOCATIONS()
      // this.$store._modulesNamespaceMap['mapModule/'].context.dispatch('FETCH_LOCATIONS')
      this.$store.dispatch('mapModule', 'FETCH_LOCATIONS')
    }
  }
</script>
