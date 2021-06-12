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
    // getCartProducts: (state) => {
    //   state.cartList;
    // },
    addProductToCart: (state, action: PayloadAction<StockType>) => {
      const checkDup = state.cartList.some(
        (el) => el.product.id == action.payload.product.id
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
    removeProductFromCart: (
      state,
      action: PayloadAction<{ product: StockType }>
    ) => {
      state.cartList = state.cartList.filter(
        (el) => el.product.id !== action.payload.product.product.id
      );
    },
    clearCart: (state) => {
      state.cartList = initialState.cartList;
    }
  }
});
export const {
  init,
  //   getCartProducts,
  addProductToCart,
  removeProductFromCart,
  clearCart
} = cartSlice.actions;

export default cartSlice.reducer;
