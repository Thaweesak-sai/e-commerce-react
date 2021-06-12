import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cart from "./cart";
import product from "./product";


export type Store = ReturnType<typeof rootReducer>;
const rootReducer = combineReducers({
  cart: cart,
  product: product,

});

const store = configureStore({
  reducer: rootReducer,
});

export { store };
