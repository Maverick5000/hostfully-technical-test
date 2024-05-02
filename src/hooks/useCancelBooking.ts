import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Booking } from "../types/Booking";

const useCancelBooking = () => {
  const queryclient = useQueryClient();

  const cancelBooking = async (bookingId: string) => {
    queryclient.setQueryData<Booking[]>(["bookings"], (bookings) => {
      if (!bookings) {
        return [];
      }
      return bookings.filter((booking) => booking.id !== bookingId);
    });
  };

  return useMutation({
    mutationFn: cancelBooking,
  });
};

export default useCancelBooking;
