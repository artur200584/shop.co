"use client";

import { ArrowRight, SlidersHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

const categories = [
  { label: "T-shirts", value: "tops" },
  { label: "Shorts", value: "shorts" },
  { label: "Shirts", value: "mens-shirts" },
  { label: "Hoodie", value: "hoodies" },
  { label: "Jeans", value: "mens-jeans" },
];

const sizes = [
  "XX-Small",
  "X-Small",
  "Small",
  "Medium",
  "Large",
  "X-Large",
  "XX-Large",
  "3X-Large",
  "4X-Large",
];

type FilterContentProps = {
  showHeaderIcon?: boolean;
  onApplyPrice: (range: number[]) => void;
};

export default function FilterContent({
  showHeaderIcon = false,
  onApplyPrice,
}: FilterContentProps) {
  const [value, setValue] = useState([0, 50]);
  return (
    <div className="flex flex-col gap-10">
      {showHeaderIcon && (
        <div className="flex w-full items-center justify-between">
          <h2 className="font-bold">Filters</h2>
          <SlidersHorizontal />
        </div>
      )}

      <ul className="w-full">
        {categories.map((item) => (
          <li
            key={item.value}
            className="flex items-center justify-between text-gray-600"
          >
            <span>{item.label}</span>
            <ArrowRight className="size-4" />
          </li>
        ))}
      </ul>

      <div>
        <h2 className="pb-2 font-bold">Price</h2>
        <Slider
          onValueChange={setValue}
          value={value}
          max={300}
          step={1}
          className="mx-auto w-full max-w-xs"
        />
      </div>
      <div className="mt-2 flex justify-between">
        <span>${value[0]}</span>
        <span>${value[1]}</span>
      </div>

      <div>
        <h2>Size</h2>
        <div className="flex flex-wrap gap-2 pt-2">
          {sizes.map((size) => (
            <Button key={size} variant="secondary">
              {size}
            </Button>
          ))}
        </div>
      </div>

      <Button variant="default" onClick={() => onApplyPrice(value)}>
        Apply Filter
      </Button>
    </div>
  );
}
