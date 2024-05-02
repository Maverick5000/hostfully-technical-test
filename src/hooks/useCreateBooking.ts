import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Booking } from "../types/Booking";

const useCreateBooking = () => {
  const queryclient = useQueryClient();

  const createBooking = async ({
    propertyId,
    email,
    firstName,
    lastName,
    startDate,
    endDate,
  }: Omit<Booking, "id">) => {
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
          email,
          firstName,
          lastName,
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
