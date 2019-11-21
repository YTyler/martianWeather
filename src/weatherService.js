export class MarsWeatherService {
  async getWeatherByCity() {
    try {
      let response = await fetch(`https://api.nasa.gov/insight_weather/?api_key=${process.env.marsKey}&feedtype=json&ver=1.0`);
        let jsonifiedResponse = await response.json();
        return jsonifiedResponse;
      } catch(error) {
        console.error("There was an error handling your request: " + error.message);
      }
    }
  }
