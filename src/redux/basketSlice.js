import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  error: "",
  isLoading: false,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeBasket: (state, action) => {
      state.items = state.items.filter((i) => i != action.payload);
    },
  },
});

export const { addBasket, removeBasket } = basketSlice.actions;
export const selectBasketItems = (state) => state.basket.items;

export const selectBasketItemsWidthId = (state, id) =>
  state.basket.items.filter((item) => item.id === id);

export const selectBasketTotalPrice = (state) =>
  state.basket.items.reduce((acc, curr) => (acc += curr.price), 0);

export default basketSlice.reducer;
