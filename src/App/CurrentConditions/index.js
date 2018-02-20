import React from 'react'
import './style.css'
import iCloudy from './cloudy.gif'

const CurrentConditions = ({ currentConditions }) => {
  console.log('currentConditions: ', currentConditions.current_observation);
  /*const { weather, icon_url, temp_c,
    dewpoint_c, feelslike_c, pressure_mp, relative_humidity, uv,
    wind, gusts, windchill_c } = currentConditions.current_observation;
    */
  // const { weather } = currentConditions.current_observation;

  return (
    <div id='CurrentConditions'>
      <h2>Current Conditions</h2>
      <img src={iCloudy} alt='cloudy' />
      <ul>
        <li>weather</li>
        <li>temp_c</li>
        <li>dewpoint_c</li>
        <li>Feels like: 6 C</li>
        <li>Pressure: 1026 mp 0</li>
        <li>Relative humidity: 98%</li>
        <li>UV: 0</li>
        <li>Wind: West at 0 kph</li>
        <li>Gusts: 0 kph</li>
        <li>Windchill: 6 C</li>
      </ul>
    </div>
  )
}
export default CurrentConditions
