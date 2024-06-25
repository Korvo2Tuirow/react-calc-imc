"use client"
 
import {useState} from "react"
import { Check, ChevronsUpDown } from "lucide-react"
 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Role } from "@/types/role"
 
const frameworks = [
  {
    value: "Viewer",
    label: "Viewer",
    description:"Can view and comment"
  },
  {
    value: "Developer",
    label: "Developer",
    description:"Can view, comment and edit"
  },
  {
    value: "Billing",
    label: "Billing",
    description:"Can view, comment and manage billing"
  },
  {
    value: "Owner",
    label: "Owner",
    description:"Admin-level access to all resources"
  },
  
]

type Props= {
  value: Role;
  setValue: (newValue: Role) => void;
}

export const TeamCombobox = ()=>{

    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")
   
    return(
        <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
          >
            {value
              ? frameworks.find((framework) => framework.value === value)?.label
              : "Select framework..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0">
          <Command>
            <CommandInput placeholder="Search framework..." />
            <CommandList>
              <CommandEmpty>No framework found.</CommandEmpty>
              <CommandGroup>
                {frameworks.map((framework) => (
                  <CommandItem
                    key={framework.value}
                    value={framework.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue)
                      setOpen(false)
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === framework.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    <div>
                      <p>{framework.label}</p>
                      <p className="text-muted-foreground">{framework.description}</p>
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    )
    
}