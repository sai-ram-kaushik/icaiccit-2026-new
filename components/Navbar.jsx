import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiFillCaretDown,
  AiFillCaretUp,
} from "react-icons/ai";
import { Menu } from "@headlessui/react";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const list = [
    {
      name: "International and National advisory Committee",
      link: "/international",
    },
    {
      name: "Institutional Advisory Committee",
      link: "/institutional-advisory-committee",
    },
    // {
    //   name: "IEEE Oversight Committee",
    //   link: "/ieee_oversight_committee",
    // },
    {
      name: "Organizing Committee",
      link: "/organizing_committee",
    },
    {
      name: "Keynote Speakers",
      link: "/keynote-speakers",
    },
  ];

  return (
    <div className="sticky -top-0 w-full h-20 shadow-xl z-[100] bg-[hsl(162,60%,79%)]">
      <div className="flex justify-between lg:justify-center items-center w-full h-full px-2 2xl:px-16">
        <Link href="/" className="block lg:hidden">
          <Image src="/logo1.png" width={180} height={100} />
        </Link>
        <div className="">
          <ul className="hidden md:flex ">
            <Link href="/">
              <li className="ml-8 text-lg hover:text-cyan-600 text-black">
                Home
              </li>
            </Link>
            <Link href="/about">
              <li className="ml-8 text-lg hover:text-cyan-600 text-black">
                About Us
              </li>
            </Link>
            <li
              onClick={() => setIsOpen((prev) => !prev)}
              className="ml-10 text-lg hover:text-cyan-600 text-black flex items-center gap-2"
            >
              Conference Committee{" "}
              {!isOpen ? <AiFillCaretDown /> : <AiFillCaretUp />}
            </li>
            {isOpen && (
              <div className="bg-white absolute top-20 flex flex-col items-center rounded-lg p-2 ">
                {list.map((item, i) => (
                  <div onClick={() => setIsOpen(false)}>
                    <Link
                      href={item.link}
                      className="flex w-full cursor-pointer rounded-lg p-2"
                      key={i}
                    >
                      <h3>{item.name}</h3>
                    </Link>
                  </div>
                ))}
              </div>
            )}
            <Link href="/conference_themes">
              <li className="ml-8 text-lg hover:text-cyan-600 text-black">
                Conference Theme
              </li>
            </Link>

            <Link href="/call-for-papers">
              <li className="ml-8 text-lg hover:text-cyan-600 text-black">
                Call for Paper
              </li>
            </Link>

            <Link href="/registration">
              <li className="ml-8 text-lg hover:text-cyan-600 text-black">
                Registration
              </li>
            </Link>
            <Link href="/previous_year">
              <li className="ml-8 text-lg hover:text-cyan-600 text-black">
                Previous Year Conferences
              </li>
            </Link>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf0OQg01U12HoPtYGFUzufNAHDRVBltjISuvyzEFBRt0qj7Og/viewform?usp=pp_url"
              target="_blank"
            >
              <li className="ml-8 text-lg hover:text-cyan-600 text-black">
                Contact Us
              </li>
            </a>
          </ul>
          <div onClick={handleNav} className="md:hidden text-black">
            <AiOutlineMenu size={25} />
          </div>
        </div>

        <div className="flex flex-row items-center justify-center gap-4 lg:hidden">
          {/* <Image src="/ieee.png" width={100} height={100} /> */}
          <a href="https://manavrachna.edu.in/" target="_blank">
            <Image src="/mrlogo1.png" width={200} height={100} />
          </a>
        </div>
      </div>

      <div
        className={nav ? "fixed left-0 top-0 w-full h-screen bg-black/70" : ""}
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[70%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0  p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between ">
              <Link href="/">
                <Image src="/logo1.png" width={100} height={35} />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer text-black"
              >
                <AiOutlineClose />
              </div>
            </div>
          </div>

          <div className="py-4 flex flex-col">
            <ul className="uppercase mt-14 ">
              <Link href="/" onClick={handleNav}>
                <li className="py-4 text-sm text-black">Home</li>
              </Link>
              <Link href="/about" onClick={handleNav}>
                <li className="py-4 text-sm text-black">About Us</li>
              </Link>
              <li
                onClick={() => setIsOpen((prev) => !prev)}
                className="ml-10 text-sm hover:text-cyan-600 text-black flex items-center gap-2"
              >
                Conference Committee{" "}
                {!isOpen ? <AiFillCaretDown /> : <AiFillCaretUp />}
              </li>
              {isOpen && (
                <div className="bg-white absolute top-20 flex flex-col items-center rounded-lg p-2 ">
                  {list.map((item, i) => (
                    <div onClick={() => setIsOpen(false)}>
                      <Link
                        href={item.link}
                        className="flex w-full cursor-pointer rounded-lg p-2"
                        key={i}
                      >
                        <h3>{item.name}</h3>
                      </Link>
                    </div>
                  ))}
                </div>
              )}
              <Link href="/conference_themes" onClick={handleNav}>
                <li className="py-4 text-sm text-black">Conference Theme</li>
              </Link>
              <Link href="/call-for-papers" onClick={handleNav}>
                <li className="py-4 text-sm text-black">Call for Paper</li>
              </Link>
              <Link href="/registration" onClick={handleNav}>
                <li className="py-4 text-sm text-black">Registration</li>
              </Link>
              <Link href="/previous_year" onClick={handleNav}>
                <li className="py-4 text-sm text-black">
                  Previous Year Conferences
                </li>
              </Link>
              <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf0OQg01U12HoPtYGFUzufNAHDRVBltjISuvyzEFBRt0qj7Og/viewform?usp=pp_url"
              target="_blank"
            >
              <li className="ml-8 text-lg hover:text-cyan-600 text-black">
                Contact Us
              </li>
            </a>
            </ul>
            <div className="py-10">
              <a href="https://manavrachna.edu.in/" target="_blank">
                <Image src="/mrlogo1.png" width={200} height={150} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
