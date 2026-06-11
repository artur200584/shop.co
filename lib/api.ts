import axios from "axios";
import { Product } from "./types";

type ProductsResponse = {
  products: Product[];
};

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
