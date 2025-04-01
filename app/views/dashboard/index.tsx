import React from "react";
import Navbar from "~/components/atoms/dashboard/navbar";
import SideBar from "~/components/atoms/dashboard/sidebar";
import AppSizeProvider from "~/components/atoms/SizeProvider";

const Dashboard = () => {
  return (
    <main className="flex items-stretch justify-stretch w-full min-h-screen">
      <AppSizeProvider>
        <div className="relative flex flex-row items-stretch w-full h-full">
          <div className="sticky top-0 left-0 w-full max-w-[14rem] max-h-screen overflow-y-auto bg-primary">
            <SideBar />
          </div>

          <div className="flex flex-col w-full">
            <div className="sticky top-0 flex items-center justify-center w-full bg-white min-h-[5rem] px-2 pt-2">
              <Navbar />
            </div>
            <div className="flex-1 min-h-[200vh] bg-red w-full"></div>
          </div>
        </div>
      </AppSizeProvider>
    </main>
  );
};

export default Dashboard;
