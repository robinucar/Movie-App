import React from "react";
import classes from "../SearchMovies/SearchMovies.module.css";
const SearchMovies = () => {
  const searchMovies = async (e) => {
    e.preventDefault();

    const query = "Jurassic Park";

    const url = `https://api.themoviedb.org/3/search/movie?api_key=d12aa4b67431768e314a8f590cafe2cc&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = res.json();
      console.log(data);
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
          type="text"
          name="query"
          placeholder="i.e. Jurassic Park"
          className={classes.input}
        />
        <button type="submit" className={classes.button}>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchMovies;
