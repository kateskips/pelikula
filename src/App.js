import React, { useState, useEffect } from 'react';

import SearchForm from './components/SearchForm';
//import AddNominations from './components/AddNominations';
import './App.css';

const App = () => {
	const [ movies, setMovies ] = useState([]);
	const [ searchVal, setSearchVal ] = useState('');
	const [ favorites, setFavorites ] = useState({});

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
		setFavorites((f) => {
			const temporary = { [movie.imdbID]: movie };
			return { ...f, ...temporary };
		});
	};

	const deleteFavoriteMovie = (movie) => {
		setFavorites((f) => {
			const { [movie.imdbID]: _, ...res } = f;
			return res;
		});
	};

	const AddNomination = (props) => {
		const alreadyAdded = props.movie.imdbID in favorites;
		return (
			<div className="nominate-button">
				<button onClick={() => addFavoriteMovie(props.movie)} disabled={alreadyAdded}>
					Nominate
				</button>
			</div>
		);
	};

	const DeleteNomination = (props) => {
		return (
			<div className="denominate-button">
				<button onClick={() => deleteFavoriteMovie(props.movie)}>Denominate</button>
			</div>
		);
	};

	const SearchResults = () => {
		return (
			<ul className="card-list">
				{movies.map((movie) => (
					<li className="card" key={movie.imdbID}>
						<img className="card--image" src={movie.Poster} alt={movie.title + 'Poster'} />
						<div className="card--content card--content-list">
							<span className="card--title">
								{movie.Title} ({movie.Year})
							</span>
							<AddNomination movie={movie} />
						</div>
					</li>
				))}
			</ul>
		);
	};

	const FavoriteResults = () => {
		return (
			<ul className="card-list">
				{Object.values(favorites).map((movie) => (
					<li className="card" key={movie.imdbID}>
						<img className="card--image" src={movie.Poster} alt={movie.title + 'Poster'} />
						<div className="card--content card--content-list">
							<span className="card--title">
								{movie.Title} ({movie.Year})
							</span>
							<DeleteNomination movie={movie} />
						</div>
					</li>
				))}
			</ul>
		);
	};

	const currentNominations = Object.keys(favorites).length
	//const maxNominations = 5
	const nominationAlert = <div>You have selected {currentNominations} movies!</div>

	
	//alreadyAdded.length > maxNominations 



	return (
		<div className="container">
			<h1 className="title">Pelikula</h1>
			<div className="cute-banner">
				<img
					src="https://66.media.tumblr.com/6d88cc218b4404fd04974f4d1188e6d9/tumblr_mqzutnr0BD1rfjowdo1_500.gif"
					alt="totoro"
					width="230"
					height="200"
				/>
			</div>
			<SearchForm searchVal={searchVal} setSearchVal={setSearchVal} />
			<div className="container">
				{nominationAlert}
				<div className="row">
					<div className="col-6 search_results">
						<h3>Results</h3>
						<SearchResults />
					</div>
					<div className="col-6 nominated">
						<h3>Nominations</h3>
						<FavoriteResults />
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
