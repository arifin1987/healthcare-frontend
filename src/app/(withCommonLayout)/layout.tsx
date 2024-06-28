import Navbar from "@/components/Shared/Navbar/Navbar";
import React from "react";

const WithCommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default WithCommonLayout;
