<template>
  <div>
    <vs-input
        v-validate="'required|alpha_dash|min:1'"
        data-vv-validate-on="blur"
        label-placeholder="Name"
        name="displayName"
        placeholder="Name"
        v-model="displayName"
        icon-no-border
        icon="icon icon-user"
        icon-pack="feather"
        class="w-full"/>
    <span class="text-danger text-sm">{{ errors.first('name') }}</span>

    <vs-input
        data-vv-validate-on="blur"
        v-validate="'required|min:1|max:25'"
        type="password"
        name="password"
        icon-no-border
        icon="icon icon-lock"
        icon-pack="feather"
        label-placeholder="Password"
        v-model="password"
        class="w-full mt-6" />
    <span class="text-danger text-sm">{{ errors.first('password') }}</span>

    <div class="flex flex-wrap justify-between my-5">
<!--        <vs-checkbox v-model="checkbox_remember_me" class="mb-3">Remember Me</vs-checkbox>-->
    </div>
    <div class="flex flex-wrap justify-between mb-3">
<!--      <vs-button  type="border" @click="registerUser">Register</vs-button>-->
      <vs-button :disabled="!validateForm" @click="loginCookie">Login</vs-button>
<!--      <vs-button  @click="loginCookie">Login</vs-button>-->

    </div>
  </div>
</template>

<script>
import axios from "../../../axios";
import {mapActions} from "vuex";

export default {
  data() {
    return {
      displayName: '',
      email: '',
      password: '',
      checkbox_remember_me: false
    }
  },
  computed: {
    validateForm() {
      return !this.errors.any() && this.displayName !== '' && this.password !== '';
    },
  },
  methods: {
    ...mapActions( 'auth', ['getStatusAuth']),
    checkLogin() {
      // Loading
      this.$vs.loading()
      if (this.$store.state.auth.user.isLoggedIn) return

      this['getStatusAuth']().then(() => {
        // Close animation if passed as payload
        this.$vs.loading.close()
        this.$vs.notify({
          title: 'Success',
          text: 'Успешный вход',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'primary'
        })

        this.$router.push('apps/monitoring/list-view')

      }).catch(() => // Close animation if passed as payload
        this.$vs.loading.close())

      // If user is already logged in notify
      if (this.$store.state.auth.isUserLoggedIn()) {

        // Close animation if passed as payload
        this.$vs.loading.close()

        this.$vs.notify({
          title: 'Login Attempt',
          text: 'You are already logged in!',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'warning'
        })

        return false
      }
      return true
    },
    loginCookie() {

      if (!this.checkLogin()) return

      if (this.checkLogin()) {

        const payload = {
          checkbox_remember_me: this.checkbox_remember_me,
          userDetails: {
            displayName: this.displayName,
            password: this.password
          }
        }
        // let email = this.text
        // let password = this.password
        // this.$router.push(this.$route.query.redirect)

        this.$store.dispatch('auth/loginCookie', payload)
          .then(res => {
            console.log('response', res)
          })
          .catch(error => {
            console.log('error message', error)
            this.$vs.loading.close()
            this.$vs.notify({
              title: 'Error',
              text: error.message,
              iconPack: 'feather',
              icon: 'icon-alert-circle',
              color: 'danger'
            })
          })
        }
    },
    loginJWT() {

      if (!this.checkLogin()) return

      // Loading
      this.$vs.loading()

      const payload = {
        checkbox_remember_me: this.checkbox_remember_me,
        userDetails: {
          email: this.email,
          password: this.password
        }
      }

      this.$store.dispatch('auth/loginJWT', payload)
        .then(() => { this.$vs.loading.close() })
        .catch(error => {
          this.$vs.loading.close()
          this.$vs.notify({
            title: 'Error',
            text: error.message,
            iconPack: 'feather',
            icon: 'icon-alert-circle',
            color: 'danger'
          })
        })
    },
    registerUser() {
      if (!this.checkLogin()) return
      this.$router.push('/pages/register').catch(() => {})
    }
  },
  created () {
    this.checkLogin()
  },
  mounted() {
  }
}

</script>

