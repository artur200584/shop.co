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

export default function ShopHeader() {
  return (
    <header className="flex w-full items-center justify-evenly">
      <h1 className="font-black text-3xl">SHOP.CO</h1>
      <div>
        <NavigationMenu>
          <NavigationMenuList className="gap-4">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-1xl">
                Shop
              </NavigationMenuTrigger>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink className="text-1xl">
                On sale
              </NavigationMenuLink>
              <NavigationMenuLink className="text-1xl">
                New Arrivals
              </NavigationMenuLink>
              <NavigationMenuLink className="text-1xl">
                Brands
              </NavigationMenuLink>
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
        <ShoppingCart />
        <CircleUser />
      </div>
    </header>
  );
}
