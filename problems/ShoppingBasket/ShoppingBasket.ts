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
  #basketProductsIDQuantityMap = new Map<string, number>();

  getShoppingBasketContents(productsDatabase: Product[]) {
    this.#createBasketProductsIDQuantityMap();
    const basketLines: BasketLine[] = this.#createBasketLines(productsDatabase);
    const completeBasket: Basket = this.#createCompleteBasket(basketLines);

    return JSON.stringify(completeBasket);
  }

  #createBasketProductsIDQuantityMap(): void {
    this.#basketProductsID.forEach((productID) => {
      const productIDValue = this.#basketProductsIDQuantityMap.get(productID);

      if (productIDValue) {
        this.#basketProductsIDQuantityMap.set(productID, productIDValue + 1);
      } else {
        this.#basketProductsIDQuantityMap.set(productID, 1);
      }
    });
  }

  #createBasketLines(productsDatabase: Product[]): BasketLine[] {
    const basketLines: BasketLine[] = [];
    productsDatabase.forEach((product) => {
      const productQuantity = this.#basketProductsIDQuantityMap.get(
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

  #createCompleteBasket(basketLines: BasketLine[]): Basket {
    const basket: Basket = {
      lines: [],
      totalItemCount: 0,
      total: 0
    };

    const completeBasket: Basket = basketLines.reduce((basket, line) => {
      basket.lines.push(line);
      basket.totalItemCount += line.quantity;
      basket.total += line.subtotal;
      return basket;
    }, basket);
    return completeBasket;
  }
}
