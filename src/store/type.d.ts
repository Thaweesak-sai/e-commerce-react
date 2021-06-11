interface IProduct {
  id: string;
  itemName: string;
  description: string;
  imgURL: string;
  price: number;
  inventory: number;
}
type ProductState = {
  products: IProduct[];
};

type ProductAction = {
  type: String;
  product: IProduct;
};

type DispatchType = (args: ProductAction) => ProductAction;
