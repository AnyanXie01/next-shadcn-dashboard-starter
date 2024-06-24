'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { api } from '~/trpc/react';
import { toast } from 'sonner';

interface ProductSaveProps {
  productName: string;
  productImage: string;
}
const ProductSaveButton = ({
  productName,
}: ProductSaveProps) => {
  const {mutate : saveProduct} = api.post.saveProductInfo.useMutation();
  return (
    <Button
      onClick={async () => {
        console.log("clicked save button");
        // saveProduct({
        //   productName,
        //   productImage
        // })
      }}
    >
      Save
    </Button>
  );
};

export default ProductSaveButton;
