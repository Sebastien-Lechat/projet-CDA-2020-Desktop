const settings = {
    "url": "https://obscure-sands-01552.herokuapp.com/user",
    "method": "GET",
    "headers": {
        "Content-Type": "application/x-www-form-urlencoded"
    }
};

$.ajax(settings).done((response) => { // <>200
    if (response === false) {
        localStorage.clear()
        document.location.href = "./../../../index.html";
    } else {
        console.log('connecter')
        let i = 0
        while (i < 20) {
            console.log(response.users[i].idUser)
            console.log(response.users[i].nom)
            id = response.users[i].idUser
            nom = response.users[i].nom
            prenom = response.users[i].prenom
            email = response.users[i].email
            pseudo = response.users[i].pseudo
            sexe = response.users[i].sexe
            avatar = response.users[i].avatar
            html = '<div class="d-none d-lg-block d-xl-none d-none d-xl-block card card-perso"><div class="card-body"><div class="row"><div class="col-1"><img src="' + avatar + '" alt="..." class="img-thumbnail"></div><div class="col-7"><small class="nom col-4"> nom : ' + nom + '</small><small class="prenom col-4"> prenom : ' + prenom + '</small><small class="email col-4"> email : ' + email + '</small><br><small class="pseudo col-4"> pseudo : ' + pseudo + '</small><small class="sexe col-3"> sexe : ' + sexe + '</small></div><div class="col-2"><a class="btn btn-primary" onclick="modifier(' + id + ')">Modifier <i class="far fa-edit"></i></a></div><div class="col-1"><a class="btn btn-danger" onclick="supprimer(' + id + ')">Supprimer <i class="fas fa-trash-alt"></i></a></div></div></div></div>'
            $('#blockUser').append(html)
            i++
        }
    }

}).catch((err) => { // <> 400
    localStorage.clear()
    document.location.href = "./../../../index.html";
})

function supprimer(id) {
    console.log(id)
    id = {
        "url": "https://obscure-sands-01552.herokuapp.com/user/" + id,
        "method": "DELETE",
        "success": function(response) {
            window.location.reload()
        }
    }

    $.ajax(id).done((response) => { // <>200
        if (response === false) {
            console.log('echec')
        } else {
            console.log('supprimer')
        }
    }).catch((err) => { // <> 400
        console.log('probleme')
    })
}

function modifier(id) {
    console.log(id)
    block = {
        "url": "https://obscure-sands-01552.herokuapp.com/user/" + id,
        "method": "GET",
        "success": function(response) {
            localStorage.setItem('id', id);
            window.location.href = "../updateUtilisateur/index.html"
        }
    }
    $.ajax(block).done((response) => { // <>200
        if (response === false) {
            console.log('echec')
        } else {
            console.log('modifier')
        }
    }).catch((err) => { // <> 400
        console.log('probleme')
    })
}