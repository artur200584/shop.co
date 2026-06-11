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
            <NavigationMenuTrigger
              showIcon={false}
              aria-label="Відкрити навігаційне меню"
              className="size-10 p-0"
            >
              <Menu className="size-7" />
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul>
                {links.map((item) => {
                  return (
                    <li key={item.href}>
                      <NavigationMenuLink asChild>
                        <Link href={item.href}>{item.label}</Link>
                      </NavigationMenuLink>
                    </li>
                  );
                })}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}
