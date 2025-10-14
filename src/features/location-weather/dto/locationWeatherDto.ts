// DTOs for Location API
/* export interface GetLocationRequest {
  city_name: string;
  country_code: string;
} */

/* export interface LocationResponse {
  name: string;
  lat: number;
  lon: number;
  country: string;
  state: string;
} */

// DTOs for Weather API
export interface GetWeatherRequest {
  lat: number;
  lon: number;
}

// OpenWeather One Call API 3.0 Response
export interface WeatherResponse {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    dew_point: number;
    uvi: number;
    clouds: number;
    visibility: number;
    wind_speed: number;
    wind_deg: number;
    wind_gust?: number;
    weather: Array<{
      id: number;
      main: string;
      description: string;
      icon: string;
    }>;
  };
}

// Combined response for location and weather
export interface LocationWeatherResponse {
  /* location: LocationResponse; */
  weather: WeatherResponse;
  recommendation: string;
}
