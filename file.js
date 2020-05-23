"use strict";
const personalMoviesDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  private: false,
  start: function () {
    personalMoviesDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (
      personalMoviesDB.count == "" ||
      personalMoviesDB.count == null ||
      isNaN(personalMoviesDB.count)
    ) {
      personalMoviesDB.count = +prompt(
        "Сколько фильмов вы уже посмотрели?",
        ""
      );
    }
  },
  rememberMyFilms: function () {
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
  },
  detectPersonalLevel: function () {
    if (personalMoviesDB.count <= 10) {
      console.log("Просмотренно довольно мало фильмов");
    } else if (personalMoviesDB.count > 10 && personalMoviesDB.count < 30) {
      console.log("Вы классический зритель");
    } else if (personalMoviesDB.count >= 30) {
      console.log("Вы киноман");
    } else {
      console.log("Произошла ошибка");
    }
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMoviesDB);
    }
  },
  toggleVisibleMyDB: function () {
    if (personalMoviesDB.private) {
      personalMoviesDB.private = false;
    } else {
      personalMoviesDB.private = true;
    }
  },
  writeYourGenres: function () {
    for (let i = 1; i <= 3; i++) {
      let genre = prompt(`Ваш любимый жанр под номером ${i}`, "");
      if (genre === "" || genre === null) {
        console.log("Вы ввели некорректные данные или не ввели вовсе");
        i--;
      }
      personalMoviesDB.genres[i - 1] = genre;
    }
    personalMoviesDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр ${i + 1} - это ${item}`);
    });
  },
};
