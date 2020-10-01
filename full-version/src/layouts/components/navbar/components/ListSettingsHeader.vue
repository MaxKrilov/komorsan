<template>
    <div id="parent-settings">
    <div @click="active=!active"  type="filled">
      <feather-icon icon="SettingsIcon" class="cursor-pointer ml-4 mr-6 mt-1"  />
    </div>
    <vs-sidebar position-right parent="body" default-index="1"  color="primary" class="sidebarx" spacer v-model="active">

      <div class="header-sidebar mt-20" slot="header">
        <vs-avatar  size="10px" src=""/>
        <h4>
          Dispatcher
          <vs-button color="primary" icon="more_horiz" type="flat"></vs-button>
        </h4>

      </div>
      <vs-sidebar-group :title="`DATABASE: ${ dataBaseCurrentOfName.db ? dataBaseCurrentOfName.db : statusAuthorization.database}`">

          <li
            v-for="(item, index) in allDataBasesGetters"
            :key="item.id"
            @click.capture="isActive = index"
            :class="{ active_visible: index === isActive }"
          >

            <vs-sidebar-item
               ref="dataBaseCurrentColor"
              :db_name="item.db_name"
              :host="item.host"
              :port="item.port"
              icon="storage"
              :style="setCurrentlySelected(item.id)"
              :class="{
              'color-custom-blue': +item.id === +statusAuthorization.database,
              'color-custom-black': +item.id !== +statusAuthorization.database
              }"
               @click="getCurrentlySelectedBase(item.id)"
            >
              <VuePerfectScrollbar >{{ `${item.id} ${item.db_name} ${item.host} : ${item.port}` }}</VuePerfectScrollbar>
            </vs-sidebar-item>

          </li>

      </vs-sidebar-group>

      <vs-divider icon="person" position="left">  </vs-divider>

      <vs-sidebar-item index="5" icon="verified_user"> Configurations </vs-sidebar-item>
      <vs-sidebar-item index="6" icon="account_box"> Profile </vs-sidebar-item>

      <div class="footer-sidebar" slot="footer">
        <vs-button icon="reply" color="danger" type="flat">log out</vs-button>
        <vs-button icon="settings" color="primary" type="border"></vs-button>
      </div>

    </vs-sidebar>
    </div>
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
        active: null,
        isActive : false,
        settings: { // perfectscrollbar settings
          maxScrollbarLength: 60,
          wheelSpeed: .60,
        },
      }
    },
    computed: {
      // checking the selected BD
      ...mapGetters( 'cartSettingsHeader', ['allDataBasesGetters', 'statusAuthorization', 'dataBaseCurrentOfName']),
            // LIST DB
      // allDataBases() {
      //   return this.$store.getters.allDataBasesGetters;
      // },
    },
    methods: {
       ...mapActions( 'cartSettingsHeader', ['GET_DATA_BASE_ALL_INSTANCE', 'GET_STATUS_AUTH', 'SET_CURRENT_USER_DATABASE'],
    ),
     async getCurrentlySelectedBase (itemBaseCurrent) {  // get the currently selected base
        	await this.SET_CURRENT_USER_DATABASE(itemBaseCurrent)
      },
      setCurrentlySelected(id) {
        // let vm = this;
        // vm.$refs.dataBaseCurrentColor[index].$el.style.color = 'red'
        return {
            'color': id === this.statusAuthorization.database ? 'red' : 'black'
        }
      },
  },
    async mounted (){
      await this.GET_DATA_BASE_ALL_INSTANCE()
      await this.GET_STATUS_AUTH()
      // this.$store.dispatch('GET_DATA_BASE_ALL_INSTANCE')
    }
  }

</script>
<style lang="scss" src='../../../../assets/scss/vuexy/_mainCustomClasses.scss'></style>
<style lang="scss" scoped>

  .active_visible {
    color: white;
    background: #6cc89c82;
  }
  .vs-sidebar-item-active {
    font-weight: 400;
  }

  .color-custom-blue a :active, .color-custom-blue a:visited, {
    color: blue  !important;
  }
  .color-custom-black a:visited, .color-custom-black a:visited, {
    color: #6cc89c  !important;
  }
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
