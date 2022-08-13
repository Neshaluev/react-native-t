import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";

import {
  addBasket,
  selectBasketItems,
  selectBasketItemsWidthId,
} from "../../redux/basketSlice";

const DishRow = ({ id, name, description, price, image }) => {
  const [isPressed, setIsPressed] = useState(false);

  // const items = useSelector((store) => store.basket.items);
  // const items = useSelector(selectBasketItems);
  const items = useSelector((state) => selectBasketItemsWidthId(state, id));
  const dispatch = useDispatch();

  const handleAddItemsToBasket = () => {
    dispatch(addBasket({ id, name, description, price, image }));
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={`bg-white border p-4 border-gray-200 ${
          isPressed && `border-b-0`
        }`}
      >
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{description}</Text>
            <Text className="text-gray-400">{`$${price}`}</Text>
          </View>
          <View>
            <Image
              style={{
                borderWidth: 1,
                borderColor: "#f3f3f4",
              }}
              source={{ uri: image }}
              className="h-20 w-20 bg-gray-300 p-4"
            />
          </View>
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity>
              <MinusCircleIcon
                size={40}
                // color={items.lenght > 0 ? "#00ccbb" : "gray"}
                color={"#00ccbb"}
              />
            </TouchableOpacity>
            <Text>{items.length}</Text>
            <TouchableOpacity onPress={handleAddItemsToBasket}>
              <PlusCircleIcon
                size={40}
                // color={items.lenght > 0 ? "#00ccbb" : "gray"}
                color={"#00ccbb"}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
