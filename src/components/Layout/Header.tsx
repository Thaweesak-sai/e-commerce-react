import { ShoppingCartOutlined } from '@ant-design/icons';
import { Badge, Button, PageHeader } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { Store } from '../../store';

const Header: React.FC = () => {
  const cart = useSelector((store: Store) => store.cart.cartList);

  return (
    <PageHeader
      className="site-page-header"
      title="What a FUN React + Redux E-Commerce"
      subTitle="I'm Crying"
      extra={[
        <Button>
          <Badge count={cart.length} size="small" showZero={true}>
            <ShoppingCartOutlined width={20} />
          </Badge>
        </Button>
      ]}
    />
  );
};

export default Header;
