import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import type { LangSwitch } from "@/lib/customTypes";

export function SelectLanguage({ languages, langSwitch }: { languages: string[], langSwitch: LangSwitch}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="border-accent">
          <Globe />
          <span className="sr-only">Toggle language select</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages?.map((lang: string, key: number) =>
          <DropdownMenuItem key={key} className="p-0">
            <a href={langSwitch[lang]} className="w-full px-2 py-1.5">
              {lang}
            </a>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}


