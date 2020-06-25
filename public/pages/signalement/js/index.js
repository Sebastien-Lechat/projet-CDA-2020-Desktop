$.ajax(settings).done(function(response) {
    console.log(response);
});

const settings = {
    "url ": "https://obscure-sands-01552.herokuapp.com/report" + localStorage.getItem("token"),
    "method": "GET",
    "headers": {
        "Content-Type": "application/x-www-form-urlencoded"
    }
};

$.ajax(settings).done((response) => { // <>200
    if (response === false) {
        localStorage.clear()
        document.location.href = "/";
    } else
        $('#user').text(JSON.stringify(response))
}).catch((err) => { // <> 400
    localStorage.clear()
    document.location.href = "/";
})

$('#deco').click(() => {
    localStorage.clear()
    document.location.href = "/";
})