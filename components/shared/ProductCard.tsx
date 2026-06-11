import { Product } from "@/lib/types";
import { Star } from "lucide-react";
import Image from "next/image";

type PropsProduct = {
  product: Product;
};

export default function ProductCard({ product }: PropsProduct) {
  return (
    <div className="flex flex-col gap-3">
      <div className="rounded-xl bg-header-background">
        <Image
          src={product.images[0] || "нема зображення"}
          alt={product.title}
          width={300}
          height={300}
        />
      </div>

      <div className="flex flex-col font-bold">
        <p>{product.title}</p>
        <div className="flex gap-2 items-center">
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
        </div>
        <div className="flex items-center gap-2">
          <p>${product.price}</p>
          <p className="bg-red-100 px-3 text-sm text-red-500 rounded-xl">
            -{Math.round(product.discountPercentage)}%
          </p>
        </div>
      </div>
    </div>
  );
}
