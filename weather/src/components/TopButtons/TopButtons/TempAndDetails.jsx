import { FaThermometerEmpty } from "react-icons/fa";
import { BiSolidDropletHalf } from "react-icons/bi";
import { FiWind } from "react-icons/fi";
import { GiSunrise, GiSunset } from "react-icons/gi";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import './index.css';

const TempAndDetails = () => {
  const verticalDetails = [
    {
      id: 1,
      Icon: FaThermometerEmpty,
      title: "Real feel",
      value: "22°"
    },
    {
      id: 2,
      Icon: BiSolidDropletHalf,
      title: "Humidity",
      value: "50%"
    },
    {
      id: 3,
      Icon: FiWind,
      title: "Wind",
      value: "14 km/h"
    },
  ];

  const horizonalDetails = [
    {
      id: 1,
      Icon: GiSunrise,
      title: "Sunrise",
      value: "05:33 AM"
    },
    {
      id: 2,
      Icon: GiSunset,
      title: "Sunset",
      value: "06:33 PM"
    },
    {
      id: 3,
      Icon: MdKeyboardArrowUp,
      title: "High",
      value: "34°"
    },
    {
      id: 4,
      Icon: MdKeyboardArrowDown,
      title: "Low",
      value: "22°"
    },
  ];

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
          {
            verticalDetails.map(({ id, Icon, title, value }) => (
              <div key={id} className="detail">
                <Icon size={18} className="icon" />
                <span className="label">{title}:</span>
                <span className="value">{value}</span>
              </div>
            ))
          }
        </div>
      </div>

      <div className="horizontal-details">
        <div className="daily-info">
          {
            horizonalDetails.map(({ id, Icon, title, value }) => (
              <div key={id} className="hdetail">
                <Icon size={18} className="hicon" />
                <span className="hlabel">{title}:</span>
                <span className="hvalue">{value}</span>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default TempAndDetails;
