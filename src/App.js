import React from 'react';
import SearchMovies from './searchMovies';
import SearchResults from './searchResults';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <h1 className="title">Pelikula</h1>
      <SearchMovies />
      <br></br>
      <div className="movies">
        <SearchResults />
      </div>
    </div>
  );
}

export default App;
