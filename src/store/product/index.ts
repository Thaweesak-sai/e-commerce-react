import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DUMMY_ITEM_LIST } from '../../repository/ItemList';
import { StockType } from '../../types/Product';
import { ProductList } from './type';

const initialState: ProductList = {
  productList: []
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getInitialProduct: (state) => {
      let initalStock: StockType[] = [
        { product: DUMMY_ITEM_LIST[0], quantity: 10 },
        { product: DUMMY_ITEM_LIST[1], quantity: 10 },
        { product: DUMMY_ITEM_LIST[2], quantity: 10 }
      ];
      state.productList = initalStock;
    },
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

export const { getInitialProduct, reduceProductQuantity } =
  productSlice.actions;

export default productSlice.reducer;
