import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Toggle } from '@/components/ui/toggle';
import { Checkbox } from '@/components/ui/checkbox';
import Link from 'next/link';

const AddProduct = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="mb-8 flex items-center justify-between">
        <button className="text-sm text-gray-500">&lt; Back</button>
        <div className="flex space-x-4">
          <Button variant="outline">Cancel</Button>
          <Button>Save</Button>
        </div>
      </div>
      <h1 className="mb-8 text-2xl font-bold">Add Product</h1>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="mb-10">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Information</h2>
              <div className="flex items-center space-x-2">
                <span>promoted</span>
                <Toggle />
              </div>
            </div>

            <div className="mb-6">
              <label className="mb-2 block text-sm font-medium">
                Product Name
              </label>
              <Input className="w-full" placeholder="Summer T-Shirt" />
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
              <Textarea className="w-full" placeholder="Product description" />
            </div>

            <div className="mb-10">
              <h3 className="mb-4 text-lg font-semibold">Images</h3>
              <div className="border-2 border-dashed border-gray-300 p-6 text-center">
                <Button variant="outline" className="mb-2">
                  Add File
                </Button>
                <p className="text-sm text-gray-600">Or drag and drop files</p>
              </div>
            </div>

            <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Product Price
                </label>
                <Input className="w-full" placeholder="Enter price" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Discount Price
                </label>
                <Input className="w-full" placeholder="Price at Discount" />
              </div>
            </div>

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
                  <SelectTrigger className="w-full">
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
            <div className="flex flex-col space-y-3">
              <Checkbox>Women</Checkbox>
              <Checkbox>Men</Checkbox>
              <Checkbox>T-Shirt</Checkbox>
              <Checkbox>Hoodie</Checkbox>
              <Checkbox>Dress</Checkbox>
              <button className="mt-2 text-sm text-blue-500">Create New</button>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="mb-4 text-lg font-semibold">Tags</h2>
            <div className="mb-4">
              <Input className="w-full" placeholder="Enter tag name" />
            </div>
            <div className="flex flex-wrap gap-3">
              <p>T-Shirt</p>
              <p>Men Clothes</p>
              <p>Summer Collection</p>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="mb-4 text-lg font-semibold">SEO Settings</h2>
            <div className="mb-6">
              <label className="mb-2 block text-sm font-medium">Title</label>
              <Input className="w-full" placeholder="Title" />
            </div>
            <div className="mb-6">
              <label className="mb-2 block text-sm font-medium">
                Description
              </label>
              <Textarea className="w-full" placeholder="Description" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
