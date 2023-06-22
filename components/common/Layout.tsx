import React from "react";
import Header from "./Header";

const Layout = ({ children }: any) => {
  return (
    <div className=" bg-gray-100">
      <Header />
      <main className="w-[90%] h-screen mt-10 mx-auto">{children}</main>
    </div>
  );
};

export default Layout;
