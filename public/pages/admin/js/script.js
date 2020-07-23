var settings = {
    "url": "https://obscure-sands-01552.herokuapp.com/user/",
    "method": "GET",
    "timeout": 0
}
$.ajax(settings).done(function(response) {
    if (response === false) {
        localStorage.clear()
        document.location.href = "./../../../index.html";
    } else {
        console.log('connecter')
        let i = 0
        var token = localStorage.getItem("token")
        while (i < 20) {
            id = response.users[i].idUser
            nom = response.users[i].nom
            prenom = response.users[i].prenom
            email = response.users[i].email
            pseudo = response.users[i].pseudo
            sexe = response.users[i].sexe
            avatar = response.users[i].avatar
            admin = response.users[i].admin
            if (admin === 1) {
                html = '<div class="container"><div class="d-none d-lg-block d-xl-none d-none d-xl-block card card-perso"><div class="card-body"><div class="row"><div class="col-1"><img src="' + avatar + '" alt="..." class="img-thumbnail"></div><div class="col-6"><small class="nom col-4"> nom : ' + nom + '</small><small class="prenom col-4"> prenom : ' + prenom + '</small><br><small class="email col-4"> email : ' + email + '</small><small class="pseudo col-4"> pseudo : ' + pseudo + '</small></div><div class="col-2"><a class="btn btn-primary" onclick="modifier(' + id + ')">Modifier <i class="far fa-edit"></i></a></div><div class="col-1"><a class="btn btn-danger" onclick="virer(' + id + ')">Retrograder <i class="fas fa-lock-open"></i></a></div></div></div></div></div>'
                $('#contenu').append(html)
            }
            if (admin === 0) {
                html = '<div class="container"><div class="d-none d-lg-block d-xl-none d-none d-xl-block card card-perso"><div class="card-body"><div class="row"><div class="col-1"><img src="' + avatar + '" alt="..." class="img-thumbnail"></div><div class="col-6"><small class="nom col-4"> nom : ' + nom + '</small><small class="prenom col-4"> prenom : ' + prenom + '</small><br><small class="email col-4"> email : ' + email + '</small><small class="pseudo col-4"> pseudo : ' + pseudo + '</small></div><div class="col-2"><a class="btn btn-warning" onclick="admine(' + id + ')">Promovoir <i class="fas fa-lock"></i></a></div><div class="col-1"><a class="btn btn-danger" onclick="supprimer(' + id + ')">Supprimer <i class="fas fa-trash-alt"></i></a></div></div></div></div></div>'
                $('#contenu2').append(html)
            }
            i++
        }
    }
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
            window.location.href = "./../updateUtilisateur/index.html"
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

function admine(id) {
    token = localStorage.getItem("token")
    const settings = {
        "url": "https://obscure-sands-01552.herokuapp.com/user/" + id,
        "method": "PUT",
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        "data": {
            "id": id,
            "admin": 1
        }
    }

    $.ajax(settings).done((response) => { // <>200
        if (response === false) {
            localStorage.clear()
            document.location.href = "./../../../index.html"
        } else {
            window.location.reload()
            console.log('ok')
        }
    })
}

function virer(id) {
    token = localStorage.getItem("token")
    const settings = {
        "url": "https://obscure-sands-01552.herokuapp.com/user/" + id,
        "method": "PUT",
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        "data": {
            "id": id,
            "admin": 0
        },
        "success": function(data) {
            $('div.bg-white').append('<div class="alert alert-success" role="alert">Attention cette utilisateur à les droits admin</div>')
        }
    }

    $.ajax(settings).done((response) => { // <>200
        if (response === false) {
            localStorage.clear()
            document.location.href = "./../../../index.html"
        } else {
            window.location.reload()
            console.log('ok')
        }
    })
}