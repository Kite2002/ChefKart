import { Link } from "expo-router";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
  TouchableHighlight,
} from "react-native";

export default function Page() {
  return (
    <View className="flex justify-center w-screen h-screen p-8">
      <View className="">
        <Image
          source={require("../assets/home.png")}
          className="w-full h-[300px] object-scale-cover rounded-lg"
        />
      </View>
      <Text maxFontSizeMultiplier={1} className=" text-orange-300" style={styles.title}>
        Chef Kart
      </Text>
      <Text maxFontSizeMultiplier={1} style={styles.subtitle}>Most Trusted Platform to Find a Cook</Text>
      <Link
        className=" mt-4 text-center bg-orange-300 flex justify-center items-center w-64  rounded-xl shadow-lg shadow-orange-400 p-4   "
        href="/select"
        asChild
      >
        <TouchableHighlight>
          <Text maxFontSizeMultiplier={1} className="text-2xl text-white">Select Dishes</Text>
        </TouchableHighlight>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
