import React, { useState, useEffect } from 'react';
import SearchResults from './components/SearchResults';
import SearchForm from './components/SearchForm';
import Nominations from './components/Nominations';
import AddNominations from './components/AddNominations';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchVal, setSearchVal] = useState('')
  

  const getMovies = async () => {
    const url = `http://www.omdbapi.com/?s=${searchVal}&apikey=8fc35db7`

    const resp = await fetch(url)
    const responseJson = await resp.json()

    if (responseJson.Search) {
      setMovies(responseJson.Search)
    }
  };

  useEffect(() => {
    getMovies(searchVal);
  }, [searchVal]);

// finding a way to have the search show and when not no movies show up. 
 
  return (
    <div className="container">
      <h1 className="title">Pelikula</h1>
      <SearchForm searchVal={searchVal} setSearchVal={setSearchVal} />
      <div className="container">
        <div className="row">
          <div className="col-6 search_results">
            <h3>Results</h3>
            <SearchResults movies={movies} favoriteNominations={AddNominations }/>
          </div>
          <div className="col-6 nominated">
            <Nominations />
          </div>
        </div>
      </div>
    </div>
  )
}


  
    
  

export default App;
 