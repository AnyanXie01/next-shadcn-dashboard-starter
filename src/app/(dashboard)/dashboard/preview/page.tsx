import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import GenerateButton from "./GenerateButton";
const Preview = () => {
  return (
    <div className="px-4">
      <div className="flex h-14 items-center justify-between">
        <div>
          <div className="text-3xl font-bold">Preview</div>
          <div className="text-slate-400">Preview your website</div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="ml-auto">
            Cancel
          </Button>
          <Link href="/dashboard/product/addProduct">
            <Button className="ml-auto bg-black text-white">Publish</Button>
          </Link>
          <GenerateButton></GenerateButton>
        </div>
      </div>
      <Separator className="mb-6 mt-6 w-full bg-slate-200" />
      <div className="mb-6 grid grid-cols-1 gap-6">
        <div className="h-80 w-full bg-gray-200"></div>
        <div className="h-80 w-full bg-gray-200"></div>
        <div className="h-80 w-full bg-gray-200"></div>
        <div className="h-80 w-full bg-gray-200"></div>
        <div className="h-80 w-full bg-gray-200"></div>
      </div>
    </div>
  );
};

export default Preview;
