const connection = require('../config/db')

const searchAll = (login, callback) => {
    
   
    connection.query('SELECT * FROM utilisateur WHERE login=(?)', login, callback)
    
}
const add = (user, callback) => {
    let stmt = "INSERT INTO utilisateur (id, nom, prenom, login, mdp, adresse, cp, ville, dateEmbauche, role) VALUES (?)"
    let values= [user.id, user.nom, user.prenom, user.login, user.mdp, user.adresse, user.cp, user.ville, user.dateEmbauche, user.role]


   
    connection.query(stmt, [values], callback) 
    
}
const update  = (id, user, callback) => {
    let stmt = "UPDATE utilisateur SET  nom = (?), prenom = (?), login = (?), mdp = (?), adresse = (?), cp = (?), ville = (?), dateEmbauche = (?), role = (?) WHERE id= (?)"
    let values= [user.nom, user.prenom, user.login, user.mdp, user.adresse, user.cp, user.ville, user.dateEmbauche, user.role, id]
   
    connection.query(stmt, values, callback)
    
}
const deleteUser =(id, callback) => {
 
   
    connection.query("DELETE FROM utilisateur where id= (?)", id, callback)
}
    module.exports = {
        searchAll,
        add,
        update,
        deleteUser
    }

