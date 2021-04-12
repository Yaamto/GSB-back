const express = require('express')
const ficheController = require('../controllers/ficheDeFrais.controller')
let router = express()




  
router.get('/:id', ficheController.searchAll) // recupération des données de la base 
router.get('/lignefraisforfait/:id/:mois', ficheController.searchLigneFraisForfait)
router.get('/lignefraishorsforfait/:id/:mois', ficheController.searchLigneFraisHorsForfait)
router.get('/:id/:mois',ficheController.search)
router.get('/fraisForfait/',ficheController.searchFraisForfait)
router.get('/lignefraisforfait',ficheController.searchLigneFraisForfait)
router.post('/', ficheController.addFicheFrais) // insertion base de donnée 
router.delete('/lignefraisforfait/delete/:idutilisateur/:mois/:idFraisForfait', ficheController.deleteLigneFraisForfait)
router.delete('/lignefraishorsforfait/delete/:id', ficheController.deleteLigneFraisHorsForfait)
router.post('/lignefraisforfait', ficheController.addLigneFraisForfait) // insertion base de donnée 
router.post('/lignefraishorsforfait', ficheController.addLigneFraisHorsForfait)
router.put('/lignefraisforfait/:id/:mois/:idFraisForfait', ficheController.updateLigneFraisForfait)
router.put('/lignefraishorsforfait/update/:id', ficheController.updateLigneFraisHorsForfait)

router.get('/:id', (request, response) =>{
    const id = request.params.id
    const result = ficheController.search(request.params.id)
    response.json(result)
})
 
router.put('/:id/:mois', ficheController.update)






module.exports = router