<template>
  <!-- CART DROPDOWN -->
  <vs-dropdown vs-custom-content vs-trigger-click class="cursor-pointer">
    <feather-icon icon="SettingsIcon" class="cursor-pointer ml-4 mr-6 mt-1" :badge="null" />
<!--    <vs-dropdown-menu class="cart-dropdown vx-navbar-dropdown" :class="{'dropdown-custom': null }">-->
      <vs-dropdown-menu class="vx-navbar-dropdown">
        <ul style="min-width: 9rem">

          <li
            class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
            @click="isOpen = !isOpen"
           >
            <feather-icon icon="UserIcon" svgClasses="w-4 h-4" />
            <span class="ml-2" >Admmin</span>
<!--                <ul style="min-width: 9rem" >-->
<!--                  <li-->
<!--                    class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"-->
<!--                    :class="{ isOpen }"-->
<!--                      >-->
<!--                    <feather-icon icon="UserIcon" svgClasses="w-4 h-4" />-->
<!--                    <span class="ml-2">Admmin</span>-->
<!--                  </li>-->
<!--                </ul>-->
<!--            <vs-sidebar >-->
            <vs-sidebar-group title="Store">
              <vs-sidebar-item index="2.1" icon="store"> Store </vs-sidebar-item>
              <vs-sidebar-item index="2.2" icon="nature_people"> Nature </vs-sidebar-item>
              <vs-sidebar-item index="2.3" icon="style"> Style </vs-sidebar-item>
            </vs-sidebar-group>
<!--            </vs-sidebar>-->
          </li>

          <li
            class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
            @click="$router.push('/pages/profile').catch(() => {})">
            <feather-icon icon="UserIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Settings</span>
          </li>

          <vs-divider class="m-1" />

          <li
            class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
            @click="logout">
            <feather-icon icon="LogOutIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Logout</span>
          </li>
        </ul>
      </vs-dropdown-menu>
  </vs-dropdown>
</template>

<script>
  import VuePerfectScrollbar from 'vue-perfect-scrollbar'

  export default {
    components: {
      VuePerfectScrollbar
    },
    data() {
      return {
        isOpen : false,
        settings: { // perfectscrollbar settings
          maxScrollbarLength: 60,
          wheelSpeed: .60,
        },
      }
    },
    computed: {
      // CART DROPDOWN
      cartItems() {
        return this.$store.state.eCommerce.cartItems.slice().reverse();
      },
    },
    methods: {
      removeItemFromCart(item) {
        this.$store.dispatch('eCommerce/toggleItemInCart', item)
      },
    }
  }

</script>
