import * as actionTypes from './actionTypes';

const initialState: ProductState = {
  products: [
    {
      id: '1',
      itemName: 'Bag',
      description: 'description1',
      imgURL:
        'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
      price: 500,
      inventory: 10
    },
    {
      id: '2',
      itemName: 'Hat',
      description: 'description2',
      imgURL:
        'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
      price: 700,
      inventory: 10
    },
    {
      id: '3',
      itemName: 'Pants',
      description: 'description3',
      imgURL:
        'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
      price: 1200,
      inventory: 10
    }
  ]
};

const reducer = (
  state: ProductState = initialState,
  action: ProductAction
): ProductState => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS:
      return { ...state, products: state.products };
  }
  return state;
};
