import { Product } from "./interfaces";

interface Basket {
  lines: BasketLine[];
  totalItemCount: number;
  total: number;
}

interface BasketLine {
  uid: string;
  quantity: number;
  subtotal: number;
}

export default class ShoppingBasket {
  constructor(basketProductsID: string[]) {
    this.#basketProductsID = basketProductsID;
  }

  #basketProductsID: string[] = [];

  getShoppingBasketContents(productsDatabase: Product[]) {
    const basketProductsIDQuantityMap =
      this.#createBasketProductsIDQuantityMap();

    const basket: Basket = {
      lines: [],
      totalItemCount: 0,
      total: 0
    };

    const basketContents: Basket = productsDatabase.reduce(
      (basket, product) => {
        const currentProductQuantity = basketProductsIDQuantityMap.get(
          product.product_uid
        );
        if (currentProductQuantity) {
          basket.lines.push({
            uid: product.product_uid,
            quantity: currentProductQuantity,
            subtotal: product.retail_price.price * currentProductQuantity
          });
          basket.totalItemCount += currentProductQuantity;
          basket.total += product.retail_price.price * currentProductQuantity;
        }
        return basket;
      },
      basket
    );

    return JSON.stringify(basketContents);
  }

  #createBasketProductsIDQuantityMap(): Map<string, number> {
    const basketProductsIDQuantityMap = new Map<string, number>();
    this.#basketProductsID.forEach((productID) => {
      const productIDValue = basketProductsIDQuantityMap.get(productID);

      if (productIDValue) {
        basketProductsIDQuantityMap.set(productID, productIDValue + 1);
      } else {
        basketProductsIDQuantityMap.set(productID, 1);
      }
    });
    return basketProductsIDQuantityMap;
  }

  #createBasketLines(productsDatabase: Product[]): BasketLine[] {
    const basketLines: BasketLine[] = [];
    productsDatabase.forEach((product) => {
      const productQuantity = basketProductsIDQuantityMap.get(
        product.product_uid
      );
      if (productQuantity) {
        const basketLine: BasketLine = {
          uid: product.product_uid,
          quantity: productQuantity,
          subtotal: product.retail_price.price * productQuantity
        };
        basketLines.push(basketLine);
      }
    });
    return basketLines;
  }
}
