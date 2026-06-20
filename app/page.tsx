import Header from "@/components/shared/Header";
import Brands from "@/components/shared/Brands";
import Products from "@/components/shared/Products";
import Style from "@/components/shared/Style";
import { GetProducts } from "@/lib/api";
import Coments from "@/components/shared/Coments";
import Contact from "@/components/shared/Contact";

export default async function Home() {
  const products = await GetProducts();
  const newProducts = products.filter((product) => product.isNew);
  const topProduct = products.filter((product) => product.isPopular);
  const reviews = products.flatMap((product) => product.reviews);
  return (
    <>
      <Header />
      <Brands />
      <Products products={newProducts} title="NEW ARRIVALS" />
      <Products products={topProduct} title="TOP SELLING" />
      <Style />
      <Coments products={reviews} />
      <Contact />
    </>
  );
}
