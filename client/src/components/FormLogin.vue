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
                            <p>Or sign in with <a href="" @click.prevent=""><i class="fab fa-google"></i></a></p>
                        </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
const base_url = 'http://localhost:3000'

export default {
    data() {
        return {
            email: 'john@john.com',
            password: 'john'
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
        }
    }
}
</script>

<style>

</style>