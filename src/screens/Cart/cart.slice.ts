import {createSlice} from '@reduxjs/toolkit';

export interface IState {
  cartItems: Array<object>;
  totalItems: number;
  totalAmount: number;
}

const initialState: IState = {
  cartItems: [],
  totalItems: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cartReducer',
  initialState,
  reducers: {
    addToCart: (state: IState, action) => {
      const newItem = action.payload;
      const existingItemIndex = state.cartItems.findIndex(
        item => item.id === newItem.id,
      );

      if (existingItemIndex !== -1) {
        // Item already exists in cart, increase its quantity
        state.cartItems[existingItemIndex].quantity += 1;
      } else {
        // Item doesn't exist in cart, add it to cart
        state.cartItems.push({...newItem, quantity: 1});
      }

      // Calculate the total amount
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0,
      );

      state.totalItems = state.cartItems.length;
    },

    increaseQuantity: (state, action) => {
      const itemToUpdate = state.cartItems.find(
        (item: any) => item.id === action.payload,
      );
      if (itemToUpdate) {
        itemToUpdate.quantity += 1;
      }
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0,
      );
    },
    decreaseQuantity: (state, action) => {
      const itemToUpdate = state.cartItems.find(
        item => item.id === action.payload,
      );
      if (itemToUpdate) {
        if (itemToUpdate.quantity > 1) {
          itemToUpdate.quantity -= 1; // Decrease quantity by 1
        } else {
          // Remove item if quantity becomes 0 or below
          state.cartItems = state.cartItems.filter(
            item => item.id !== action.payload,
          );
        }
      }
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0,
      );
    },
  },
});

export const {addToCart, increaseQuantity, decreaseQuantity} =
  cartSlice.actions;
export const cartReducer = cartSlice.reducer;
