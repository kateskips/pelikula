import React, { useState, useEffect } from 'react';
import SearchResults from './components/SearchResults';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const url = "http://www.omdbapi.com/?s=kingkong&apikey=8fc35db7"

    const resp = await fetch(url)
    const responseJson = await resp.json()

    console.log(responseJson)
    setMovies(responseJson.Search)
  };
  useEffect(() => {
    getMovies()
  }, []);


  return (
    <div className="container">
      <h1 className="title">Pelikula</h1>
      <h3 className="subheader">Movie Awards for Entrepreneurs, Con Artists, and Humans</h3>
      <SearchResults movies={movies} />
    </div>
  )


}

  
    
  

export default App;
 