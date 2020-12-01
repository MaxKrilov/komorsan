<template>
  <!-- NOTIFICATIONS -->
  <vs-dropdown vs-custom-content vs-trigger-click class="cursor-pointer">
    <feather-icon icon="BellIcon" class="cursor-pointer mt-1 sm:mr-6 mr-2" :badge="displayAllUnacknowledgedGetters.length" />

    <vs-dropdown-menu class="notification-dropdown dropdown-custom vx-navbar-dropdown">

      <div class="notification-top text-center p-5 bg-primary text-white">
        <h3 class="text-white">{{ displayAllUnacknowledgedGetters.length}} Events</h3>
        <p class="opacity-75">Notifications</p>
      </div>
      <!-- IF EVENTS HAVE ITEMS: HEADER -->
      <template v-if="displayAllUnacknowledgedGetters.length  > 0 " >
      <VuePerfectScrollbar ref="mainSidebarPs" class="scroll-area--nofications-dropdown p-0 mb-10" :settings="settings" :key="$vs.rtl">
        <ul class="bordered-items">
          <li v-for="ntf in displayAllUnacknowledgedGetters" :key="ntf.event_group_id" class="flex justify-between px-4 py-4 notification cursor-pointer">
            <div class="flex items-start">
              <feather-icon  v-if="ntf.client_read === 0"  :key="unreadNotifications[1].index" :icon="unreadNotifications[1].icon" :svgClasses="[`text-success`, 'stroke-current mr-1 h-6 w-6']"></feather-icon>
              <feather-icon  v-else  :key="unreadNotifications[1].index" :icon="unreadNotifications[1].icon" :svgClasses="[`text-danger`, 'stroke-current mr-1 h-6 w-6']"></feather-icon>
              <div class="mx-2">
                <span class="font-medium block notification-title" :class="[`text-${ntf.description.event_type}`]">{{ localizeEventTypeAll( ntf.description['event_type'] )  }}</span>
                <small>{{ ntf.description.event_type  }}</small>
              </div>
            </div>
            <small class="mt-1 whitespace-no-wrap">{{ localizeEventTypeAll( '' , ntf.first_event_time.String ) }}</small>
          </li>
        </ul>
      </VuePerfectScrollbar>

      <div class="
        checkout-footer
        fixed
        bottom-0
        rounded-b-lg
        text-primary
        w-full
        p-2
        font-semibold
        text-center
        border
        border-b-0
        border-l-0
        border-r-0
        border-solid
        d-theme-border-grey-light
        cursor-pointer">
        <span>Go to Event Notifications</span>
      </div>
      </template>

      <!-- No emergency events -- IF CART IS EMPTY -->
      <template v-else>
        <p class="p-4">No emergency events</p>
      </template>
    </vs-dropdown-menu>
  </vs-dropdown>
</template>

<script>

import localizeEndType from './../../../../locales/localizeEventType.js'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import {mapGetters, mapActions} from 'vuex'
 import HNavMenuGroup from "../../horizontal-nav-menu/HorizontalNavMenuGroup";
 import HNavMenuItem from "../../horizontal-nav-menu/HorizontalNavMenuItem";
import firebase from "firebase";
export default {
  components: {
    VuePerfectScrollbar
  },
  data() {
    return {
      unreadNotifications: [
          { index    : 1,
            title    : 'Instrument alarm!',
            msg      : 'Successful Alarm acknowledged ',
            icon     : 'AlertTriangleIcon',
            time     : this.randomDate({min: 1}),
            category : 'success'
          },
          { index    : 2,
            title    : 'Instrument alarm!',
            msg      : 'Crash! Chef it\'s all gone',
            icon     : 'AlertOctagonIcon',
            time     : this.randomDate({min: 1}),
            category : 'danger'
          }
      ],
      settings: {
        maxScrollbarLength: 60,
        wheelSpeed: .60,
      },
    }
  },

  computed: {
    // proof -- all displayed unacknowledged
    ...mapGetters( 'cartAlarmNotificationsHeader', ['displayAllUnacknowledgedGetters']),

    // displayAllUnacknowledgedGetters() {
    //   return this.$store.getters.displayAllUnacknowledgedGetters;
    // },
  },
  methods: { // checking -- all displayed unacknowledged
    ...mapActions( 'cartAlarmNotificationsHeader', ['GET_ALL_DISPLAY_UNACKNOWLEDGED_EVENTS']),
    ...mapActions( 'auth', ['logoutGet', 'getStatusAuth']  ),
    async currentlyDisplayAllUnacknowledged () {

    },
    checkLogin() {
      this['getStatusAuth']().then(() => {
      }).catch(() =>{})
      return true
    },
    async logout() {

      // if user is logged in via sessionCookie
      if (this['logoutGet']()){
        await this['logoutGet']()

      }

      // logout -> redirect
      this.$router.push('/pages/login').catch(() => {})
    },
    localizeEventTypeAll(val, time){
      if (val) return localizeEndType.localizeEventType(val)
      else if (time) return localizeEndType.changeLanguageTimeOption2(time).replace('<br>', ' ')
      else return  'empty -- no time and events'

    },
    elapsedTime(startTime) {
      let x        = new Date(startTime)
      let now      = new Date()
      var timeDiff = now - x
      timeDiff    /= 1000

      var seconds = Math.round(timeDiff)
      timeDiff    = Math.floor(timeDiff / 60)

      var minutes = Math.round(timeDiff % 60)
      timeDiff    = Math.floor(timeDiff / 60)

      var hours   = Math.round(timeDiff % 24)
      timeDiff    = Math.floor(timeDiff / 24)

      var days    = Math.round(timeDiff % 365)
      timeDiff    = Math.floor(timeDiff / 365)

      var years   = timeDiff

      if (years > 0) {
        return years + (years > 1 ? ' Years ' : ' Year ') + 'ago'
      } else if (days > 0) {
        return days + (days > 1 ? ' Days ' : ' Day ') + 'ago'
      } else if (hours > 0) {
        return hours + (hours > 1 ? ' Hrs ' : ' Hour ') + 'ago'
      } else if (minutes > 0) {
        return minutes + (minutes > 1 ? ' Mins ' : ' Min ') + 'ago'
      } else if (seconds > 0) {
        return seconds + (seconds > 1 ? ' sec ago' : 'just now')
      }

      return 'Just Now'
    },
    // Method for creating dummy notification time
    randomDate({ hr, min, sec }) {
      let date = new Date()

      if (hr) date.setHours(date.getHours() - hr)
      if (min) date.setMinutes(date.getMinutes() - min)
      if (sec) date.setSeconds(date.getSeconds() - sec)

      return date
    }
  },
  created () {
    if(!this.checkLogin()){
      this.logout()
    }
  },
  async mounted (){
    await this.GET_ALL_DISPLAY_UNACKNOWLEDGED_EVENTS()
  }
}

</script>

