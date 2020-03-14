import React from 'react';
import './App.css';

export function Arrival(props) {
  const {arrival, handleSearchClickDestination} = props

  return(
      <div > 
        <h4>Select Arrival City</h4>
        <select className="select" onChange={handleSearchClickDestination} name="aSelect">
          {arrival.map((city, index)=> {
          return <option key={index} value={city}>{city}</option>
          }) }
        </select>
      </div>
  )
}