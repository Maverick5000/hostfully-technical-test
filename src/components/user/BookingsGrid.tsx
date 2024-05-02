import { memo } from "react";
import useGetProperties from "../../hooks/useGetProperties";
import useGetUserBookings from "../../hooks/useGetUserBookings";
import { Booking } from "../../types/Booking";
import { Property } from "../../types/Property";
import Navbar from "../navigation/Navbar";
import BookingInfo from "./BookingInfo";

const BookingsGrid = () => {
  const { data: bookings } = useGetUserBookings();
  const { data: properties } = useGetProperties();

  const mapBookings = bookings?.map((booking: Booking) => {
    const property = properties.find(
      (property: Property) => property.id === booking.propertyId,
    );
    if (property) {
      return (
        <BookingInfo key={property.id} booking={booking} property={property} />
      );
    }
  });

  return (
    <>
      <Navbar />
      <div className="bg-slate-100 p-4 grid grid-cols-1 lg:grid-cols-5 sm:grid-cols-2 gap-4 overflow-y-auto overflow-x-hidden">
        {mapBookings}
      </div>
    </>
  );
};

export default memo(BookingsGrid);
