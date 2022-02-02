import React, { useState } from 'react';
const AP="http://www.omdbapi.com/?s="
const I="&apikey=61e74287"

export default function Navbar(props) {

    const[searchTerm,setSearchTerm]=useState([]);
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("submit")
        fetch(AP + searchTerm +I)
        .then((res)=>res.json())
        .then((data)=>{
            props.setMovies(data.Search);
        })
    }
    const handleChange =(e) =>{
        setSearchTerm(e.target.value);
        console.log(searchTerm)
    }
  return <div style={{width:'99vw',background:'#aaafb1' , height:'60px',display:'flex',aligncontent:' center',justifyContent: 'space-between'}}>
        <p style={{paddingLeft:'33px',margin:'0px',postion:'absolute',color:'white' , fontFamily:'Cursive',fontWeight:'bold',fontSize:'40px'}}>MovieFinder</p>
        <form onSubmit={handleSubmit}>
        <input style={{padding:'0px',
        height: '40px',
        margin: '5px',
        borderRadius: '37px',
        fontSize: '22px',
        textAlign: 'center',
    }} type='search' placeholder='Search...'
        value={searchTerm}
        onChange={handleChange}
    />
    </form>
  </div>;
}
