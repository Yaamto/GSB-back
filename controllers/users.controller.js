const userModel = require('../models/user.model')
var createAccessToken = require('../config/token')

const searchAll =  (request, response) => {
    userModel.searchAll(request.body.login, async (err, result) => {
        try {
            if (err) response.json(err)
            if(result[0]) {
                if (request.body.mdp == result[0].mdp) {
                    const token = await createAccessToken(result[0])
                    
                    response.json({token })
                } else {
                    response.status(403).send({error:'Forbidden'})
                }
            }else{
                response.json({ status: "non connecté" })
            }
        } catch (error) {
            console.log(error)
        }

    })

}

const add = (request, response) => {
    const user = {
        id: request.body.id,
        nom: request.body.nom,
        prenom: request.body.prenom,
        login: request.body.login,
        mdp: request.body.mdp,
        adresse: request.body.adresse,
        cp: request.body.cp,
        ville: request.body.ville,
        dateEmbauche: request.body.dateEmbauche,
        role: request.body.role

    }
    userModel.add(user, (err, result) => {
        if (err) response.json(err)
        else response.json({ result })
    })

}
const update = (request, response) => {
    const user = {

        nom: request.body.nom,
        prenom: request.body.prenom,
        login: request.body.login,
        mdp: request.body.mdp,
        adresse: request.body.adresse,
        cp: request.body.cp,
        ville: request.body.ville,
        dateEmbauche: request.body.dateEmbauche,
        role: request.body.role

    }
    userModel.update(request.params.id, user, (err, result) => {
        if (err) response.json(err)
        else response.json({ result })
    })

}
const deleteUser = (request, response) => {
    userModel.deleteUser(request.params.id, (err, result) => {
        if (err) response.json(err)
        else response.json({ result })
    })
}


module.exports = {
    searchAll,
    add,
    update,
    deleteUser
}