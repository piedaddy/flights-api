import React from 'react';
import './App.css';

export function Origin(props) {
  const {origin, handleSearchClickOrigin} = props

  return(
      <div> 
        <h4>Select Departure City</h4>
        <select className="select" onChange={handleSearchClickOrigin} name="dSelect">
          {origin.map((city)=> {
          return <option value={city}>{city}</option>
        }) }
        </select>
      </div>
  )
}