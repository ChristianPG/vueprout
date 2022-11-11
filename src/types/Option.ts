import type Journey from "./Journey";

export default interface FlightOption {
  itineraryPrice: number;
  journeys: Journey[];
  duration: number;
}
