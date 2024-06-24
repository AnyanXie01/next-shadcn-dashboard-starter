import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';
interface ChildrenPros {
  children: String;
}
const CheckBoxCustome = ({ children }: ChildrenPros) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms"/>
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {children}
      </label>
    </div>
  );
};

export default CheckBoxCustome;
