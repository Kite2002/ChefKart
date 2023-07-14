import { View, Text, ImageBackground, ScrollView } from "react-native";
import React, { useState } from "react";
import { Stack, useSearchParams } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { useEffect } from "react";
import axios from "axios";
import Loader from "./Loader";
import Appliance from "./Appliance";
import AppliancePic from "./AppliancePic";

const dish = () => {
  const item = useSearchParams();
  const [itemDets, setItemDets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getDishDets = async () => {
    setError(false);
    const response = await axios
      .get(
        "https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/1"
      )
      .catch((error) => {
        setError(true);
      });
    setItemDets(response.data);
    setLoading(false);
  };

  useEffect(() => {
    getDishDets();
  }, []);

  return (
    <View className = "pb-4 bg-white">
      <ScrollView className="bg-white pb-6">
        <Stack.Screen
          options={{
            title: "",
            headerShadowVisible: false,
          }}
        />

        {error ? (
          <View className="flex justify-center items-center gap-4 mt-4">
            <Text className="text-lg">Some Thing Went Wrong Reload</Text>
            <TouchableOpacity
              onPress={() => {
                getDishDets();
              }}
              className="bg-orange-400 px-4 py-2 rounded-lg  flex justify-center items-center w-32"
            >
              <Text className="text-white text-xl font-bold">Try Again</Text>
            </TouchableOpacity>
          </View>
        ) : loading ? (
          <Loader />
        ) : (
          <>
            <View className="flex flex-row items-center  px-6 ">
              <Text className="text-4xl font-bold ">{item.dish}</Text>
              <View className="flex flex-row items-center justify-center ml-2 bg-green-600  px-1 rounded-sm">
                <Text className=" text-[10px] font-bold text-white mr-[4px]">
                  {item.rating}
                </Text>
                <AntDesign name="star" size={8} color="white" />
              </View>
            </View>
            <Text maxFontSizeMultiplier={1} className="w-[64%] text-slate-400 mt-4 px-6 ">
              {item.description} {"\n"}bringing pleasure and satisfaction to our
              palates.
            </Text>
            <View className="mt-8 flex flex-row  items-center px-6 ">
              <AntDesign name="clockcircleo" size={20} color="orange" />
              <Text className="font-bold ml-2">{itemDets.timeToPrepare}</Text>
            </View>
            <View className="w-screen h-2 border-slate-100 border-b-4 mt-12"></View>
            <ImageBackground
              source={require("../../assets/veg.png")}
              className=" absolute right-[-100px] max-w-[80vw]   w-[350px] h-[200px] object-scale-cover rounded-lg top-[80px]"
            />

            <Text className="px-6 mt-5 text-2xl font-bold">Ingredients</Text>
            <Text className="px-6 mt-1 text-slate-400  ">For 2 People</Text>
            <View className="w-screen h-2 border-slate-100 border-b-4 mt-5"></View>
            {Object.entries(itemDets.ingredients).map(([heading, children]) => {
              if (heading === "appliances") {
                return null; // Exclude the "appliances" section
              }
              return (
                <View className="px-6 mt-5" key={heading}>
                  <View className="flex flex-row items-center ">
                    <Text className="capitalize text-xl font-bold mr-2">
                      {heading}
                    </Text>
                    <AntDesign name="caretdown" size={16} color="black" />
                  </View>

                  {children.map((child, index) => (
                    <View
                      className="mt-3 flex flex-row justify-between"
                      key={index}
                    >
                      <Text className=" font-medium">{child.name}</Text>
                      <Text>{child.quantity}</Text>
                    </View>
                  ))}
                </View>
              );
            })}
            <Text className="px-6 mt-10 mb-5 text-2xl font-bold">
              Appliances
            </Text>
            <View className="px-6 flex flex-row  flex-wrap ">
              {itemDets.ingredients.appliances.map((app, i) => {
                return (
                  <View
                    key={i}
                    className="mr-4  bg-slate-100 p-2 rounded-lg  mt-1"
                  >
                    <AppliancePic app={app.name} />
                  </View>
                );
              })}
            </View>
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default dish;
