"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { api } from "~/trpc/react";
import { toast } from "sonner";

interface ProductSaveProps {
  companyName: string;
  productName: string;
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
  productCategory,
  productPrice,
  productDescription,
  productImage,
  productInventory,
  productReviews,
  productRatings,
}: ProductSaveProps) => {
  const { mutate: saveProduct } = api.post.saveProductInfo.useMutation();
  return (
    <Button
      className="bg-black text-white"
      onClick={async () => {
        console.log("clicked save button");
        saveProduct({
          companyName,
          productName,
          productCategory,
          productPrice,
          productDescription,
          productImage,
          productInventory,
          productReviews,
          productRatings,
        });
      }}
    >
      Save
    </Button>
  );
};

export default ProductSaveButton;
