import React from "react";
import "./style.css";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";
import ImportDropDown from "./ImportDropDown";
import DataTable from "./DataTable";
import { ScrollArea } from "@/components/ui/scroll-area";
const page = () => {
  return (
    <ScrollArea className="h-full">
      <div className="px-4">
        <div className="flex h-14 items-center justify-between">
          <div className="text-3xl font-bold">Products</div>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="ml-auto">
              <ImportDropDown>Import</ImportDropDown>
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="ml-auto">
              Export
            </Button>
            <Link href="/dashboard/product/addProduct">
              <Button className="ml-auto bg-black text-white">
                + Add Products
              </Button>
            </Link>
          </div>
        </div>
        <DataTable></DataTable>
      </div>
    </ScrollArea>
  );
};
// #38bdf8
export default page;
