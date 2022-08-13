import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { useRoute, useNavigation } from "@react-navigation/native";
import {
  selectBasketItems,
  selectBasketTotalPrice,
} from "../redux/basketSlice";

const BasketIcon = () => {
  const items = useSelector(selectBasketItems);
  const totalPrice = useSelector(selectBasketTotalPrice);
  const navigation = useNavigation();

  console.log("items", items.length);
  console.log("totalPrice", totalPrice);

  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity
        onPress={() => navigation.navigate("Basket")}
        className="mx-5 bg-[#00ccbb] p-4 rounded-lg flex-row"
      >
        <Text className="text-white font-extrabold text-lg bg-[#01a296] py-1 px-2">
          {items.length}
        </Text>
        <Text className="flex-1 text-white font-extrabold text-lg text-center">
          View Basket
        </Text>
        <Text className="text-lg text-white font-extrabold">${totalPrice}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
