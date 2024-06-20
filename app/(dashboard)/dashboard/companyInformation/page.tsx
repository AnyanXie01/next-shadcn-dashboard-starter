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

const GeneralInformation = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="mb-8 text-2xl font-bold">General Information</h1>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="mb-6">
            <h2 className="mb-2 text-lg font-semibold">Brand Information</h2>

            <div className="mb-4">
              <label className="mb-1 block text-sm font-medium">
                Company Name
              </label>
              <Input className="w-full" placeholder="Fei qi chu hai" />
            </div>

            <div className="mb-4">
              <label className="mb-1 block text-sm font-medium">
                Official website
              </label>
              <Input className="w-full" placeholder="http://" />
            </div>

            <div className="mb-4">
              <label className="mb-1 block text-sm font-medium">
                Shop website
              </label>
              <Input className="w-full" placeholder="http://" />
            </div>

            <div className="mb-4">
              <label className="mb-1 block text-sm font-medium">
                Brand name
              </label>
              <Input className="w-full" placeholder="Fei" />
            </div>

            <div className="mb-4">
              <label className="mb-1 block text-sm font-medium">
                Brand Description
              </label>
              <Textarea className="w-full" placeholder="Brand description" />
            </div>

            <div className="mb-6">
              <h3 className="mb-2 text-lg font-semibold">Style</h3>
              <div className="border-2 border-dashed border-gray-300 p-4 text-center">
                <Button variant="outline" className="mb-2">
                  Add File
                </Button>
                <p className="text-sm text-gray-600">Or drag and drop files</p>
              </div>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">Competitors</h3>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Competitor1
                  </label>
                  <Input className="w-full" placeholder="Fei" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Competitor1
                  </label>
                  <Select>
                    <SelectTrigger className="w-full">
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
            <h2 className="mb-2 text-lg font-semibold">Company Information</h2>

            <div className="mb-4">
              <label className="mb-1 block text-sm font-medium">Title</label>
              <Input className="w-full" placeholder="Title" />
            </div>

            <div className="mb-4">
              <label className="mb-1 block text-sm font-medium">Email</label>
              <Input className="w-full" placeholder="Email" />
            </div>
          </div>

          <div className="mt-8 flex justify-end space-x-4">
            <Button variant="outline">Cancel</Button>
            <Button>Save</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralInformation;
