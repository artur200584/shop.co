"use client";

import Title from "./Title";
import { Product } from "@/lib/types";
import ProductCard from "./ProductCard";
import { useState } from "react";
import { Button } from "../ui/button";

type PropsProduct = {
  products: Product[];
  title: string;
};

export default function Products({ products, title }: PropsProduct) {
  const [showAll, setShowAll] = useState(false);

  const visibleProducts = showAll ? products : products.slice(0, 4);

  return (
    <section className="mb-15">
      <Title title={title} variant="link" />

      <div className="flex flex-wrap justify-center w-full items-center gap-3">
        {visibleProducts.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>

      {products.length > 4 && (
        <div className="flex justify-center">
          <Button
            variant="outline"
            className="w-full rounded-full bg-white border-2 mt-5 border-solid border-black p-6 md:w-52"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "View All"}
          </Button>
        </div>
      )}
    </section>
  );
}
