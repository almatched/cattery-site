import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu.tsx";

export function NavigationList({ data }) {
  return (
    <NavigationMenu className="hidden lg:block">
      <NavigationMenuList className="text-lg flex items-center gap-5">
        {data?.map((menu, key) => (
          <NavigationMenuItem key={key}>
            <NavigationMenuLink asChild>
              <a
                className="text-3xl font-semibold hover:opacity-75"
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
