import React from 'react';

export interface ItemDetailProps {
  itemID: string;
}

const ItemDetail: React.FC<ItemDetailProps> = (props) => {
  
  return <div> Listing pages {props.itemID}</div>;
};

export default ItemDetail;
