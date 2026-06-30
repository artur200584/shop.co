import axios from "axios";
import { Product, ProductsResponse } from "./types";
import { dressStyleCategories, DressStyle } from "./dress-styles";
import { notFound } from "next/navigation";

export default async function getProductsByCategories(
  categories: string[],
): Promise<Product[]> {
  const res = await Promise.allSettled(
    categories.map((category) =>
      axios.get<ProductsResponse>(
        `https://dummyjson.com/products/category/${category}`,
        { timeout: 2000 },
      ),
    ),
  );
  return res.flatMap((item) =>
    item.status === "fulfilled" ? item.value.data.products : [],
  );
}

export function getProductsByStyle(style: DressStyle) {
  const categories = dressStyleCategories[style];

  return getProductsByCategories([...categories]);
}

export const GetProducts = async () => {
  const urls = [
    "https://dummyjson.com/products/category/mens-shirts",
    "https://dummyjson.com/products/category/mens-shoes",
    "https://dummyjson.com/products/category/womens-dresses",
    "https://dummyjson.com/products/category/womens-shoes",
    "https://dummyjson.com/products/category/womens-bags",
    "https://dummyjson.com/products/category/womens-jewellery",
  ];

  const res = await Promise.all(
    urls.map((url) => axios.get<ProductsResponse>(url)),
  );

  const products = res.flatMap((res) => res.data.products);

  return products.map((product, index) => ({
    ...product,

    isNew: Math.round(product.rating) === 5,
    isSale: product.discountPercentage > 0,
    isPopular: product.rating >= 4.5 && product.stock > 50,
  }));
};

export async function GetProductId(id: string) {
  const res = await axios.get<Product>(`https://dummyjson.com/products/${id}`);

  if (!res) {
    return notFound();
  }
  return res.data;
}
