<template>
  <div class="flex items-center">
    <vs-avatar :src="getImgUrl" :color="chipColor" class="flex-shrink-0 mr-2" size="30px" @click="$router.push(url)" />
    <router-link :to="url" @click.stop.prevent class="text-inherit hover:text-primary">{{ params.value }}</router-link>
  </div>
</template>

<script>
    export default {
        name: 'CellRendererLink',
        data() {
          return {
            pics: null,
          }
        },
        computed: {
          chipColor() {
            // return (value) => {
            const generateImg_ = value => {
              if (value > 0 && value <= 2) return 'IKZ_green'
              else if (value === 0) return 'IKZ_red'
              else if (value >= 3 && value <= 10) return 'IKZ_orange'
              else 'IKZ_silver'
            }
            // }


            let images = require['context']('@/assets/images/devices/', false, /\.svg$/)
            return images('./' + generateImg_(this.params.data['is_online']) + ".svg")

          },
          url() {
            return "/apps/user/user-view/268"
            // Below line will be for actual product
            // return "/apps/user/user-view/" + this.params.data.id
          },
          getImgUrl() {
            const generateImg = colorDevice => {
              if (colorDevice > 0 && colorDevice <= 2) {
                return 'IKZ_green'
              } else if ( colorDevice >= 3 && colorDevice <= 10) {
                return 'IKZ_orange'
              } else if ( colorDevice === 0 ) {
                return 'IKZ_red'
              } else {
                return 'IKZ_silver'
              }
            }
            if ( this.params.data['missed_connections']['Valid'] === true ) {
              let colorDevice = this.params.data['is_online']
              let images = require['context']('@/assets/images/devices/', false, /\.svg$/)
              return images('./' + generateImg(colorDevice) + ".svg")
            }
          }
        }
    }
</script>
