import { Card, Col } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React from 'react';
import { Link } from 'react-router-dom';
import { Product, StockType } from '../types/Product';

interface ListingCardProp extends Product, Omit<StockType, 'product'> {}

const ListingCard: React.FC<ListingCardProp> = (props) => {
  const { id, itemName, description, imgURL, price, quantity, detail } = props;
  const priceToShow = `${price} baht`;
  const subTitle = (
    <span>
      <h4>
        {priceToShow}
        <br /> In Stock : {quantity}
      </h4>
      {description}
      {detail}
    </span>
  );

  return (
    <Col className="gutter-row" span={8}>
      <Link to={`/product/${id}`}>
        <Card hoverable={true} cover={<img src={imgURL} alt={''}/> }>
          <Meta title={itemName} description={subTitle}></Meta>
        </Card>
      </Link>
    </Col>
  );
};

export default ListingCard;
