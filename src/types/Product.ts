export interface Product {
  id: string;
  itemName: string;
  description: string;
  imgURL: string;
  price: number;
}

export type StockType = {
  product: Product;
  quantity: number;
};



