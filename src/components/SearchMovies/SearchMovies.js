import React from "react";
import classes from '../SearchMovies/SearchMovies.module.css';
const SearchMovies = () => {
  return (
    <div>
      <form className={classes.form}>
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
