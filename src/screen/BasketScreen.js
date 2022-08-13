import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { useRoute, useNavigation } from "@react-navigation/native";

import { XCircleIcon } from "react-native-heroicons/outline";

import { useSelector } from "react-redux";

import { selectBasketItems } from "../redux/basketSlice";

const BasketScreen = () => {
  const navigation = useNavigation();

  const items = useSelector(selectBasketItems);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-[#00ccbb] bg-white shadow-xs">
          <View>
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className="text-center text-gray-400">Title Restoraund</Text>
          </View>
        </View>

        <TouchableOpacity
          className="rounded-full bg-gray-100 absolute top-3 right-5"
          onPress={() => navigation.goBack()}
        >
          <XCircleIcon color="#00ccbb" height={50} width={50} />
        </TouchableOpacity>

        <View className="flex-row items-center space-x-4 px-3 py-2 bg-white my-5">
          <Image
            source={{ uri: "https://links.papareact.com/wru" }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <Text className="flex-1">Deliver in 50-75 min</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text className="text-[#00ccbb]">Change</Text>
          </TouchableOpacity>
        </View>

        <ScrollView className="devide-y devide-gray-200">
          <View className="flex-row items-center space-x-3 bg-white py-2 px-2">
            <Text className="text-[#00ccbb] ">{items.length} x</Text>
            <Image
              source={{ uri: "https://links.papareact.com/wru" }}
              className="h-12 w-12 rounded-full"
            />
            <Text className="flex-1">Product name</Text>
            <Text className="text-gray-600">$1290</Text>

            <TouchableOpacity>
              <Text className="text-[#00ccbb] text-xs">Remove</Text>
            </TouchableOpacity>
          </View>
          <View className="flex-row items-center space-x-3 bg-white py-2 px-2">
            <Text className="text-[#00ccbb] ">{items.length} x</Text>
            <Image
              source={{ uri: "https://links.papareact.com/wru" }}
              className="h-12 w-12 rounded-full"
            />
            <Text className="flex-1">Product name</Text>
            <Text className="text-gray-600">$1290</Text>

            <TouchableOpacity>
              <Text className="text-[#00ccbb] text-xs">Remove</Text>
            </TouchableOpacity>
          </View>
          <View className="flex-row items-center space-x-3 bg-white py-2 px-2">
            <Text className="text-[#00ccbb] ">{items.length} x</Text>
            <Image
              source={{ uri: "https://links.papareact.com/wru" }}
              className="h-12 w-12 rounded-full"
            />
            <Text className="flex-1">Product name</Text>
            <Text className="text-gray-600">$1290</Text>

            <TouchableOpacity>
              <Text className="text-[#00ccbb] text-xs">Remove</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <View className="p-5 bg-white mt-5 space-y-4">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Subtotal</Text>
            <Text className="text-gray-400">$1900</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Delivery Fee</Text>
            <Text className="text-gray-400">$500</Text>
          </View>
          <View className="flex-row justify-between">
            <Text>Order total</Text>
            <Text className="font-extrabold">$4300</Text>
          </View>

          <TouchableOpacity className="rounded-lg bg-[#00ccbb] p-4">
            <Text className="text-center text-white text-lg font-bold">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
