import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { themeColors } from "../theme";
import RestaurantCard from "./RestaurantCard";

interface FeaturedRowProps {
  title: string;
  restaurants: {
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
  }[];
  description: string;
}

const FeaturedRow: React.FC<FeaturedRowProps> = ({
  title,
  restaurants,
  description,
}) => {
  return (
    <View>
      <View className={`flex-row justify-between items-center px-4`}>
        <View>
          <Text className={`font-bold text-lg`}>{title}</Text>
          <Text className={`text-xs text-gray-500`}>{description}</Text>
        </View>
        <TouchableOpacity>
          <Text style={{ color: themeColors.text }} className={`font-semibold`}>
            See All
          </Text>
        </TouchableOpacity>
      </View>
      {/* Restaurants */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        className={`overflow-visible py-5`}
      >
        {restaurants.map((restaurant, index) => {
          return <RestaurantCard key={index} item={restaurant} />;
        })}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
