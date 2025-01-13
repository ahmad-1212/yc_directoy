import React, { ReactNode } from "react";
import Navbar from "../../components/Navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="font-work-sans">
      <Navbar />
      {children}
    </main>
  );
};

export default Layout;
