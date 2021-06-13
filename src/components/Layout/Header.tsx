import { ShoppingCartOutlined } from '@ant-design/icons';
import { Badge, Button, PageHeader } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Store } from '../../store';

const Header: React.FC = () => {
  const cart = useSelector((store: Store) => store.cart.cartList);
  const history = useHistory();
  const handleClickCart = () => {
    history.push('/cart');
  };

  const handleHomeClick = () => {
    history.push('/');
  };
  return (
    <PageHeader
      className="site-page-header"
      title="What a FUN React + Redux E-Commerce"
      subTitle="I'm Crying"
      extra={[
        <Button onClick={handleHomeClick}> Homie </Button>,
        <Button onClick={handleClickCart}>
          <Badge count={cart.length} size="small" showZero={true}>
            <ShoppingCartOutlined width={20} />
          </Badge>
        </Button>
      ]}
    />
  );
};

export default Header;
