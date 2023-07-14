import { View, Text, TouchableOpacity} from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import * as Linking from 'expo-linking';
import { ImageBackground } from "react-native";
import Appliance from "./Appliance";

const Dish = ({dish}) => {
  const params = {
    rating : dish.rating,
    description : dish.description,
  };
  const url = Linking.makeUrl(`/select/${dish.name}`, params );

  return (
    <View className="flex flex-row py-6 border-b-2 border-slate-300 justify-between items-center flex-wrap">
      <View className="flex gap-2 w-[55%] ">
        <View className="flex flex-row items-center ">
          <Text maxFontSizeMultiplier={1} className="text-lg font-bold mr-1">{dish.name}</Text>
          <MaterialCommunityIcons
            name="square-circle"
            size={16}
            color="green"
          />
          <View className="flex flex-row items-center justify-center ml-2 bg-green-600  px-1 rounded-sm">
            <Text className=" text-[10px] font-bold text-white mr-[4px]">
              {dish.rating}
            </Text>
            <AntDesign name="star" size={8} color="white" />
          </View>
        </View>
        <View className=" flex flex-row  items-center ">
          {
            dish.equipments.map((app ,i)=>{
              return <Appliance app = {app} key={i}/>
            })
          }
          <View className="bg-slate-300 h-full w-[1px] mx-4"></View>
          <Link  href={url} asChild>
            <TouchableOpacity>
              <Text maxFontSizeMultiplier={1} className="text-sm font-bold ">Ingredients</Text>
              <Text maxFontSizeMultiplier={1} className="text-xs text-orange-400 font-bold">
                View List {">"}
              </Text>
            </TouchableOpacity>
          </Link>
        </View>
        <Text maxFontSizeMultiplier={1} className="text-slate-500 my-2">{dish.description}</Text>
      </View>
      <View className="flex justify-center items-center">
        <View className=" rounded-lg overflow-hidden">
          <ImageBackground
           
            className="w-[140px] h-[110px]"
            source={{ uri: dish.image }}
          />
        </View>
        <TouchableOpacity className="absolute bottom-[-15px] border-2  border-orange-400  bg-white  p-1 px-8 rounded-xl">
          <View className="absolute right-0">
            <Ionicons name="add" size={18} color="orange" />
          </View>

          <Text maxFontSizeMultiplier={1} className=" text-center  text-lg text-orange-400">Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Dish;
