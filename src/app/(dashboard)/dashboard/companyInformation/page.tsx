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
import { Separator } from "@/components/ui/separator";
import CompanySaveButton from "@/app/(dashboard)/dashboard/companyInformation/CompanySaveButton";
const GeneralInformation = () => {
  // const companyName = 'keysme';
  // const companyWebsite = 'https\\"://eysme.tmall.com/';
  // const productName = '机械键盘';
  // const productImage
  const [companyName, setCompanyName] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [companyProduct, setCompanyProduct] = useState("");
  const [productImage, setProductImage] = useState([]);
  return (
    <div>
      <div className="flex h-14 items-center justify-between px-8">
        <h1 className="text-3xl font-bold">基本信息</h1>
        {/* General Information */}
        <div className="flex space-x-4 pr-20">
          <Button variant="outline">取消</Button>
          <CompanySaveButton
            companyName={companyName}
            companyWebsite={companyWebsite}
            productName={companyProduct}
          ></CompanySaveButton>
        </div>
      </div>

      <div className="container mx-auto p-8">
        <div className="grid grid-cols-1 gap-24 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="mb-6 grid grid-cols-1 gap-y-4">
              <h2 className="mb-2 text-lg font-semibold">品牌信息</h2>
              {/* Brand Information */}
              <div className="mb-4">
                <label className="mb-1 block text-sm font-medium text-gray-500">
                  公司名称
                </label>
                {/* Company Name */}
                <Input
                  className="input-color w-full"
                  placeholder="Fei qi chu hai"
                  onChange={(event) => {
                    setCompanyName(event.target.value);
                  }}
                />
              </div>

              <div className="mb-4">
                <label className="mb-1 block text-sm font-medium text-gray-500">
                  网址
                </label>
                {/* Official website */}
                <Input
                  className="input-color w-full"
                  placeholder="http://"
                  onChange={(event) => {
                    setCompanyWebsite(event.target.value);
                  }}
                />
              </div>

              {/* <div className="mb-4">
                <label className="mb-1 block text-sm font-medium text-gray-500">
                  Shop website
                </label>
                <Input className="input-color w-full" placeholder="http://" />
              </div> */}

              <div className="mb-4">
                <label className="mb-1 block text-sm font-medium text-gray-500">
                  产品名称
                </label>
                <Input
                  className="input-color w-full"
                  placeholder="Fei"
                  onChange={(event) => {
                    setCompanyProduct(event.target.value);
                  }}
                />
              </div>

              <div className="mb-4">
                <label className="mb-1 block text-sm font-medium text-gray-500">
                  产品简介
                </label>
                <Textarea
                  className="input-color h-24 w-full"
                  placeholder="Brand description"
                />
              </div>

              <Separator className="w-full bg-slate-200" />

              <div className="mb-6">
                <h3 className="mb-2 text-lg font-semibold">风格</h3>
                <div className="flex h-48 flex-col items-center justify-center border-2 border-dashed border-gray-300 p-4 text-center">
                  <div className="">
                    <Input
                      className="mb-2 ml-10 w-60 text-blue-500"
                      id="file"
                      type="file"
                      // onChange={(event) => {
                      //   setProductImage(event.target.value)
                      // }}
                    />
                    <p className="text-sm text-gray-600">
                      Or drag and drop files
                    </p>
                  </div>
                </div>
              </div>

              <Separator className="w-full bg-slate-200" />

              <div>
                <h3 className="mb-2 text-lg font-semibold">竞品</h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-medium">
                      竞品
                    </label>
                    <Input className="w-full" placeholder="Fei" />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium">
                      竞品
                    </label>
                    <Select>
                      <SelectTrigger className="SelectTrigger w-full">
                        <SelectValue placeholder="chuhai" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="chuhai">chuhai</SelectItem>
                        {/* Add other options here */}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="mb-4">
              <h2 className="mb-2 text-lg font-semibold ">联系信息</h2>

              <div className="mb-4">
                <label className="mb-1 block text-sm font-medium text-gray-500">
                  联系人
                </label>
                <Input className="w-full" />
              </div>

              <div className="mb-4">
                <label className="mb-1 block text-sm font-medium text-gray-500">
                  邮箱
                </label>
                <Input className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralInformation;
