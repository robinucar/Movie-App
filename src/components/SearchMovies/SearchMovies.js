import React, { useState } from "react";
import classes from "../SearchMovies/SearchMovies.module.css";
const SearchMovies = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=d12aa4b67431768e314a8f590cafe2cc&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data.results);
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
            <div className={classes.card} key={movie.id}>
              <img
                className={classes.cardImage}
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                alt={movie.title + "poster"}
              />
              <div className={classes.cardContent}>
                <h3 className={classes.cardTitle}>{movie.title}</h3>
                <p>
                  <small>
                    <strong>RELEASE DATE:</strong> {movie.release_date}
                  </small>
                </p>
                <p>
                  <small>
                    <strong>RATING:</strong> {movie.vote_average}
                  </small>
                </p>
                <p className={classes.cardDesc}>{movie.overview}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SearchMovies;
