import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js';
import movieData from './data.js';

export default class MovieShowcase extends Component {
	generateMovieCards = () => {
		return movieData.map((data, idx) => <MovieCard key={idx} {...data} />); //this will map
		//through movieData and display each movie with it's index
	};
	render() {
		return <div id="movie-showcase">{this.generateMovieCards()}</div>;
	}
}
