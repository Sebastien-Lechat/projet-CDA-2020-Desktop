function verif() {

    setTimeout(function() {
        if (localStorage.getItem('token') == sessionStorage.getItem('tokene') && localStorage.getItem('email') == sessionStorage.getItem('emaile')) {

        } else {
            sessionStorage.clear()
            localStorage.clear()
            document.location.href = "../../../index.html"
        }
    }, 10)

}
verif()