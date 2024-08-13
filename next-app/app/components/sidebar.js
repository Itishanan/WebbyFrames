"use client";

import { useState, useRef, useEffect } from "react";
import Logout from "@/utils/api/logout";
import { useRouter } from "next/navigation";

const SideBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  // Close sidebar if clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const logout = async () => {
    try {
      await Logout();
      window.location.href = "/login";
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {/* Sidebar */}
      <aside
        id="default-sidebar"
        ref={sidebarRef}
        className={`fixed top-0 left-0 z-40 w-72 h-screen transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 lg:block hidden`} // Sidebar visible only on larger screens
        aria-label="Sidebar"
      >
        <div className="bg-white">
          <div className="pt-5">
            <h2 className="font-bold text-gray-600 text-2xl text-center">
              WebbyFrames
            </h2>
          </div>
          <div className="pt-5">
            <ul className="flex gap-7 items-center justify-center pb-4 ">
              <li className="">
                <button
                  className="inline-flex items-center justify-center w-10 h-10 bg-gray-50 rounded-xl "
                  onClick={toggleDropdown}
                >
                  <img className="z-50" src="icons/vector-1.png" alt="User" />
                </button>
                {isOpen && (
                  <div className="absolute right-0 mt-2 z-auto w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                    <ul>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        <button
                          id="profile"
                          onClick={() => router.push("/dashboard/profile")}
                        >
                          Profile
                        </button>
                      </li>

                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        <button>Settings</button>
                      </li>

                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        <button onClick={logout}>Logout</button>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <li className="hover:opacity-70">
                <img src="icons/sidebar/settings.png" alt="Settings" />
              </li>
              <li className="hover:opacity-80">
                <div className="relative">
                  <span className="absolute top-[-8px] right-[-6px] inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full">
                    9
                  </span>
                  <img
                    src="icons/sidebar/notifcation.png"
                    alt="Notification Icon"
                  />
                </div>
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <div className="">
              <input
                placeholder="Search..."
                className="input shadow-lg focus:border-2 border-gray-300 px-5 py-3 rounded-xl w-56 transition-all focus:w-64 outline-none max-w-full"
                name="search"
                type="search"
              />
            </div>
          </div>
        </div>
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-300 group"
              >
                <img src="icons/sidebar/home.png" alt="Kanban Icon" />
                <span className="flex-1 ms-3 whitespace-nowrap">Kanban</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-300 group"
              >
                <img src="icons/sidebar/folders.png" alt="Inbox Icon" />
                <span className="flex-1 ms-3 whitespace-nowrap">Inbox</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-300 group"
              >
                <img src="icons/sidebar/tags.png" alt="Users Icon" />
                <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-300 group"
              >
                <img src="icons/sidebar/users.png" alt="Products Icon" />
                <span className="flex-1 ms-3 whitespace-nowrap">Products</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-300 group"
              >
                <img src="icons/sidebar/pictures.png" alt="Fifteen Icon" />
                <span className="flex-1 ms-3 whitespace-nowrap">Fifteen</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg  group"
              >
                <img src="icons/sidebar/plane.png" alt="Sixteen Icon" />
                <span className="flex-1 ms-3 whitespace-nowrap">Sixteen</span>
                <span className="inline-flex items-center justify-center w-4 h-2 p-4 ms-3 text-sm font-medium text-white bg-gray-400 rounded-xl">
                  99+
                </span>
                <button
                  type="button"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 ms-auto"
                  aria-controls="sub-menu-2"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open submenu</span>
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 1 5 5 1 1"
                    />
                  </svg>
                </button>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      {/* Header for mobile/tablet */}
      <header className="lg:hidden fixed top-0 left-0 z-40 w-full bg-white shadow-md h-16 flex items-center justify-between px-4">
        <div className="font-bold text-gray-600 text-2xl">WebbyFrames</div>
        <div className="flex gap-4 items-center">
          <div className="">
            <button
              className="inline-flex items-center justify-center w-10 h-10 bg-gray-50 rounded-xl "
              onClick={toggleDropdown}
            >
              <img className="z-50" src="icons/vector-1.png" alt="User" />
            </button>
            {isOpen && (
              <div className="absolute right-0 mt-2 z-auto w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                <ul>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Profile
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Settings
                  </li>
                  <button onClick={logout}>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Logout
                    </li>
                  </button>
                </ul>
              </div>
            )}
          </div>
          <div className="hover:opacity-70">
            <img src="icons/sidebar/settings.png" alt="Settings" />
          </div>
          <div className="hover:opacity-80">
            <div className="relative">
              <span className="absolute top-[-8px] right-[-6px] inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full">
                9
              </span>
              <img
                src="icons/sidebar/notifcation.png"
                alt="Notification Icon"
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default SideBar;
