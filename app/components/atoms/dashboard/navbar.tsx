import React from "react";
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

const tabs = ["Dashboard", "Team Hub", "Report"];

const Navbar = () => {
  const changeTab = useTabChange((state) => state.changeTab);
  const currentTab = useTabChange((state) => state.value);

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
          {tabs.map((tab, tabIndex) => (
            <Button
              key={tab}
              variant={"text"}
              size={"text"}
              onClick={() => changeTab(tabIndex)}
              className={`text-base font-medium rounded-none px-1 text-center ${
                currentTab === tabIndex
                  ? "border-b-2 border-b-primary text-primary"
                  : "text-clay"
              }`}
            >
              {tab}
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
