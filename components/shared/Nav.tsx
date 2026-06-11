"use client";

import { useState } from "react";
import { Input } from "../ui/input";
import { ShoppingCart, CircleUser, Search } from "lucide-react";
import { Button } from "../ui/button";
import DesktopNavLinks from "./DesktopNavLinks";
import SearchCommandItems from "./SearchCommandItems";
import MobileNavMenu from "./MobileNavMenu";

export type NavLink = {
  label: string;
  href: string;
};

const navLinks: NavLink[] = [
  { label: "On sale", href: "/on-sale" },
  { label: "New Arrivals", href: "/new-arrivals" },
  { label: "Brands", href: "/brands" },
];

export default function Nav() {
  const [open, setIsOpen] = useState(false);

  return (
    <nav className="flex w-full items-center gap-4 px-4 py-5 md:px-10">
      <div className="lg:hidden">
        <MobileNavMenu links={navLinks} />
      </div>

      <h1 className="shrink-0 text-2xl font-black xl:text-3xl">SHOP.CO</h1>

      <div className="hidden lg:block">
        <DesktopNavLinks links={navLinks} />
      </div>

      <div className="hidden min-w-0 flex-1 md:block">
        <Input
          placeholder="Search for products..."
          className="border-0 shadow-none focus-visible:border-0 focus-visible:ring-0"
        />
      </div>

      <div className="ml-auto flex shrink-0 items-center gap-2">
        <Button
          onClick={() => setIsOpen(true)}
          variant="link"
          className="size-10 p-0 md:hidden"
        >
          <Search className="size-7" />
        </Button>
        <SearchCommandItems
          links={navLinks}
          open={open}
          onOpenChange={setIsOpen}
        />
        <Button variant="link" className="size-10 p-0">
          <ShoppingCart className="size-7" />
        </Button>
        <Button variant="link" className="size-10 p-0">
          <CircleUser className="size-7" />
        </Button>
      </div>
    </nav>
  );
}
