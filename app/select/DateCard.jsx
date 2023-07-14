import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const DateCard = () => {
  return (
    <View>
      <View className=" flex flex-row justify-center items-center   mx-6  p-3 rounded-lg border-b-2 border-slate-200 shadow-lg mt-9 bg-white shadow-slate-500  ">
        <View className="flex flex-row justify-center items-center   py-1 flex-wrap gap-2 max-w-[40%]">
          <Ionicons maxFontSizeMultiplier={1}  name="ios-calendar-outline" size={28} color="black" />
          <Text maxFontSizeMultiplier={1} className=" font-bold ml-2 ">14 July 2023</Text>
        </View>
        <View className="bg-slate-300 h-full w-[1px] mx-4"></View>
        <View className="flex flex-row justify-center items-center gap-2  flex-wrap max-w-[40%]">
          <Ionicons name="alarm-outline" size={28} color="black" />
          <Text maxFontSizeMultiplier={1} className=" font-bold">10:30 Pm-12:30 Pm</Text>
        </View>
      </View>
      <View className="bg-black w-full h-20 absolute -z-10"></View>
    </View>
  );
};

export default DateCard;
