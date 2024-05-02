import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import useCancelBooking from "../../hooks/useCancelBooking";
import { memo, useState } from "react";

const CancelBookingButton = ({ bookingId }: { bookingId: string }) => {
  const { mutate: cancelBooking } = useCancelBooking();
  const [isCancelOpen, setIsCancelOpen] = useState(false);

  return (
    <Popover
      isOpen={isCancelOpen}
      onOpenChange={(open) => setIsCancelOpen(open)}
      placement="top"
      showArrow={true}
    >
      <PopoverTrigger>
        <Button
          data-testid="cancel-booking-button"
          color="danger"
          radius="full"
          size="sm"
        >
          Cancel
        </Button>
      </PopoverTrigger>
      <PopoverContent className="bg-gradient-to-tr from-primary/90 to-secondary/90 text-white">
        <div className="px-1 py-2">
          <div className="text-small font-bold">
            Are you sure you want to cancel this booking?
          </div>
          <div className="flex justify-center gap-2 mt-1">
            <Button
              onPress={() => setIsCancelOpen(false)}
              color="danger"
              radius="full"
              size="sm"
            >
              No
            </Button>
            <Button
              onPress={() => cancelBooking(bookingId)}
              color="success"
              radius="full"
              size="sm"
              data-testid="cancel-booking-submit-button"
            >
              Yes
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default memo(CancelBookingButton);
