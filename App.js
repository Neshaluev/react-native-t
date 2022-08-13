import { StatusBar } from "expo-status-bar";
import { Text, View, Image, TextInput, ScrollView } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useLayoutEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ChevronDownIcon,
  UserIcon,
  AdjustmentsIcon,
  SearchIcon,
} from "react-native-heroicons/outline";

import Categories from "./src/components/Categories";
import FeaturedRow from "./src/components/FeaturedRow";

import RestaurantScreen from "./src/screen/RestaurantScreen";
import BasketScreen from "./src/screen/BasketScreen";

import { store } from "./src/redux/store";
import { Provider } from "react-redux";

const Stack = createNativeStackNavigator();

const Home = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      // headerTitle: "custom title",
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="bg-white pt-5">
      {/* Header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2 ">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon color="#00CCBB" size={20} />
          </Text>
        </View>

        <UserIcon size={35} color="#00CCBB" />
      </View>

      {/* Search */}

      <View className="flex-row items-center pb-2 mx-4 space-x-2">
        <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3 items-center">
          <SearchIcon color="gray" size={20} />
          <TextInput placeholder="Search ..." keyboardType="default" />
        </View>
        <AdjustmentsIcon color="#00CCBB" />
      </View>

      {/* Body */}

      <ScrollView
        className="bg-gray-100 flex-1"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        {/* Categories */}
        <Categories />
        {/* Fetured */}
        <FeaturedRow
          title="Featured"
          description="Paid placements from our pathers"
          featuredCategory="featured"
        />
        {/* Tasty Discounts */}
        <FeaturedRow
          title="Tasty Discounts"
          description="Paid placements from our pathers"
          featuredCategory="discounts"
        />
        {/* Offers near you */}
        <FeaturedRow
          title="Offers near you "
          description="Paid placements from our pathers"
          featuredCategory="offers"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default function App() {
  console.log("Debug");
  return (
    <NavigationContainer>
      <Provider store={store}>
        <TailwindProvider>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Restaurant" component={RestaurantScreen} />
            <Stack.Screen
              name="Basket"
              component={BasketScreen}
              options={{
                presentation: "modal",
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </TailwindProvider>
      </Provider>
    </NavigationContainer>
  );
}
