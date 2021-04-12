const express = require('express')
const authController = require('../controllers/authentification.controller')
let router = express()

router.post('/', (request, response) =>{ // insertion base de donnée 
    let body = request.body
   const result= authController.authentification(body)
    response.json({result})
})


module.exports = router