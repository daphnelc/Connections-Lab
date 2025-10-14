let express = require('express');
let path = require('path');
let app = express();


let movies = {
    "data": [
        {
            name: "about-time",
            movie: "About Time",
            airing: 2013,
            director: "Richard Curtis",
            language: "English",
        },
        {
            name: "love-letter",
            movie: "Love Letter",
            airing: 1995,
            director: "Shunji Iwai",
            language: "Japaneseh",
        },
        {
            name: "vive-lAmour",
            movie: "Vive L’Amour",
            airing: 1994,
            director: "Tsai Ming-liang",
            language: "Mandarin",
        },
        {
            name: "in-the-mood-for-Love",
            movie: "In the Mood for Love",
            airing: 2000,
            director: "Wong Kar-wai",
            language: "Cantonese",
        },
        {
            name: "a-little-thing-called-love",
            movie: "A Little Thing Called Love",
            airing: 2010,
            director: "Puttipong Pormsaka Na-Sakonnakorn, Wasin Pokpong",
            language: "Thai",
        },
        {
            name: "lust-caution",
            movie: "Lust, Caution",
            airing: 2007,
            director: "Ang Lee",
            language: "Mandarin",
        },
        {
            name: "la-boum",
            movie: "La boum",
            airing: 1980,
            director: "Claude Pinoteau",
            language: "French",
        },
        {
            name: "her",
            movie: "Her",
            airing: 2013,
            director: "Spike Jonze",
            language: "English",
        },
        {
            name: "on-the-beach-at-night-alone",
            movie: "On the Beach at Night Alone",
            airing: 2017,
            director: "Hong Sang-soo",
            language: "Korean",
        },
        {
            name: "la-la-land",
            movie: "La La Land",
            airing: 2016,
            director: "Damien Chazelle",
            language: "English",
        },
        {
            name: "call-me-by-your-name",
            movie: "Call Me by Your Name",
            airing: 2017,
            director: "Luca Guadagnino",
            language: "Italian",
        },
    ]
}


//create the homepage route
// app.get('/', (request, response) => {
//     response.send("hello");
// })

app.use('/', express.static('public'));

//create the about route
app.get('/about', (request, response) => {
    // response.send("about");
    response.sendFile(path.join(__dirname, 'public', 'about.html'));
})

//create the data route
app.get('/movies', function (request, response) {
    response.json(movies);
})

//request parameter
//syntax what comes after the : is a request parameter
app.get('/movies/:movie', function (request, response) {
    console.log(request.params.movie);

    let movie = request.params.movie;
    let movie_obj; // will hold the value that we'll send to the client

    //loop through the data and check if it exists
    for (let i = 0; i < movies.data.length; i++) {

        // console.log(pizzas.data[i]);
        if (movie == movies.data[i].name) {
            movie_obj = movies.data[i];
        }
    }
    console.log(movie_obj);
    //check for data and send it back, otherwise say there is no such data
    if (movie_obj) {
        response.json(movie_obj);
    } else {
        response.json({ "status": "No such data exists" });
    }

})

//tell which port to listen on to run the server
app.listen(3000, function () {
    console.log("The app is listening on localhost:3000");
});