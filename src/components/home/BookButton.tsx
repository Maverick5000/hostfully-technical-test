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
import { today, getLocalTimeZone } from "@internationalized/date";
import useCreateBooking from "../../hooks/useCreateBooking";
import formatDate from "../../utils/formatDate";

const BookButton = ({ propertyId }: { propertyId: string }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [value, setValue] = useState({
    start: today(getLocalTimeZone()),
    end: today(getLocalTimeZone()).add({ weeks: 1 }),
  });
  const { mutate: createBooking } = useCreateBooking();

  return (
    <>
      <Button onPress={onOpen} color="primary" radius="full" size="sm">
        Book now
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
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
                Select what dates you would like to book
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
                    createBooking({
                      propertyId,
                      startDate: value.start.toString(),
                      endDate: value.end.toString(),
                    });
                    onClose();
                  }}
                >
                  Book
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default memo(BookButton);
