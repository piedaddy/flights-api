import React, {useEffect, useState} from 'react';
import './App.css';

export function Dropdown() {

  return(
    <div class="select">
      <div class="dSelect"> 
        <h4>Select Departure City</h4>
        <select name="dSelect">
          <option value="prague">Prague</option>
          <option value="berlin">Berlin</option>
          <option value="warsaw">Warsaw</option>
          <option value="pardubice">Pardubice</option>
        </select>
      </div>
      <div class="aSelect"> 
        <h4>Select Arrival City</h4>
        <select name="aSelect">
          <option value="valencia">Valencia</option>
          <option value="barcelona">Barcelona</option>
          <option value="madrid">Madrid</option>
          <option value="milano">Milano</option>
          <option value="athens">Athens</option>
        </select>
      </div>
    </div>
  )
}