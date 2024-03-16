import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import DishRow from "../components/DishRow";
import Carticon from "../components/Carticon";
import { StatusBar } from "expo-status-bar";

// Define the type for the params
type RootStackParamList = {
  Restaurant: {
    // Define the type for the item
    id: number;
    name: string;
    image: any; // Change 'any' to the actual type of your image data if possible
    description: string;
    lng: number;
    lat: number;
    address: string;
    stars: number;
    reviews: string;
    category: string;
    dishes: {
      id: number;
      name: string;
      description: string;
      price: number;
      image: any; // Change 'any' to the actual type of your image data if possible
    }[];
  };
};

const ResturantScreen = () => {
  const navigation = useNavigation();
  // Use RouteProp to get the correct type for the route
  const { params } = useRoute<RouteProp<RootStackParamList, "Restaurant">>();
  const item = params;

  // Now, item has the correct type inferred from the RouteProp
  //console.log("Restaurant", item);

  return (
    <View>
      <StatusBar style="light"/>
      <Carticon />
      <ScrollView>
        <View className={`relative`}>
          <Image className={`w-full h-72`} source={item.image} />
          {/* Back Button */}
          <TouchableOpacity
            className={`absolute top-14 left-4 bg-gray-50 rounded-full p-2`}
            onPress={() => navigation.goBack()}
          >
            <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
          </TouchableOpacity>
        </View>

        <View
          className={`bg-white -mt-12 pt-6`}
          style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
        >
          {/* Restaurant Name and Descriptions */}
          <View className={`px-5`}>
            <Text className={`text-3xl font-bold`}>{item.name}</Text>
            <View className={`flex-row space-x-2 my-1`}>
              <View className={`flex-row items-center space-x-1`}>
                <Image
                  source={require("../../assets/images/fullStar.png")}
                  className="h-4 w-4"
                />
                <Text className={`text-xs`}>
                  <Text className={`text-green-700`}>{item.stars}</Text>
                  <Text className={`text-gray-700`}>
                    ({item.reviews} reviews) .{" "}
                    <Text className={`font-semibold`}>{item.category}</Text>
                  </Text>
                </Text>
              </View>

              <View className={`flex-row items-center space-x-1`}>
                <Icon.MapPin color={"gray"} width={15} height={15} />
                <Text className={`text-xs text-gray-700`}>
                  Nearby . {item.address}
                </Text>
              </View>
            </View>
            <Text className={`text-gray-500 mt-2`}>{item.description}</Text>
          </View>
        </View>

        {/* Restaurant Menu */}
        <View className={`pb-36 bg-[#fff]`}>
          <Text className={`px-4 py-4 text-2xl font-bold`}>Menu</Text>
          {/* Dishes */}
          {item.dishes.map((dish, index) => {
            return <DishRow key={index} item={{ ...dish }} />;
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default ResturantScreen;
