import { Product, Basket, BasketLine } from "./interfaces";

export default class ShoppingBasket {
  constructor(basketProductsID: string[]) {
    this.#basketProductsID = basketProductsID;
  }

  #basketProductsID: string[] = [];
  #basketProductsQuantityMap = new Map<string, number>();

  getShoppingBasketContents(productsDatabase: Product[]): string {
    this.#createBasketQuantityMap();
    const basketLines: BasketLine[] = this.#createBasketLines(productsDatabase);
    const completeBasket: Basket = this.#createCompleteBasket(basketLines);

    return JSON.stringify(completeBasket);
  }

  #createBasketQuantityMap(): void {
    this.#basketProductsID.forEach((productID) => {
      const productQuantity =
        this.#isProductInQuantityMapAndReturnItsValue(productID);

      if (productQuantity) {
        this.#basketProductsQuantityMap.set(productID, productQuantity + 1);
      } else {
        this.#basketProductsQuantityMap.set(productID, 1);
      }
    });
  }

  #createBasketLines(productsDatabase: Product[]): BasketLine[] {
    const basketLines: BasketLine[] = [];
    productsDatabase.forEach((product) => {
      const productQuantity = this.#isProductInQuantityMapAndReturnItsValue(
        product.product_uid
      );
      if (productQuantity) {
        const basketLine: BasketLine = this.#createBasketLine(
          product,
          productQuantity
        );
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

  #isProductInQuantityMapAndReturnItsValue(
    productID: string
  ): number | undefined {
    return this.#basketProductsQuantityMap.get(productID);
  }

  #createBasketLine(product: Product, productQuantity: number): BasketLine {
    const basketLine: BasketLine = {
      uid: product.product_uid,
      quantity: productQuantity,
      subtotal: product.retail_price.price * productQuantity
    };
    return basketLine;
  }
}
