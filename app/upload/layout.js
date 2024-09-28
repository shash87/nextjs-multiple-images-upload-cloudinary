import React from "react";
import Header from "./_components/Header";
import { Toaster } from "@/components/ui/sonner"

const layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Toaster />
    </div>
  );
};

export default layout;
