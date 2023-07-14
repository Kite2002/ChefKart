import { Link, Stack, useRouter } from "expo-router";
import axios from "axios";

import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";

import DateCard from "./DateCard";
import Catagories from "./Catagories";
import PopularDish from "./PopularDish";
import Loader from "./Loader";
import Dish from "./Dish";

const dishTypes = [
  "Indian",
  "Italian",
  "Mexican",
  "Chinese",
  "Japanese",
  "Thai",
];

const indianFoodItems = [
  {
    name: "Biryani",
    image:
      "https://ikkaskitchen.com.au/cdn/shop/products/goat_91f3f091-da4f-440c-9df8-8e0ff52af7e4.jpg?v=1640588550",
  },
  {
    name: "Butter Chicken",
    image:
      "https://www.simplyrecipes.com/thmb/-QzmQynep4nIQ3tncO0v3_xpPd0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__01__Butter-Chicken-LEAD-2-6ca76f24bbe74114a09958073cb9c76f.jpg",
  },
  {
    name: "Tandoori Chicken",
    image:
      "https://www.licious.in/blog/wp-content/uploads/2020/12/Tandoori-Chicken-750x750.jpg",
  },
  {
    name: "Samosa",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/cb/Samosachutney.jpg",
  },
  {
    name: "Paneer Tikka",
    image:
      "https://www.cookwithkushi.com/wp-content/uploads/2023/02/tandoori_paneer_tikka_restaurant_style.jpg",
  },
  {
    name: "Chole Bhature",
    image:
      "https://media.vogue.in/wp-content/uploads/2020/08/chole-bhature-recipe.jpg",
  },
  {
    name: "Dosa",
    image:
      "https://vismaifood.com/storage/app/uploads/public/8b4/19e/427/thumb__700_0_0_0_auto.jpg",
  },
  {
    name: "Gulab Jamun",
    image:
      "https://www.yummytummyaarthi.com/wp-content/uploads/2022/02/IMG_3682-scaled.jpg",
  },
];

const demoDishes = [
  {
    name: "Paneer Tikka",
    rating: 4.5,
    description:
      "Grilled paneer cubes marinated with spices and served with mint chutney",
    equipments: ["Grill"],
    image:
      "https://www.cookwithmanali.com/wp-content/uploads/2015/07/Restaurant-Style-Recipe-Paneer-Tikka-500x500.jpg",
    id: 2,
  },
  {
    name: "Margherita Pizza",
    rating: 4.7,
    description:
      "Classic pizza topped with tomato sauce, mozzarella cheese, and basil leaves",
    equipments: ["Microwave"],
    image: "https://static.toiimg.com/thumb/56868564.cms?width=1200&height=900",
    id: 3,
  },
  {
    name: "Sushi Rolls",
    rating: 4.8,
    description:
      "Traditional Japanese dish with seasoned rice, fish, and vegetables rolled in seaweed",
    equipments: ["Refrigerator"],
    image:
      "https://www.foodandwine.com/thmb/5m0L19cELC8zqZQGrcfhCTNY5jY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Dragon-Roll-FT-RECIPE0223-5e3d0283beee4921980ad7b5597d85a9.jpg",
    id: 4,
  },
  {
    name: "Pasta Alfredo",
    rating: 4.4,
    description:
      "Creamy pasta dish with fettuccine, Parmesan cheese, and garlic",
    equipments: ["Refrigerator"],
    image:
      "https://thecozycook.com/wp-content/uploads/2022/08/Chicken-Alfredo-Pasta-1-1.jpg",
    id: 5,
  },
  {
    name: "Tandoori Chicken",
    rating: 4.6,
    description:
      "Marinated chicken cooked in a traditional clay oven and served with mint sauce",
    equipments: ["Microwave", "Grill"],
    image:
      "https://www.licious.in/blog/wp-content/uploads/2020/12/Tandoori-Chicken-750x750.jpg",
    id: 6,
  },
];

const select = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [dishes, setDishes] = useState([]);
  const [error, setError] = useState(false);
  const [popular, setPopular] = useState([]);
  const getMenu = async () => {
    setLoading(true);
    setError(false);
    const response = await axios
      .get(
        "https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/"
      )
      .catch((error) => {
        setError(true);
      });
    setDishes([...response.data.dishes, ...demoDishes]);
    setPopular([...response.data.popularDishes, ...indianFoodItems]);
    setLoading(false);
  };

  useEffect(() => {
    getMenu();
  }, []);
  return (
    <View className="bg-white     flex-1">
      <Stack.Screen
        options={{
          title: "Select Dishes",
          headerLeft: () => (
            <TouchableOpacity
              className=" mr-4 p-3"
              onPress={() => router.replace("../")}
            >
              <AntDesign name="left" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
      <DateCard />

      {/* food catagories */}

      <View className=" ml-6">
        <ScrollView horizontal={true}>
          {dishTypes.map((type, i) => {
            return <Catagories key={i} type={type} />;
          })}
        </ScrollView>
      </View>

      {/* food catagories end */}

      {/* Popular Dishes */}
      <View className="ml-6">
        <Text maxFontSizeMultiplier={1.2} className="text-2xl font-bold">
          Popular Dishes
        </Text>
        <ScrollView horizontal={true}>
          {loading ? (
            <Text className="text-xl text-orange-400">Loading....</Text>
          ) : (
            popular.map((item, i) => {
              return <PopularDish key={i} item={item} />;
            })
          )}
        </ScrollView>
      </View>
      {/* Popular Dishes End */}
      {/* Recommended */}
      <View className="border-b-4 border-slate-100 mt-4" />

      <ScrollView className="px-6 mt-3">
        <View className="flex flex-row items-center justify-between ">
          <Text maxFontSizeMultiplier={1.2} className="text-2xl font-bold">
            Recomended{" "}
          </Text>
          <TouchableOpacity className="bg-black px-3 py-1 rounded-lg shadow-xs shadow-slate-800">
            <Text maxFontSizeMultiplier={1} className="text-white text-lg">
              Menu
            </Text>
          </TouchableOpacity>
        </View>

        {error ? (
          <View className="flex justify-center items-center gap-4 mt-4">
            <Text className="text-lg">Some Thing Went Wrong Reload</Text>
            <TouchableOpacity
              onPress={() => {
                getMenu();
              }}
              className="bg-orange-400 px-4 py-2 rounded-lg  flex justify-center items-center w-32"
            >
              <Text className="text-white text-xl font-bold">Try Again</Text>
            </TouchableOpacity>
          </View>
        ) : loading ? (
          <Loader />
        ) : (
          <View className = "pb-20">
            {dishes.map((dish, i) => {
              return <Dish key={i} dish={dish} />;
            })}
          </View>
        )}
      </ScrollView>
      {/* Recommended  End*/}

      <TouchableOpacity className="absolute flex-row  bottom-8 bg-black  justify-center items-center p-4 px-6 rounded-xl shadow-md shadow-black left-0 right-0 mx-10 ">
        <Ionicons
          maxFontSizeMultiplier={1}
          name="fast-food-outline"
          size={28}
          color="white"
        />
        <Text
          maxFontSizeMultiplier={1}
          className=" text-white text-lg font-bold ml-3 mr-5"
        >
          3 Food Item Selcted
        </Text>
        <AntDesign name="arrowright" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};



export default select;
