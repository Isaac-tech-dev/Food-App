import { View, Text, TouchableWithoutFeedback, Image } from "react-native";
import React from "react";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParamList } from "../navigation/navigation";

type RestaurantProps = NativeStackScreenProps<StackParamList, "Resturant">;

interface Dish {
  id: number;
  name: string;
  description: string;
  price: number;
  image: any; // Change 'any' to the actual type of your image data if possible
}

interface Restaurant {
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
  dishes: Dish[];
}

interface RestaurantCardProps {
  item: Restaurant;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate("Resturant", {...item})}>
      <View
        style={{ shadowColor: themeColors.bgColor(0.5), shadowRadius: 7 }}
        className={`mr-6 bg-[#fff] rounded-3xl shadow-lg`}
      >
        <Image className={`h-36 w-64 rounded-t-3xl`} source={item.image} />
        <View className={`px-3 pb-4 space-y-2`}>
          <Text className={`text-lg font-bold pt-2`}>{item.name}</Text>
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
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RestaurantCard;
