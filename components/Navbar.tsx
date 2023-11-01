"use client"; // client component
import React, { useState } from "react";
import { Link } from "react-scroll/modules";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";

type NavItem = {
  label: string;
  page: string;
};

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Projects",
    page: "projects",
  },
];

export const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [navbar, setNavbar] = useState(false);
  return (
    <header className="fixed top-0 z-50 mx-auto w-full bg-white px-4 shadow dark:border-b dark:border-stone-600 dark:bg-stone-900">
      <div className="justify-between md:flex md:items-center">
        <div>
          <div>
            <h2 className="text-2xl font-bold">Liam Cohen</h2>
          </div>
        </div>
        <div className="md:flex md:space-x-6">
          {NAV_ITEMS.map((item, idx) => {
            return <a key={idx}>{item.label}</a>;
          })}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
