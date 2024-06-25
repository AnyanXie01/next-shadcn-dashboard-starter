"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { api } from "~/trpc/server";
interface GenerateButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}
const GenerateButton = () => {
  return (
    <Button
      className="ml-auto bg-black text-white"
      // onClick={async () => {
      //   console.log("calling coze");
      //   await api.post.callCoze();
      // }}
    >
      Generate
    </Button>
  );
};

export default GenerateButton;
