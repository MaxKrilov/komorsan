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

    > </l-map>
  </div>
</template>

<script>

  import MapLeaflet from './MapLeaflet.vue'
  export default {
    name: 'leafletMap',
    components: {
      'l-map': MapLeaflet,
    },
    data () {
      return {
        locations : []
      }
    },
    methods: {
    },
    computed: {

    },
    mounted () {
      this.$store.dispatch('map/FETCH_LOCATIONS')
        .then((res)=> {
          this.locations = res
        })
    }
  }
</script>
