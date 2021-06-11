import { Row } from 'antd';
import CSS from 'csstype';
import React from 'react';
import '../App.css';
import { DUMMY_ITEM_LIST } from '../repository/ItemList';
import ListingCard from './ListingCard';

const App: React.FC = () => {
  const gridStyle: CSS.Properties = {
    width: '25%',
    textAlign: 'center'
  };

  const cardStyle: CSS.Properties = {
    textAlign: 'center'
  };

  const itemList = DUMMY_ITEM_LIST.map((item) => (
    <ListingCard
      key={item.id}
      id={item.id}
      itemName={item.itemName}
      description={item.description}
      imgURL={item.imgURL}
      price={item.price}
    ></ListingCard>
  ));

  return (
    <div>
      <Row gutter={16}>{itemList}</Row>
    </div>
  );
};

export default App;
