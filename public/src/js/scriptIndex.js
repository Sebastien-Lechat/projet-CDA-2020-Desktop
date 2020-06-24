// on desative envoi du formulaire
document.querySelector("#form").addEventListener("click", function(event) {
    event.preventDefault();
}, false);
//  console log de vérification 
$("input[name=email").keyup(function() {
        console.log($('input[name=email').val())
    })
    // une fois que le formulaire est envoyer
$("#submit").click(function() {
    //  on selectionne le input email et password
    var email = $('input[name=email]').val()
    var password = $('input[name=password]').val()
        // on parametre les requete ajax
    var settings = {
        "url": "https://obscure-sands-01552.herokuapp.com/auth/login",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        "data": {
            "email": email,
            "password": password
        },
        "success": function(data) {
            document.location.href = "./public/pages/accueil/index.html"
        }
    };
    // on met notre parametre et on envoi a api
    $.ajax(settings).done(function(response) {
        console.log(response);
    })
});