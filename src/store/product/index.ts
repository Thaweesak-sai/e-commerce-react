import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createWriteStream } from 'fs';
import { DUMMY_ITEM_LIST } from '../../repository/ItemList';
import { StockType } from '../../types/Product';
import { ProductList } from './type';

let initalStock: StockType[] = [
  { product: DUMMY_ITEM_LIST[0], quantity: 10 },
  { product: DUMMY_ITEM_LIST[1], quantity: 10 },
  { product: DUMMY_ITEM_LIST[2], quantity: 10 }
];
const initialState: ProductList = {
  productList: initalStock
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    reduceProductQuantity: (state, action: PayloadAction<StockType[]>) => {
      const cartList = action.payload;
      state.productList.forEach((productItem) => {
        const match = cartList.find(
          (cartItem) => productItem.product.id === cartItem.product.id
        );
        productItem.quantity -= match?.quantity || 0;
      });
    }
  }
});

export const { reduceProductQuantity } = productSlice.actions;

export default productSlice.reducer;
