const router = require('express').Router()
const UserController = require('../controllers/user')
const { authentication } = require('../middlewares')


router.post('/sign-in', UserController.signIn)
router.post('/google-sign-in', UserController.googleSignIn)
router.post('/get-recipe', authentication, UserController.getRecipe)

module.exports = router