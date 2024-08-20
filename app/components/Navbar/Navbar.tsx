import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchFilter from "./SearchFilter";
import UserNav from "./UserNav";
import AddPropertyButton from "./AddPropertyButton";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="w-full fixed top-0 left-0 py-6 border-b bg-white z-10">
      <div className="max-w-[1500px] mx-auto px-6">
        <div className="flex justify-between items-center">
          <Link href="/">
            {" "}
            <Image src="/logo.png" alt="Logo" width={170} height={35} />
          </Link>
          <div className="flex space-x-6">
            <SearchFilter/>
          </div>

          <div className="flex items-center space-x-6">
            <AddPropertyButton/>
            <UserNav/>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
