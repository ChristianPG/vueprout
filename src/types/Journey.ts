import type Place from "./Place";
import type Segment from "./Segment";

interface Layover {
  location: Place;
  duration: number;
}

interface Layovers {
  all: Layover[];
  short: Layover[];
}

export default interface Journey {
  departureDateTime: string;
  arrivalDateTime: string;
  segments: Segment[];
  originPlace: Place;
  destinationPlace: Place;
  cabinClass: string;
  duration: number;
  layovers: Layovers;
}
