import { useState, useEffect } from "react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu.tsx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { MenuLinkStoryblok } from "component-types-sb";

export function NavigationList({
  menuLinks,
}: {
  menuLinks: MenuLinkStoryblok[];
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  let dropDownTrigger = "text-3xl font-semibold hover:opacity-75 text-primary";
  if (isLoading) {
    dropDownTrigger += " opacity-20 pointer-events-none";
  }

  return (
    <NavigationMenu className="hidden lg:block">
      <NavigationMenuList className="flex space-x-4">
        {menuLinks?.map((menu) => {
          return menu.link ? (
            <NavigationMenuItem key={menu._uid}>
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
          ) : (
            <DropdownMenu key={menu._uid}>
              <DropdownMenuTrigger className={dropDownTrigger}>
                {menu.title}
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="border-accent p-2 flex flex-col gap-2"
              >
                {menu.links?.map((submenu) => (
                  <DropdownMenuItem
                    key={submenu.link.id}
                    className="p-0 text-lg"
                  >
                    <a
                      className="w-full px-2 py-1.5"
                      href={
                        submenu.link.cached_url.startsWith("/")
                          ? submenu.link.cached_url
                          : `/${submenu.link.cached_url}`
                      }
                    >
                      {submenu.link_name}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
