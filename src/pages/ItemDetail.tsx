import React from 'react';
import ItemDetail from '../components/ItemDetail';
import { useParams } from 'react-router';
import { RouterParams } from '../types/RouterParams';

const ItemDetailPage: React.FC = () => {
  const { itemID } = useParams<RouterParams>();

  return <ItemDetail itemID={itemID} />;
};

export default ItemDetailPage;
