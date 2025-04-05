import React, { useState } from "react";
import { Link } from "react-router";
import { ArrowLeftToLine, ChevronDown, ChevronUp } from "lucide-react";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "~/components/ui/collapsible";
import { Separator } from "~/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Button } from "~/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarTrigger,
  SidebarMenu,
  SidebarMenuButton,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "~/components/ui/sidebar";
import { businessModelData, macroEnvironmentData } from "./navdata";
import { SolutionTag } from "~/views/home";
import { offeredSolutions } from "~/constants/solutions";
import SvgIcon from "../Icon";

const SideBar = () => {
  const [isCollapse, setIsCollapse] = useState<boolean>(false);
  const [currentCollapse, setCurrentCollapse] = useState<string>("");

  const handleCollapseChange = (param: string) => {
    if (currentCollapse === param) {
      setIsCollapse(!isCollapse);
      return;
    }

    setIsCollapse(true);
    setCurrentCollapse(param);
    return;
  };

  return (
    <div className="flex flex-col w-full h-full text-white gap-5 p-4">
      {/* <Sidebar> */}
      {/* <SidebarContent className=""> */}
      <div className="flex flex-col gap-1 w-full">
        {/* <SidebarTrigger> */}
        <ArrowLeftToLine size={"24px"} className="self-end cursor-pointer" />
        {/* </SidebarTrigger> */}

        <SidebarGroup>
          <div className="flex flex-row items-end justify-center gap-2">
            <SolutionTag solution={offeredSolutions[0]} />
            <SvgIcon
              path={offeredSolutions[0].icon}
              className="w-[48px] h-[48px]"
            />
          </div>
        </SidebarGroup>

        <Separator className="bg-deepGray max-w-[90%] mx-auto mt-5" />
      </div>

      <div className="flex-1">
        <Tabs defaultValue="macro-environment" className="w-full">
          <TabsList className="grid grid-cols-2 gap-2 w-full mb-4">
            <TabsTrigger value="macro-environment">
              Macro Environment
            </TabsTrigger>
            <TabsTrigger value="business-model">Business Model</TabsTrigger>
          </TabsList>

          <>
            <TabsContent
              value="macro-environment"
              className="flex flex-col gap-4 w-full"
            >
              {macroEnvironmentData.map((item) => {
                if (item.type === "link") {
                  return (
                    <Link
                      key={item.title}
                      to={item.url}
                      className="flex flex-row items-center justify-start gap-2 w-full"
                    >
                      <SvgIcon path={item.icon} />
                      <span className="font-normal text-sm"> {item.title}</span>
                    </Link>
                  );
                }

                return (
                  <Collapsible
                    key={item.title}
                    open={isCollapse && currentCollapse === item.title}
                    onOpenChange={() => {
                      handleCollapseChange(item.title);
                    }}
                    className="w-full gap-4"
                  >
                    <CollapsibleTrigger
                      className={`flex flex-row items-center justify-between gap-2 text-left w-full ${
                        isCollapse && currentCollapse === item.title
                          ? "bg-white px-2.5 py-3 rounded-lg"
                          : ""
                      }`}
                    >
                      <div className="flex flex-row items-center justify-start gap-3">
                        <SvgIcon
                          path={
                            isCollapse && currentCollapse === item.title
                              ? item.activeIcon
                              : item.icon
                          }
                        />
                        <span
                          className={`font-normal text-sm ${
                            isCollapse && currentCollapse === item.title
                              ? "text-primary"
                              : "text-white"
                          }`}
                        >
                          {" "}
                          {item.title}
                        </span>
                      </div>

                      {isCollapse && currentCollapse === item.title ? (
                        <ChevronUp className="text-primary" />
                      ) : (
                        <ChevronDown />
                      )}
                    </CollapsibleTrigger>

                    <CollapsibleContent className="CollapsibleContent mt-2 max-w-[90%] w-full">
                      {item.dropDownData.map((item) => (
                        <Button
                          key={item}
                          variant="text"
                          className="text-left whitespace-normal"
                        >
                          {item}
                        </Button>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>
                );
              })}
            </TabsContent>

            <TabsContent
              value="business-model"
              className="flex flex-col gap-4 w-full"
            >
              {businessModelData.map((item) => {
                if (item.type === "link") {
                  return (
                    <Link
                      key={item.title}
                      to={item.url}
                      className="flex flex-row items-center justify-start gap-2 w-full"
                    >
                      <SvgIcon path={item.icon} />
                      <span className="font-normal text-sm"> {item.title}</span>
                    </Link>
                  );
                }

                return (
                  <Collapsible
                    key={item.title}
                    open={isCollapse && currentCollapse === item.title}
                    onOpenChange={() => {
                      handleCollapseChange(item.title);
                    }}
                    className="w-full gap-4"
                  >
                    <CollapsibleTrigger
                      className={`flex flex-row items-center justify-between gap-2 text-left w-full ${
                        isCollapse && currentCollapse === item.title
                          ? "bg-white px-2.5 py-3 rounded-lg"
                          : ""
                      }`}
                    >
                      <div className="flex flex-row items-center justify-start gap-3">
                        <SvgIcon
                          path={
                            isCollapse && currentCollapse === item.title
                              ? item.activeIcon
                              : item.icon
                          }
                        />
                        <span
                          className={`font-normal text-sm ${
                            isCollapse && currentCollapse === item.title
                              ? "text-primary"
                              : "text-white"
                          }`}
                        >
                          {" "}
                          {item.title}
                        </span>
                      </div>

                      {isCollapse && currentCollapse === item.title ? (
                        <ChevronUp className="text-primary" />
                      ) : (
                        <ChevronDown />
                      )}
                    </CollapsibleTrigger>

                    <CollapsibleContent className="CollapsibleContent mt-2 max-w-[90%] w-full">
                      {item.dropDownData.map((item) => (
                        <Button
                          key={item}
                          variant="text"
                          className="text-left whitespace-normal mb-2"
                        >
                          {item}
                        </Button>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>
                );
              })}
            </TabsContent>
          </>
        </Tabs>
      </div>
      {/* </SidebarContent>
    </Sidebar> */}
    </div>
  );
};

export default SideBar;
