<template>
  <div>
        <div class="text-center m-5 title-form">
            <h1>Welcome to the Food Recipe Recommendation App</h1>
        </div>

        <div class="container">
            <div class="row justify-content-center">
                <div class="card p-5">
                    <h5 class="card-title text-center">Sign In</h5>
                    <form class="mb-3" @submit.prevent="login">
                        <div class="form-group">
                            <label>Email</label>
                            <input type="email" class="form-control" v-model="email" >
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input type="password" class="form-control" v-model="password" >
                        </div>
                        <button type="submit" class="btn btn-primary">Sign In</button>
                        </form>
                        <div class="card-footer">
                            <a href="" @click.prevent="onSuccess">Sign In with <i class="fab fa-google"></i></a>
                        </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import GAuth from 'vue-google-oauth2'
const base_url = 'http://localhost:3000'

export default {
    data() {
        return {
            email: 'john@john.com',
            password: 'john',
            clientId: '849567194922-qreemp9urcp6u0i2bcc9a3dcv7n044gs.apps.googleusercontent.com'
        }
    },
    methods: {
        login () {
            axios({
                method: 'POST',
                url: base_url + '/sign-in',
                data: {
                    email: this.email,
                    password: this.password
                }
            })
            .then(({ data }) => {
                this.email = ''
                this.password = ''
                this.$emit('login', data)
            }).catch(err => {
                console.log(err)
            })
        },
        onSuccess() {
            // console.log('sampe')
            this.$gAuth.signIn()
            .then(googleUser => {
                let token = googleUser.getAuthResponse().id_token
                this.onSignIn(token)
            }).catch(err => {
                console.log(err)
            })
        },
        onSignIn(token) {
            console.log('sampe')
            let obj = { token }
            axios({
                method: 'POST',
                url: base_url + '/google-sign-in',
                data: obj
            })
            .then(({ data }) => {
                this.$emit('login', data)
            }).catch(err => {
                console.log(err)
            })
        },
    }
}
</script>

<style>
.g-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: #3c82f7;
  color: #fff;
  box-shadow: 0 3px 0 #0f69ff;
}
</style>