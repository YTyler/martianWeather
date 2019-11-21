import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {LocalWeatherService} from './LocalWeatherService.js';
import {MarsWeatherService} from './marsWeatherService.js';

$(document).ready(function() {

  (async () => {

    let mArray = [];
    let eArray = [];

    await (async () => {
      let marsWeather = new MarsWeatherService();
      const response = await marsWeather.getWeatherByCity();
      mArray = getMars(response);
    })();

    await (async () => {
      let localweatherService = new LocalWeatherService();
      const response = await localweatherService.getLocalWeather();
      // eArray = getEarth(response);
    })();
    //
    // $('#cTemp').text(`Earth is ${eArray[0]-mArray[0]}˚ F warmer than Mars`);
    // $('#cPressure').text(`The air pressure on Earth is ${((eArray[1]-mArray[1])/101325).toFixed(4)} Atmospheres greater than Mars`);
    // $('#cWind').text(`The wind speed on Earth is ${eArray[2]-mArray[2]} m/s faster than Mars`);


  })();


  let mTemp = 0;
  let mPressure = 0;
  let mWind = 0;

  const getMars = (response) => {
    const solkeys = response.sol_keys;

    let tempArray = [];

    for (let i = 0; i < solkeys.length; i++) {
      mTemp = response[solkeys[i]].AT.av;
      mPressure = response[solkeys[i]].PRE.av;
      mWind = response[solkeys[i]].HWS.av;
    }

    //Average Values
    mTemp = (mTemp/solkeys.length).toFixed(2);
    mPressure = (mPressure/solkeys.length).toFixed(2);
    mWind = (mWind/solkeys.length).toFixed(2);

    tempArray.push(mTemp, mPressure, mWind);

    $("#mTemp").text(`Average Mars Temperature:  ${mTemp}˚F`);
    $('#mPressure').text(`Average Mars Atmospheric Pressure: ${mPressure} Pascals`);
    $('#mWind').text(`Average Mars Wind Speed: ${mWind} m/s`);
    console.log(response);

    return tempArray;
  };

  let eTemp = 0;
  let ePressure = 0;
  let eWind = 0;

  // const getEarth = (response) => {
  //
  //   let tempArray = [];
  //
  //   for (let i = 0; i < response.hours.length; i++) {
  //     eTemp += response.hours[i].airTemperature[0].value;
  //     console.log(response.hours[i].airTemperature[0].value);
  //     ePressure += response.hours[i].pressure[0].value;
  //     eWind += response.hours[i].windSpeed[0].value;
  //   }
  //
  //   eTemp = (((eTemp/response.hours.length)*(9/5))+32).toFixed(2);
  //   ePressure = ((ePressure/response.hours.length*100)).toFixed(2);
  //   eWind = (eWind/response.hours.length).toFixed(2);
  //
  //   tempArray.push(eTemp, ePressure, eWind);
  //
  //   $("#eTemp").text(`Average Earth Temperature today:  ${eTemp}˚F`);
  //   $("#ePressure").text(`Average Earth Atmospheric Pressure today:  ${ePressure} Pascals`);
  //   $("#eWind").text(`Average Earth Wind Speed today:  ${eWind} m/s`);
  //   console.log(response);
  //
  //   return tempArray;
  // };




});
