import React from 'react';

 const searchMovies = async (e) => {
        e.preventDefault();
     console.log("submitting");
     
     const url = 'http://www.omdbapi.com/?s={query}&apikey=8fc35db7';

     try {
            const res = await fetch(url);
            const data  = await res.json();
            console.log(data);
        }catch(err){
            console.error(err);
        }

 }

export default function searchMovie() {
    return (
        <form className="form" onSubmit={searchMovies}>
            <label className="label" htmlFor="query">Movie Name</label>
            <input className="input" type="text" name="query"
                placeholder="i.e. Star Wars"/>
            <button className="button" type="submit">Search</button>
        </form>
    )
}