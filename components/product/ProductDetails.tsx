"use client";

import { useState } from "react";
import { Button } from "../ui/button";

export default function ProductDetails() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex w-full items-center justify-between gap-3">
      <div className="flex items-center justify-center gap-3 rounded-xl bg-gray-300 px-5 py-1">
        <Button
          variant="ghost"
          disabled={count === 0}
          onClick={() => setCount(count - 1)}
        >
          -
        </Button>
        <span>{count}</span>
        <Button variant="ghost" onClick={() => setCount(count + 1)}>
          +
        </Button>
      </div>

      <Button className="w-[50%] md:w-[70%] rounded-3xl py-5">
        Add to Card
      </Button>
    </div>
  );
}
