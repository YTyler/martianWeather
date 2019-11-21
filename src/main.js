import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {MarsData} from './projectname.js';
import {LocalWeatherService} from './LocalWeatherService.js';
import {MarsWeatherService} from './weatherService.js';

$(document).ready(function() {
  let mars = new MarsData();

  const getElements = (response) => {
    const solkeys = response.sol_keys;
  };

  (async () => {
    let marsWeather = new MarsWeatherService();
    const response = await MarsweatherService.getWeatherByCity();
    getElements(response);
  })();

  (async () => {
    let localweatherService = new LocalWeatherService();
    const response = await LocalweatherService.getLocalWeather();
    getElements(response);
  })();


  $("#marsResults").text(`This is the Mars temperature:  ${response[solkeys[0]].AT.av}˚F`);
  const getWeatherElements = (response) => {
    $("#weatherResults").text(`This is the Earth temperature:  ${response.hours[0].airTemperature[0].value}˚F`);
  };
});
