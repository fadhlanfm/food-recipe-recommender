<template>
  <div class="container">
      <FormLogin 
        v-if="currentPage === 'FormLogin'"
        @changePage="changePage"
        @login="login"
      ></FormLogin>

      <Dashboard
        v-if="currentPage === 'Dashboard'"
        @changePage="changePage"
        @logout="logout"
      ></Dashboard>
  </div>
</template>

<script>
import FormLogin from './components/FormLogin.vue'
import Dashboard from './components/Dashboard.vue'

export default {
    name: 'App',
    components: { FormLogin, Dashboard },
    data() {
        return {
            currentPage: 'FormLogin'
        }
    },
    methods: {
        changePage (currentPage) {
            this.currentPage = currentPage
        },
        login (data) {
            console.log(data)
            localStorage.setItem('token', data.access_token)
            this.currentPage = 'Dashboard'
        },
        logout (currentPage) {
            this.currentPage = currentPage
            localStorage.removeItem('token')
        }
    },
    created() {
        if (localStorage.getItem('token')) {
            this.currentPage = 'Dashboard'
        }
    }
}
</script>

<style>

</style>