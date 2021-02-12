<!-- =========================================================================================
  File Name: DataMonitoringListListView.vue
  Description: Data Monitoring List - List View
  ----------------------------------------------------------------------------------------
  Item Name: Vuejs Template
  Author: Krylov
========================================================================================== -->

<template>

  <div id="data-list-list-view" class="data-list-container">
    <div class="vx-card p-6">
    <data-view-sidebar :isSidebarActive="addNewDataSidebar"   @closeSidebar="toggleDataSidebar" :data="sidebarData" />

    <vs-table @selected="mouseSelected"  ref="table" multiple v-model="selected" pagination :max-items="itemsPerPage" search :data="deviceIcons">


      <div slot="header" class="flex flex-wrap-reverse items-center flex-grow justify-between">

        <div class="flex flex-wrap-reverse items-center data-list-btn-container">

          <!-- ADD NEW -->
          <div class="btn-add-new p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-center text-lg font-medium text-base text-primary border border-solid border-primary" @click="addNewData">
              <feather-icon icon="PlusIcon" svgClasses="h-4 w-4" />
              <span class="ml-2 text-base text-primary">Добавить прибор</span>
          </div>
        </div>

        <!-- ITEMS PER PAGE -->
        <vs-dropdown vs-trigger-click class="cursor-pointer mb-4 mr-4 items-per-page-handler">
          <div class="p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium">
            <span class="mr-2">{{ currentPage * itemsPerPage - (itemsPerPage - 1) }} - {{ deviceIcons.length - currentPage * itemsPerPage > 0 ? currentPage * itemsPerPage : deviceIcons.length }} из {{ queriedItems }}</span>
            <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" />
          </div>
<!--           <vs-button class="btn-drop" type="line" color="primary" icon-pack="feather" icon="icon-chevron-down"></vs-button>-->
          <vs-dropdown-menu>

            <vs-dropdown-item @click="itemsPerPage=3">
              <span>3</span>
            </vs-dropdown-item>
            <vs-dropdown-item @click="itemsPerPage=10">
              <span>10</span>
            </vs-dropdown-item>
            <vs-dropdown-item @click="itemsPerPage=15">
              <span>15</span>
            </vs-dropdown-item>
            <vs-dropdown-item @click="itemsPerPage=20">
              <span>20</span>
            </vs-dropdown-item>
          </vs-dropdown-menu>
        </vs-dropdown>
      </div>

      <template  slot="thead">

        <vs-th></vs-th>
        <vs-th sort-key="date_time">ВРЕМЯ СОБЫТИЯ</vs-th>
        <vs-th sort-key="device_name">УСТРОЙСТВО</vs-th>
        <vs-th sort-key="coords">ЛОКАЦИЯ</vs-th>
        <vs-th sort-key="is_online">СОБЫТИЕ</vs-th>
        <vs-th></vs-th>

      </template>

        <template slot-scope="{data}">
          <tbody>
            <vs-tr
              :data="tr"
              :key="indextr"
              :indextr="indextr"
              v-for="(tr, indextr) in data"
            >
              <vs-td>
                <p class="device-time font-medium truncate">{{ tr.id }}</p>
              </vs-td>
              <vs-td>
                <p class="device-time font-medium truncate">{{ tr["date_time"] }}</p>
              </vs-td>
              <vs-td>
                <div class="flex items-center">
                    <vs-avatar :src="getImgUrl( tr.is_online )"  color="" class="flex-shrink-0 mr-2" size="30px"  />
                  <div class="flex device-column">
                    <div>
                      <p class="device-name" style="color: rgb(110,104,147); font-size: 13px; font-weight: 500">{{ tr.device_name | title }}</p>
                    </div>
                    <br>
                    <div>
                      <p class="device-name" style="color: rgb(110,104,147); font-size: 13px; font-weight: 400">{{ tr.description | title }}</p>
                    </div>
                  </div>
                </div>

              </vs-td>
              <vs-td class="td-position-below">
                <vs-chip :color="getSupportPillarColor()" style="color: rgb(110,104,147); font-size: 13px; font-weight: 500" class="device-event-status">{{ tr.pillar | title }}</vs-chip>
                <div >
                  <p style="color: rgb(110,104,147); font-size: 13px; font-weight: 500">{{ tr.coords }}</p>
                </div>
              </vs-td>
              <vs-td class="td-position-below-dev">
                <div class="flex device-column"  style="align-items: flex-start;">
                <vs-chip :color="getOrderStatusColor(tr.event_status)" class="device-event-status" >{{ tr.event_status | title }}</vs-chip>
                 <div>
                  <p class="device-coords"> {{ tr.event }}</p>
                </div>
               </div>
              </vs-td>
              <vs-td class="whitespace-no-wrap">
                <p style="font-size: 13px; font-weight: 500" @click.stop="editData(tr)">{{ "Подробности" }}</p>
                <feather-icon icon="MoreVerticalIcon" svgClasses="w-5 h-5 hover:text-primary stroke-current" @click.stop="editData(tr)" />
<!--                <feather-icon icon="TrashIcon" svgClasses="w-5 h-5 hover:text-danger stroke-current" class="ml-2" @click.stop="deleteData(tr.id)" />-->
              </vs-td>

            </vs-tr>
          </tbody>
        </template>
    </vs-table>

    <leaflet-map></leaflet-map>
    </div>
  </div>


</template>

<script>
import DataViewSidebar from '../DataMonitoringViewSidebar.vue'
import {mapActions} from "vuex";
// import LeafletMap from './../../../../views/charts-and-maps/maps/leaflet-map/LeafletMap.vue'
import Map from '@/views/charts-and-maps/maps/leaflet-map/map/Map.vue'
export default {
  components: {
    DataViewSidebar,
    // 'leafletMap' : LeafletMap,
    'leafletMap' : Map,

  },
  data() {
    return {
      pics: null,
      selected: [],
      // products: [],
      itemsPerPage: 3,
      isMounted: false,

      // Data Sidebar
      addNewDataSidebar: false,
      sidebarData: {},
    }
  },
  computed: {

    currentPage() {
      if(this.isMounted) {
        return this.$refs.table.currentx
      }
      return 0
    },
    deviceIcons() {
      return this.$store.state.dataList.deviceIcon
    },
    queriedItems() {
      return this.$refs.table ? this.$refs.table.queriedResults.length : this.deviceIcons.length
    }
  },
  methods: {
    ...mapActions('dataList', [
      'fetchDataListItems'
    ]),
    mouseSelected(ind){
      // this.$emit('mouse-selected', ind.id)
      console.log('---error');
      console.log(ind.id);
      console.log('---error');
    },
    // mouseOver: function(index){
    //    // this.$emit('mouse-over-index-tr', index)
    //  },
    // mouseLeave: function(index){
    //   // this.$emit('mouse-leave-index-tr', index)
    // },
    getImgUrl(val) {
      const generateImg = colorDevice => {
        if (colorDevice === "C") return 'ИКЗ-С'
        else if ( colorDevice === "B" ) return 'ИКЗ-В'
        else if ( colorDevice === "A" )  return 'ИКЗ-А'
        else return 'ИКЗ-А'
      }

      let colorDevice = val
      let images = require['context']('@/assets/images/devices-icon/', false, /\.svg$/)
      return images('./' + generateImg(colorDevice) + ".svg")
    },
    addNewData() {
      this.sidebarData = {}
      this.toggleDataSidebar(true)
    },
    deleteData(id) {
      this.$store.dispatch("dataList/removeItem", id).catch(err => { console.error(err) })
    },
    editData(data) {
      // this.sidebarData = JSON.parse(JSON.stringify(this.blankData))
      this.sidebarData = data
      this.toggleDataSidebar(true)
    },
    getOrderStatusColor(status) {
      if(status === 'сообщение') return "warning"
      if(status === 'авария') return "danger"
      return "primary"
    },
    getSupportPillarColor() {
      let pillar = 'rgb(230,230,242)'
      return pillar
    },
    toggleDataSidebar(val=false) {
      this.addNewDataSidebar = val
    }
  },
  created() {
    // if(!moduleDataList.isRegistered) {
    //   this.$store.registerModule('dataList', moduleDataList)
    //   moduleDataList.isRegistered = true
    // }
    // this.$store.dispatch("dataList/fetchDataListItems")


  },
  mounted() {
    this['fetchDataListItems']( /* this.$store.dispatch("dataList/fetchDataListItems")*/)

    this.isMounted = true;
  }
}
</script>

<style lang="scss" >
.device-column {
  flex-direction: column;
}
.whitespace-no-wrap span{
  display: flex;
  color: rgb(110,104,147);
  font-size: 11px;
  font-weight: 600;
}
.td-position-below-dev {

}
#data-list-list-view {
  .vs-con-tbody .vs-table--tbody{
    height: 15rem;
  }

  font-weight: 500;
  color: #000c;
  .vs-con-table {

    /*
      Below media-queries is fix for responsiveness of action buttons
      Note: If you change action buttons or layout of this page, Please remove below style
    */
    @media (max-width: 689px) {
      .vs-table--search {
        margin-left: 0;
        max-width: unset;
        width: 100%;

        .vs-table--search-input {
          width: 100%;
        }
      }
    }

    @media (max-width: 461px) {
      .items-per-page-handler {
        display: none;
      }
    }

    @media (max-width: 341px) {
      .data-list-btn-container {
        width: 100%;

        .dd-actions,
        .btn-add-new {
          width: 100%;
          margin-right: 0 !important;
        }
      }
    }
    @media screen and (max-height: 15px) {
      tr {
        height: calc(var(--vh, 4vh) * 10 - 3rem);
      }
    }
    @media (min-width: 689px) {
      tr {
        height: calc(var(--vh, 4vh) * 10 - 3rem);
      }
    }
    .device-time {
      max-width: 23rem;
    }

    .vs-table--header {
      display: flex;
      flex-wrap: wrap;
      margin-left: 1.5rem;
      margin-right: 1.5rem;
      > span {
        display: flex;
        flex-grow: 1;
      }

      .vs-table--search{
        padding-top: 0;

        .vs-table--search-input {
          padding: 0.9rem 2.5rem;
          font-size: 1rem;

          &+i {
            left: 1rem;
          }

          &:focus+i {
            left: 1rem;
          }
        }
      }
    }

    .vs-table {
      /*border-collapse: separate;*/
      border-spacing: 0 1.3rem;
      padding: 0 1rem;
      border-bottom: #5b3cc4;

      tr{
          box-shadow: 0 4px 20px 0 rgba(0,0,0,.05);
          border-bottom: 2px solid #eceaf5;
          td{
            padding: 20px;
            &:first-child{
              border-top-left-radius: .5rem;
              border-bottom-left-radius: .5rem;
            }
            &:last-child{
              border-top-right-radius: .5rem;
              border-bottom-right-radius: .5rem;
            }
          }
          td.td-check{
            display: none;
            padding: 20px !important;
          }
          td.td-position-below {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          }
      }
      &:hover {
        border-bottom: 1px solid #eceaf5;
      }
    }


    .vs-table--thead{
      background: rgba(var(--vs-primary), .85);
      th {
        padding-top: 0;
        padding-bottom: 0;

        .vs-table-text{
          color: #2e3a59;
          text-transform: uppercase;
          font-weight: 600;
        }
      }
      th.td-check{
        display: none;
        padding: 0 15px !important;
      }
      tr{
        background: none;
        box-shadow: none;
      }
    }

    .vs-table--pagination {
      justify-content: center;
    }
  }
  --custom-noСonnection:252,185,54;  /* yellow */
  --custom-crash:215,26,26;         /* red */

  .device-event-status {
    &.vs-chip-warning { /*custom-no-connection-warning */
      background: rgba(var(--custom-noСonnection),.35);
      color: rgba(var(--custom-noСonnection), 1) !important;
      font-weight: 500;
    }

   &.vs-chip-danger {  /*custom-crash-danger*/
      background: rgba(var(--vs-danger), .15);
      color: rgba(var(--vs-danger), 1) !important;
      font-weight: 500;
    }
  }
}
</style>
