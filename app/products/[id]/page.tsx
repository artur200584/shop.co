import Breadcrumbs from "@/components/shared/Breadcrumbs";
import FooterBottom from "@/components/shared/FooterBottom";
import Footer from "@/components/shared/Footer";
import { GetProductId, GetProducts } from "@/lib/api";
import Contact from "@/components/shared/Contact";
import ProductGallery from "@/components/product/ProductGallery";
import Title from "@/components/shared/Title";
import { Star, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductDetails from "@/components/product/ProductDetails";
import { formatDateTime } from "@/lib/date";
import RandomProducts from "@/components/product/RandomProducts";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

const sizeItem = ["Small", "Medium", "Large", "X-Large"];

export default async function ProductsPage({ params }: Props) {
  const { id } = await params;
  const product = await GetProductId(id);
  const products = await GetProducts();

  return (
    <section className="flex w-full flex-col items-center justify-center px-4 md:px-20">
      <div className="w-full">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Shop", href: "/shop" },
            { label: product.category },
          ]}
        />
      </div>

      <div className="mx-auto flex w-full max-w-sm flex-col items-center justify-center gap-8 md:max-w-7xl md:flex-row md:items-start">
        <div className="flex w-full justify-center md:flex-1">
          <ProductGallery images={product.images} />
        </div>
        <div className="flex w-full flex-1 flex-col items-start gap-3 md:max-w-none">
          <Title title={product.title} className="p-0 text-left" />

          <div className="flex">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                className={
                  index < Math.round(product.rating)
                    ? "size-4 fill-yellow-400 text-yellow-400"
                    : "size-4 text-gray-300"
                }
              />
            ))}
            <span className="text-sm text-gray-500 pl-2">
              {product.rating}/5
            </span>
          </div>
          <div className="flex items-center gap-2">
            <p>${product.price}</p>
            <p className="bg-red-100 px-3 text-sm text-red-500 rounded-xl">
              -{Math.round(product.discountPercentage)}%
            </p>
          </div>
          <p>{product.description}</p>

          <div className="flex flex-col items-start gap-2 pb-3">
            <p className="text-gray-500">Choose Size</p>

            <div className="flex flex-wrap justify-start">
              {sizeItem.map((item) => (
                <Button key={item} variant="secondary">
                  {item}
                </Button>
              ))}
            </div>
          </div>

          <ProductDetails />
        </div>
      </div>

      <div>
        <Title title="Rating & Reviews" />

        <h2 className="text-2xl pb-5 font-bold">All Reviews</h2>

        <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2">
          {product.reviews.map((item) => (
            <div className="flex flex-col w-full p-3 border border-gray-300 rounded-xl gap-3">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className={
                      index < Math.round(product.rating)
                        ? "size-4 fill-yellow-400 text-yellow-400"
                        : "size-4 text-gray-300"
                    }
                  />
                ))}
              </div>

              <div className="flex gap-3">
                <h3 className="font-bold text-xl">{item.reviewerName}</h3>
                <Check className="size-6 shrink-0 rounded-xl bg-green-500 text-white" />
              </div>
              <p className="text-gray-500">{item.comment}</p>
              <span className="text-gray-500">{formatDateTime(item.date)}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <RandomProducts products={products} />
      </div>

      <Contact />
      <Footer />
      <FooterBottom />
    </section>
  );
}
