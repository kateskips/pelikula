import React from 'react';

const SearchResults = (props) => {

    return (
        <div className="card-list">
                {props.movies.map(movie => (
                    <div className="card" key={movie.imdbID}>
                        <img className="card--image"
                            src={movie.Poster} alt={movie.title + 'Poster'}
                            />
                        <div className="card--content">
                        <h3 className="card--title">{movie.Title}</h3>
                            <p><small>Release Date: {movie.Year}</small></p>
                            <p className="card--desc">{movie.Plot}</p>
                        </div>

                    </div>
                ))}
            </div>    
    )
}

export default SearchResults;

