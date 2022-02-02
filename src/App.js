import React, { useEffect, useState } from 'react';
import './App.css';
import Movie from './component/Movie';
import Navbar from './component/Navbar';
const AP="http://www.omdbapi.com/?s=";
const I="&apikey=61e74287";
function App() {

  const [movies,setMovies]=useState([]);
  const[searchTerm,setSearchTerm]=useState(["avengers"]);

  useEffect(()=>{
    fetch(AP+searchTerm+I)
      .then((res)=>res.json())
        .then((data)=>{
            setMovies(data.Search);
            console.log({AP}+{searchTerm}+{I});
        })
  },[]);

  return (
    <div className="App">
        <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        {movies.length>0 && 
          movies.map((movie)=>
           <Movie key={movie.imdbID} {...movie}/>)
        }
    </div>
  );
}

export default App;