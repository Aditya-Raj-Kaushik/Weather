import React from 'react';
import Inputs from './inputs'; // Make sure your component name starts with an uppercase letter
import "./index.css"; // Import the CSS file

const TopButtons = () => {
  const cities = [
    { id: 1, name: "London" },
    { id: 2, name: "Sydney" },
    { id: 3, name: "Tokyo" },
    { id: 4, name: "Paris" },
    { id: 5, name: "Delhi" }
  ];

  return (
    <div className='container'>
      <div className="button-row">
        {cities.map((city) => (
          <button key={city.id} className="button">
            {city.name}
          </button>
        ))}
      </div>
      <div className="input-row">
        <Inputs />
      </div>
    </div>
  );
};

export default TopButtons;
