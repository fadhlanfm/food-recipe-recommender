const { User } = require('../models')
const { generateToken } = require('../helpers/token')
const unirest = require('unirest')
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);


class UserController {
    static signIn (req, res, next) {
        const { email, password } = req.body

        User.findOne({
            where: { email }
        })
        .then(data => {
            if(data) {
                if(password === data.password){
                    const access_token = generateToken(data)
                    res.status(200).json({ access_token })
                } else {
                    throw { messages: ['Invalid email/password'], statusCode: 400 }
                }
            } else {
                throw { messages: ['Invalid email/password'], statusCode: 400 }
            }
        })
        .catch(next)
    }

    static googleSignIn (req, res, next) {
        let token = req.body.token;
        let payload = null;
        client.verifyIdToken({
            idToken: token,
            audience: process.env.CLIENT_ID
        })
        .then(ticket => {
            payload = ticket.getPayload();
            return User.findOne({ where: { email: payload.email } })
        }).then(data => {
            if (!data) {
                 return User.create({
                    email: payload.email,
                    password: process.env.DEFAULT_GOOGLE_PASSWORD
                })
            } else {
                return data;
            }
        }).then(data => {
            let newPayload = { id: data.id };
            let access_token = generateToken(newPayload);
            res.status(200).json({ access_token });
        }).catch(err => {
            next(err);
        });
    }

    static getRecipe (req, res, next) {
        const { ingredients } = req.body
        
        if (!ingredients) {
            throw { messages: ['Please fill at least one ingredient'], statusCode: 400 }
        } else {
            var req = unirest("GET", "https://edamam-recipe-search.p.rapidapi.com/search");

            req.query({
                "q": ingredients,
                "to": 1
            });
    
            req.headers({
                "x-rapidapi-host": "edamam-recipe-search.p.rapidapi.com",
                "x-rapidapi-key": "3b5bbd0d7amsh9f01b0341ecb7bcp11b882jsnf81eaa620512"
            });
    
            req.end(function (result) {
                if (result.error) {
                    throw { messages: [`3rd party API error`], statusCode: 502 }
                }
                console.log(result.body.hits[0])
                res.status(200).json(result.body.hits[0])
            })
        }
    }
}

module.exports = UserController