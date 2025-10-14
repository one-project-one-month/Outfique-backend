import axios, { AxiosResponse } from 'axios';
import { WeatherResponse, LocationWeatherResponse } from './dto/locationWeatherDto';
import { logger } from '../../utils/logger';

class LocationWeatherService {
  private readonly baseUrl = 'https://api.openweathermap.org/data/3.0';
  private readonly apiKey = process.env.OPEN_WEATHER_API_KEY;

  /**
   * Get weather data by coordinates
   */
  async getWeatherByCoordinates(lat: number, lon: number): Promise<LocationWeatherResponse> {
    try {
      const response: AxiosResponse<WeatherResponse> = await axios.get(`${this.baseUrl}/onecall`, {
        params: {
          lat,
          lon,
          exclude: 'minutely,hourly,daily,alerts',
          appid: this.apiKey,
        },
      });

      const weatherData = response.data;
      console.log('weather data ', weatherData);
      const recommendation = this.generateWeatherRecommendation(weatherData);

      return {
        weather: weatherData,
        recommendation,
      };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        logger.error('Error fetching weather by coordinates:', {
          message: error.message,
          status: error.response?.status,
          data: error.response?.data,
        });

        if (error.response?.status === 401) {
          throw new Error('Invalid API key');
        }
        if (error.response?.status === 404) {
          throw new Error('Weather data not found for the given coordinates');
        }
        if (error.response?.status === 429) {
          throw new Error('API rate limit exceeded');
        }

        throw new Error(error.response?.data?.message || 'Failed to fetch weather data');
      }

      logger.error('Unknown error fetching weather:', {
        error: typeof error === 'object' ? JSON.stringify(error) : String(error),
      });
      throw new Error('Failed to fetch weather data');
    }
  }

  /**
   * Generate weather-based outfit recommendations
   */
  private generateWeatherRecommendation(weather: WeatherResponse): string {
    const temp = weather.current.temp - 273.15; // Convert Kelvin to Celsius
    const description = weather.current.weather[0]?.description.toLowerCase() || '';
    const windSpeed = weather.current.wind_speed;
    const humidity = weather.current.humidity;

    let recommendation = '';

    // Temperature-based recommendations
    if (temp <= 0) {
      recommendation =
        '🥶 Very cold! Wear a heavy winter coat, thermal layers, gloves, and a warm hat.';
    } else if (temp <= 10) {
      recommendation = '🧥 Cold weather. Wear a warm jacket, long sleeves, and consider a scarf.';
    } else if (temp <= 20) {
      recommendation = '🧥 Cool weather. A light jacket or sweater would be perfect.';
    } else if (temp <= 30) {
      recommendation =
        '👕 Pleasant weather. Light clothing like t-shirts and light pants are ideal.';
    } else {
      recommendation = '☀️ Hot weather! Wear light, breathable clothing and stay hydrated.';
    }

    // Weather condition adjustments
    if (description.includes('rain') || description.includes('drizzle')) {
      recommendation += " 🌧️ Don't forget an umbrella or raincoat!";
    } else if (description.includes('snow')) {
      recommendation += ' ❄️ Wear waterproof boots and warm layers.';
    } else if (description.includes('cloud')) {
      recommendation += ' ☁️ Cloudy skies - perfect for layering.';
    } else if (description.includes('clear') || description.includes('sunny')) {
      recommendation += ' ☀️ Bright and sunny - consider sunglasses and sunscreen!';
    }

    // Wind adjustments
    if (windSpeed > 10) {
      recommendation += " 💨 It's windy - consider wind-resistant outerwear.";
    }

    // Humidity adjustments
    if (humidity > 80) {
      recommendation += ' 💧 High humidity - wear breathable, moisture-wicking fabrics.';
    }

    return recommendation;
  }
}

export default new LocationWeatherService();
