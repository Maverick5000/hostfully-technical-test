import { memo } from "react";
import { Property } from "../../types/Property";
import { Booking } from "../../types/Booking";
import { Card, CardBody } from "@nextui-org/react";
import PropertyCard from "../shared/PropertyCard";
import CancelBookingButton from "./CancelBookingButton";
import formatDate from "../../utils/formatDate";
import useUpdateBooking from "../../hooks/useUpdateBooking";
import UpdateBookingButton from "./UpdateBookingButton";

const BookingInfo = ({
  property,
  booking,
}: {
  property: Property;
  booking: Booking;
}) => {
  const { mutate: updateBooking } = useUpdateBooking();

  return (
    <div>
      <PropertyCard property={property} isBooked />
      <Card
        isBlurred
        className="mt-2 border-none bg-gradient-to-tr from-primary to-secondary w-full sm:max-w-[400px]"
        shadow="sm"
      >
        <CardBody className="text-white flex flex-row justify-between items-center">
          <div>
            <p>From: {formatDate(booking.startDate)}</p>
            <p>To: {formatDate(booking.endDate)}</p>
          </div>
          <div className="flex flex-row gap-1">
            <CancelBookingButton bookingId={booking.id} />
            <UpdateBookingButton booking={booking} submit={updateBooking} />
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default memo(BookingInfo);
