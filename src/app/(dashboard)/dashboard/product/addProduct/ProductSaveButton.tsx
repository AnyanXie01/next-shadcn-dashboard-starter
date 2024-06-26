"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { api } from "~/trpc/react";
import { useToast } from "~/components/ui/use-toast";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface ProductSaveProps {
  companyName: string;
  productName: string;
  productLink: string;
  productCategory: string;
  productPrice: string;
  productDescription: string;
  productImage: string;
  productInventory: number;
  productReviews: number;
  productRatings: number;
}
const ProductSaveButton = ({
  companyName,
  productName,
  productLink,
  productCategory,
  productPrice,
  productDescription,
  productImage,
  productInventory,
  productReviews,
  productRatings,
}: ProductSaveProps) => {
  const { mutate: saveProduct } = api.post.saveProductInfo.useMutation();
  const { toast } = useToast();
  return (
    <Button
      className="bg-black text-white"
      onClick={async () => {
        saveProduct({
          companyName,
          productName,
          productCategory,
          productPrice,
          productLink,
          productDescription,
          productInventory,
          productReviews,
          productRatings,
        });
        toast({
          description: "产品信息已保存。",
        });
      }}
    >
      保存
    </Button>
  );
};

export default ProductSaveButton;
