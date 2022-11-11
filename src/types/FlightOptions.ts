import type Option from "./Option";
import type Carriers from "./Carriers";

export default interface FlightOptions {
  options: Option[];
  carriers: Carriers;
}
