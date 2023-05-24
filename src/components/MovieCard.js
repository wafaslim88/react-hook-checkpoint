import React from 'react';


  
  const MovieCard = ({ movie }) => {
    const {  title, description, posterURL, rating } = movie;
    return (
    <div className="movie-card">
        <img src= {movie.posterURL} alt='' style={{width:150}}/>
        <div>
           <h1>{movie.title}</h1>
           <p>{movie.description}</p>
           <h2>{movie.rating}</h2>
        </div>   
    </div>
  );
};



export default MovieCard;