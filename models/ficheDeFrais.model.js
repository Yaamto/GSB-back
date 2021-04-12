const { connect } = require('../config/db')
const connection = require('../config/db')

const searchAll = (id, callback) => {
    
    
    connection.query('SELECT * FROM fichefrais where idutilisateur= (?)', id, callback)
    
}
const search = (id, mois, callback) => {
    
    connection.query('SELECT * FROM fichefrais where idutilisateur= (?) and mois = (?)', [id, mois], callback)
    
}
const addFicheFrais = (fiche, callback) => {
    let stmt = "INSERT INTO fichefrais (idutilisateur, mois, nbJustificatifs, montantValide, dateModif, idEtat) VALUES (?)"
    let values= [fiche.idutilisateur, fiche.mois, fiche.nbJustificatifs, fiche.montantValide, fiche.dateModif, fiche.idEtat]


    
    connection.query(stmt, [values], callback) 
    

}
const update  = (id, mois, fiche, callback) => {
    
    let stmt = "UPDATE fichefrais SET nbJustificatifs = (?), montantValide = (?), dateModif = (?), idEtat = (?) WHERE idutilisateur = (?) AND mois = (?)"
    let values= [fiche.nbJustificatifs, fiche.montantValide, fiche.dateModif, fiche.idEtat, id, mois]
    
    connection.query(stmt, values, callback)
    
}
const searchFraisForfait = (callback) => {
    
    connection.query('SELECT * FROM fraisforfait', callback)
    
}
const searchLigneFraisForfait = (id,mois, callback) => {
    
    connection.query('SELECT quantite FROM lignefraisforfait WHERE idutilisateur=(?) AND mois= (?)',[id,mois], callback)
    
}

const searchLigneFraisHorsForfait = (id,mois, callback) => {
    
    connection.query('SELECT libelle, date, montant FROM lignefraishorsforfait WHERE idutilisateur=(?) AND mois= (?)',[id,mois], callback)
    
}

const addLigneFraisForfait = (ligneFraisForfait, callback) => {
    var values = [ligneFraisForfait.idutilisateur,ligneFraisForfait.mois,ligneFraisForfait.idFraisForfait,ligneFraisForfait.quantite]
    
    connection.query("INSERT INTO lignefraisforfait (idutilisateur, mois, idFraisForfait, quantite) VALUES (?)", [values], callback)
    

}

const updateLigneFraisForfait = (id, mois, idFraisForfait,ligneFraisForfait, callback) => {
    var values = [ligneFraisForfait.quantite, id, mois, idFraisForfait]
    console.log(values)
    
    connection.query("UPDATE lignefraisforfait SET quantite = (?) WHERE idutilisateur= (?) AND mois = (?) AND idFraisForfait = (?)", values, callback)
    

}
const deleteLigneFraisForfait = (id, mois, idFraisForfait, callback) => {
    var values = [id, mois, idFraisForfait]
    
    connection.query('DELETE FROM lignefraisforfait WHERE idutilisateur=(?) AND mois=(?) AND idFraisForfait = (?)', values , callback)
    

}
//fonction ligne hors forfait

// Ajoutez une colonne Justificatif ?
const addLigneFraisHorsForfait = (ligneFraisHorsForfait, callback) => {
    var values = [ligneFraisHorsForfait.id,ligneFraisHorsForfait.idutilisateur,ligneFraisHorsForfait.mois,ligneFraisHorsForfait.libelle,ligneFraisHorsForfait.date, ligneFraisHorsForfait.montant]
    
    connection.query("INSERT INTO lignefraishorsforfait (id, idutilisateur, mois, libelle, date, montant) VALUES (?)", [values], callback)
    

}
const updateLigneFraisHorsForfait = ( ligneFraisHorsForfait, id, callback) => {
    var values = [ligneFraisHorsForfait.libelle,ligneFraisHorsForfait.date,ligneFraisHorsForfait.montant, id]
    
    connection.query("UPDATE lignefraishorsforfait SET libelle =(?), date=(?), montant=(?) WHERE id = (?)", values, callback)
    

}

const deleteLigneFraisHorsForfait = (id, callback) => {
    
    connection.query('DELETE FROM lignefraishorsforfait WHERE  id = (?)', id , callback)
    

}

module.exports = {
    searchAll,
    search,
    addFicheFrais,
    update,
    searchFraisForfait,
    searchLigneFraisForfait,
    deleteLigneFraisForfait,
    updateLigneFraisForfait,
    searchLigneFraisHorsForfait,
    deleteLigneFraisHorsForfait,
    updateLigneFraisHorsForfait,
    addLigneFraisHorsForfait,
    addLigneFraisForfait
}