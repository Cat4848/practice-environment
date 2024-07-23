import { Product } from "./interfaces";

export default class ProductsDatabase {
  async getProducts(url: string) {
    try {
      const products = await this.#getProductsFromUrl(url);
      return products;
    } catch (error) {
      throw new Error("Issue loading products from web link");
    }
  }

  async #getProductsFromUrl(url: string) {
    const request = await fetch(url);
    const products: Product[] = await request.json();
    return products;
  }
}
