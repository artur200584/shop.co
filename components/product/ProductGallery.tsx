"use client";

import { useState } from "react";
import Image from "next/image";

type ProductGalleryProps = {
  images: string[];
};

export default function ProductGallery({ images }: ProductGalleryProps) {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className="mx-auto flex w-full flex-col-reverse items-center gap-4 md:w-fit md:flex-row">
      <div className="flex w-full justify-center gap-3 md:w-auto md:flex-col">
        {images.map((image) => (
          <button
            key={image}
            onClick={() => setActiveImage(image)}
            className={
              activeImage === image ? "border border-black rounded-xl" : ""
            }
          >
            <Image
              src={image}
              width={80}
              height={80}
              alt="product image"
              className="h-16 w-16 object-contain md:h-20 md:w-20"
            />
          </button>
        ))}
      </div>

      <div className="w-full rounded-xl bg-header-background md:w-[400px]">
        <Image
          src={activeImage}
          width={400}
          height={400}
          alt="active product image"
          className="h-auto w-full object-contain"
        />
      </div>
    </div>
  );
}
