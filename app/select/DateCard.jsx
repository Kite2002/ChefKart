import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const DateCard = () => {
  return (
    <View>
      <View className=" flex flex-row justify-center items-center   mx-6  p-6 rounded-lg border-b-2 border-slate-200 shadow-lg mt-9 bg-white shadow-slate-500 ">
        <View className="flex flex-row justify-center items-center gap-2  py-1">
          <Ionicons name="ios-calendar-outline" size={28} color="black" />
          <Text className=" font-bold">21 May 2023</Text>
        </View>
        <View className="bg-slate-300 h-full w-[1px] mx-4"></View>
        <View className="flex flex-row justify-center items-center gap-2 ">
          <Ionicons name="alarm-outline" size={28} color="black" />
          <Text className=" font-bold">10:30 Pm-12:30 Pm</Text>
        </View>
      </View>
      <View className="bg-black w-full h-20 absolute -z-10"></View>
    </View>
  );
};

export default DateCard;
