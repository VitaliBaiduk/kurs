"use strict";

let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}
//start();

const personalMoviesDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Один из просмотренных фильмов?", ""),
      b = prompt("На сколько вы его оцените?", "");

    if (a != null && b != null && a != false && b != false && a.length < 50) {
      personalMoviesDB.movies[a] = b;
      console.log("done");
    } else {
      console.log("error");
      i--;
    }
  }
}
//rememberMyFilms();

function detectPersonalLevel() {
  if (personalMoviesDB.count <= 10) {
    console.log("Просмотренно довольно мало фильмов");
  } else if (personalMoviesDB.count > 10 && personalMoviesDB.count < 30) {
    console.log("Вы классический зритель");
  } else if (personalMoviesDB.count >= 30) {
    console.log("Вы киноман");
  } else {
    console.log("Произошла ошибка");
  }
}
//detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMoviesDB);
  }
}
showMyDB(personalMoviesDB.private);
function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    let genre = prompt(`Ваш любимый жанр под номером ${i}`, "");
    personalMoviesDB.genres[i - 1] = genre;
  }
}
console.log(personalMoviesDB);
