var ids = localStorage.getItem("id")
var idpublication = localStorage.getItem("idpublication")

let data = {
    "url": "https://obscure-sands-01552.herokuapp.com/report/" + ids,
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
        console.log(response)
        des = response.report[i].description
        idSignalement = response.report[i].idSignalement
        idPublication = response.report[i].idPublication
        html = '<strong class="col-12 text-center">' + des + '</strong><br>'
        $('#publication').append(html)
        i++
    }
}).catch((err) => { // <> 400
    localStorage.clear()
    document.location.href = "./../../../index.html";
})

let datas = {
    "url": "https://obscure-sands-01552.herokuapp.com/post/" + idpublication,
    "method": "GET",
    "headers": {
        "Content-Type": "application/x-www-form-urlencoded"
    }
}
$.ajax(datas).done((response) => { // <>200
    console.log(datas)
    if (response === false) {
        localStorage.clear()
        document.location.href = "./../../../index.html";
    } else {
        console.log('connecter')
        console.log(response)
        des = response.post[0].description
        url = response.post[0].media_url
        html = '<p class="col-12">' + des + '</p>'
        $('#signalement').append(html)
        htmls = '<img class="col-12 img-thumbnail" src="' + url + '"></img>'
        $('#carre').append(htmls)
    }
}).catch((err) => { // <> 400
    localStorage.clear()
    document.location.href = "./../../../index.html";
})

function supprimerpublication(id, idPublication) {

    supprimersignalement(id)

    console.log(id)
    id = {
        "url": "https://obscure-sands-01552.herokuapp.com/post/" + idPublication,
        "method": "DELETE",
        "success": function(response) {
            window.location.href = "./../signalement/index.html"
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

function supprimersignalement(id) {
    console.log(id)
    id = {
        "url": "https://obscure-sands-01552.herokuapp.com/report/" + id,
        "method": "DELETE",
        "success": function(response) {
            document.location.href = "../signalement/index.html"
        }
    }

    $.ajax(id).done((response) => { // <>200
        if (response === false) {
            console.log('echec')
        } else {
            document.location.href = "../signalement/index.html"
        }
    }).catch((err) => { // <> 400
        console.log('probleme')
    })
}