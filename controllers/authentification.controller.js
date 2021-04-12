let comptes = [
    {
        login : "a",
        mdp:"jiji"
    },
    {
        login : "b",
        mdp:"jaja"
    }
]

const authentification = (body) => {
    let auth = false
    for(let i = 0; i<comptes.length;i++){
        if(comptes[i].login==body.login && comptes[i].mdp==body.mdp){
        auth=true
        }
    }
    return auth
}

module.exports={
    authentification
}