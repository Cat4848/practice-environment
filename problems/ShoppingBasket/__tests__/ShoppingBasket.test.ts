import { ProductsDatabase } from "../ProductsDatabase";
import { productsUrl } from "./helpers/constants";

test("if the shopping basket contents are correct", async () => {
  const db = new ProductsDatabase();
  const products = await db.getProducts(productsUrl);
});
