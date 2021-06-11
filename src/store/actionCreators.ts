import * as actionTypes from './actionTypes';

export function getProducts(product: IProduct) {
  const action: ProductAction = {
    type: actionTypes.GET_PRODUCTS,
    product
  };

  return ;
}
