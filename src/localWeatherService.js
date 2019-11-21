export class LocalWeatherService {
  async getLocalWeather(location) {
    try {
      let response = await fetch (`https://api.stormglass.io/v1/weather/point?lat=15&lng=27`,{
        headers: {
          'Authorization': process.env.stormKey
        }
      })
      let jsonifiedResponse = await response.json();
      getLocalWeather(jsonifiedResponse);
      return jsonifiedResponse;
    } catch(error) {
      console.error("There was an error handling your request: " + error.message);
    }
  }
}
