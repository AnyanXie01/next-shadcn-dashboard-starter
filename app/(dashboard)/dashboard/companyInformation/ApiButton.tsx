'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { test, fetchData } from '@/utils/text-bailian';

const ApiButton = () => {
  return (
    <Button
      onClick={() => {
        test();
        fetchData();
      }}
    >
      Save
    </Button>
  );
};

export default ApiButton;
