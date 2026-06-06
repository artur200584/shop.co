import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { Input } from "../ui/input";
import { ShoppingCart } from "lucide-react";
import { CircleUser } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

const navLinks = [
  { label: "On sale", href: "/on-sale" },
  { label: "New Arrivals", href: "/new-arrivals" },
  { label: "Brands", href: "/brands" },
  { label: "Cart", href: "/cart" },
  { label: "Profile", href: "/profile" },
];

export default function Nav() {
  return (
    <nav className="flex w-full items-center justify-evenly">
      <h1 className="font-black text-3xl">SHOP.CO</h1>
      <div>
        <NavigationMenu>
          <NavigationMenuList className="gap-4">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-xl">
                Shop
              </NavigationMenuTrigger>
            </NavigationMenuItem>

            <NavigationMenuItem className="gap-4 text-bolt">
              {navLinks.map((item, id) => {
                return (
                  <NavigationMenuLink
                    className="text-xl font-normal"
                    asChild
                    key={id}
                  >
                    <Link href={item.href}>{item.label}</Link>
                  </NavigationMenuLink>
                );
              })}
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div>
        <Input
          placeholder="Search for products..."
          className=" px-10 border-0 shadow-none focus-visible:ring-0 focus-visible:border-0"
        />
      </div>
      <div className="flex items-center gap-4">
        <Button variant="default">
          <ShoppingCart />
        </Button>
        <Button variant="default">
          <CircleUser />
        </Button>
      </div>
    </nav>
  );
}
