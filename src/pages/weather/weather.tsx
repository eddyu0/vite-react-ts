import { getCurrentWeather } from "@/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export function Weather() {
  const [currentTemp, setCurrentTemp] = useState<number | null>(null);

  useEffect(() => {
    getCurrentWeather()
      .then((weather) => setCurrentTemp(weather.current.temperature_2m))
      .catch(console.error);
  }, []);

  return (
    <>
      <div>Current Temperature: {currentTemp}</div>
      <Link to={"/"}>Go back</Link>
    </>
  );
}
