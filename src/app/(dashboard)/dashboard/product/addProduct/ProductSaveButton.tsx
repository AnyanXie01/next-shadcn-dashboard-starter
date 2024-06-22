'use client';
import React from 'react';
import { Button } from '@/components/ui/button';

interface ProductSaveProps {
  productName: string;
  productLink: string;
}
const ProductSaveButton = ({ productName, productLink }: ProductSaveProps) => {
  return (
    <Button
      onClick={async () => {
        console.log(productName);
        console.log(productLink);
      }}
    >
      Save
    </Button>
  );
};

export default ProductSaveButton;
