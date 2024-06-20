import React from 'react';
import './style.css';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { ArrowUpDown, ChevronDown, MoreHorizontal } from 'lucide-react';
import ImportDropDown from './ImportDropDown';
import DataTable from './DataTable';
import { ScrollArea } from '@/components/ui/scroll-area';
const page = () => {
  return (
    <ScrollArea className="h-full">
      {' '}
      <div className="px-4">
        <div className="flex h-14 items-center justify-between">
          <div className="text-3xl font-bold">Product</div>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="ml-auto">
              <ImportDropDown>Import</ImportDropDown>
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="ml-auto">
              Export
            </Button>
            <Link href="/dashboard/product/addProduct">
              <Button className="ml-auto">+ Add Products</Button>
            </Link>
          </div>
        </div>
        {/* <div className="flex h-14 items-center justify-between  px-10">
          <div className="flex items-center gap-3">
            <Select>
              <SelectTrigger className=" SelectTrigger w-[180px] style={{ color: 'rgba(0, 0, 0, 0)' }}">
                <SelectValue placeholder="Filter" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="price">
                    <p className="text-neutral-500">Price</p>
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Input className="w-96" type="search" placeholder="search..." />
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#142ef0"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M12 20h9" />
                <path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z" />
              </svg>
            </Button>
            <Button variant="outline" size="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#142ef0"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M3 6h18" />
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
              </svg>
            </Button>
          </div>
        </div> */}
        <DataTable></DataTable>
      </div>
    </ScrollArea>
  );
};
// #38bdf8
export default page;
