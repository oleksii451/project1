"use strict";

let numberOfFilms = +prompt("Number of films you watched", '0');


let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

let lastwatched1 = prompt('what is your last watched films?', '');
let lastwatched2 = prompt('what is your last watched films?', '');
let value1 = prompt('what is value of film?', '');
let value2 = prompt('what is value of film?', '');

personalMovieDB.movies[lastwatched1] = value1;
personalMovieDB.movies[lastwatched2] = value2;

console.log(personalMovieDB);

