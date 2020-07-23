function acceuil() {
    const settings = {
        "url": "https://obscure-sands-01552.herokuapp.com/",
        "method": "GET",
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    };

    $.ajax(settings).done((response) => { // <>200
        if (response === false) {
            localStorage.clear()
            document.location.href = "./../../../index.html";
        } else
            console.log('connecter')
    }).catch((err) => { // <> 400
        localStorage.clear()
        document.location.href = "./../../../index.html";
    })
}

acceuil()

function user() {
    const setting = {
        "url": "https://obscure-sands-01552.herokuapp.com/user",
        "method": "GET",
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    };

    $.ajax(setting).done((response) => { // <>200
        if (response === false) {
            localStorage.clear()
            document.location.href = "./../../../index.html";
        } else {
            localStorage.setItem('users', response.users.length)
        }
    }).catch((err) => { // <> 400
        localStorage.clear()
        document.location.href = "./../../../index.html";
    })
}

user()

function report() {
    const setting = {
        "url": "https://obscure-sands-01552.herokuapp.com/report",
        "method": "GET",
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    };

    $.ajax(setting).done((response) => { // <>200
        if (response === false) {
            localStorage.clear()
            document.location.href = "./../../../index.html";
        } else {
            localStorage.setItem('report', response.reports.length)
        }
    }).catch((err) => { // <> 400
        localStorage.clear()
        document.location.href = "./../../../index.html";
    })
}

report()

function post() {
    const setting = {
        "url": "https://obscure-sands-01552.herokuapp.com/post/",
        "method": "GET",
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    };

    $.ajax(setting).done((response) => { // <>200
        if (response === false) {
            localStorage.clear()
            document.location.href = "./../../../index.html";
        } else {
            localStorage.setItem('posts', response.posts.length)
        }
    }).catch((err) => { // <> 400
        localStorage.clear()
        document.location.href = "./../../../index.html";
    })
}

post()

const posts = localStorage.getItem('posts'),
    reports = localStorage.getItem('report'),
    users = localStorage.getItem('users')

$('h3#user').append(users)
$('h3#posts').append(posts)
$('h3#signalement').append(reports)


var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        defaults: {
            global: {
                animation: {
                    duration: 5000
                }
            }
        },
        labels: ['Nombre Users', 'Reports', 'Posts Publier'],
        datasets: [{
            label: 'Les chiffres clès',
            data: [users, reports, posts],
            backgroundColor: [
                'rgba(255, 162, 0, 0.8)',
                'rgba(255, 55, 75, 0.8)',
                'rgba(54, 255, 0, 0.8)'
            ],
            borderColor: [
                'rgba(255, 162, 0, 0.8)',
                'rgba(255, 55, 75, 0.8)',
                'rgba(54, 255, 0, 0.8)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});