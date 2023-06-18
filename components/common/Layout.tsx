import React from "react";
import Header from "./Header";

const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <main className="w-[90%] mt-10 mx-auto">{children}</main>
    </>
  );
};

export default Layout;
