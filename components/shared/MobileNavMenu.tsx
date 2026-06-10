import { NavLink } from "./Nav";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuList,
  NavigationMenuContent,
  NavigationMenuLink,
} from "../ui/navigation-menu";
import { Menu } from "lucide-react";
import Link from "next/link";

type LinksProps = {
  links: NavLink[];
};

export default function MobileNavMenu({ links }: LinksProps) {
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger showIcon={false}>
              <Menu className="size-7" />
              <NavigationMenuContent>
                <ul>
                  {links.map((item, id) => {
                    return (
                      <NavigationMenuLink asChild key={id}>
                        <Link href={item.href}>{item.label}</Link>
                      </NavigationMenuLink>
                    );
                  })}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}
