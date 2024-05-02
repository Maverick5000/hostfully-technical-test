import { memo } from "react";
import useGetProperties from "../../hooks/useGetProperties";
import PropertiesGrid from "./PropertiesGrid";
import Navbar from "../navigation/Navbar";

const Home = () => {
  const { data: properties } = useGetProperties();

  return (
    <>
      <Navbar />
      <PropertiesGrid properties={properties} />
    </>
  );
};

export default memo(Home);
