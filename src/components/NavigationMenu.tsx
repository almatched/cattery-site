import { NavigationList } from "./NavigationList.tsx";
import { SelectLanguage } from "./SelectLanguage.tsx";
import { ModeToggle } from "./ModeToggle.tsx";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "./ui/button.tsx";
import { AlignJustify } from "lucide-react";
import type { MenuLinkStoryblok } from "component-types-sb";
import type { LangSwitch } from "@/lib/customTypes.ts";
import { LoadingSVG } from "@/components/svg/loading-svg.tsx";
import { useEffect, useState } from "react";

export function NavigationMenu({
  menuLinks,
  languages,
  langSwitch,
}: {
  menuLinks: MenuLinkStoryblok[];
  languages: string[];
  langSwitch: LangSwitch;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <nav className="flex justify-between items-center">
      <NavigationList menuLinks={menuLinks} />

      <Sheet>
        <SheetTrigger asChild className="lg:hidden">
          {isLoading ? (
            <Button variant="outline" size="icon">
              <LoadingSVG />
            </Button>
          ) : (
            <Button variant="outline" size="icon" className="text-foreground">
              <AlignJustify />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          )}
        </SheetTrigger>
        <SheetContent className="border-accent">
          <SheetTitle className="sr-only">Website navigation menu</SheetTitle>
          <SheetDescription className="sr-only">
            You can choose to which section of the site to go by navigating this
            menu.
          </SheetDescription>
          <nav className="mt-5 flex flex-col gap-5 text-center text-lg">
            {menuLinks?.map((menu) => {
              return menu.link ? (
                <a
                  key={menu._uid}
                  className="bg-primary text-primary-foreground py-2 w-full rounded-md hover:opacity-75 font-semibold"
                  href={
                    menu.link.cached_url.startsWith("/")
                      ? menu.link.cached_url
                      : `/${menu.link.cached_url}`
                  }
                >
                  {menu.link_name}
                </a>
              ) : (
                <Collapsible key={menu._uid} className="space-y-5">
                  <CollapsibleTrigger className="bg-primary text-primary-foreground py-2 w-full rounded-md hover:opacity-75 font-semibold">
                    {menu.title}
                  </CollapsibleTrigger>
                  <CollapsibleContent className="flex flex-col gap-4 items-center">
                    {menu.links?.map((submenu) => (
                      <a
                        key={submenu.link.id}
                        className="bg-primary text-primary-foreground py-1 w-3/4 rounded-md hover:opacity-75 font-semibold"
                        href={
                          submenu.link.cached_url.startsWith("/")
                            ? submenu.link.cached_url
                            : `/${submenu.link.cached_url}`
                        }
                      >
                        {submenu.link_name}
                      </a>
                    ))}
                  </CollapsibleContent>
                </Collapsible>
              );
            })}
          </nav>
        </SheetContent>
      </Sheet>

      <div className="flex space-x-2">
        <ModeToggle />
        <SelectLanguage languages={languages} langSwitch={langSwitch} />
      </div>
    </nav>
  );
}
