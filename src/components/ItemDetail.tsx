import { Button } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Store } from '../store';
import { addProductToCart } from '../store/cart';
import { StockType } from '../types/Product';

interface ItemDetailProps {
  itemID: string;
}

const ItemDetail: React.FC<ItemDetailProps> = (props) => {
  console.log(props.itemID);
  const dispatch = useDispatch();
  const selector = useSelector(
    (store: Store) =>
      store.product.productList.find(
        (stock: StockType) => stock.product.id === props.itemID
      )?.product
  );

  const onAddProductToCart = () => {
    console.log('selector' + selector);

    const objectToRedux: StockType = {
      product: selector || {
        id: '',
        itemName: '',
        description: '',
        imgURL: '',
        price: 0
      },
      quantity: 1
    };

    dispatch(addProductToCart(objectToRedux));
    console.log('Click add product');
  };

  return (
    <div>
      ItemDetail pages {props.itemID}
      <Button type="primary" onClick={onAddProductToCart}>
        -
      </Button>
      <Button type="primary" onClick={onAddProductToCart}>
        +
      </Button>
    </div>
  );
};

export default ItemDetail;
