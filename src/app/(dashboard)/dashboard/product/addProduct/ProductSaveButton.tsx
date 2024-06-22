'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { api } from '~/trpc/react';

interface ProductSaveProps {
  productName: string;
  productLink: string;
}
const ProductSaveButton = ({
  productName,
  productLink,
}: ProductSaveProps) => {
  // const {mutate : saveProduct} = api.post.saveCompanyInfo.useMutation();
  return (
    <Button
      // onClick={async () => {
      //   console.log("clicked save button");
      //   saveProduct({productName, productLink});
      // }}
    >
      Save
    </Button>
  );
};

export default ProductSaveButton;
