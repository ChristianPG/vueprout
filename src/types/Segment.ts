import type Place from "./Place";

export default interface segment {
  originPlace: Place;
  destinationPlace: Place;
  departureDateTime: string;
  arrivalDateTime: string;
  marketingAirline: string;
  marketingFlightNumber: number | string;
  operatingAirline: string;
  operatingFlightNumber: number | string;
  duration: number;
  fareCategory: string;
  fareBasis: string;
  departureDateTimeWithTimeZone: string;
  arrivalDateTimeWithTimeZone: string;
}
