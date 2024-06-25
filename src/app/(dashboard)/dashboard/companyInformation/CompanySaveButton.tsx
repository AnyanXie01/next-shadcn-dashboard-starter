"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { api } from "~/trpc/react";
import { Service } from "~/server/api/routers/service";
import { useToast } from "~/components/ui/use-toast";
import { title } from "process";

interface CompanySaveButtonProps {
  companyName: string;
  companyWebsite: string;
  productName: string;
}
const CompanySaveButton = ({
  companyName,
  companyWebsite,
  productName,
}: CompanySaveButtonProps) => {
  const { mutate: saveCompany } = api.post.saveCompanyInfo.useMutation();
  const { mutate: saveLastView } = api.post.saveLastView.useMutation();
  const { toast } = useToast()
  return (
    <Button
      className="bg-black text-white"
      onClick={async () => {
        saveCompany({companyName, companyWebsite, productName})
        saveLastView({companyName})
        toast({
          description: "Your company nfo has been saved."
        })
      }}
    >
      Save
    </Button>
  );
};

export default CompanySaveButton;
