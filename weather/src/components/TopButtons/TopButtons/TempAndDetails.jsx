import { FaThermometerEmpty } from "react-icons/fa";
import { BiSolidDropletHalf } from "react-icons/bi";
import { FiWind } from "react-icons/fi";
import { GiSunrise, GiSunset } from "react-icons/gi";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import './index.css';

const TempAndDetails = () => {
  return (
    <div>
      <div className="weather-condition">
        <p>Rain</p>
      </div>

      <div className="weather-info">
        <img
          src="http://openweathermap.org/img/wn/01d@2x.png"
          alt="weather icon"
          className="weather-icon"
        />
        <p className="temperature">34°</p>
      

      <div className="temperature-details">
        <div className="detail">
          <FaThermometerEmpty size={18} className="icon" />
          <span className="label">Real Feel:</span>
          <span className="value">35°</span>
        </div>
        <div className="detail">
          <FaThermometerEmpty size={18} className="icon" />
          <span className="label">Real Feel:</span>
          <span className="value">35°</span>
        </div>
        <div className="detail">
          <FaThermometerEmpty size={18} className="icon" />
          <span className="label">Real Feel:</span>
          <span className="value">35°</span>
        </div>
        </div>
      </div>
    </div>
  );
};

export default TempAndDetails;
