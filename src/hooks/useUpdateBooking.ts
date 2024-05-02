import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Booking } from "../types/Booking";

export interface UpdateBooking {
  bookingId: string;
  startDate: string;
  endDate: string;
}

const useUpdateBooking = () => {
  const queryclient = useQueryClient();

  return useMutation({
    mutationFn: async ({ bookingId, startDate, endDate }: UpdateBooking) => {
      queryclient.setQueryData<Booking[]>(["bookings"], (bookings) => {
        if (!bookings) {
          return [];
        }

        const editedBookings = [...bookings];

        editedBookings.forEach((booking) => {
          if (booking.id === bookingId) {
            booking.startDate = startDate;
            booking.endDate = endDate;
          }
        });

        return editedBookings;
      });
    },
  });
};

export default useUpdateBooking;
