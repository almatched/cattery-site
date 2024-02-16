import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function SelectLanguage({ data, langSwitch, language }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{language}</DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {data?.map((lang, key) => <DropdownMenuItem key={key}><a href={langSwitch[lang]} className="w-full">{lang}</a></DropdownMenuItem>)}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}


