import { ProductsDatabase } from "../SupermarketCheckout";

test("if the shopping basket contents are correct", async () => {
  const db = new ProductsDatabase();
  const productsUrl =
    "https://s3.eu-west-1.amazonaws.com/hackajob-assets1.p.hackajob/challenges/sainsbury_products/products.json";
  const products = await db.getProducts(productsUrl);
});
