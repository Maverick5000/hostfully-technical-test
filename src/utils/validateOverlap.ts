import { Booking } from "../types/Booking";

const validateOverlap = (bookings: Booking[]): string => {
  console.log(bookings);
  return "overlap";
};

export default validateOverlap;
