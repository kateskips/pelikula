import React from 'react';

const SearchResults = (props) => {
    return (
        <>
        {props.movies.map((movie, index) => <div>
            <img src={movie.Poster} alt='movie'></img>
            </div>)
            }
        </>
    )
}

export default SearchResults;