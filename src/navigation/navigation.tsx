import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import ResturantScreen from "../screens/ResturantScreen";
import CartScreen from "../screens/CartScreen";
import OrderPreparingScren from "../screens/OrderPreparingScren";
import DeliveryScreen from "../screens/DeliveryScreen";

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

export type StackParamList = {
  Home :undefined
  Resturant :{
    item: Restaurant
  }
  Cart :undefined
  OrderPreparing :undefined
  Delivery :undefined
}

const Stack = createNativeStackNavigator<StackParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Resturant" component={ResturantScreen} />
        <Stack.Screen
          name="Cart"
          options={{ presentation: "modal" }}
          component={CartScreen}
        />
        <Stack.Screen
          name="OrderPreparing"
          options={{ presentation: "fullScreenModal" }}
          component={OrderPreparingScren}
        />
        <Stack.Screen
          name="Delivery"
          options={{ presentation: "fullScreenModal" }}
          component={DeliveryScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
