import { useQuery } from "@tanstack/react-query";
import defaultPropertiesMock from "../utils/defaultPropertiesMock.json";
import { Property } from "../types/Property";

const useGetProperties = () => {
  return useQuery<Property[]>({
    queryKey: ["properties"],
    initialData: defaultPropertiesMock.properties,
  });
};

export default useGetProperties;
