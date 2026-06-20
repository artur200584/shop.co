import { Review } from "@/lib/types";
import Title from "./Title";

import { Card } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Coment from "./Coment";

type PropsProduct = {
  products: Review[];
};

export default function Coments({ products }: PropsProduct) {
  return (
    <section className="flex w-full min-w-0 max-w-full flex-col items-center overflow-x-clip">
      <Title title="OUR HAPPY CUSTOMERS" className="text-left" />

      <Carousel
        opts={{
          align: "start",
          loop: true,
          slidesToScroll: 1,
        }}
        className="w-full min-w-0 max-w-full"
      >
        <CarouselPrevious className="top-0 right-14 left-auto -translate-y-full" />
        <CarouselNext className="top-0 right-2 left-auto -translate-y-full" />

        <CarouselContent className="pt-4">
          {products.map((item, id) => {
            return (
              <CarouselItem key={id} className="basis-auto">
                <Card className="w-fit border-2 border-solid">
                  <Coment comentone={item} />
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
