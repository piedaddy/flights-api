import React from 'react';
import './App.css';

export function Origin(props) {
  const {origin, handleSearchClickOrigin} = props

  return(
      <div> 
        <h4>Select Departure City</h4>
        <select className="select" onChange={handleSearchClickOrigin} name="dSelect">
          {origin.map((city, index)=> {
          return <option key={index} value={city}>{city}</option>
        }) }
        </select>
      </div>
  )
}