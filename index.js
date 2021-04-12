const { request } = require('express')
const express = require('express')

const routerUsers = require('./routers/users.router')

const routerFrais = require('./routers/ficheDeFrais.router')
const routerLogin = require('./routers/authentification.router')
const routerFiche = require('./routers/ficheDeFrais.router')


let api = express()

api.get('/',(request, response) => {
    response.json({status:'ok'})
})


api.use(express.json())

api.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT ,DELETE');
    next();
})


api.use('/users', routerUsers)
api.use('/fichedefrais', routerFiche)
api.use('/login', routerLogin)
api.use ('/fraisforfait', routerFrais)
api.listen(3001)