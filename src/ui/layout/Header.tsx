"use client";
import React, { useEffect, useState } from "react";
import Button from "@/ui/common/Button";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";

const HeaderItems = [
  {
    url: "/",
    title: "Home",
  },
  {
    url: "/about",
    title: "About",
  },
  {
    url: "/project",
    title: "Project",
  },
  {
    url: "/experience",
    title: "Experience",
  },
  {
    url: "/skills",
    title: "Skills",
  },
  {
    url: "/upload",
    title: "Upload",
  },
  {
    url: "/gallery",
    title: "Gallery",
  },
  {
    url: "/contact",
    title: "Contact",
  },
];

const Header = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathName]);

  return (
    <>
      {/* Desktop Header */}
      <div
        className={`hidden sm:flex sm:w-fit fixed z-50 top-6 w-[96%] m-auto sm:top-8 left-0 right-0 rounded-xl ${isScrolling ? "bg-gradient-to-r from-[#000] to-[#01322090] shadow-[0_0px_12px_#fff]" : ""}`}
      >
        <div
          className={`flex min-w-fit w-full m-auto items-center justify-between container p-2 border-1  gap-10 border-indigo-200 rounded-xl bg-[rgb(0,0,0,0.1)] `}
        >
          {/* Logo - Larger size for desktop */}
          <Link href="/" className="flex items-center justify-center px-2">
            <Image
              src="/logoAbhi.png"
              alt="Abhishek Jain Logo"
              width={120}
              height={120}
              className="rounded-xl object-cover min-w-24 h-12"
            />
          </Link>
          <div className="flex items-center justify-between gap-3">
            {HeaderItems.map((HeaderItem, index) => (
              <Link
                key={index}
                href={HeaderItem.url}
                className={`${pathName === HeaderItem.url ? "bg-white text-[#01322090]" : "bg-transparent text-white"} text-sm sm:text-base hover:scale-105 transition-all uppercase font-semibold w-auto text-center rounded-lg p-1 sm:p-2`}
              >
                {HeaderItem.title}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div
        className={`sm:hidden fixed z-50 top-8 w-[96%] m-auto left-0 right-0 rounded-xl ${isScrolling ? "bg-gradient-to-r from-[#000] to-[#01322090] shadow-[0_0px_12px_#fff]" : ""}`}
      >
        <div
          className={`flex w-full m-auto items-center justify-between container p-2 border-1 border-indigo-200 rounded-xl bg-[rgb(0,0,0,0.1)] `}
        >
          {/* Logo - Larger size for mobile */}
          <Link href="/" className="flex items-center justify-center">
            <Image
              src="/logoAbhi.png"
              alt="Abhishek Jain Logo"
              width={50}
              height={50}
              className="rounded-full object-cover w-12 h-12"
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-2"
          >
            {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 mx-2 bg-[#12191b] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
            {HeaderItems.map((HeaderItem, index) => (
              <Link
                key={index}
                href={HeaderItem.url}
                className={`block ${pathName === HeaderItem.url ? "bg-white text-[#01322090]" : "bg-transparent text-white"} text-base uppercase font-semibold text-center py-3 px-4 border-b border-white/10 last:border-b-0 hover:bg-white/10 transition-colors`}
              >
                {HeaderItem.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
