import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Themetoggler } from "./ThemToggler";
import SearchInput from "./SearchInput";
import GendreDropdown from "./GendreDropdown";

function Header() {
  return (
    <div className="fixed w-full z-20 top-0 items-center justify-between flex p-5 bg-gradient-to-t
    from-gray-200/0 via-gray-900/25 to-gray-900
    ">
      <Link 
      className="mr-10"
      href="/">
        <Image
          src="https://links.papareact.com/a943ae"
          alt="Logo"
          width={120}
          height={100}
          className="cursor-pointer invert-0 dark:invert"
        />
      </Link>

    <div className="flex space-x-2">

    {/* Genre dropdown */}
    <GendreDropdown />
    {/* SearchInput */}
    <SearchInput />
    {/* Themetoggler */}
    <Themetoggler />

    </div>

    </div>
  );
}

export default Header;
