"use client";

import { useState } from "react";
import { Product } from "@/lib/types";
import ProductGrid from "./ProductGrid";
import { Button } from "../ui/button";

type Props = {
  products: Product[];
  style: string;
};

const value = 9;

export default function PaginatedProducts({ products, style }: Props) {
  const [current, setCurrent] = useState(1);
  const [priceRange, setPriceRange] = useState([0, 300]);

  const filteredProducts = products.filter((item) => {
    return item.price >= priceRange[0] && item.price <= priceRange[1];
  });

  const totalPages = Math.ceil(filteredProducts.length / value);

  const startIndex = (current - 1) * value;
  const endIndex = startIndex + value;

  const visibleProducts = filteredProducts.slice(startIndex, endIndex);

  function changePage(page: number) {
    setCurrent(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function applyPriceFilter(range: number[]) {
    setPriceRange(range);
    setCurrent(1);
  }

  return (
    <div>
      <ProductGrid
        products={visibleProducts}
        onApplyPrice={applyPriceFilter}
        style={style}
      />

      <div className="mt-8 flex items-center justify-center">
        {totalPages ? (
          <Button
            variant="outline"
            disabled={current === 1}
            onClick={() => changePage(current - 1)}
          />
        ) : null}

        <div className="flex gap-2">
          {Array.from({ length: totalPages }).map((_, index) => {
            const page = index + 1;

            return (
              <Button
                key={page}
                variant={current === page ? "default" : "ghost"}
                onClick={() => changePage(page)}
              >
                {page}
              </Button>
            );
          })}
        </div>

        {totalPages ? (
          <Button
            variant="outline"
            disabled={current === totalPages}
            onClick={() => changePage(current + 1)}
          >
            Next
          </Button>
        ) : null}
      </div>
    </div>
  );
}
