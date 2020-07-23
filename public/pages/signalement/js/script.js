let data = {
    "url": "https://obscure-sands-01552.herokuapp.com/report/",
    "method": "GET",
    "headers": {
        "Content-Type": "application/x-www-form-urlencoded"
    }
};
$.ajax(data).done((response) => { // <>200
    if (response === false) {
        localStorage.clear()
        document.location.href = "./../../../index.html";
    } else {
        let i = 0
        while (i < 25) {
            date = response.reports[i].date
            des = response.reports[i].description
            id = response.reports[i].idSignalement
            idpublication = response.reports[i].idPublication
            html = '<div class="d-none d-lg-block d-xl-none d-none d-xl-block card-perso card"><div class="card-body"><div class="row"><div class="col-8"><small class="id col-3"> date ' + date + '</small><small class="email col-4 offset-1"> description : ' + des + '</small></div><div class="col-2"><a class="btn btn-primary" onclick="modifiers(' + id + ',' + idpublication + ')" >Voir <i class="far fa-edit"></i></a></div><div class="col-1"><a class="btn btn-danger" onclick="supprimers(' + id + ')" >Supprimer <i class="fas fa-trash-alt"></i></a></div></div></div></div>'
            $('#blockUser').append(html)
            i++
        }
    }
}).catch((err) => { // <> 400
    localStorage.clear()
    document.location.href = "./../../../index.html";
})

function supprimers(id) {
    id = {
        "url": "https://obscure-sands-01552.herokuapp.com/report/" + id,
        "method": "DELETE",
        "success": function(response) {
            window.location.reload()
        }
    }

    $.ajax(id).done()
}

function modifiers(id, idpublication) {
    console.log(id)
    block = {
        "url": "https://obscure-sands-01552.herokuapp.com/report/" + id,
        "method": "GET",
        "success": function(response) {
            localStorage.setItem('id', id);
            localStorage.setItem('idpublication', idpublication);
            window.location.href = "../voirSignalement/index.html"
        }
    }
    $.ajax(block).done((response) => { // <>200
        if (response === false) {
            console.log('echec')
        } else {
            console.log('voir le signalement')
        }
    }).catch((err) => { // <> 400
        console.log('probleme')
    })
}