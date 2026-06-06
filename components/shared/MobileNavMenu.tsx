import { NavLink } from "./Nav";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuList,
  NavigationMenuContent,
} from "../ui/navigation-menu";
import { Menu } from "lucide-react";

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
                    return <li key={id}>{item.label}</li>;
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
