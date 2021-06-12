import { Row } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import '../App.css';
import { Store } from '../store';
import ListingCard from './ListingCard';

const App: React.FC = () => {
  const selected = useSelector((store: Store) => store.product.productList);
  const itemList = selected.map((item) => (
    <ListingCard
      key={item.product.id}
      id={item.product.id}
      itemName={item.product.itemName}
      description={item.product.description}
      imgURL={item.product.imgURL}
      price={item.product.price}
      quantity = {item.quantity}
    ></ListingCard>
  ));

  return (
    <div>
      <Row gutter={16}>{itemList}</Row>
    </div>
  );
};

export default App;
