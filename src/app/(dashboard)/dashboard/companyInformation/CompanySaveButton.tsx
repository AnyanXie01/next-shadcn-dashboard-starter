'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { test, fetchData } from '@/utils/text-bailian';

interface CompanySaveButtonProps {
  companyName: string;
  companyWebsite: string;
}
const CompanySaveButton = ({
  companyName,
  companyWebsite
}: CompanySaveButtonProps) => {
  return (
    <Button
      onClick={async () => {
        console.log(companyName);
        console.log(companyWebsite);
      }}
    >
      Save
    </Button>
  );
};

export default CompanySaveButton;
