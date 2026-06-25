import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SlidersHorizontal } from "lucide-react";
import { Button } from "../ui/button";
import FilterContent from "./FilterContent";

type Props = {
  onApplyPrice: (range: number[]) => void;
};

export default function MobileFilter({ onApplyPrice }: Props) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="secondary"
          size="icon"
          className="rounded-full md:hidden"
          aria-label="Open filters"
        >
          <SlidersHorizontal />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Filters</SheetTitle>
        </SheetHeader>

        <div className="px-4 pb-4">
          <FilterContent onApplyPrice={onApplyPrice} />
        </div>
      </SheetContent>
    </Sheet>
  );
}
