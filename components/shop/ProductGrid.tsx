import ProductCard from "@/components/shared/ProductCard";
import { Product } from "@/lib/types";
import Filter from "./Filter";
import MobileFilter from "./MobileFilter";
import { RotateCw } from "lucide-react";

import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
} from "@/components/ui/empty";

type ProductGridProps = {
  products: Product[];
  onApplyPrice: (range: number[]) => void;
  style: string;
};

export default function ProductGrid({
  products,
  onApplyPrice,
  style,
}: ProductGridProps) {
  return (
    <div className="flex w-full items-center gap-6 p-3 md:items-start">
      <Filter onApplyPrice={onApplyPrice} />
      <div className="w-full max-w-5xl">
        <div className="flex items-center justify-between pb-3">
          <h1 className="text-3xl font-bold">{style.toLocaleUpperCase()}</h1>
          <MobileFilter onApplyPrice={onApplyPrice} />
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))} */}

          {products.length === 0 ? (
            <div className="col-span-full flex items-center justify-center">
              <Empty>
                <EmptyMedia>
                  <RotateCw />
                </EmptyMedia>
                <EmptyHeader>
                  <EmptyTitle>Not Found</EmptyTitle>
                  <EmptyDescription>Reset Filter</EmptyDescription>
                </EmptyHeader>
              </Empty>
            </div>
          ) : (
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
