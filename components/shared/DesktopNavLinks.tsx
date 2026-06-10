import {
  NavigationMenuLink,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import Link from "next/link";
import { NavLink } from "./Nav";

type LinksProps = {
  links: NavLink[];
};

export default function DesktopNavLinks({ links }: LinksProps) {
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList className="gap-2 xl:gap-4">
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-sm xl:text-base">
              Shop
            </NavigationMenuTrigger>
          </NavigationMenuItem>

          <NavigationMenuItem className="gap-2 xl:gap-4">
            {links.map((item, id) => {
              return (
                <NavigationMenuLink
                  className="whitespace-nowrap text-sm font-normal xl:text-base"
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
    </>
  );
}
