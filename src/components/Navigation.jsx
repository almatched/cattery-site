import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu.tsx";

export function Navigation({ data }) {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex gap-5 my-5 text-xl justify-center">
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
