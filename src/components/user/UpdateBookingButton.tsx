import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  RangeCalendar,
  useDisclosure,
} from "@nextui-org/react";
import { memo, useState } from "react";
import { parseDate } from "@internationalized/date";
import formatDate from "../../utils/formatDate";
import { Booking } from "../../types/Booking";
import { UpdateBooking } from "../../hooks/useUpdateBooking";

const UpdateBookingButton = ({
  booking,
  submit,
}: {
  booking: Booking;
  submit: ({ bookingId, startDate, endDate }: UpdateBooking) => void;
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [value, setValue] = useState({
    start: parseDate(booking.startDate),
    end: parseDate(booking.endDate),
  });

  return (
    <>
      <Button onPress={onOpen} color="warning" radius="full" size="sm">
        Update
      </Button>
      <Modal
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
                <RangeCalendar
                  aria-label="Date (Controlled)"
                  value={value}
                  onChange={setValue}
                />
                <p>{`From: ${formatDate(value.start.toString())}`}</p>
                <p>{`To: ${formatDate(value.end.toString())}`}</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="success"
                  onPress={() => {
                    submit({
                      bookingId: booking.id,
                      startDate: value.start.toString(),
                      endDate: value.end.toString(),
                    });
                    onClose();
                  }}
                >
                  Update
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default memo(UpdateBookingButton);
