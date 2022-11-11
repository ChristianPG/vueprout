import axios from "axios";

import flightOptionsJson from "./mocked_response.json";
import type FlightOptions from "@/types/FlightOptions";

export async function getFlightOptions() {
  try {
    const response = await axios.get(import.meta.env.VITE_API_ENDPOINT);
    return response.data as FlightOptions;
  } catch (error) {
    console.error(error);
    // The data is read from a JSON file because the server fails sometimes for exceeding number of requests
    // 429 - Too Many Requests. Refer: https://beeceptor.com/pricing
    return flightOptionsJson as FlightOptions;
  }
}
