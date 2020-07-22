<template>
  <div :style="styleObj" class="rel">
    <div ref="mapContainer" :style="mapStyle" class="l-map"></div>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'

  import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';

  import 'leaflet/dist/leaflet.css'
  import L from 'leaflet'
  // BUG https://github.com/Leaflet/Leaflet/issues/4968
  import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png'
  import iconUrl from 'leaflet/dist/images/marker-icon.png'
  import shadowUrl from 'leaflet/dist/images/marker-shadow.png'
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
    computed: {
      ...mapState('mapModule', ['mapInstance', 'locations'])
    },
    methods: {
      ...mapMutations('mapModule', ['SET_MAP_INSTANCE']),
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
          maxZoom: 18,
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        })
        map.addLayer(mapLayer)
        return map
      },
      renderMap () {
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
              console.log('----- marker');
              console.log(marker);
              console.log('---- marker');
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
