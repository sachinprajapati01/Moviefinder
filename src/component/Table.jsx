import React from 'react';

export default function Table(props) {
    
  return <div style={{width:'500px',background:'white',border:'2px solid black',zIndex:'10',top:'100px',displat:'flex'
  , justifyContent:'space-around',left:'100px',position:'absolute'}}>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>IMBD Id</th>
          </tr>
        </thead>
        </table>
  </div>;
}
