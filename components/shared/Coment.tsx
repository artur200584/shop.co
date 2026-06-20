import { Review } from "@/lib/types";
import { Check, Star } from "lucide-react";

type ComentProps = {
  comentone: Review;
};

export default function Coment({ comentone }: ComentProps) {
  return (
    <div className="w-fit p-3">
      <div className="flex flex-col items-center gap-2">
        <div className="flex">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              className={
                index < Math.round(comentone.rating)
                  ? "size-4 fill-yellow-400 text-yellow-400"
                  : "size-4 text-gray-300"
              }
            />
          ))}
        </div>
        <div>
          <div className="flex items-center gap-2 whitespace-nowrap">
            <p className="text-xl font-bold">{comentone.reviewerName}</p>
            <Check className="size-6 shrink-0 rounded-xl bg-green-500 text-white" />
          </div>
          <p className="text-md text-gray-500">{comentone.comment}</p>
        </div>
      </div>
    </div>
  );
}
