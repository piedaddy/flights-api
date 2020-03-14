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
        const showButton2 = firstOffset > 0

        if(flightResults.length){
          return (
            <div className="results">
                <input className="checkbox" type="checkbox" onClick={handleIsDirect}/>Direct Flights Only
                {loading ? 'Loading...' : flightResults} 
                {showButton2 && <button onClick={handleLastPageClick} className="button" >Previous page of results</button>}
                {showButton &&  <button onClick={handleNextPageClick} className="button" > Next page of results</button>}
            </div>
          )
          //the && here means that if the SHOWBUTTON is true then it can continue on and return the thing after
        } else {
            return <p>There are no direct flights</p>
        }
    }  
/////////////NOT DIRECT
    let flightResults = results.map(mapping)
    flightResults = flightResults.slice(firstOffset,secondOffset)
    const showButton = secondOffset < results.length
    const showButton2 = firstOffset > 0
    console.log('num of flights2', results.length)
      return (
        <div className="results">
            <input className="checkbox" type="checkbox" onClick={handleIsDirect}/>Direct Flights Only
            {loading ? 'Loading...' : flightResults}
            {showButton2 && <button onClick={handleLastPageClick} className="button" >Previous page of results</button>}
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
  //getting the latitude and longetude
  const test = result.route
  //console.log('test',test)
  //shows multiple for each stop, duhhh
  const lat = test.map((route,index) => {
    return(
      <div className="coordinates" key={index}>
        <p>latFrom:<strong>{route.latFrom}</strong></p>
        <p>latTo: <strong>{route.latTo}</strong></p>
        <p>lngFrom: <strong>{route.lngFrom}</strong></p>
        <p>lngTo: <strong>{route.lngTo}</strong></p>
      </div>
    )
  })
  console.log('lat',lat)


  return (
    <div className="results" key={index}>
      <p>From: {result.flyFrom}</p>
      <p>To: {result.flyTo}</p>
      <p>Departure Time: {dTime}</p>
      <p>Arrival Time: {aTime}</p>
      <p>Price: {result.price} price options</p>
      <p>{result.route.length -1} stopover(s)</p>
      <div>LatFrom: {lat}</div>

    </div>
  )
}
