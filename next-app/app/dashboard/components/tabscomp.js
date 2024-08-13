"use client";
import { useState } from "react";

const DashboardTabs = ({ selectedTab, handleTabClick, getTabContent }) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row text-base font-bold text-center justify-between text-gray-900 border-b border-gray-500 mb-4">
        {/* Tabs */}
        <ul className="flex flex-wrap sm:flex-row  mb-4 sm:mb-0">
          {[
            "Overview",
            "Task",
            "Documents",
            "Team",
            "Reports",
            "Admin",
            "Icons",
          ].map((tab) => (
            <li key={tab} className="me-2 relative">
              <a
                href="#"
                className={`inline-block p-4 border-b-2 rounded-t-lg ${
                  selectedTab === tab
                    ? "text-primary border-primary z-10"
                    : "border-transparent hover:text-gray-600 hover:border-gray-300"
                }`}
                onClick={() => handleTabClick(tab)}
              >
                {tab}
              </a>
            </li>
          ))}
        </ul>

        {/* Date Picker */}
        <div className="flex flex-row mt-4 mb-3 items-center">
          <div className="relative mb-2 ">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>
            <input
              id="datepicker-range-start"
              name="start"
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
              placeholder="Select date start"
            />
          </div>
          <span className="mx-4 text-gray-500"> → </span>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>
            <input
              id="datepicker-range-end"
              name="end"
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
              placeholder="Select date end"
            />
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="mt-4">{getTabContent(selectedTab)}</div>
    </div>
  );
};

export default DashboardTabs;
