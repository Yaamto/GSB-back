const ficheModel = require ('../models/ficheDeFrais.model')



const searchAll = (request, response) => {
    ficheModel.searchAll(request.params.id,(err, result) => {
        console.log(err)
        console.log(result)
        response.json({result})
    })

    
}
const search = (request, response) => {
    ficheModel.search(request.params.id, request.params.mois, (err,result ) => {
        console.log(err)
        console.log(result)
        response.json({result})
    })
}
 const addFicheFrais = (request, response) => {
        const fiche = request.body
        ficheModel.addFicheFrais(fiche, (err, result) => {
            if (err) response.json(err)
            else response.json({result})
        })
       
    }
    const update = (request, response) => {
        const body = request.body 
        ficheModel.update(request.params.id , request.params.mois, body, (err, result) => {
            if (err) response.json(err)
            else response.json({result})
        })
       

    }

    
const searchFraisForfait = (request, response) => {
    ficheModel.searchFraisForfait((err, result) => {
        console.log(err)
        console.log(result)
        response.json({result})
    })

    
}

const searchLigneFraisForfait = (request, response) => {
    ficheModel.searchLigneFraisForfait(request.params.id, request.params.mois, (err, result) => {
    
        if (err) response.json(err)
            else response.json({result})
    })

    
}

const searchLigneFraisHorsForfait = (request, response) => {
    ficheModel.searchLigneFraisHorsForfait(request.params.id, request.params.mois, (err, result) => {
    
        if (err) response.json(err)
            else response.json({result})
    })

    
}
const addLigneFraisForfait = (request,response) => {
    const body = request.body
    ficheModel.addLigneFraisForfait(body, (err, result) => {
        if (err) response.json(err)
        else response.json({result})
    })
}

const updateLigneFraisForfait = (request,response) => {
    const body = request.body
    ficheModel.updateLigneFraisForfait(request.params.id, request.params.mois, request.params.idFraisForfait, body, (err, result) => {
        if (err) response.json(err)
        else response.json({result})
    })
}

const deleteLigneFraisForfait = (request,response) => {
    ficheModel.deleteLigneFraisForfait(request.params.id, request.params.mois, request.params.idFraisForfait, (err, result) => {
        if (err) response.json(err)
        else response.json({result})
    })
}

//Fonction ligne Hors forfait
const addLigneFraisHorsForfait = (request,response) => {
    const body = request.body
    ficheModel.addLigneFraisHorsForfait(body, (err, result) => {
        if (err) response.json(err)
        else response.json({result})
    })
}

const updateLigneFraisHorsForfait = (request,response) => {
    const body = request.body
    ficheModel.updateLigneFraisHorsForfait(body, request.params.id,(err, result) => {
        if (err) response.json(err)
        else response.json({result})
    })
}

const deleteLigneFraisHorsForfait = (request,response) => {
    ficheModel.deleteLigneFraisHorsForfait(request.params.id, (err, result) => {
        if (err) response.json(err)
        else response.json({result})
    })
}


module.exports = {
    searchAll,
    search,
    addFicheFrais,
    update,
    searchFraisForfait,
    searchLigneFraisForfait,
    searchLigneFraisHorsForfait,
    updateLigneFraisHorsForfait,
    addLigneFraisHorsForfait,
    deleteLigneFraisForfait,
    updateLigneFraisForfait,
    deleteLigneFraisHorsForfait,
    addLigneFraisForfait
}