import { Booking } from "../types/Booking";

/**
 * @param {Omit<Booking, "propertyId">} booking
 * @param {Booking[]} bookings
 * @returns {boolean}
 * @description Check if the new/edited booking overlaps with existing bookings
 */
const validateOverlap = (
  booking: Omit<Booking, "propertyId">,
  bookings: Booking[],
): boolean => {
  const newStartDate = new Date(booking.startDate);
  const newEndDate = new Date(booking.endDate);

  for (const b of bookings) {
    const existingStartDate = new Date(b.startDate);
    const existingEndDate = new Date(b.endDate);

    if (b.id !== booking.id) {
      if (
        (newStartDate >= existingStartDate && newStartDate < existingEndDate) ||
        (newEndDate > existingStartDate && newEndDate <= existingEndDate) ||
        (newStartDate <= existingStartDate && newEndDate >= existingEndDate)
      ) {
        return true;
      }
    }
  }

  return false;
};

export default validateOverlap;
