"use client";

import { Product } from "@/lib/types";
import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import Title from "../shared/Title";

type PropsProduct = {
  products: Product[];
};

export default function RandomProducts({ products }: PropsProduct) {
  const [randomItems, setRandomItems] = useState<Product[]>([]);

  useEffect(() => {
    if (products && products.length > 0) {
      const copy = [...products];
      const shuffled = copy.sort(() => 0.5 - Math.random());
      setRandomItems(shuffled.slice(0, 4));
    }
  }, [products]);

  return (
    <div className="flex flex-col gap-8 pb-10">
      <Title title="You might also like" className="text-center" />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {randomItems.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`}>
            <div className="flex flex-col gap-3">
              <div className="rounded-xl bg-header-background">
                <Image
                  src={product.images[0] || product.thumbnail}
                  alt={product.title}
                  width={300}
                  height={300}
                />
              </div>

              <div className="flex flex-col font-bold">
                <p>{product.title}</p>
                <div className="flex items-center gap-2">
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
                  <p className="rounded-xl bg-red-100 px-3 text-sm text-red-500">
                    -{Math.round(product.discountPercentage)}%
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
