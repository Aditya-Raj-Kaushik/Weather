import React from 'react';
import { BiSearch, BiCurrentLocation } from "react-icons/bi";
import './index.css';

const Inputs = () => {
  return (
    <div>
      <div className='holder'>
        <input type="text" placeholder="Search by City..." className="search-input" />
        <BiSearch className='icons search-icon' />
        <BiCurrentLocation className='icons location-icon' /> 
        <div className='hold'>
          <button className='degree'>°C</button>
          <p className='degree'>|</p>
          <button className='degree'>°F</button>
        </div>
      </div>
    </div>
  );
}

export default Inputs;
