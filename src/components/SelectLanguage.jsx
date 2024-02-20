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
      <DropdownMenuTrigger>
        <Button variant="outline" size="icon">
          <Globe />
          <span className="sr-only">Toggle language select</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {data?.map((lang, key) => <DropdownMenuItem key={key}><a href={langSwitch[lang]} className="w-full">{lang}</a></DropdownMenuItem>)}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}


