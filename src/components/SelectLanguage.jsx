import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function SelectLanguage({ data, langSwitch }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>Language</DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {data?.map((lang, key) => <DropdownMenuItem key={key}><a href={langSwitch[lang]} className="w-full">{lang}</a></DropdownMenuItem>)}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}


