import React from 'react';
import { Button } from '@/components/ui/button';

interface ChildrenPros {
  children: string;
}
const TagButton = ({ children }: ChildrenPros) => {
  return (
    <Button variant="secondary">
      {children}
      <svg
        className="pl-2"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#b9b6b6"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    </Button>
  );
};

export default TagButton;
