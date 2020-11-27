<!-- =========================================================================================
  File Name: Clockr.vue
  Description: Clock component
  Component Name: Clock
  ----------------------------------------------------------------------------------------
  Item Name: Vuejs, HTML Template
  Author: Krylov
========================================================================================== -->


<template>
  <div id="clock">
    <p class="time">{{date | clock('datetime')}}</p>
  </div>
</template>


<script>


  import {clearInterval, setInterval} from "timers";

  export default {
    name: "clock",
    data: () => ({
      date: new Date(),
      interval: null,
      dropdown: null,
    }),
    mounted() {
      this.interval = setInterval(() => {
        this.date = new Date()
      }, 1000)
    },
    beforeDestroy() {
      clearInterval(this.interval)
    }
  }
</script>

<!--<style lang="scss" scoped>-->
<!--  p {-->
<!--    margin: 0;-->
<!--    padding: 0;-->
<!--  }-->
<!--  #clock {-->
<!--    font-family: 'Avenir', Helvetica, Arial, sans-serif;-->
<!--    font-weight: 600 !important;-->
<!--    color: #2c3e50;-->
<!--    text-align: center;-->
<!--    position: absolute;-->
<!--    left: 50%;-->
<!--    top: 50%;-->
<!--    transform: translate(-50%, -50%);-->
<!--    text-shadow: 0 0 20px rgba(10, 175, 230, 1),  0 0 20px rgba(10, 175, 230, 0);-->
<!--    .time {-->
<!--      letter-spacing: 0.05em;-->
<!--      font-size: 10px;-->
<!--      padding: 5px 0;-->
<!--    }-->
<!--    .date {-->
<!--      letter-spacing: 0.1em;-->
<!--      font-size: 14px;-->
<!--    }-->
<!--  }-->
<!--  </style>-->
