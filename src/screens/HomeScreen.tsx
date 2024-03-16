import { View, Text, TextInput, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import Categories from "../components/categories";
import { featured } from "../constants";
import FeaturedRow from "../components/FeaturedRow";
import { NativeStackScreenProps } from "@react-navigation/native-stack";


const HomeScreen = () => {
  return (
    <SafeAreaView className={`bg-white`}>
      <StatusBar backgroundColor="dark" />
      {/* Search Bar */}
      <View className={`flex-row items-center space-x-2 px-4 pb-2`}>
        <View
          className={`flex-row flex-1 items-center p-3 rounded-full border border-gray-300`}
        >
          {/* Search */}
          <Icon.Search height={25} width={25} stroke={"grey"} />
          <TextInput placeholder="Restaurants" className={`ml-2 flex-1`} />
          {/* Map Pin */}
          <View
            className={`flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300`}
          >
            <Icon.MapPin height={20} width={20} color={"grey"} />
            <Text className={`text-gray-600`}>Ikeja, Lagos</Text>
          </View>
        </View>
        {/* Restaurant Filter */}
        <View
          className={`p-3 rounded-full`}
          style={{ backgroundColor: themeColors.bgColor(1) }}
        >
          <Icon.Sliders
            height={20}
            width={20}
            strokeWidth={2.5}
            color={"white"}
          />
        </View>
      </View>

      {/* Categories */}
      <Categories />

      {/* Main */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {/* Featured */}
        <View className={`mt-5`}>
          {[featured, featured, featured].map((item, index) => {
            return (
              <FeaturedRow
                key={index}
                title={item.title}
                restaurants={item.restaurants}
                description={item.description}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
