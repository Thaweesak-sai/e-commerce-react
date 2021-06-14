import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { Alert, Button, Card, Image, Space } from 'antd';
import Layout, { Content } from 'antd/lib/layout/layout';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Store } from '../store';
import { addProductToCart } from '../store/cart';
import { StockType } from '../types/Product';

interface ItemDetailProps {
  itemID: string;
}

const ItemDetail: React.FC<ItemDetailProps> = (props) => {
  const [quantity, setQuantity] = useState(0);
  const [isOutOfStockErrorDialog, setOutOfStockErrorDialog] = useState(false);
  const [isWrongQuantityErrorDialog, setWrongQuantityErrorDialog] =
    useState(false);

  const dispatch = useDispatch();
  const product = useSelector(
    (store: Store) =>
      store.product.productList.find(
        (stock: StockType) => stock.product.id === props.itemID
      )?.product
  );

  const stockQty = useSelector(
    (store: Store) =>
      store.product.productList.find(
        (stock: StockType) => stock.product.id === props.itemID
      )?.quantity
  );

  const clearFlag = () => {
    setOutOfStockErrorDialog(false);
    setWrongQuantityErrorDialog(false);
  };

  const onIncreaseProductQty = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    clearFlag();
  };

  const onRemoveProductQty = () => {
    if (quantity > 0) setQuantity((prevQuantity) => prevQuantity - 1);
    clearFlag();
  };

  const onAddProductToCart = () => {
    const checkStockQty = stockQty || 0;
    if (quantity > 0) {
      if (checkStockQty >= quantity) {
        const objectToRedux: StockType = {
          product: product || {
            id: '',
            itemName: '',
            description: '',
            imgURL: '',
            detail: '',
            price: 0
          },
          quantity: quantity
        };
        dispatch(addProductToCart(objectToRedux));
      } else {
        setOutOfStockErrorDialog(true);
      }
    } else {
      setWrongQuantityErrorDialog(true);
    }
  };

  return (
    <div>
      <Layout>
        <Content style={{ padding: '50px 50px' }}>
          <Space direction={'vertical'} size={'small'}>
            {isOutOfStockErrorDialog && (
              <Alert
                message={"Can't buy exceed the stock limit"}
                closable={true}
                afterClose={clearFlag}
                type={'error'}
                showIcon
              />
            )}

            {isWrongQuantityErrorDialog && (
              <Alert
                message={'Please select atleast one piece'}
                closable={true}
                afterClose={clearFlag}
                type={'error'}
                showIcon
              />
            )}
            <Card
              style={{
                alignItems: 'center',
                alignContent: 'center',
                textAlign: 'center'
              }}
              cover={<Image width={500} src={product?.imgURL} />}
              actions={[
                <MinusCircleOutlined onClick={onRemoveProductQty} />,
                <span> Quantity : {quantity}</span>,
                <PlusCircleOutlined onClick={onIncreaseProductQty} />
              ]}
            >
              <h2>{product?.itemName}</h2>

              <br />
              {product?.detail}
              <br />
              <h3> Stock : {stockQty}</h3>
              <h4> Price : {product?.price}</h4>
            </Card>
            <div style={{ textAlign: 'center' }}>
              <Button onClick={onAddProductToCart}>Add to cart</Button>
            </div>
          </Space>
        </Content>
      </Layout>
    </div>
  );
};

export default ItemDetail;
