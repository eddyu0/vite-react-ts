import { env } from "@/env";
import { HttpResponse, http } from "msw";
import { CurrentWeatherMock } from "./weather-data";

const handleGetCurrentWeather = http.get(`${env.API_URL}/forecast`, () => {
  return HttpResponse.json(CurrentWeatherMock);
});

export const handlers = [handleGetCurrentWeather];
