import { EditOutlined, EllipsisOutlined } from '@ant-design/icons';
import { Card, Col, Row } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React from 'react';
import { Link } from 'react-router-dom';
import { ItemProps } from '../types/ItemProps';

const ListingCard: React.FC<ItemProps> = (props) => {
  const { id, itemName, description, imgURL, price } = props;
  const priceToShow = `${price} baht`;
  const subTitle = (
    <span>
      <h4>{priceToShow}</h4> {description}
    </span>
  );
  return (
    <Col className="gutter-row" span={8}>
      <Link to={`/product/${id}`}>
        <Card
          hoverable={true}
          cover={<img src={imgURL} />}
          actions={[
            <EditOutlined key="edit" onClick={() => {}} />,
            <EllipsisOutlined key="ellipsis" />
          ]}
        >
          <Meta title={itemName} description={subTitle}></Meta>
        </Card>
      </Link>
    </Col>
  );
};

export default ListingCard;
