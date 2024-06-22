import React from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { ArrowUpDown, ChevronDown, MoreHorizontal } from 'lucide-react';
interface ImportDropDownProps {
  children: string;
}

const ImportDropDown: React.FC<ImportDropDownProps> = ({ children }) => {
  return (
    <div className="w-full">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant="ghost">{children}</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Import</DropdownMenuItem>
          <DropdownMenuItem>Download template</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ImportDropDown;
