import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";

const Navbar = () => {
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

      <div className="border border-gray-700"></div>
    </div>
  );
};

export default Navbar;
