import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StockType } from '../../types/Product';
import { CartList } from './type';

const initialState: CartList = {
  cartList: []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    init() {
      return initialState;
    },

    addProductToCart: (state, action: PayloadAction<StockType>) => {
      const checkDup = state.cartList.some(
        (el) => el.product.id === action.payload.product.id
      );

      console.log('checkd up  = ' + checkDup);
      if (checkDup) {
        state.cartList.forEach((stateElem) => {
          if (stateElem.product.id === action.payload.product.id) {
            stateElem.quantity += action.payload.quantity;
          }
        });
      } else {
        state.cartList.push(action.payload);
      }
    },
    removeProductFromCart: (state, action: PayloadAction<StockType>) => {
      const checkDup = state.cartList.some(
        (el) => el.product.id === action.payload.product.id
      );
      if (checkDup) {
        state.cartList.forEach((stateElem) => {
          if (
            stateElem.product.id === action.payload.product.id &&
            stateElem.quantity !== 0
          ) {
            stateElem.quantity -= action.payload.quantity;
          }
        });
      }
    },
    clearCart: (state) => {
      state.cartList = initialState.cartList;
    }
  }
});

export const { init, addProductToCart, removeProductFromCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
