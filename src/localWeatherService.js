export class LocalWeatherService {
  async getLocalWeather() {
    try {
      let response = await fetch (`https://api.stormglass.io/v1/weather/point?lat=45&lng=-122`,{
        headers: {
          'Authorization': process.env.stormKey
        }
      });
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      console.error("There was an error handling your request: " + error.message);
    }
  }
}
