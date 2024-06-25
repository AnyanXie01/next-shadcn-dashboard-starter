// "use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import GenerateButton from "./GenerateButton";
import { api } from "~/trpc/server";
import HeroSection from "./HeroSection";
import ProductionSection from "./ProductionSection";
import CategoriesSection from "./CategoriesSection";
import ReviewSection from "./ReviewSection";
import FAQSection from "./FAQSection";
import ContactSection from "./ContactSection";
import { ScrollArea } from "@radix-ui/react-scroll-area";
const Preview = async () => {
  // const data = await api.post.getCompanyInfo({ companyName: "11111" });

  // await api.post.callCoze();
  const data = "data";
  console.log("----------------------------------------------");
  console.log(data);
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
      {/* <div className="h-80 w-full bg-gray-200"> */}
      <div className="mb-6 grid grid-cols-1 gap-20">
        <div className="w-full border-2 border-slate-600 hover:bg-slate-400 ">
          <HeroSection></HeroSection>
        </div>
        <div className="w-full border-2 border-slate-600  hover:bg-slate-400">
          <ProductionSection></ProductionSection>
        </div>
        <div className="w-full border-2 border-slate-600 hover:bg-slate-400">
          <CategoriesSection></CategoriesSection>
        </div>
        <div className="w-full border-2 border-slate-600 hover:bg-slate-400">
          <ReviewSection></ReviewSection>
        </div>
        <div className="w-full border-2 border-slate-600 hover:bg-slate-400">
          <FAQSection></FAQSection>
        </div>
        <div className="w-full border-2 border-slate-600 hover:bg-slate-400">
          <ContactSection></ContactSection>
        </div>
      </div>
    </div>
  );
};

export default Preview;
