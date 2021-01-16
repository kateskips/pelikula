import React, { useState, useEffect } from 'react';
import SearchResults from './components/SearchResults';
import SearchForm from './components/SearchForm';
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
  


  return (
    <div className="container">
      <h1 className="title">Pelikula</h1>
      <SearchForm searchVal={searchVal} setSearchVal={setSearchVal}  />
      <div className="container">
        <SearchResults movies={movies} />
        </div>
    </div>
  )
}


  
    
  

export default App;
 