"use client";
import SideBar from "../components/sidebar";
import { useEffect, useState } from "react";
import DashboardTabs from "./components/tabscomp";
import Overview from "./overview";
import withAuth from "../HOC/withAuth";

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState("Overview");

  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
  };

  const getTabContent = (selectedTab) => {
    let obj = {
      Overview: <Overview></Overview>,
      Task: <div>Task Content</div>,
      Documents: <div>Documents Content</div>,
      Team: <div>Team Content</div>,
      Reports: <div>Reports Content</div>,
      Admin: <div>Admin Content</div>,
      Icons: <div>Icons Content</div>,
    };
    return obj[selectedTab];
  };

  useEffect(() => {
    if (!isAuthenticated) {
      const timer = setTimeout(() => {
        router.push("/login");
      }, 3000); // Redirect after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return (
      <div>
        <p>Please log in first to access this page. Redirecting...</p>
      </div>
    );
  }

  return (
    <div className="flex">
      <SideBar />
      <section className="flex-1 lg:ml-72 bg-gray-100 p-5">
        <h1 className=" font-sans">Dashboard</h1>
        <DashboardTabs
          selectedTab={selectedTab}
          handleTabClick={handleTabClick}
          getTabContent={getTabContent}
        />
      </section>
    </div>
  );
};

export default withAuth(Dashboard);
