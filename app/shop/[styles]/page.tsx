import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { notFound } from "next/navigation";
import { dressStyleCategories, DressStyle } from "@/lib/dress-styles";
import { getProductsByStyle } from "@/lib/api";
import Footer from "@/components/shared/Footer";
import FooterBottom from "@/components/shared/FooterBottom";
import Contact from "@/components/shared/Contact";
import PaginatedProducts from "@/components/shop/PaginatedProducts";

type StylesProps = {
  params: Promise<{
    styles: string;
  }>;
};

export default async function ShopPage({ params }: StylesProps) {
  const { styles } = await params;

  if (!(styles in dressStyleCategories)) {
    return notFound();
  }

  const validStyle = styles as DressStyle;
  const products = await getProductsByStyle(validStyle);

  return (
    <section className="p-5">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Shop", href: "/shop" },
          {
            label: validStyle.charAt(0).toUpperCase() + validStyle.slice(1),
          },
        ]}
      />
      <PaginatedProducts products={products} style={validStyle} />
      <Contact />
      <Footer />
      <FooterBottom />
    </section>
  );
}
