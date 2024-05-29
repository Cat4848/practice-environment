import { databaseUrlUrl } from "./helpers/constants";
import getProductsFromDatabase from "./helpers/getProductsFromDatabase";

test("if the shopping basket contents are correct", async () => {
  const allProducts = await getProductsFromDatabase(databaseUrlUrl);
});
