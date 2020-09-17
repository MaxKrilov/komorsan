<template>
  <!-- CART DROPDOWN -->
<!--  <vs-dropdown  vs-custom-content vs-trigger-click class="cursor-pointer">-->
<!--    <feather-icon  icon="SettingsIcon" class="cursor-pointer ml-4 mr-6 mt-1" :badge="null" />-->
<!--&lt;!&ndash;    <vs-dropdown-menu class="cart-dropdown vx-navbar-dropdown" :class="{'dropdown-custom': null }">&ndash;&gt;-->
<!--      <vs-dropdown-menu class="vx-navbar-dropdown">-->
      <!-- IF CART HAVE ITEMS: HEADER -->
      <!--          <template v-if="cartItems.length">-->
      <!--              <div class="notification-header text-center p-5 bg-primary text-white">-->
      <!--                  <h3 class="text-white">{{ cartItems.length }} Item<span v-show="cartItems.length > 1">s</span></h3>-->
      <!--                  <p class="opacity-75">In Your Cart</p>-->
      <!--              </div>-->
<!--      <template v-if="2">-->
<!--        <div class="notification-header text-center p-5 bg-primary text-white">-->
<!--          <h3 class="text-white">{{ "cartItems.length" }} <span v-show="2 > 1">s</span></h3>-->
<!--          <p class="opacity-75">In Your Cart</p>-->
<!--        </div>-->
        <!--           CART ITEMS -->
<!--        <VuePerfectScrollbar ref="mainSidebarPs" class="scroll-area&#45;&#45;cart-items-dropdowm p-0 mb-10" :settings="settings" :key="$vs.rtl">-->


<!--            <ul style="min-width: 9rem">-->

<!--              <li-->
<!--                class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"-->
<!--                @click="active=!active"-->
<!--              >-->

<!--                <feather-icon icon="UserIcon" svgClasses="w-4 h-4" />-->
<!--                <span class="ml-2" >DATABASE</span>-->

<!--          <ul class="bordered-items">-->
<!--            <li-->
<!--              :key="55"-->
<!--              class="vx-row no-gutter cart-item cursor-pointer"-->
<!--              @click="active=!active"> DATABASE-->

              <!-- IMG COL -->
              <!--                                <div class="vx-col w-1/5 item-img-container bg-white flex items-center justify-center">-->

              <!--                                </div>-->

              <!-- INFO COL -->

<!--                            <div class="vx-col w-4/5 pr-4 pl-2 py-4 flex flex-col justify-center">-->
<!--                              <v-select :options="['foo','bar']" :dir="$vs.rtl ? 'rtl' : 'ltr'" />-->
<!--                              <span class="font-medium block cart-item-title truncate">{{ 'item.name' }}</span>-->
<!--                              <small class="truncate mb-2">{{' item.description' }}</small>-->
<!--                              <div class="flex items-center justify-between">-->
<!--                                <span class="text-sm font-medium">{{ 'item.quantity' }} <small>x</small> ${{ 'item.price' }}</span>-->
<!--                                <feather-icon icon="XIcon" svgClasses="h-4 w-4 cursor-pointer text-danger" class="hover:text-danger"  />-->
<!--                              </div>-->
<!--                            </div>-->
<!--            </li>-->
<!--          </ul>-->
<!--        </VuePerfectScrollbar>-->
        <!--        <div-->
        <!--          class=" checkout-footer fixed bottom-0 rounded-b-lg text-primary font-semibold w-full p-2 text-center border border-b-0 border-l-0 border-r-0 border-solid d-theme-border-grey-light cursor-pointer"-->
        <!--          @click="$router.push('/apps/eCommerce/checkout').catch(() => {})">-->

        <!--                          <span class="flex items-center justify-center">-->
        <!--                            <feather-icon icon="ShoppingCartIcon" svgClasses="h-4 w-4" />-->
        <!--                            <span class="ml-2">Checkout</span>-->
        <!--                          </span>-->

        <!--        </div>-->

        <!-- CART ITEMS -->
        <!--              <VuePerfectScrollbar ref="mainSidebarPs" class="scroll-area&#45;&#45;cart-items-dropdowm p-0 mb-10" :settings="settings" :key="$vs.rtl">-->
        <!--              <ul class="bordered-items">-->
        <!--                  <li-->
        <!--                    v-for="item in cartItems"-->
        <!--                    :key="item.objectID"-->
        <!--                    class="vx-row no-gutter cart-item cursor-pointer"-->
        <!--                    @click="$router.push({name: 'ecommerce-item-detail-view', params: {item_id: item.objectID }}).catch(() => {})">-->

        <!--                      &lt;!&ndash; IMG COL &ndash;&gt;-->
        <!--                      <div class="vx-col w-1/5 item-img-container bg-white flex items-center justify-center">-->
        <!--                          <img :src="item.image" alt="item" class="cart-dropdown-item-img p-4">-->
        <!--                      </div>-->

        <!--                      &lt;!&ndash; INFO COL &ndash;&gt;-->
        <!--                      <div class="vx-col w-4/5 pr-4 pl-2 py-4 flex flex-col justify-center">-->
        <!--                          <span class="font-medium block cart-item-title truncate">{{ item.name }}</span>-->
        <!--                          <small class="truncate mb-2">{{ item.description }}</small>-->
        <!--                          <div class="flex items-center justify-between">-->
        <!--                              <span class="text-sm font-medium">{{ item.quantity }} <small>x</small> ${{ item.price }}</span>-->
        <!--                              <feather-icon icon="XIcon" svgClasses="h-4 w-4 cursor-pointer text-danger" class="hover:text-danger" @click.stop="removeItemFromCart(item)" />-->
        <!--                          </div>-->
        <!--                      </div>-->
        <!--                  </li>-->
        <!--              </ul>-->
        <!--              </VuePerfectScrollbar>-->
        <!--              <div-->
        <!--                class=" checkout-footer fixed bottom-0 rounded-b-lg text-primary font-semibold w-full p-2 text-center border border-b-0 border-l-0 border-r-0 border-solid d-theme-border-grey-light cursor-pointer"-->
        <!--                @click="$router.push('/apps/eCommerce/checkout').catch(() => {})">-->

        <!--                <span class="flex items-center justify-center">-->
        <!--                  <feather-icon icon="ShoppingCartIcon" svgClasses="h-4 w-4" />-->
        <!--                  <span class="ml-2">Checkout</span>-->
        <!--                </span>-->

        <!--              </div>-->


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

      <!-- IF CART IS EMPTY -->
      <!--      <template v-else>-->
      <!--        <p class="p-4">Your Cart Is Empty.</p>-->
      <!--      </template>-->
<!--    </vs-dropdown-menu>-->
<!--  </vs-dropdown>-->
</template>




<script>
  import VuePerfectScrollbar from 'vue-perfect-scrollbar'
  import vSelect from 'vue-select'
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
      // CART DROPDOWN
      cartItems() {
        // return this.$store.state.eCommerce.cartItems.slice().reverse();
      },
    },
    methods: {
      removeItemFromCart(item) {
        // this.$store.dispatch('eCommerce/toggleItemInCart', item)
      },
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
