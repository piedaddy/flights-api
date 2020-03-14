import React from 'react';
import './App.css';
import { DateTime } from 'luxon';


export function Flights(props) {
  const {results, loading, isDirect, handleIsDirect, handleNextPageClick, firstOffset, handleLastPageClick} = props
  const secondOffset = firstOffset + 2

/////////////DIRECT
  if (results.length !== 0) {
    if (isDirect == true) {
        let flightResults = results.filter(result => result.route.length == 1).map(mapping)
        flightResults = flightResults.slice(firstOffset,secondOffset)
        const showButton = secondOffset < results.length
        if(flightResults.length){
          return (
            <div class="results">
                <input className="checkbox" type="checkbox" onClick={handleIsDirect}/>Direct Flights Only
                {loading ? 'Loading...' : flightResults} 
                <button onClick={handleLastPageClick} className="button" >Previous page of results</button>
                {showButton &&  <button onClick={handleNextPageClick} className="button" > Next page of results</button>}
            </div>
          )
        } else {
            return <p>There are no direct flights</p>
        }
    }  
/////////////NOT DIRECT
    let flightResults = results.map(mapping)
    flightResults = flightResults.slice(firstOffset,secondOffset)
    const showButton = secondOffset < results.length
    console.log('show button', showButton)
    console.log('second offset', secondOffset)
    console.log('num of flights2', results.length)


      return (
        <div class="results">
            <input className="checkbox" type="checkbox" onClick={handleIsDirect}/>Direct Flights Only
            {loading ? 'Loading...' : flightResults}
            <button onClick={handleLastPageClick} className="button" >Previous page of results</button>
            {showButton &&  <button onClick={handleNextPageClick} className="button" > Next page of results</button>}
        </div>
      )
  }
  else {
    return <p>No flights found</p>
  }

} 

function mapping(result, index) {
  const dTime = DateTime.fromMillis(result.dTime * 1000).toFormat('hh:mm')
  const aTime = DateTime.fromMillis(result.aTime * 1000).toFormat('hh:mm')
  return (
    <div class="results" key={index}>
      <p>From: {result.flyFrom}</p>
      <p>To: {result.flyTo}</p>
      <p>Departure Time: {dTime}</p>
      <p>Arrival Time: {aTime}</p>
      <p>Price: {result.price} price options</p>
      <p>{result.route.length -1} stopover(s)</p>
    </div>
  )
}
