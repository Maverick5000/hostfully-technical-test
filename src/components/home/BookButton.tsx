import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { memo } from "react";
import BookForm from "./BookForm";
import useCreateBooking from "../../hooks/useCreateBooking";

const BookButton = ({ propertyId }: { propertyId: string }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { mutate: createBooking } = useCreateBooking();

  return (
    <>
      <Button onPress={onOpen} color="primary" radius="full" size="sm">
        Book now
      </Button>
      <Modal
        size="5xl"
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
                Please enter your information
              </ModalHeader>
              <ModalBody>
                <BookForm
                  onClose={onClose}
                  onSubmit={(data) => {
                    createBooking({ propertyId: propertyId, ...data });
                    onClose();
                  }}
                />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default memo(BookButton);
