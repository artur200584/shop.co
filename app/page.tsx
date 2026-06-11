import Header from "@/components/shared/Header";
import Brands from "@/components/shared/Brands";
import Products from "@/components/shared/Products";
import { GetProducts } from "@/lib/api";

export default async function Home() {
  const products = await GetProducts();
  const newProducts = await products.filter((product) => product.isNew);
  return (
    <>
      <Header />
      <Brands />
      <Products products={newProducts} />
    </>
  );
}
