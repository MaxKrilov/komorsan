<template>
    <div id="parent-settings">
      <vs-button @click="active=!active" color="primary" type="filled">Open Sidebar</vs-button>
    <vs-sidebar position-right parent="body" default-index="1"  color="primary" class="sidebarx" spacer v-model="active">

      <div class="header-sidebar" slot="header">
        <vs-avatar  size="70px" src=""/>
        <h4>
          Dispatcher
          <vs-button color="primary" icon="more_horiz" type="flat"></vs-button>
        </h4>

      </div>
      <vs-sidebar-group title="DATABASE">
        <vs-sidebar-item index="1" icon="question_answer"> BD_12345 </vs-sidebar-item>

        <vs-sidebar-group title="Store">
          <vs-sidebar-item index="2.1" icon="store"> BD_12345 </vs-sidebar-item>
          <vs-sidebar-item index="2.2" icon="nature_people"> BD_12345 </vs-sidebar-item>
          <vs-sidebar-item index="2.3" icon="style"> BD_12345 </vs-sidebar-item>
        </vs-sidebar-group>

        <vs-sidebar-item index="2" icon="gavel"> BD_12345 </vs-sidebar-item>
        <vs-sidebar-item index="3" icon="https"> BD_12345 </vs-sidebar-item>
        <vs-sidebar-item index="4" icon="help"> BD_12345 </vs-sidebar-item>
      </vs-sidebar-group>


      <vs-divider icon="person" position="left"> BD_12345 </vs-divider>

      <vs-sidebar-item index="5" icon="verified_user"> Configurations </vs-sidebar-item>
      <vs-sidebar-item index="6" icon="account_box"> Profile </vs-sidebar-item>

      <div class="footer-sidebar" slot="footer">
        <vs-button icon="reply" color="danger" type="flat">log out</vs-button>
        <vs-button icon="settings" color="primary" type="border"></vs-button>
      </div>

    </vs-sidebar>
    </div>

<!--      </template>-->

      <!-- IF DB IS EMPTY -->
      <!--      <template v-else>-->
      <!--        <p class="p-4"> List DB Is Empty.</p>-->
      <!--      </template>-->
<!--    </vs-dropdown-menu>-->
<!--  </vs-dropdown>-->
</template>




<script>
  import VuePerfectScrollbar from 'vue-perfect-scrollbar'
  import vSelect from 'vue-select'
  import {mapGetters, mapActions} from 'vuex'

  export default {
    components: {
      VuePerfectScrollbar,
      'v-select': vSelect,
    },
    data() {
      return {
        active:false,
        settings: { // perfectscrollbar settings
          maxScrollbarLength: 60,
          wheelSpeed: .60,
        },
      }
    },
    computed: {

      ...mapGetters( 'cartSettingsHeader', ['allDataBasesGetters']),
      // LIST DB
      // allDataBases() {
      //   return this.$store.getters.allDataBasesGetters;
      // },
    },
    methods: mapActions( 'cartSettingsHeader', ['GET_DATA_BASE_ALL_INSTANCE']),
    mounted (){
      this.GET_DATA_BASE_ALL_INSTANCE()
      // this.$store.dispatch('GET_DATA_BASE_ALL_INSTANCE')
    }
  }

</script>

<style lang="scss" scoped>
  .header-sidebar {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    h4 {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      > button {
        margin-left: 10px;
      }
    }
  }

  .footer-sidebar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    > button {
      border: 0px solid rgba(0, 0, 0, 0) !important;
      border-left: 1px solid rgba(0, 0, 0, 0.07) !important;
      border-radius: 0px !important;
    }
  }
</style>
