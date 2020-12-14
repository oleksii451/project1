"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Number of films you watched", '0');

    while (numberOfFilms == null || numberOfFilms == '' || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Number of films you watched", '0');
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};


function detectPersonalLevel() {
    for (let i = 0; i < 2; i++) {
        let lastwatched = prompt('what is your last watched films?', ''),
              valueOfFilm = prompt('what is value of film?', '');
        if (lastwatched != null && valueOfFilm != null && 
            lastwatched != "" && valueOfFilm != "" && 
            lastwatched.length < 50) {
            personalMovieDB.movies[lastwatched] = valueOfFilm;
            console.log('ok');
        } else {
            console.log('error');
            i--;
        }
    }
}

detectPersonalLevel();


function rememberMyFilms() {
    if (personalMovieDB.count < 10) {
        console.log("too little films watched");    
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <=30) {
        console.log("you are a classic watcher");
    } else if (personalMovieDB.count > 30) {
        console.log("you are a kinoman!");
    } else {
        console.log("an erorr has occured");
            }
}

rememberMyFilms();

function showMyDB(hidden) {
    if (!hidden) {
        console.dir(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 0; i < 3; ++i) {
   personalMovieDB.genres[i] = prompt(`your favourite genre is under number ${i+1}`);
    }
}

writeYourGenres();

console.log(personalMovieDB);
