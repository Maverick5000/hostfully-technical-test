import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Booking } from "../types/Booking";

const useUpdateBooking = () => {
  const queryclient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      id,
      email,
      firstName,
      lastName,
      startDate,
      endDate,
    }: Omit<Booking, "propertyId">) => {
      queryclient.setQueryData<Booking[]>(["bookings"], (bookings) => {
        if (!bookings) {
          return [];
        }

        const editedBookings = [...bookings];

        editedBookings.forEach((booking) => {
          if (booking.id === id) {
            booking.email = email;
            booking.firstName = firstName;
            booking.lastName = lastName;
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
