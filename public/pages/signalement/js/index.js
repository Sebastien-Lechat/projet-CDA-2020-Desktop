var settings = {
    "url": "https://obscure-sands-01552.herokuapp.com/report",
    "method": "GET",
    "timeout": 0,
    "headers": {
        "Cookie": "connect.sid=s%3A27197eRv-YaPtAbQbKRPTtxwCXjMo_xy.Zgn5JxskDzlujNdar3marSzOBh9REjNAJd5r5BzUNdo"
    },
};

$.ajax(settings).done(function(response) {
    console.log(response);
});