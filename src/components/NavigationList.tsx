import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu.tsx";
import type { MenuLinkStoryblok } from "component-types-sb";

export function NavigationList({ menuLinks }: { menuLinks: MenuLinkStoryblok[] }) {
  return (
    <NavigationMenu className="hidden lg:block">
      <NavigationMenuList className="text-lg flex items-center gap-5">
        {menuLinks?.map((menu, key) => (
          <NavigationMenuItem key={key}>
            <NavigationMenuLink asChild>
              <a
                className="text-3xl font-semibold hover:opacity-75 text-primary"
                href={
                  menu.link.cached_url.startsWith("/")
                    ? menu.link.cached_url
                    : `/${menu.link.cached_url}`
                }
              >
                {menu.link_name}
              </a>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
