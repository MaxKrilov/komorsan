<template>
  <div>
    <vs-input
        v-validate="'required|email|min:3'"
        data-vv-validate-on="blur"
        name="email"
        icon-no-border
        icon="icon icon-user"
        icon-pack="feather"
        label-placeholder="Email"
        v-model="email"
        class="w-full"/>
    <span class="text-danger text-sm">{{ errors.first('email') }}</span>

    <vs-input
        data-vv-validate-on="blur"
        v-validate="'required|min:6|max:10'"
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
        <vs-checkbox v-model="checkbox_remember_me" class="mb-3">Remember Me</vs-checkbox>
        <router-link to="/pages/forgot-password">Forgot Password?</router-link>
    </div>
    <div class="flex flex-wrap justify-between mb-3">
      <vs-button  type="border" @click="registerUser">Register</vs-button>
<!--      <vs-button :disabled="!validateForm" @click="loginJWT">Login</vs-button>-->
      <vs-button  @click="loginCookie">Login</vs-button>

    </div>
  </div>
</template>

<script>
import axios from "../../../axios";

export default {
  data() {
    return {
      email: 'admin@antraks.com',
      password: 'antraks',
      checkbox_remember_me: false
    }
  },
  computed: {
    validateForm() {
      // return !this.errors.any() && this.email != '' && this.password != '';
    },
  },
  methods: {
    checkLoggin() {
      const path = 'http://localhost:8081/api/v1/auth_status';
      axios({
        method: 'GET',
        url: path,
      });
    },
    postLoggin() {
      const path = 'http://10.10.20.12:8081/api/v1/login';
      axios({
        method: 'post',
        url: path,
        data: {
          username: 'q',
          password: 'q',
        },
      });
    },
    checkLogin() {
      // If user is already logged in notify
      if (this.$store.state.auth.isUserLoggedIn()) {

        // Close animation if passed as payload
        // this.$vs.loading.close()

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
      // if (!this.checkLogin()) return

      // Loading
      // this.$vs.loading()
      const payload = {
        checkbox_remember_me: this.checkbox_remember_me,
        userDetails: {
          email: this.email,
          password: this.password
        }
      }
      // let email = this.text
      // let password = this.password
      this.$store.dispatch('auth/loginCookie', payload)
        .then(res => {
          console.log('----0');
          console.log(res);
          console.log('---- 0');
        })
        .catch(err => {
            console.log('----1');
            console.log(err);
            console.log('---- 1');
        })
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
  }
}

</script>

