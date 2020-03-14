import React, {useEffect, useState} from 'react';
import './App.css';
import { DateTime } from 'luxon';
import {Flights} from './Flights';
import {Arrival} from './Arrival';
import {Origin} from './Origin';
import {Checkbox} from './Checkbox';




//DateTime.fromMillis(datetimeFromREST * 1000).toFormat('hh:mm')

const url="https://api.skypicker.com/flights"

function App() {
  const [searchResult, setSearchResult] = useState([])
  const [loading, setLoading] = useState(true)
  const [arrival, setArrival] = useState(['','Valencia', 'Barcelona', 'Madrid','Milano', 'Athens', 'Tokyo', 'Santa Barbara'])
  const [origin, setOrigin] = useState(['','Prague', 'Berlin', 'Warsaw','Pardubice','Los Angeles'])
  const [selectedOrigin, setSelectedOrigin] = useState('')
  const [selectedDestination, setSelectedDestination] = useState('')
  const [isDirect, setIsDirect] = useState(false)
  const [firstOffset, setFirstOffset] = useState(0)

  // const [secondOffset, setSecondOffset] = useState(2)

  const airportCodes = {
    'Valencia': 'VLC', 
    'Barcelona': 'BCN', 
    'Madrid': 'MAD',
    'Milano': 'MXP', 
    'Athens': 'ATH',
    'Prague': 'PRG',
    'Berlin': 'TXL', 
    'Warsaw': 'WAW',
    'Pardubice': 'PED',
    'Tokyo': 'NRT',
    'Santa Barbara':'SBA',
    'Los Angeles':'LAX'
  }
  const getFlights = async () => {
    if(!selectedOrigin) return
    try {
    const response = await fetch(`${url}?partner=picky&fly_from=${selectedOrigin}&fly_to=${selectedDestination}&limit=20`)
    const data = await response.json()
    setSearchResult(data.data)

    setLoading(false)
    } catch (err) {
      console.log('error', err)
    }
  }

  const handleSearchClick = () => {
    getFlights() //special query URL
    console.log('hehee')
  }

  const handleSearchClickOrigin = (e) => {
    const originCode = airportCodes[e.target.value]
    setSelectedOrigin(originCode)
  }

  const handleSearchClickDestination = (e) => {
    const destinationCode = airportCodes[e.target.value]
    setSelectedDestination(destinationCode)
  }

  const handleIsDirect = () => {
    setIsDirect(!isDirect)
  }

  const handleNextPageClick = () => {
    setFirstOffset(firstOffset + 2)
    // setSecondOffset(secondOffset + 2)
  }

  const handleLastPageClick = () => {
    setFirstOffset(firstOffset - 2)
    // setSecondOffset(secondOffset - 2)
  }

  useEffect(()=> {
    getFlights()
  }, []) //when mounting for the first time, getflights is run

  useEffect(()=> {
  }, [searchResult]) // when searchresult is updated, then i am console logging those changes

  useEffect(()=> {
    console.log(selectedDestination)
  }, [selectedDestination])

  useEffect(()=> {
    console.log(selectedOrigin)
  }, [selectedOrigin])

  
    return (
      <div className="App">
        <h1>SEARCH FOR FLIGHTS</h1>
        <div className="main">
          {loading ? 'search now!' : 
            <div>
              <Flights results={searchResult} loading={loading} isDirect={isDirect} handleIsDirect={handleIsDirect} handleNextPageClick={handleNextPageClick} handleLastPageClick={handleLastPageClick} firstOffset={firstOffset} />
            </div> 
          }
            <div>
              <Origin origin = {origin} handleSearchClickOrigin={handleSearchClickOrigin} />
              <Arrival arrival= {arrival} handleSearchClickDestination={handleSearchClickDestination} />
              <button onClick={handleSearchClick} className="button" >Submit Search</button>
              <div className="direct">
              {/* <button onClick={handleSearchClick} className="checkbox" >Direct Flights Only</button> */}
              <label>Search for destination</label>
              <input type="text" value=""></input>

              </div>
            </div>
          </div>
      </div>
    );
  }


export default App;
