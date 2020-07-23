var id = localStorage.getItem("id")
var settings = {
    "url": "https://obscure-sands-01552.herokuapp.com/user/" + id,
    "method": "GET",
    "timeout": 0
}
$.ajax(settings).done(function(response) {
    $('h3#name').append(response.user[0].pseudo)
    $('input#nom').attr('value', response.user[0].nom)
    $('input#prenom').attr('value', response.user[0].prenom)
    $('input#email').attr('value', response.user[0].email)
    $('input#pseudo').attr('value', response.user[0].pseudo)
});




$('#envoi').click(function() {
    document.querySelector("#form").addEventListener("click", function(event) {
        event.preventDefault()
    }, false)

    var id = localStorage.getItem("id"),
        nom = $('#nom').val(),
        prenom = $('#prenom').val(),
        email = $('#email').val(),
        pseudo = $('#pseudo').val(),
        password = $('#mdp').val(),
        sexe = $('input#sexe').val(),
        url = $('#url').val()

    console.log(sexe)

    if (sexe != "") {
        const settings = {
            "url": "https://obscure-sands-01552.herokuapp.com/user/" + id,
            "method": "PUT",
            "headers": {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            "data": {
                "nom": nom,
                "prenom": prenom,
                "pseudo": pseudo,
                "avatar": url,
                "email": email,
                "password": password,
                "sexe": sexe
            },
            "success": function(data) {
                $('div#alert').append('<div class="alert alert-success" role="alert">Votre modification a été prise en compte.</div>')
                setTimeout(function() {
                    document.location.href = "./../allUtilisateur/index.html"
                }, 1000)
            },
            "error": function(data) {
                $('div#alert').append('<div class="alert alert-danger" role="alert">Votre modification n\'a pas été prise en compte</div>')
                $('div#alert').remove()
            }
        }

        $.ajax(settings).done(function(response) {
            console.log(response);
        })
    } else {
        $('div#alert').append('<div class="alert alert-warning" role="alert">Préciser le sexe : Homme ou Femme</div>')
        setTimeout(function() {
            $('div#alert').remove()
        }, 3000)
    }



})