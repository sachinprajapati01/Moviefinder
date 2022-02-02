import React, { useState } from 'react';

export default function Navbar(props) {

    const handleSubmit = (e) =>{
        e.preventDefault();
    }
    const handleChange =(e) =>{
        props.setSearchTerm(e.target.value);
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
        value={props.searchTerm}
        onChange={handleChange}
    />
    </form>
  </div>;
}
