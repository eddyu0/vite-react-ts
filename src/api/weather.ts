import { CurrentWeatherMock } from "@/__mocks__/weather-data";
import { env } from "@/env";

export async function getCurrentWeather(
  latitude: number = 51.5,
  longitude: number = -0.12,
) {
  const response = await fetch(
    `${env.API_URL}/forecast?` +
      new URLSearchParams({
        latitude: latitude.toString(),
        longitude: longitude.toString(),
        current: "temperature_2m,wind_speed_10m",
      }).toString(),
  );

  const weather = (await response.json()) as typeof CurrentWeatherMock;

  return weather;
}
