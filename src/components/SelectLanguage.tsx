import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import type { LangSwitch } from "@/lib/customTypes";
import { useEffect, useState } from "react";
import { LoadingSVG } from "@/components/svg/loading-svg";

export function SelectLanguage({
  languages,
  langSwitch,
}: {
  languages: string[];
  langSwitch: LangSwitch;
}) {
  // consider exporting to a custom hook, also used in ModeToggle
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {isLoading ? (
          <Button variant="outline" size="icon">
            <LoadingSVG />
          </Button>
        ) : (
          <Button variant="outline" size="icon" className="text-foreground">
            <Globe />
            <span className="sr-only">Toggle language select</span>
          </Button>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="border-accent">
        {languages?.map((lang: string, key: number) => (
          <DropdownMenuItem key={key} className="p-0">
            <a href={langSwitch[lang]} className="w-full px-2 py-1.5">
              {lang.toUpperCase()}
            </a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
