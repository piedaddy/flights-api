import React from 'react';
import './App.css';

export function Arrival(props) {
  const {arrival, handleSearchClickDestination} = props

  return(
      <div > 
        <h4>Select Arrival City</h4>
        <select className="select" onChange={handleSearchClickDestination} name="aSelect">
          {arrival.map((city)=> {
          return <option value={city}>{city}</option>
          }) }
        </select>
      </div>
  )
}