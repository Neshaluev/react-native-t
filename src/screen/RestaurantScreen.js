import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import {
  ArrowLeftIcon,
  StarIcon,
  LocationMarkerIcon,
  QuestionMarkCircleIcon,
  ChevronRightIcon,
} from "react-native-heroicons/outline";

import DishRow from "../components/DishRow";

import BasketIcon from "../components/BasketIcon";

const RestaurantScreen = () => {
  const navigation = useNavigation();

  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    },
  } = useRoute();

  useLayoutEffect(() => {
    navigation.setOptions({
      // headerTitle: title,
      headerShown: false,
    });
  }, []);

  const dish = {
    id: 123,
    name: "Dish test",
    description: "Test description text ...",
    price: 1200,
    image: "https://links.papareact.com/wru",
  };
  const dish1 = {
    id: 123456,
    name: "Dish test",
    description: "Test description text ...",
    price: 1200,
    image: "https://links.papareact.com/wru",
  };

  return (
    <>
      <BasketIcon />
      <ScrollView>
        <View className="relative">
          <Image
            source={{ uri: imgUrl }}
            className="w-full h-56 bg-gray-300 p-4"
          />
          <TouchableOpacity className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full">
            <ArrowLeftIcon size={20} color="#00CCBB" />
          </TouchableOpacity>
        </View>

        <View className="bg-white">
          <View className="px-4 pt-4">
            <Text className="text-3xl font-bold">{title}</Text>
            <View className="flex-row space-x-2 ny-1">
              <View className="flex-row items-center space-x-1">
                <StarIcon opacity={0.5} size={22} color={"gray"} />
                <Text className="text-xs text-gray-500">
                  <Text className="text-green-500">{rating}</Text> . {genre}
                </Text>
              </View>

              <View className="flex-row items-center space-x-1">
                <LocationMarkerIcon color={"gray"} opacity={0.4} size={22} />
                <Text className="text-xs text-gray-500">
                  Nearby . {address}
                </Text>
              </View>
            </View>

            <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>

            <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
              <QuestionMarkCircleIcon color="gray" opacity={0.6} size={20} />
              <Text className="pl-2 flex-1 text-md font-bold">
                Have a food allergy?
              </Text>
              <ChevronRightIcon color="#00CCBB" opacity={0.6} size={20} />
            </TouchableOpacity>
          </View>
        </View>

        <View className="pb-36">
          <Text className="px-4 my-3 font-bold text-xl">Menu</Text>

          {/* Dishrows */}
          <DishRow
            id={dish1.id}
            name={dish1.name}
            description={dish1.description}
            price={dish1.price}
            image={dish1.image}
          />
          {Array(5)
            .fill(0)
            .map((d, idx) => (
              <DishRow
                key={idx}
                id={dish.id}
                name={dish.name}
                description={dish.description}
                price={dish.price}
                image={dish.image}
              />
            ))}
        </View>
      </ScrollView>
    </>
  );
};

export default RestaurantScreen;
