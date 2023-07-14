import {Image } from "react-native";
import React from "react";

const Loader = () => {
  return (
    <Image
      className="w-full h-[250px] mt-20"
      alt="Loading"
      source={require("../../assets/loader.gif")}
    />
  );
};

export default Loader;
