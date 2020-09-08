<!-- =========================================================================================
    File Name: TheFooter.vue
    Description: Footer component
    Component Name: TheFooter
    ----------------------------------------------------------------------------------------
     Item Name: Vuejs, HTML Template
     Author: Krylov
========================================================================================== -->


<template functional>
    <footer class="the-footer flex-wrap justify-between" :class="classes">
<!--        <span>COPYRIGHT &copy; {{ new Date().getFullYear() }} <a href="/" target="_blank" rel="nofollow"></a> Антракс!</span>-->
      <router-link tag="div" to="/" class="vx-logo cursor-pointer mx-auto flex items-center">
        <logo class="w-10 mr-4 fill-current text-primary" />
        <span class="vx-logo-text text-primary">Коморсан</span>
      </router-link>
        <span class="md:flex hidden items-center">
            <span></span>
            <feather-icon icon="HeartIcon" svgClasses="stroke-current text-danger w-6 h-6" class="ml-2" />
        </span>

        <!-- buyNow component -->
        <component :is="injections.components.BuyNow"></component>
    </footer>
</template>

<script>
import BuyNow from '../../components/BuyNow.vue'
import Logo                 from "./Logo.vue"


export default {
    name: "the-footer",
    props: {
        logo: {
           type: String
        },
        classes: {
            type: String,
        },
    },
    components: {
      Logo
    },
    inject: {
      components:{
          default: {
            BuyNow
          }
      }
    }
}
</script>
