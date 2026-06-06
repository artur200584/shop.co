import Image from "next/image";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <header
      className="flex flex-1 w-full gap-8 bg-header-background  md:px-8 flex-col
  lg:flex-row lg:px-10 lg:flex-col"
    >
      <div className="flex flex-1 flex-col justify-center gap-4 py-12">
        <h1 className="text-5xl font-black uppercase leading-[0.9] md:text-5xl p-2 lg:text-7xl">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>
        <div className="flex flex-col gap-20">
          <p className="text-lg text-gray-600">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <div className="px-4">
            <Button className="w-full rounded-full bg-black p-6 md:w-52">
              Shop Now
            </Button>
          </div>

          <dl className="grid grid-cols-2 gap-x-6 gap-y-8 text-center md:flex md:items-center md:text-left">
            <div className="md:border-r md:pr-8">
              <dt className="text-4xl font-bold">200+</dt>
              <dd className="text-sm text-muted-foreground">
                International Brands
              </dd>
            </div>

            <div className="md:border-r md:px-8">
              <dt className="text-4xl font-bold">2,000+</dt>
              <dd className="text-sm text-muted-foreground">
                High-Quality Products
              </dd>
            </div>

            <div className="col-span-2 md:col-span-1 md:pl-8">
              <dt className="text-4xl font-bold">30,000+</dt>
              <dd className="text-sm text-muted-foreground">Happy Customers</dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="flex flex-1 items-end justify-end">
        <Image
          className="h-auto max-h-full w-full object-contain object-bottom"
          width={648}
          height={632}
          src="/images/heroIcon.png"
          alt="Hero image"
          unoptimized
        />
      </div>
    </header>
  );
}
