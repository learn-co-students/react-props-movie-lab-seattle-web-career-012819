import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {
  generateMovieCards = () => {
    let keyIdx = 1
    return movieData.map(card => (
        <MovieCard title={card.title} IMDBRating={card.IMDBRating} genres={card.genres} poster={card.poster} key={keyIdx++} />
    ))
  }

  render() {
    const cards = this.generateMovieCards()
    return (
      <div id="movie-showcase">
        {cards}
      </div>
    )
  }
}