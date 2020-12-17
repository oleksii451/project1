"use strict";

//start();
//detectPersonalLevel();
//rememberMyFilms();
//showMyDB(personalMovieDB.privat);
//writeYourGenres();


let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt("Number of films you watched", '0');
    
        while (personalMovieDB.count == null || personalMovieDB.count == '' || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Number of films you watched", '0');
        }
    },
    detectPersonalLevel: function() {
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
    },
    rememberMyFilms: function() {
        if (personalMovieDB.count < 10) {
            console.log("too little films watched");    
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <=30) {
            console.log("you are a classic watcher");
        } else if (personalMovieDB.count > 30) {
            console.log("you are a kinoman!");
        } else {
            console.log("an erorr has occured");
                }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        for (let i = 0; i < 1; ++i) {
             /* let genre = prompt(`your favourite genre is under number ${i+1}`);

             if (genre != null || genre != '') {
                personalMovieDB.genres[i] = genre;
            } else {
                console.log('non correct');
                i--;
            }*/

            let genres = prompt(`your favourite here by comma`);
               
          if (genres != null || genre != '') {
             personalMovieDB.genres = genres.split(', ');
             personalMovieDB.genres.sort();
             } else {
             console.log('non correct');
            i--;
   }

        }        
       
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`loved genre #${i+1} - is ${item}`);
        });
        
    },
    toggleVisibleMyDB: () => {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
            } else {
            personalMovieDB.privat = true;
        }
    }
};

