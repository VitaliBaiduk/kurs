"use strict";
const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
const personalMoviesDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};
const a = prompt("Один из просмотренных фильмов?", ""),
  b = prompt("На сколько вы его оцените?", ""),
  c = prompt("Один из просмотренных фильмов?", ""),
  d = prompt("На сколько вы его оцените?", "");
personalMoviesDB.movies[a] = b;
personalMoviesDB.movies[c] = d;
console.log(personalMoviesDB);
