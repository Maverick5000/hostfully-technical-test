import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { memo, useCallback } from "react";
import { Booking } from "../../types/Booking";
import BookForm from "../home/BookForm";
import toast from "../../utils/toast";
import validateOverlap from "../../utils/validateOverlap";
import useGetUserBookings from "../../hooks/useGetUserBookings";

const UpdateBookingButton = ({
  booking,
  submit,
}: {
  booking: Booking;
  submit: ({
    id,
    email,
    firstName,
    lastName,
    startDate,
    endDate,
  }: Omit<Booking, "propertyId">) => void;
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { data: bookings } = useGetUserBookings();

  const handleSubmit = useCallback(
    (data: Omit<Booking, "propertyId" | "id">, onClose: () => void) => {
      const updatedBooking = { id: booking.id, ...data };
      if (validateOverlap(updatedBooking, bookings)) {
        toast.error("You already have a booking on those dates.");
        return;
      }
      submit(updatedBooking);
      onClose();
      toast.info("Booking updated successfully.");
    },
    [bookings, submit, booking.id],
  );

  return (
    <>
      <Button
        data-testid="update-booking-button"
        onPress={onOpen}
        color="warning"
        radius="full"
        size="sm"
      >
        Update
      </Button>
      <Modal
        size="5xl"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
        backdrop="blur"
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          },
        }}
      >
        <ModalContent className="bg-black text-white text-center bg-gradient-to-tr from-primary/70 to-secondary/70">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Select the new dates for your booking
              </ModalHeader>
              <ModalBody>
                <BookForm
                  onClose={onClose}
                  initialValues={booking}
                  onSubmit={(data: Omit<Booking, "propertyId" | "id">) =>
                    handleSubmit(data, onClose)
                  }
                />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default memo(UpdateBookingButton);
