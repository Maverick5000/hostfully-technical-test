import { Button, Input, RangeCalendar } from "@nextui-org/react";
import { useFormik } from "formik";
import { memo, useState } from "react";
import { today, getLocalTimeZone, parseDate } from "@internationalized/date";
import formatDate from "../../utils/formatDate";
import { Booking } from "../../types/Booking";

const BookForm = ({
  onSubmit,
  onClose,
  initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    startDate: "",
    endDate: "",
  },
}: {
  initialValues?: Omit<Booking, "propertyId" | "id">;
  onSubmit: (booking: Omit<Booking, "propertyId" | "id">) => void;
  onClose: () => void;
}) => {
  const [dateRange, setDateRange] = useState({
    start:
      initialValues.startDate === ""
        ? today(getLocalTimeZone())
        : parseDate(initialValues.startDate),
    end:
      initialValues.startDate === ""
        ? today(getLocalTimeZone()).add({ weeks: 1 })
        : parseDate(initialValues.endDate),
  });

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      onSubmit({
        ...values,
        startDate: dateRange.start.toString(),
        endDate: dateRange.end.toString(),
      });
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="grid grid-cols-1 lg:grid-cols-4 gap-2"
    >
      <Input
        className="col-span-2"
        isRequired
        type="text"
        name="firstName"
        label="First Name"
        placeholder="Enter your name"
        errorMessage="First name is required"
        value={formik.values.firstName}
        onChange={formik.handleChange}
      />
      <Input
        className="col-span-2"
        isRequired
        type="text"
        name="lastName"
        label="Last Name"
        placeholder="Enter your last name"
        errorMessage="Last name is required"
        value={formik.values.lastName}
        onChange={formik.handleChange}
      />
      <Input
        className="col-span-2"
        isRequired
        type="email"
        name="email"
        label="Email"
        placeholder="Enter your email"
        errorMessage="Invalid email"
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      <RangeCalendar
        className="col-span-2"
        minValue={today(getLocalTimeZone())}
        value={dateRange}
        onChange={setDateRange}
        bottomContent={
          <div className="text-black flex items-center justify-evenly p-2">
            <p>{`From: ${formatDate(dateRange.start.toString())}`}</p>
            <p>{`To: ${formatDate(dateRange.end.toString())}`}</p>
          </div>
        }
      />
      <div className="col-span-2 lg:col-span-4 flex gap-2 justify-end">
        <Button color="danger" onPress={onClose}>
          Close
        </Button>
        <Button type="submit" color="success">
          Book
        </Button>
      </div>
    </form>
  );
};

export default memo(BookForm);
