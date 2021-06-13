import { Button, Card, Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Store } from '../store';
import { clearCart } from '../store/cart';
import { reduceProductQuantity } from '../store/product';

const Cart: React.FC = () => {
  const cartSelector = useSelector((store: Store) => store.cart.cartList);
  const history = useHistory();
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onCheckout = () => {
    dispatch(reduceProductQuantity(cartSelector));
    dispatch(clearCart());
    setIsModalVisible(true);
  };

  const handleOk = () => {
    history.push('/');
  };

  useEffect(() => {
    if (isModalVisible) {
      Modal.success({
        title: 'Your order is complete',
        content: (
          <div>
            <p>Successfully purchased</p>
          </div>
        ),
        onOk: handleOk
      });
    }
  }, [isModalVisible]);

  const cartItemList = cartSelector.map((item) => {
    return (
      <div>
        <img src={item.product.imgURL} width={300} />
        <h1>{item.product.itemName}</h1>
        <h2> quantity : {item.quantity}</h2>
        <h2> total : {item.quantity * item.product.price}</h2>
      </div>
    );
  });

  return (
    <div>
      <Card>
        {cartItemList}
        <Button type="primary" onClick={onCheckout}>
          checkout
        </Button>
      </Card>
    </div>
  );
};
export default Cart;
