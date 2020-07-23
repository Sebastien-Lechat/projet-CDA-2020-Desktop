$('#envoi').click(() => {
    console.log('ok')
    document.querySelector("#form").addEventListener("click", function(event) {
            event.preventDefault();
        }, false) // Annule l'envoi de l'information du formulaire
    let nom = $('#nom').val(),
        prenom = $('#prenom').val(),
        email = $('#email').val(),
        pseudo = $('#pseudo').val(),
        password = $('#mdp2').val(),
        sexe = $('#sexe').val(),
        url = $('#url').val()
    console.log(nom + prenom + email)
    let settings = {
        "url": "https://obscure-sands-01552.herokuapp.com/auth/register",
        "method": "POST",
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        "data": {
            "nom": nom,
            "prenom": prenom,
            "pseudo": pseudo,
            "avatar": url,
            "email": email,
            "password": password,
            "sexe": sexe,
            "description": "sans description"
        },
        "success": function(data) {
            console.log(data)
            document.location.href = "./../allUtilisateur/index.html"
        },
        "error": function(data) {
            $('.title').append('<br><div class="alert alert-danger" role="alert"><h5 class="card-title"> Données obligatoire </h5><p class="card-text">Nom, Prenom, Pseudo,Email,Mot de passe et Sexe ("Homme", "Femme")</p></div>')
            setTimeout(function() {
                $('div.alert').remove()
            }, 5000)
        }
    }
    console.log(nom + prenom + email)
    $.ajax(settings).done(function(response) {
        console.log(response)
    }).catch((err) => { // <> 400
        console.log(err);
        $('.error').text(err.responseJSON.message)
    })
    console.log(nom + prenom + email)
})