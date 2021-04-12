var jwt = require('jsonwebtoken')



const createAccessToken = (user) => {
    return new Promise((resolve, reject) => {
        if(user.id === undefined) reject('credentials not valid')
        else{
            const signedUser = {
                nom: user.nom,
                prenom: user.prenom,
                login: user.login,
                id: user.id
            }
            jwt.sign(signedUser, "NoN", {expiresIn: '7d'}, (error, token) => {
                if(error) reject(error)
                resolve(token)
            })
        }
    })
}

module.exports = createAccessToken