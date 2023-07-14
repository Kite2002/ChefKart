import { View, Text } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const AppliancePic = ({ app }) => {
  switch (app) {
    case "Refrigerator":
      return (
        <View className="flex justify-center items-center gap-2  py-1 mr-1">
          <MaterialCommunityIcons
            name="fridge-industrial-outline"
            size={60}
            color="grey"
          />
          <Text className="">Refrigerator</Text>
        </View>
      );
      
      case "Microwave" :
        return(
          <View className="flex justify-center items-center gap-2  py-1 mr-1">
          <MaterialCommunityIcons
            name="microwave"
            size={60}
            color="grey"
          />
          <Text className="">Microwave</Text>
        </View>
        )
      case "Grill" : 
      return(
        <View className="flex justify-center items-center gap-2  py-1 mr-1">
          <MaterialCommunityIcons
            name="grill"
            size={60}
            color="grey"
          />
          <Text className="">Grill</Text>
        </View>
        
      )
      case "Stove" : 
      return(
        <View className="flex justify-center items-center gap-2  py-1 mr-1">
          <MaterialCommunityIcons
            name="grill"
            size={60}
            color="grey"
          />
          <Text className="">Stove</Text>
        </View>
        
      )
      
  }
  
};

export default AppliancePic;
