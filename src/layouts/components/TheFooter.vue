<!-- =========================================================================================
    File Name: TheFooter.vue
    Description: Footer component
    Component Name: TheFooter
    ----------------------------------------------------------------------------------------
     Item Name: Vuejs, HTML Template
     Author: Krylov
========================================================================================== -->
<!--super rendering-->
<!--<template functional> -->
<template >
    <footer class="the-footer flex-wrap justify-between" :class="classes">
      <span>  <a href="/" target="_blank" rel="nofollow"></a> Московская область, г. Фрязино, а/я 2205, 141195</span>
      <router-link tag="div" to="/" class="vx-logo cursor-pointer mx-auto flex items-center">
        <logo class="w-10 mr-4 fill-current text-primary" />
        <span class="vx-logo-text text-primary">Коморсан &copy; {{ new Date().getFullYear() }}</span>
      </router-link>
        <span class="md:flex hidden items-center">
          <feather-icon icon="HeartIcon" svgClasses="stroke-current text-danger w-6 h-6" class="ml-2" />
          <span> <a href="mailto:support@antraks.ru" > support@antraks.ru</a> Техническая поддержка </span>
        </span>

        <!-- buyNow component -->
<!--        <component :is="injections.components.BuyNow"></component>-->
    </footer>
</template>

<script>
// import BuyNow from '../../components/BuyNow.vue'
import Logo                 from "./Logo.vue"


export default {
    name: "the-footer",
    components: {
      Logo
    },
    props: {
        classes: {
            type: String,
        },
    },

    // inject: {
    //   components:{
    //       default: {
    //         // BuyNow,
    //         Logo
    //       }
    //   }
    // }
}
</script>
