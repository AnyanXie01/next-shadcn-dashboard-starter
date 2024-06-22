'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { api } from '~/trpc/react';
import { toast } from 'sonner';
// import { test, fetchData } from '@/utils/text-bailian';

interface CompanySaveButtonProps {
  companyName: string;
  companyWebsite: string;
}
const CompanySaveButton = ({
  companyName,
  companyWebsite
}: CompanySaveButtonProps) => {
  const {mutate : saveCompany} = api.post.saveCompanyInfo.useMutation();
  return (
    <Button
      onClick={async () => {
        console.log("clicked save button");
        saveCompany({companyName, companyWebsite});
        toast.info("company created.");
      }}
    >
      Save
    </Button>
  );
};

export default CompanySaveButton;
