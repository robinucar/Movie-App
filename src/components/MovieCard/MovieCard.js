import React from "react";
import classes from "./MovieCard.module.css";

const MovieCard = (props) => {
  const { movie } = props;
  return (
    <>
      <div className={classes.card}>
        <img
          className={classes.cardImage}
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
          alt={props.movie.title + "poster"}
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
    </>
  );
};

export default MovieCard;
