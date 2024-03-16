import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParamList } from "../navigation/navigation";

type OrderPreparingScrenProps = NativeStackScreenProps<StackParamList, "OrderPreparing">;


const OrderPreparingScren = ({navigation}: OrderPreparingScrenProps) => {
  //const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      //Move to deliver screen
      navigation.navigate("Delivery");
    }, 3000);
  }, []);
  return (
    <View className={`flex-1 bg-[#fff] justify-center items-center`}>
      <Image
        source={require("../../assets/images/delivery.gif")}
        className={`w-80 h-80`}
      />
    </View>
  );
};

export default OrderPreparingScren;
