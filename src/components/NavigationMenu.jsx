import { NavigationList } from "./NavigationList.jsx";
import { SelectLanguage } from "./SelectLanguage.jsx";
import { ModeToggle } from "./ModeToggle.tsx";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button.tsx";
import { AlignJustify } from "lucide-react";

export function NavigationMenu({ headerMenu, languages, langSwitch }) {
    return (
        <>
            <NavigationList data={headerMenu} />

            <Sheet>
                <SheetTrigger asChild className="lg:hidden">
                    <Button variant="outline" size="icon" className="border-accent">
                        <AlignJustify />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent>
                    <nav className="mt-5 flex flex-col gap-5 text-center text-lg">
                        {headerMenu?.map((menu, key) => (
                            <a
                                key={key}
                                className="bg-primary text-primary-foreground py-2 w-full rounded-md hover:opacity-75 font-semibold"
                                href={
                                    menu.link.cached_url.startsWith("/")
                                        ? menu.link.cached_url
                                        : `/${menu.link.cached_url}`
                                }
                            >
                                {menu.link_name}
                            </a>
                        ))}
                    </nav>
                </SheetContent>
            </Sheet>

            <div className="flex gap-3">
                <ModeToggle />
                <SelectLanguage data={languages} langSwitch={langSwitch} />
            </div>
        </>
    );
}