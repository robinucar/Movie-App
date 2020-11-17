import React, { useState } from "react";
import classes from "../SearchMovies/SearchMovies.module.css";
import MovieCard from "../MovieCard/MovieCard";
const SearchMovies = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=d12aa4b67431768e314a8f590cafe2cc&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();

      setMovies(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form className={classes.form} onSubmit={searchMovies}>
        <label htmlFor="query" className={classes.label}>
          Movie Name
        </label>
        <input
          className={classes.input}
          type="text"
          name="query"
          placeholder="i.e. Jurassic Park"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className={classes.button}>
          Search
        </button>
      </form>
      <div className={classes.cardList}>
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
      </div>
    </div>
  );
};

export default SearchMovies;
