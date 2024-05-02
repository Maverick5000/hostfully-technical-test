import { memo } from "react";
import useGetProperties from "../../hooks/useGetProperties";
import PropertiesGrid from "./PropertiesGrid";
import Navbar from "../navigation/Navbar";
import { Property } from "../../types/Property";
import { Booking } from "../../types/Booking";
import useGetUserBookings from "../../hooks/useGetUserBookings";

const Home = () => {
  const { data: properties } = useGetProperties();
  const { data: bookings } = useGetUserBookings();

  const filteredProperties = properties?.filter(
    (property: Property) =>
      !bookings.some((booking: Booking) => booking.propertyId === property.id),
  );

  return (
    <>
      <Navbar />
      <PropertiesGrid properties={filteredProperties} />
    </>
  );
};

export default memo(Home);
