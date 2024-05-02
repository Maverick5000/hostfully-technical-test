import { useQuery } from "@tanstack/react-query";
import defaultUserBookingsMock from "../utils/defaultUserBookingsMock.json";
import { Booking } from "../types/Booking";

const useGetUserBookings = () => {
  return useQuery<Booking[]>({
    queryKey: ["bookings"],
    initialData: [...defaultUserBookingsMock.bookings],
  });
};

export default useGetUserBookings;
