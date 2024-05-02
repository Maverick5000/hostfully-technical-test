import { Card, CardHeader, CardFooter, Image } from "@nextui-org/react";
import { memo } from "react";
import { Property } from "../../types/Property";
import BookButton from "../home/BookButton";

const PropertyCard = ({
  property,
  isBooked = false,
}: {
  property: Property;
  isBooked?: boolean;
}) => {
  return (
    <Card
      isFooterBlurred
      className="w-full sm:max-w-[400px] h-[350px] col-span-4 sm:col-span-1"
    >
      <CardHeader className="absolute bg-gradient-to-tr from-primary/70 to-secondary/70 z-10 flex-col items-start">
        <p className="text-xs text-white/90 uppercase font-bold">
          {property.address}, {property.country}
        </p>
        <h4 className="text-white/90 font-medium text-xl">
          {property.description}
        </h4>
      </CardHeader>
      <Image
        removeWrapper
        className="z-0 w-full h-full object-cover"
        src={property.image}
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600">
        <div className="h-10 flex flex-grow gap-2 items-center">
          {property.verified ? (
            <Image
              className="rounded-full w-10 h-10"
              src="https://icon-library.com/images/verified-icon-png/verified-icon-png-11.jpg"
            />
          ) : null}
          <div className="flex flex-col">
            <p className="text-tiny text-white/90">
              Starting from {property.price}$
            </p>
            {property.verified ? (
              <p className="text-tiny text-white/90">Verified</p>
            ) : null}
          </div>
        </div>
        {!isBooked ? <BookButton propertyId={property.id} /> : null}
      </CardFooter>
    </Card>
  );
};

export default memo(PropertyCard);
