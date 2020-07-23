function rechercheBar() {

    $('#formulaire').click(function(e) {
        e.preventDefault();

        const search = $('input#cherche').val()
        const settings = {
            "url": "https://obscure-sands-01552.herokuapp.com/search/users/" + decodeURIComponent(search),
            "method": "GET",
            "success": function(response) {
                let i = 0
                console.log(response.result[i])
                id = response.result[i].idUser
                nom = response.result[i].nom
                prenom = response.result[i].prenom
                email = response.result[i].email
                pseudo = response.result[i].pseudo
                sexe = response.result[i].sexe
                avatar = response.result[i].avatar
                $('h5#staticBackdropLabel').append('nom : ' + nom + '<br> prenom : ' + prenom)
                $('div#info').append('<strong>pseudo : ' + pseudo + '<br>email : ' + email + '</strong>' + '<br><div class="col-12"><a class="btn btn-primary col-12" onclick="modifier(' + id + ')">Modifier <i class="far fa-edit"></i></a></div><div class="col-12"><a class="col-12 btn btn-danger" onclick="supprimer(' + id + ')">Supprimer <i class="fas fa-trash-alt"></i></a></div>')
                $('img#imageavatar').attr('src', avatar)
                $('button#close').click(function() {
                    $('h5#staticBackdropLabel').remove()
                    $('div#info').remove()
                    $('img#imageavatar').remove()
                    document.location.reload(true)
                })
            }
        }
        $.ajax(settings)
    })
}

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