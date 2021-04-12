const express = require('express')
const userController = require('../controllers/users.controller')
let router = express()



router.post('/auth', userController.searchAll)  // recupération des données de la base 
    

router.post('/', userController.add)

router.put('/:id', userController.update)
router.delete('/:id', userController.deleteUser)

router.get('/:id', (request, response) =>{
    const id = request.params.id
    const result = userController.search(request.params.id)
    response.json(result)
})
 
router.put('/:id', (request, response) =>{ // modification base de donnée 
    let body = request.body
    const result= userController.edit(body)
     response.json({result})
})

router.post('/', (request, response) =>{ // insertion base de donnée 
    let body = request.body
   const result= userController.add(body)
    response.json({result})
})

router.delete('/:id', (request, response) =>{ // supression de donnée de la base
    let body = request.body
    const result= userController.remove(body)
     response.json({result})
})

module.exports = router