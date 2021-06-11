import { ShoppingCartOutlined } from '@ant-design/icons';
import { Badge, Button, PageHeader } from 'antd';
import React from 'react';

const Header: React.FC = () => {
  return (
    <PageHeader
      className="site-page-header"
      title="What a FUN React + Redux E-Commerce"
      subTitle="I'm Crying"
      extra={[
        <Button>
          <Badge count={5} size="small">
            <ShoppingCartOutlined width={20} />
          </Badge>
        </Button>
      ]}
    />
  );
};

export default Header;
