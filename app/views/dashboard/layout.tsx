import React, { useState } from "react";
import { Outlet } from "react-router";
import Navbar from "~/components/atoms/dashboard/navbar";
import SideBar from "~/components/atoms/dashboard/sidebar";
import AppSizeProvider from "~/components/atoms/SizeProvider";
import { SidebarProvider, SidebarTrigger } from "~/components/ui/sidebar";

import { ThemeProvider } from "~/components/theme-provider";

const DashboardLayout = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
    <main className="flex items-stretch justify-stretch w-full min-h-screen">
      <AppSizeProvider>
        <div className="relative flex flex-row items-stretch w-full h-full">
          <div className="sticky top-0 left-0 w-full max-w-[15rem] max-h-screen overflow-y-auto bg-primary">
            {/* <SidebarProvider> */}
            <SideBar />
            {/* <main>
              <SidebarTrigger />
            </main>
            <div>
              <SidebarTrigger />
            </div>
          </SidebarProvider> */}
          </div>

          <div className="flex flex-col w-full">
            <div className="sticky top-0 z-50 flex items-center justify-center w-full bg-white min-h-[5rem] px-4 pt-2">
              <Navbar />
            </div>
            <div className="flex-1 w-full bg-gray border-t border-t-deepGray">
              <Outlet />
            </div>
          </div>
        </div>
      </AppSizeProvider>
    </main>
    </ThemeProvider>
  );
};

export default DashboardLayout;
