import { Navigation } from "./Navigation.jsx";
import { SelectLanguage } from "./SelectLanguage.jsx";
import { ModeToggle } from "./ModeToggle.tsx";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { AlignJustify } from "lucide-react";

export function NavigationDialog({ headerMenu, language, languages, langSwitch }) {


    return (
        <>
            <div class="hidden lg:flex justify-between items-center w-full gap-5">
                <Navigation data={headerMenu} />
                <div class="flex gap-5">
                    <SelectLanguage language={language} data={languages} langSwitch={langSwitch} client:idle />
                    <ModeToggle />
                </div>
            </div>

            <Sheet>
                <SheetTrigger class="lg:hidden">
                    <Button variant="outline" size="icon">
                        <AlignJustify />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent>
                    <div class="flex flex-col justify-between items-center gap-5">
                        <Navigation data={headerMenu} />
                        <SelectLanguage language={language} data={languages} langSwitch={langSwitch} />
                        <ModeToggle />
                    </div>
                </SheetContent>
            </Sheet>
        </>
    );
}