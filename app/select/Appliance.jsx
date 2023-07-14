import { View, Text } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Appliance = ({ app }) => {
  switch (app) {
    case "Refrigerator":
      return (
        <View className="flex justify-center items-center gap-2  py-1 mr-1">
          <MaterialCommunityIcons
            name="fridge-industrial-outline"
            size={24}
            color="grey"
          />
          <Text className="text-[7px]">Refrigerator</Text>
        </View>
      );
      
      case "Microwave" :
        return(
          <View className="flex justify-center items-center gap-2  py-1 mr-1">
          <MaterialCommunityIcons
            name="microwave"
            size={24}
            color="grey"
          />
          <Text className="text-[7px]">Microwave</Text>
        </View>
        )
      case "Grill" : 
      return(
        <View className="flex justify-center items-center gap-2  py-1 mr-1">
          <MaterialCommunityIcons
            name="grill"
            size={24}
            color="grey"
          />
          <Text className="text-[7px]">Grill</Text>
        </View>
        
      )
      case "Stove" : 
      return(
        <View className="flex justify-center items-center gap-2  py-1 mr-1">
          <MaterialCommunityIcons
            name="grill"
            size={24}
            color="grey"
          />
          <Text className="text-[7px]">Stove</Text>
        </View>
        
      )
      
  }
  
};

export default Appliance;
