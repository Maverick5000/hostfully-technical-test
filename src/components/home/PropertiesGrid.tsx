import { memo } from "react";
import { Property } from "../../types/Property";
import PropertyCard from "../shared/PropertyCard";

const BookingsGrid = ({
  properties,
}: {
  properties: Property[];
  userBookings?: boolean;
}) => {
  return (
    <div className="bg-slate-100 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 overflow-y-auto overflow-x-hidden">
      {properties?.map((property: Property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
};

export default memo(BookingsGrid);
