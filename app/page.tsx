import Header from "@/components/shared/Header";
import Brands from "@/components/shared/Brands";
import Products from "@/components/shared/Products";
import Style from "@/components/shared/Style";
import { GetProducts } from "@/lib/api";

export default async function Home() {
  const products = await GetProducts();
  const newProducts = await products.filter((product) => product.isNew);
  const topProduct = await products.filter((product) => product.isPopular);
  return (
    <>
      <Header />
      <Brands />
      <Products products={newProducts} title="NEW ARRIVALS" />
      <Products products={topProduct} title="TOP SELLING" />
      <Style />
    </>
  );
}
