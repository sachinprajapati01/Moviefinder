import React, { useEffect, useState } from 'react';
import './App.css';
import Movie from './component/Movie';
import Navbar from './component/Navbar';
const API="http://www.omdbapi.com/?s=avengers&apikey=61e74287";
const movieList=[
  {
      title:"End Game",
      year:"2019",
      imdbid:"tt394034",
  },
]
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
           <Movie key={movie.imdbID} movie={movie} data={movieList} />)
        }
    </div>
  );
}

export default App;