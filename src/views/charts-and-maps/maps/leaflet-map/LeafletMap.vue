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





<template>
  <div>                      <!--    :style="gridStyle"-->
    <l-map/>                 <!--    :styleObj="rightStyle"-->
  </div>

</template>

<script>
  // import L from 'leaflet';
  // import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
  import 'leaflet/dist/leaflet.css';

  import LMap from './LMap.vue'

  import {mapActions, mapGetters} from 'vuex'


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
        },
      }
    },
    methods: {
      ...mapActions( ['map/FETCHING_DEFAULT']),
    },
    computed: {
      ...mapGetters( ['map/locationAll']),
    },
    mounted () {
      this.$store.dispatch('map/FETCHING_DEFAULT')
        .then(() => {
        })
    }
  }
</script>
