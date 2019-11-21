import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {LocalWeatherService} from './LocalWeatherService.js';
import {MarsWeatherService} from './marsWeatherService.js';

$(document).ready(function() {


  (async () => {
    let marsWeather = new MarsWeatherService();
    const response = await marsWeather.getWeatherByCity();
    getMars(response);
  })();

  // (async () => {
  //   let localweatherService = new LocalWeatherService();
  //   const response = await localweatherService.getLocalWeather();
  //   getEarth(response);
  // })();

  const getMars = (response) => {
    const solkeys = response.sol_keys;
    let mTemp = 0;
    let mPressure = 0;
    let mWind = 0;

    for (let i = 0; i < solkeys.length; i++) {
      mTemp = response[solkeys[i]].AT.av;
      mPressure = response[solkeys[i]].PRE.av;
      mWind = response[solkeys[i]].HWS.av
    }
    //Average Values
    mTemp = (mTemp/solkeys.length).toFixed(2);
    mPressure = (mPressure/solkeys.length).toFixed(2);
    mWind = (mWind/solkeys.length).toFixed(2);

    $("#mTemp").text(`Average Mars Temperature:  ${mTemp}˚F`);
    $('#mPressure').text(`Average Mars Atmospheric Pressure: ${mPressure} Pascals`);
    $('#mWind').text(`Average Mars Wind Speed: ${mWind} m/s`);
    console.log(response);
  };
  //
  // const getEarth = (response) => {
  //   for (let i = 0)
  //
  //   $("#eTemp").text(`Average Earth Temperature today:  ${response.hours[0].airTemperature[0].value}˚C`);
  //   $("#ePressure").text(`Average Earth Atmospheric Pressure today:  ${response.hours[0].pressure[0].value} HectoPascals`);
  //   $("#eWind").text(`Average Earth Wind Speed today:  ${response.hours[0].windSpeed[0].value}˚ m/s`);
  //   console.log(response);
  // };
});
