import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu.tsx";

export function Navigation({ data }) {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex-col lg:flex-row flex gap-5 text-xl justify-center">
        {data?.map((menu, key) => (
          <NavigationMenuItem key={key} className="bg-accent p-2 rounded-md">
            <NavigationMenuLink asChild>
              <a
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
