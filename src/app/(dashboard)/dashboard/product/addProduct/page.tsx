"use client";
import React, { useState } from "react";
import "./style.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import CheckBoxCustome from "./CheckBoxCustome";
import { Separator } from "@/components/ui/separator";
import ProductSaveButton from "@/app/(dashboard)/dashboard/product/addProduct/ProductSaveButton";
import TagButton from "./TagButton";
import { number } from "zod";
const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productCategory, setProductCategory] = useState("Cat Litter Box");
  const [productReviews, setProductReviews] = useState(10);
  const [productRatings, setProductRatings] = useState(4.8);
  const [productInventory, setProductInventory] = useState(58);
  return (
    <div className="pt-6">
      <button className="px-4 pb-4 text-sm text-gray-500">&lt; Back</button>
      <div className="flex h-14 items-center justify-between px-4">
        <h1 className="text-3xl font-bold">Add Product</h1>
        <div className="flex space-x-4 pr-20">
          <Button variant="outline">Cancel</Button>
          <ProductSaveButton
            companyName="testCompany"
            productName={productName}
            productCategory={productCategory}
            productPrice={productPrice}
            productImage={productImage}
            productInventory={productInventory}
            productReviews={productReviews}
            productDescription="This is a delicate cat litter box"
            productRatings={productRatings}
          ></ProductSaveButton>
        </div>
      </div>

      <div className="container mx-auto p-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="mb-10">
              <div className="mb-6 flex items-center gap-x-10">
                <h2 className="text-lg font-semibold">Information</h2>
                <div className="flex items-center space-x-2">
                  <Switch className=" data-[state=checked]:bg-blue-400 data-[state=unchecked]:bg-blue-100" />
                  <span>promoted</span>
                </div>
              </div>

              <div className="mb-6">
                <label className="mb-2 block text-sm font-medium">
                  Product Name
                </label>
                <Input
                  className="w-full"
                  placeholder="Summer T-Shirt"
                  onChange={(event) => {
                    setProductName(event.target.value);
                  }}
                />
              </div>

              <div className="mb-6">
                <label className="mb-2 block text-sm font-medium">
                  Product Link
                </label>
                <Input className="w-full" placeholder="http://" />
              </div>

              <div className="mb-6">
                <label className="mb-2 block text-sm font-medium">
                  Product Description
                </label>
                <Textarea
                  className="w-full"
                  placeholder="Product description"
                />
              </div>

              <Separator className="my-4" />
              <div className="mb-10 pt-2">
                <h3 className="mb-4 text-lg font-semibold">Images</h3>
                <div className="flex h-48 flex-col items-center justify-center border-2 border-dashed border-gray-300 p-4 text-center">
                  <div className="">
                    <Input
                      className="mb-2 ml-10 w-60 text-blue-500"
                      id="file"
                      type="file"
                      onChange={(event) => {
                        setProductImage(event.target.value);
                      }}
                    />
                    <p className="text-sm text-gray-600">
                      Or drag and drop files
                    </p>
                  </div>
                </div>
              </div>

              <Separator className="my-4" />

              <h3 className="mb-4 pt-2 text-lg font-semibold">Price</h3>
              <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Product Price
                  </label>
                  <Input
                    className="w-full"
                    placeholder="Enter price"
                    type="number"
                    onChange={(event) => {
                      setProductPrice(event.target.value);
                    }}
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Discount Price
                  </label>
                  <Input className="w-full" placeholder="Price at Discount" />
                </div>
              </div>

              <Separator className="my-4" />
              <h3 className="mb-4 pt-2 text-lg font-semibold">Shipping</h3>
              <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    How many days needed to be ready for ship
                  </label>
                  <Input className="w-full" placeholder="1 day" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    How many days needed to deliver
                  </label>
                  <Select>
                    <SelectTrigger className="SelectTrigger w-full">
                      <SelectValue placeholder="3-5 days" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="3-5 days">3-5 days</SelectItem>
                      {/* Add other options here */}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="mb-10">
              <h2 className="mb-4 text-lg font-semibold">Categories</h2>
              <div className="flex flex-col space-y-5">
                <CheckBoxCustome>Women</CheckBoxCustome>
                <CheckBoxCustome>Men</CheckBoxCustome>
                <CheckBoxCustome>T-Shirt</CheckBoxCustome>
                <CheckBoxCustome>Hoodie</CheckBoxCustome>
                <CheckBoxCustome>Dress</CheckBoxCustome>
                <button className="mt-2 pr-52 text-sm text-blue-500">
                  Create New
                </button>
              </div>
            </div>

            <div className="mb-10">
              <h2 className="mb-4 text-lg font-semibold">Tags</h2>
              <div className="mb-4">
                <label className="mb-2 block text-sm font-medium">
                  Add Tags
                </label>
                <Input className="w-full" placeholder="Enter tag name" />
              </div>
              <div className="flex flex-wrap gap-3">
                <TagButton>T-Shirt </TagButton>
                <TagButton>Men Clothes</TagButton>
                <TagButton>Summer Collection</TagButton>
              </div>
            </div>

            <div className="mb-10">
              <h2 className="mb-4 text-lg font-semibold">SEO Settings</h2>
              <div className="mb-6">
                <label className="mb-2 block text-sm font-medium">Title</label>
                <Input className="w-full" />
              </div>
              <div className="mb-6">
                <label className="mb-2 block text-sm font-medium">
                  Description
                </label>
                <Textarea className="h-28 w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
