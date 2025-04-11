import React, { useState, type ReactNode } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import {
  ArrowLeftToLine,
  ChevronDown,
  ChevronUp,
  ClipboardCheck,
  MessageSquareText,
  Users,
} from "lucide-react";
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
import { useTabChange } from "~/store";
import { dashboardTabs } from "./navbar";

export const teamHubNav: { icon: ReactNode; name: string; path: string }[] = [
  {
    name: "Chat",
    path: "/dashboard/team-hub",
    icon: <MessageSquareText className="w-5 h-5" />,
  },
  {
    name: "My Tasks",
    path: "/dashboard/team-hub/my-tasks",
    icon: <ClipboardCheck className="w-5 h-5" />,
  },
  {
    name: "Team Members",
    path: "/dashboard/team-hub/team-members",
    icon: <Users className="w-5 h-5" />,
  },
];

const SideBar = () => {
  const { pathname } = useLocation();
  // const currentTab = useTabChange((state) => state.value);
  const {
    value: currentTab,
    teamHubSection,
    setTeamHubSection,
  } = useTabChange();

  const [isCollapse, setIsCollapse] = useState<boolean>(false);
  const [currentCollapse, setCurrentCollapse] = useState<string>("");
  const navigate = useNavigate();

  const handleCollapseChange = (param: string) => {
    if (currentCollapse === param) {
      setIsCollapse(!isCollapse);
      return;
    }

    setIsCollapse(true);
    setCurrentCollapse(param);
    return;
  };

  // Common header section
  const headerSection = (
    <div className="flex flex-col gap-1 w-full">
      <ArrowLeftToLine size={"24px"} className="self-end cursor-pointer" />
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
  );

  return (
    <div className="flex flex-col w-full h-full text-white gap-5 p-4">
      {headerSection}

      {pathname.includes(dashboardTabs[1].path) ? (
        // Team Hub Content
        <div className="flex-1">
          {/* Team Hub Sidebar */}
          <div className="flex flex-col gap-4 w-full">
            {teamHubNav.map((item) => (
              <Button
                key={item.name}
                variant="text"
                onClick={() => navigate(item.path)}
                className="flex flex-row items-center justify-start w-full"
              >
                <>{item.icon}</>
                <span>{item.name}</span>
              </Button>
            ))}
          </div>
        </div>
      ) : pathname === dashboardTabs[2].path ? (
        <span>Reports Sidebar Items</span>
      ) : (
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
                        onClick={() => {
                          setIsCollapse(false);
                          setCurrentCollapse("");
                        }}
                        className={`flex flex-row items-center justify-start gap-2 w-full ${
                          pathname === item.url
                            ? "bg-white px-2.5 py-3 rounded-lg text-primary"
                            : "text-white"
                        }`}
                      >
                        <SvgIcon
                          path={
                            pathname === item.url ? item.activeIcon : item.icon
                          }
                        />
                        <span className="font-normal text-sm">
                          {" "}
                          {item.title}
                        </span>
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
                            key={item.name}
                            onClick={() => navigate(item.path)}
                            variant="text"
                            className="text-left whitespace-normal"
                          >
                            {item.name}
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
                        className={`flex flex-row items-center justify-start gap-2 w-full ${
                          pathname === item.url
                            ? "bg-white px-2.5 py-3 rounded-lg text-primary"
                            : "text-white"
                        }`}
                      >
                        <SvgIcon
                          path={
                            pathname === item.url ? item.activeIcon : item.icon
                          }
                        />
                        <span className="font-normal text-sm">
                          {" "}
                          {item.title}
                        </span>
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
                            key={item.name}
                            onClick={() => navigate(item.path)}
                            variant="text"
                            className="text-left whitespace-normal mb-2"
                          >
                            {item.name}
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
      )}
    </div>
  );
};

export default SideBar;
