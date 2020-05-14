"use strict";
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
const personalMovieOB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};
const a = prompt("Один из просмотренных фильмов?", ""),
  b = prompt("На сколько оцените его?", ""),
  c = prompt("Один из просмотренных фильмов?", ""),
  d = prompt("На сколько оцените его?", "");

personalMovieOB.movies[a] = b;
personalMovieOB.movies[c] = d;
console.log(personalMovieOB);
