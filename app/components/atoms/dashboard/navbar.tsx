import React from "react";
import { useLocation, useNavigate } from "react-router";
import { Bell, Grip, Bolt } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";
import { useTabChange } from "~/store";
import { Button } from "~/components/ui/button";
import { ModeToggle } from "~/components/mode-toggle";

export const dashboardTabs = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Team Hub", path: "/dashboard/team-hub" },
  { name: "Report", path: "/dashboard/report" },
];

const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-between gap-4 w-full">
      <div className="flex flex-row items-center justify-between w-full gap-2">
        <div className="flex flex-col justify-between">
          <span className="text-xl font-medium dark:text-[var(--text-color)]">
            Welcome back, Feranmi
          </span>

          <Breadcrumb>
            <BreadcrumbList className="dark:text-[var(--text-color)]">
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Components</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="flex flex-row gap-2 text-sm dark:text-[var(--text-color)]">
          <span>Thursday, March 26, 2025</span>
          <span>12:42 PM</span>
        </div>
      </div>

      <div className="flex flex-row items-center justify-between w-full">
        <div className="flex flex-row items-end gap-4 w-full">
          {dashboardTabs.map((tab, tabIndex) => (
            <Button
              key={tab.name}
              variant={"text"}
              size={"text"}
              onClick={() => navigate(tab.path)}
              className={`text-base font-medium rounded-none px-1 text-center dark:text-[var(--text-color)] ${
                tab.path === pathname
                  ? "border-b-2 border-b-primary text-primary"
                  : "text-clay dark:text-[var(--text-color)]"
              }`}
            >
              {tab.name}
            </Button>
          ))}
        </div>

        <div className="flex flex-row items-center justify-between w-full max-w-[13.25rem] pb-1">
          <Button
            variant={"text"}
            className="dark:bg-white dark:border dark:border-white dark:rounded-full max-w-[2.3rem]"
          >
            <Bolt />
          </Button>
          <Button
            variant={"text"}
            className="dark:bg-white dark:border dark:border-white dark:rounded-full max-w-[2.3rem]"
          >
            <Bell />
          </Button>
          <Button
            variant={"text"}
            className="dark:bg-white dark:border dark:border-white dark:rounded-full max-w-[2.3rem]"
          >
            <Grip />
          </Button>
          <ModeToggle className="dark:bg-white dark:border dark:border-white dark:rounded-full" />
          <Button
            variant={"text"}
            className="bg-lightPurple text-black font-bold max-w-[2.3rem] rounded-full w-full h-full dark:bg-white dark:text-[#090c22]"
          >
            FM
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
