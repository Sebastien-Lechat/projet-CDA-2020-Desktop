    // on desative envoi du formulaire
    document.querySelector("#form").addEventListener("click", function(event) {
            event.preventDefault();
        }, false)
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
                "url": "https://obscure-sands-01552.herokuapp.com/auth/admin/login",
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
                    localStorage.setItem('token', data.result[0].token)
                    localStorage.setItem('email', email)
                    sessionStorage.setItem('tokene', data.result[0].token)
                    sessionStorage.setItem('emaile', email)
                    redirectionHome()
                },
                "error": function(data) {
                    $('div#error').append('<div class="alert alert-danger" role="alert">Email admin invalid/password invalid</div>')
                    setTimeout(function() {
                        $('div.alert').remove()
                    }, 5000)
                }
            }
            // on met notre parametre et on envoi a api
        $.ajax(settings).done(function(response) {
            console.log(response);
        })
    })
    const redirectionHome = () => {
        document.location.href = "./public/pages/accueil/index.html";
    }