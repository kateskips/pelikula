import React, { useState, useEffect } from 'react';

import SearchForm from './components/SearchForm';
//import AddNominations from './components/AddNominations';
import './App.css';

const App = () => {
	const [ movies, setMovies ] = useState([]);
	const [ searchVal, setSearchVal ] = useState('');
	const [ favorites, setFavorites ] = useState([]);

	const getMovies = async () => {
		const url = `http://www.omdbapi.com/?s=${searchVal}&apikey=8fc35db7`;

		const resp = await fetch(url);
		const responseJson = await resp.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	useEffect(
		() => {
			getMovies(searchVal);
		},
		[ searchVal ]
	);

	const addFavoriteMovie = (movie) => {
     setFavorites((f) => [ ...f, movie ])
  };

	const AddNominations = (props) => {
		return (
			<div className="nominate-button">
        <button onClick={() => addFavoriteMovie(props.movie)}>Nominate</button>
			</div>
		);
	};

	const SearchResults = () => {
		//const FavoriteNominations = props.favoriteNominations

		return (
			<ul className="card-list">
				{movies.map((movie) => (
					<li className="card" key={movie.imdbID}>
						<img className="card--image" src={movie.Poster} alt={movie.title + 'Poster'} />
						<div className="card--content card--content-list">
							<span className="card--title">
								{movie.Title} ({movie.Year})
              </span>
              <AddNominations movie={movie} />
						</div>
					</li> 
				))}
			</ul>
		);
  };
  
  const FavoriteResults = () => {
		//const FavoriteNominations = props.favoriteNominations

		return (
			<ul className="card-list">
				{favorites.map((movie) => (
					<li className="card" key={movie.imdbID}>
						<img className="card--image" src={movie.Poster} alt={movie.title + 'Poster'} />
						<div className="card--content card--content-list">
							<span className="card--title">
								{movie.Title} ({movie.Year})
              </span>
						</div>
					</li> 
				))}
			</ul>
		);
	};

	// finding a way to have the search show and when not no movies show up.

	return (
		<div className="container">
			<h1 className="title">Pelikula</h1>
			<SearchForm searchVal={searchVal} setSearchVal={setSearchVal} />
			<div className="container">
				<div className="row">
					<div className="col-6 search_results">
						<h3>Results</h3>
						<SearchResults
						/>
					</div>
					<div className="col-6 nominated">
						<h3>Nominations</h3>
						<FavoriteResults
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
