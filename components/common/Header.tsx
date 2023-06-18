import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="w-full h-14 bg-black text-white">
      <div className="w-[90%] h-full mx-auto flex justify-between items-center">
        <Link href="/" className="text-bold text-3xl">
          filosophy
        </Link>
        <nav className="w-60 h-full flex justify-end items-center">
          <Link href="/">로그인</Link>
          <Link href="/">마이페이지</Link>
          <Link href="/">로그아웃</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
