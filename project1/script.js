"use strict";

do {
  var numberOfFilms = prompt("Number of films you watched", '0');
  const length = numberOfFilms.length;
  //(numberOfFilms == "" || numberOfFilms == undefined || length > 50) ? continue : break;
} while (numberOfFilms == "" || numberOfFilms == undefined || length > 50);

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

if (personalMovieDB.count < 10) {
    alert("too little films watched");    
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <=30) {
    alert("you are a classic watcher");
} else if (personalMovieDB.count > 30) {
    alert("you are a kinoman");
} else {
    alert("an erorr has occured");
        }



//let lastwatched1 = prompt('what is your last watched films?', '');
//let lastwatched2 = prompt('what is your last watched films?', '');
//let value1 = prompt('what is value of film?', '');
//let value2 = prompt('what is value of film?', '');

//personalMovieDB.movies[lastwatched1] = value1;
//personalMovieDB.movies[lastwatched2] = value2;

//console.log(personalMovieDB);

