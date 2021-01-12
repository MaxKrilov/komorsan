
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
      ref="mapContainerId"
      :zoom="zoom"
      :center="center"
      :options="mapOptions"
      style="height: 80%"
      class="map"
      @update:center="centerUpdate"
      @update:zoom="zoomUpdate"
    >
     <!--   @mouse-over-index-tr="mouseOverIndexTr"
            @mouse-leave-index-tr="mouseLeaveIndexTr"
            @mouse-selected="mouseSelected"
     -->
      <l-control-layers
        :position="layersPosition"
        :collapsed="false"
        :sort-layers="true"
      />
      <l-tile-layer
        v-for="tileProvider in tileProviders"
        :key="tileProvider.name"
        :name="tileProvider.name"
        :visible="tileProvider.visible"
        :url="tileProvider.url"
        :attribution="tileProvider.attribution"
        layer-type="base"
      />
      <l-marker v-for="item in locations" :icon="icon" :key="item.graph_node_id" :lat-lng="latLng(item['graph_node_describe'].gps_lat, item['graph_node_describe'].gps_lng)" @l-add="$event.target.openPopup()" >
        <l-popup>
        </l-popup>
      </l-marker>

    <!--
      <l-layer-group
        ref="features"
        :id="layers.id"
        layer-type="overlay"
        :name="LayerVertex"
      >
      </l-layer-group>
     -->

      <l-layer-group
        layer-type="overlay"
        name="Line"
      >
      <l-polyline v-for="line in polyline"
        :lat-lngs="latLngPolyLine(line.graph_edge_describe.coordinates)"
        :key="line.graph_edge_id"
        :color="optionsPolyline.colorPolyLine"
        :weight="optionsPolyline.weight"
      />
      <!--
        <l-Vertex-polyline
          v-for="lineVertex in polyline"
          :lat-lngs="lineVertex.graph_edge_describe.coordinates"
          :key="lineVertex.graph_edge_id"
          :color="colorVertex.colorVertexPolyLine"
        />
        -->
      </l-layer-group>
    </l-map>
  </div>

</template>

<script>

  import L from 'leaflet';
  import  { latLng, icon } from "leaflet";
  import {vertexPolyline} from "./VertexPolyline/VertexPolyline";
  import icoIkz from './ikz.svg'
  import {
    LMap,
    LTileLayer,
    LMarker,
    LIcon,
    LPolyline,
    LLayerGroup,
    LTooltip,
    LPopup,
    LControlZoom,
    LControlAttribution,
    LControlScale,
    LControlLayers,
    // LVertex
  } from 'vue2-leaflet';

  export default {
    name: "MapLeaflet",
    props: {
      locations: {
        type: Array,
        default: null,
      },
      polyline: {
        type: Array,
      },
    },
    components: {
      LMap,
      LTileLayer,
      LMarker,
      LIcon,
      LPolyline,
      LLayerGroup,
      LTooltip,
      LPopup,
      LControlZoom,
      LControlAttribution,
      LControlScale,
      LControlLayers,
      // 'l-Vertex-polyline' : vertex,
      // 'l-vertex' : LVertex
    },
    data() {
      return {

        markers: [],
        layersPosition: 'topright',
        zoom: 6,
        center: latLng(55.752432, 37.618923),
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
          '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
          'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        withPopup: latLng(47.41322, -1.219482),
        withTooltip: latLng(47.41422, -1.250482),
        currentZoom: 11.5,
        currentCenter: latLng(47.41322, -1.219482),
        showParagraph: false,
        mapOptions: {
          zoomSnap: 0.5
        },
        icon: icon({
          iconUrl: icoIkz,
          iconAnchor: [15, 15], //loc,devType
          iconSize: [25, 25],
        }),
        LayerVertex : 'vertex',
        layers : {id: 1},
        tileProviders :[
          {
            name: 'Map -- Dark',
            id: 'mapbox.streets',
            visible: true,
            url: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
            attribution: '&copy; <a href=\'http://www.openstreetmap.org/copyright\'></a>  <a href=\'https://carto.com/attributions\'>КОМОРСАН (ТЕМНЫЙ Ситх)</a>',
          },
          {
            name: 'Map -- Light',
            id: 'mapbox.light',
            visible: false,
            url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
            attribution: '&copy; <a href=\'http://www.openstreetmap.org/copyright\'></a>  <a href=\'https://carto.com/attributions\'>КОМОРСАН (СВЕТЛЫЙ Джедай)</a>',
          },
        ],
        optionsPolyline: {
          colorPolyLine: "#c7b1f3",
          weight: 4
        },
        colorVertex : {
          colorVertexPolyLine: "#fff"
      },
      };
    },
    computed: {
    },
    methods: {

      /*
      getIcon() {
        return redIcon;
      },
      mouseSelected(index){
      },
      mouseOverIndexTr : function(){
        this.$emit('mouse-over-index-trs')
      },
      mouseLeaveIndexTr: function(){
        this.$emit('mouse-leave-index-trs')
      },
      */
      zoomUpdate(zoom) {
        this.currentZoom = zoom;
      },
      centerUpdate(center) {
        this.currentCenter = center;
      },
      latLng(lat, lng){
        return latLng(lat, lng);
      },
      latLngPolyLine(arr){
        return arr;
      },

      latLngVertex(){

        this.$store.dispatch('map/FETCH_POLYLINE')
          .then((polyline)=> {
            if (polyline) for (let it of polyline) {

              let map = this.$refs.mapContainerId.mapObject

              let vertex = L.layerGroup().addTo(map)
              // map.eachLayer(function(layer) {
              //   // console.log('---error');
              //   // console.log( layer );
              //   // console.log('---error');
              //
              // })
              vertexPolyline(it['graph_edge_describe'].coordinates, {
                'color': "#a790d5",
                'weight': 10,
                'rx': 10.5,
                'colorSmall': "#fff",
                'stroke': "1.5",
              })
                .addTo(vertex)
            }
         })
      },
    },

    mounted () {
      this.$nextTick(()=>{
        let self = this
        this.latLngVertex()
        console.log(self.$refs) // Shows the mapRef object reference
      });


    }
  };
</script>

<style>

</style>

