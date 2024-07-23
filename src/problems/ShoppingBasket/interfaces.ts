export interface Product {
  product_uid: string;
  retail_price: {
    price: number;
    measure: string;
  };
}

export interface Basket {
  lines: BasketLine[];
  totalItemCount: number;
  total: number;
}

export interface BasketLine {
  uid: string;
  quantity: number;
  subtotal: number;
}
