<template>
  <div class="container">
        <button @click.prevent="logout">Sign Out</button>
        <h2>This app will recommend you a food recipe based on your ingredients list</h2>
        <form @submit.prevent="submitIngredient">
            <label for="1">Insert ingredient:</label>
            <input type="text" id="1" placeholder="e.g.: cheese" v-model="newIngredient">
            <input type="submit" value="Add">
        </form>
        <small>It can be what you have in your kitchen or refrigerator, your favorite ingredients, your grocery wishlist, or any ingredients preferences.</small>
        
        <div class="ingredients-container" v-if="ingredients.length > 0">
            <h2>Ingredients list: <small>(Total: {{ ingredients.length }})</small></h2>
            <ul>
                <li v-for="(ingredient, i) in ingredients" :key="i">{{ ingredient }} <a href="" @click.prevent="removeIngredient(i)"><small><i class="fas fa-times"></i></small></a></li>
            </ul>
            <small>Click "recommendation!" button after you finished with your ingredients list</small><br>
            <button @click.prevent="getRecommendation">Recommendation!</button>
        </div>

        <div class="result" v-if="recipe.label">
            <p><br>We recommend you:</p>
            <h2>{{ recipe.label }}</h2>
            <img :src="recipe.image" alt=""><br>
            Recipe:
            <ul>
                <li v-for="(line, index) in recipe.ingredientLines" :key="index">{{ line }}</li>
            </ul>
            <p v-if="recipe.dietLabels.length > 0">Diet info: {{ recipe.dietLabels.join(', ') }}</p>
            <p v-if="recipe.healthLabels.length > 0">Health info: {{ recipe.healthLabels.join(', ') }}</p>
            How to cook <a :href="recipe.url"><b>{{ recipe.label }}</b></a>? Click <a :href="recipe.url">here</a>
        </div>
  </div>
</template>

<script>
import axios from 'axios'
const base_url = 'http://localhost:3000'

export default {
    data() {
        return {
            newIngredient: '',
            ingredients: ['cheese','rice'],
            recipe: {},
            image: ''
        }
    },
    methods: {
        submitIngredient () {
            this.$emit('addIngredient', this.newIngredient)
            this.ingredients.push(this.newIngredient)
            this.newIngredient = ''
        },
        getRecommendation () {
            let arr = []
            for(let i = 0; i < this.ingredients.length; i++) {
                arr.push(this.ingredients[i])
            }
            let list = arr.toString()
            axios({
                method: 'POST',
                url: base_url + '/get-recipe',
                data: {
                    ingredients: list
                },
                headers: {
                    access_token: localStorage.getItem('token')
                }
            })
            .then(({ data }) => {
                this.recipe = data.recipe
                this.image = this.recipe.image
            }).catch(err => {
                console.log(err)
            })
        },
        removeIngredient (index) {
            this.ingredients.splice(index, 1)
        },
        logout () {
            this.$emit('logout', 'FormLogin')
        }
    }
}
</script>

<style>
    .ingredients-container{
        background-color: lightgray;
        color: darkgreen;
    }
</style>