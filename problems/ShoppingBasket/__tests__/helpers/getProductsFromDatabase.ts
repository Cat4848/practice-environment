import ProductsDatabase from "../../ProductsDatabase";

export default async function getProductsFromDatabase(databaseUrl: string) {
  const db = new ProductsDatabase();
  const products = await db.getProducts(databaseUrl);
  return products;
}
