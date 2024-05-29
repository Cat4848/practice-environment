export default class ShoppingBasket {
  constructor(basketProductsID: string[]) {
    this.#basketProductsID = basketProductsID;
  }

  #basketProductsID: string[] = [];
}
