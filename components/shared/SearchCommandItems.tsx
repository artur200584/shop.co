import { NavLink } from "./Nav";
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  Command,
} from "@/components/ui/command";

type SearchCommandDialogProps = {
  links: NavLink[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function SearchCommandItems({
  links,
  open,
  onOpenChange,
}: SearchCommandDialogProps) {
  return (
    <>
      <CommandDialog open={open} onOpenChange={onOpenChange}>
        <Command>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              {links.map((item, id) => {
                return <CommandItem key={id}>{item.label}</CommandItem>;
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  );
}
