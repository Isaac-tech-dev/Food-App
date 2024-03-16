import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParamList } from "../navigation/navigation";

type CarticonProps = NativeStackScreenProps<StackParamList, "Cart">;

const Carticon = () => {
  const navigation = useNavigation();
  return (
    <View className={`absolute bottom-5 w-full z-50`}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Cart")}
        className={`flex-row justify-between items-center rounded-full mx-5 p-4 py-3 shadow-lg`}
        style={{ backgroundColor: themeColors.bgColor(1) }}
      >
        <View
          className={`p-2 px-4 rounded-full`}
          style={{ backgroundColor: "rgba(255,255,255,0.3)" }}
        >
          <Text className={`font-extrabold text-[#fff] text-lg`}>3</Text>
        </View>
        <Text
          className={`flex-1 text-center font-extrabold text-white text-lg`}
        >
          View Cart
        </Text>
        <Text className={`font-extrabold text-white text-lg`}>${50}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Carticon;
