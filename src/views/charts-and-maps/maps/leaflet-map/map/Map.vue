<!-- =========================================================================================
    File Name: Map.vue
    Description: Map (third-party) - Imports page portions
    ----------------------------------------------------------------------------------------
    Item Name: Vuejs, HTML Template
    Author: Krylov
========================================================================================== -->


<template>
  <div>
    <l-map
      :locations="locations"
      :polyline="polyline"
    > </l-map>
  </div>
</template>

<script>

  import MapLeaflet from './MapLeaflet.vue'
  import {mapActions} from "vuex";
  export default {
    name: 'leafletMap',
    components: {
      'l-map': MapLeaflet,
    },
    data () {
      return {
        locations : [],
        polyline  : [],
      }
    },
    methods: {
      ...mapActions( ['map/FETCH_POLYLINE']),
    },
    computed: {

    },
    mounted () {

      this.$store.dispatch('map/FETCH_LOCATIONS')
        .then((locations)=> {
          if (locations) this.locations = locations

        })

      this['map/FETCH_POLYLINE']()
        .then((polyline)=> {
          if (polyline) {
            this.polyline = polyline
            // console.log('-1-FETCH_POLYLINE');
            // console.log(this.polyline)
            // console.log('-1-FETCH_POLYLINE');
          }
      })
    }
  }
</script>
