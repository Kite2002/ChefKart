import { View, Text, ImageBackground } from "react-native";
import React from "react";

const PopularDish = ({item}) => {
  return (
    <View
      className=" bg-stone-900 overflow-hidden  w-[100px] flex justify-center items-center aspect-square p-2 mr-4 rounded-full border-orange-400 border-2 my-4"
    >
      <ImageBackground
        className=" w-[110px] h-[110px] flex justify-center items-center aspect-square bg-opacity-40 opacity-60"
        resizeMode="cover"
        source={{ uri: item.image }}
      ></ImageBackground>
      <Text className="text-white text-base text-center font-semibold absolute">
        {item.name}
      </Text>
    </View>
  );
};

export default PopularDish;
