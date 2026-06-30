type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="mb-2" aria-label="Breadcrumb">
      <ol className="flex items-center gap-2 text-gray-500">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.label} className="flex items-center gap-2">
              {isLast || !item.href ? (
                <span aria-current="page" className="text-black">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="hover:text-black">
                  {item.label}
                </Link>
              )}

              {!isLast && <ChevronRight className="size-4" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
