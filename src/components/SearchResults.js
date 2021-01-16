import React from 'react';



const SearchResults = (props) => {
    const FavoriteNominations = props.favoriteNominations
    return (
        <ul className="card-list">
                {props.movies.map(movie => (
                    <li className="card" key={movie.imdbID}>
                       <img className="card--image"
                            src={movie.Poster} alt={movie.title + 'Poster'}
                />
                        <div className="card--content card--content-list">
                            <span className="card--title">{movie.Title} ({movie.Year})</span>
                            <FavoriteNominations />
                        </div>
                    </li>
                ))}
        </ul>    
    )
}

export default SearchResults;

