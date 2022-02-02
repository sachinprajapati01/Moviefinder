import React, { useEffect, useState } from 'react';
import './App.css';
import Movie from './component/Movie';
import Navbar from './component/Navbar';
const API="http://www.omdbapi.com/?s=avenger&apikey=61e74287";

function App() {

  const [movies,setMovies]=useState([]);

  useEffect(()=>{
    fetch(API)
      .then((res)=>res.json())
        .then((data)=>{
            console.log(data);
            setMovies(data.Search);
        })
  },[]);

  return (
    <div className="App">
        <Navbar movies={movies} setMovies={setMovies}/>
        {movies.length>0 && 
          movies.map((movie)=>
           <Movie key={movie.imdbID} {...movie}/>)
        }
    </div>
  );
}

export default App;