import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export function SelectLanguage({ data, langSwitch }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="border-accent">
          <Globe />
          <span className="sr-only">Toggle language select</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {data?.map((lang, key) =>
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


