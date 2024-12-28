import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className="w-full flex flex-wrap items-center justify-between px-4 py-4 shadow-lg bg-blue-300 text-white">
      {/* Logo Section */}
      <div className="flex items-center">
        <Image
          src="/image.jpg"
          alt="img"
          width={60}
          height={60}
          className="rounded-md transition-transform duration-300 hover:scale-110 hover:ease-in-out cursor-pointer"
        />
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto mt-4 md:mt-0">
        <ul className="flex flex-col md:flex-row items-center gap-4 text-sm md:text-base font-bold">
          <li className="relative group cursor-pointer">
            <Link href="/">
              <span className="hover:text-amber-400 transition-colors">
                Home
              </span>
            </Link>
            <div className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-blue-600 group-hover:w-full transition-all"></div>
          </li>
          <li className="relative group cursor-pointer">
            <Link href="/Client-side-rendering">
              <span className="hover:text-amber-400 transition-colors">
                Client-Side
              </span>
            </Link>
            <div className="absolute left-0 bottom-[-2px] w-0 h-[2px]  bg-blue-600 group-hover:w-full transition-all"></div>
          </li>
          <li className="relative group cursor-pointer">
            <Link href="/server-side-rendering">
              <span className="hover:text-amber-400 transition-colors">
                Server-Side
              </span>
            </Link>
            <div className="absolute left-0 bottom-[-2px] w-0 h-[2px]  bg-blue-600 group-hover:w-full transition-all"></div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
