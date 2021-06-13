export interface Product {
  id: string;
  itemName: string;
  description: string;
  imgURL: string;
  price: number;
  detail: string;
}

export type StockType = {
  product: Product;
  quantity: number;
};
