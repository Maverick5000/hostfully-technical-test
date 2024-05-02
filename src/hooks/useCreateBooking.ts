import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Booking } from "../types/Booking";

interface CreateBooking {
  propertyId: string;
  startDate: string;
  endDate: string;
}

const useCreateBooking = () => {
  const queryclient = useQueryClient();

  const createBooking = async ({
    propertyId,
    startDate,
    endDate,
  }: CreateBooking) => {
    queryclient.setQueryData<Booking[]>(["bookings"], (bookings) => {
      if (!bookings) {
        return [];
      }

      const bookingExists = bookings.find(
        (booking: Booking) => booking.propertyId === propertyId,
      );

      if (!bookingExists) {
        const newBooking: Booking = {
          id: Math.random().toString(),
          startDate,
          endDate,
          propertyId,
        };
        return [...bookings, newBooking];
      }

      return [...bookings];
    });
  };

  return useMutation({
    mutationFn: createBooking,
  });
};

export default useCreateBooking;
