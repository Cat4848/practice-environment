import { databaseUrlUrl } from "./helpers/constants";
import getProductsFromDatabase from "./helpers/getProductsFromDatabase";
import ShoppingBasket from "../ShoppingBasket";

test("if the shopping basket contents are correct", async () => {
  const shoppingBasketProductIDs = [
    "6447344",
    "6447344",
    "3052068",
    "3052068",
    "3052068"
  ];
  const allProducts = await getProductsFromDatabase(databaseUrlUrl);
  const shoppingBasket = new ShoppingBasket(shoppingBasketProductIDs);
  const output = JSON.stringify({
    lines: [
      { uid: "6447344", quantity: 2, subtotal: 7.5 },
      { uid: "3052068", quantity: 3, subtotal: 11.25 }
    ],
    totalItemCount: 5,
    total: 18.75
  });
  expect(shoppingBasket.getShoppingBasketContents(allProducts)).toBe(output);
});
