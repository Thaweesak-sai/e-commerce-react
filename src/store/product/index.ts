import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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
    reduceProductQuantity: (
      state,
      action: PayloadAction<{ products: StockType[] }>
    ) => {
      state.productList = state.productList.filter(
        (el) => !action.payload.products.includes(el)
      );
    }
  }
});

export const { reduceProductQuantity } = productSlice.actions;

export default productSlice.reducer;
