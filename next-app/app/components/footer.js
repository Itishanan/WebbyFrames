import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 pb-5 w-full z-50">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="flex justify-between">
          <div className="flex content-center items-center">
            <img
              width="32"
              height="32"
              src="https://img.icons8.com/color/48/source-code.png"
              alt="source-code"
            />
            <Link
              className="text-xl text-logo font-bold pl-2 flex items-baseline"
              href="/"
            >
              WebbyFrames
            </Link>
          </div>
          <div className="hidden lg:flex gap-6 font-normal ">
            <ul className="flex gap-6 text-gray-500">
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
          <div className="hidden lg:flex gap-6 font-normal ">
            <ul className="flex gap-6 text-gray-500">
              <li className="navlist">
                <a href="#">
                  <img src="./icons/social/youtube.png"></img>
                </a>
              </li>
              <li className="navlist">
                <a href="#">
                  <img src="./icons/social/facebook.png"></img>
                </a>
              </li>
              <li className="navlist">
                <a href="#">
                  <img src="./icons/social/twitter.png"></img>
                </a>
              </li>
              <li className="navlist">
                <a href="#">
                  <img src="./icons/social/instagram.png"></img>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <p className="text-gray-500">
          CompanyName @ 202X. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
