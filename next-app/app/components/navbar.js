"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import Link from "next/link";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <nav className="flex justify-between mt-5 items-center">
      <div className="flex items-center pl-5">
        <img
          width="48"
          height="48"
          src="https://img.icons8.com/color/48/source-code.png"
          alt="source-code"
        />
        <Link className="text-2xl text-logo font-bold pl-5" href="/">
          WebbyFrames
        </Link>
      </div>
      <div className="hidden lg:flex gap-6 font-normal">
        <ul className="flex gap-6">
          <li className="navlist">
            <Link href="/about">Eleven</Link>
          </li>
          <li className="navlist">
            <Link href="/contact">Twelve</Link>
          </li>
          <li className="navlist">
            <Link href="/services">Thirteen</Link>
          </li>
          <li className="navlist">
            <Link href="/services">Sixteen</Link>
          </li>
        </ul>
      </div>
      <div className="hidden lg:flex gap-5 pr-5">
        <button
          className="px-8 py-4 bg-transparent border-2 border-primary rounded-md text-black  hover:text-white relative font-medium after:-z-20 after:absolute after:h-1 after:w-1 after:bg-primary after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700"
          onClick={() => {
            router.push("/login");
          }}
        >
          LogIn
        </button>
        <button className="btn-primary rounded-md">Start Free Trial</button>
      </div>
      <div className="lg:hidden flex items-center pr-0">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="focus:outline-none"
        >
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 7H11C11.2652 7 11.5196 7.10536 11.7071 7.29289C11.8946 7.48043 12 7.73478 12 8C12 8.26522 11.8946 8.51957 11.7071 8.70711C11.5196 8.89464 11.2652 9 11 9H6C5.73478 9 5.48043 8.89464 5.29289 8.70711C5.10536 8.51957 5 8.26522 5 8C5 7.73478 5.10536 7.48043 5.29289 7.29289C5.48043 7.10536 5.73478 7 6 7V7ZM13 15H18C18.2652 15 18.5196 15.1054 18.7071 15.2929C18.8946 15.4804 19 15.7348 19 16C19 16.2652 18.8946 16.5196 18.7071 16.7071C18.5196 16.8946 18.2652 17 18 17H13C12.7348 17 12.4804 16.8946 12.2929 16.7071C12.1054 16.5196 12 16.2652 12 16C12 15.7348 12.1054 15.4804 12.2929 15.2929C12.4804 15.1054 12.7348 15 13 15ZM6 11H18C18.2652 11 18.5196 11.1054 18.7071 11.2929C18.8946 11.4804 19 11.7348 19 12C19 12.2652 18.8946 12.5196 18.7071 12.7071C18.5196 12.8946 18.2652 13 18 13H6C5.73478 13 5.48043 12.8946 5.29289 12.7071C5.10536 12.5196 5 12.2652 5 12C5 11.7348 5.10536 11.4804 5.29289 11.2929C5.48043 11.1054 5.73478 11 6 11Z"
              fill="#001D6C"
            />
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute top-0 right-0 mt-16 mr-0 w-48 bg-white shadow-lg rounded-lg z-50">
          <ul className="flex flex-col items-center gap-6 p-4">
            <li className="navlist">
              <Link href="/about" onClick={() => setIsMenuOpen(false)}>
                Eleven
              </Link>
            </li>
            <li className="navlist">
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                Twelve
              </Link>
            </li>
            <li className="navlist">
              <Link href="/services" onClick={() => setIsMenuOpen(false)}>
                Thirteen
              </Link>
            </li>
            <li className="navlist">
              <Link href="/services" onClick={() => setIsMenuOpen(false)}>
                Sixteen
              </Link>
            </li>
            <button
              className="px-8 py-4 bg-transparent border-2 border-primary rounded-md text-black hover:text-white relative font-medium after:-z-20 after:absolute after:h-1 after:w-1 after:bg-primary after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700"
              onClick={() => setIsMenuOpen(false)}
            >
              <Link href="/login">Log in</Link>
            </button>
            <button
              className="btn-primary rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Start Free Trial
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};
export default NavBar;
