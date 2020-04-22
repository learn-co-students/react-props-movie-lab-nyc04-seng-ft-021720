import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX
    return movieData.map((movie) => {
      // console.log(movie.IMDBRating)
      return (
        <MovieCard 
          title={movie.title}
          poster={movie.poster}
          genres={movie.genres}
          IMDBRating={movie.IMDBRating}
          key={movie.index}
        />
      )
    })
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
