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
          <span className="text-xl font-medium">Welcome back, Feranmi</span>

          <Breadcrumb>
            <BreadcrumbList>
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

        <div className="flex flex-row gap-2 text-sm">
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
              className={`text-base font-medium rounded-none px-1 text-center ${
                tab.path === pathname
                  ? "border-b-2 border-b-primary text-primary"
                  : "text-clay"
              }`}
            >
              {tab.name}
            </Button>
          ))}
        </div>

        <div className="flex flex-row items-center justify-between w-full max-w-[13.25rem] pb-1">
          <Button variant={"text"}>
            <Bolt />
          </Button>
          <Button variant={"text"}>
            <Bell />
          </Button>
          <Button variant={"text"}>
            <Grip />
          </Button>
          <ModeToggle />
          <Button
            variant={"text"}
            className="bg-lightPurple text-black font-bold max-w-[1.625rem] rounded-full w-full h-full"
          >
            FM
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
