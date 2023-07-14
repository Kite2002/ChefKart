import { View, Text } from "react-native";
import React from "react";

const Catagories = ({type}) => {
  return (
    <View
      className="bg-orange-50 h-12 rounded-full p-2 px-4 mr-4 border-orange-300 border-2 my-4"
    >
      <Text className="text-orange-400 text-base font-semibold">{type}</Text>
    </View>
  );
};

export default Catagories;
