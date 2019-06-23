import React, { Component } from 'react';
import CardFront from './CardFront.js';
import CardBack from './CardBack.js';

export default class MovieCard extends Component {

  render() {
    return (
      <div className="movie-card">
        <CardFront poster={this.props.poster} />
        <CardBack
        title={this.props.title}
        IMDBRating={this.props.IMDBRating}
        genres={this.props.genres}
        />
      </div>
    )
  }
}

MovieCard.defaultProps = {
  title: 'Unknown',
  IMDBRating: null,
  genres: ['No Genre(s) Found'],
  poster: 'default'
}
