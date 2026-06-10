import axios from "axios";
import { Product } from "./types";

type ProductsResponse = {
  products: Product[];
};

export default async function getProducts(): Promise<Product[]> {
  const categories = ["mens-shirts", "mens-shoes", "tops", "womens-dresses"];

  const responses = await Promise.all(
    categories.map((category) =>
      axios.get<ProductsResponse>(
        `https://dummyjson.com/products/category/${category}`,
      ),
    ),
  );

  return responses.flatMap((res) => res.data.products);
}
