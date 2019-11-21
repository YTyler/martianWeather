export class LocalWeatherService {
  async getLocalWeather() {
    try {
      let response = await fetch (`https://api.stormglass.io/v1/weather/point?lat=33&lng=-118`,{
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
