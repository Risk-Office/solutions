import React, { useState } from "react";
import { Link } from "react-router";
import { ArrowLeftToLine, ChevronDown, ChevronUp } from "lucide-react";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "~/components/ui/collapsible";
import { SolutionTag } from "~/views/home";
import { offeredSolutions } from "~/constants/solutions";
import SvgIcon from "../Icon";
import { Separator } from "~/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { businessModelData, macroEnvironmentData } from "./navdata";
import { Button } from "~/components/ui/button";

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
      <div className="flex flex-col gap-1 w-full">
        <ArrowLeftToLine
          size={"24px"}
          className="self-end cursor-pointer"
          onClick={() => console.log("back")}
        />

        <div className="flex flex-row items-end justify-center gap-2">
          <SolutionTag solution={offeredSolutions[0]} />
          <SvgIcon
            path={offeredSolutions[0].icon}
            className="w-[48px] h-[48px]"
          />
        </div>

        <Separator className="bg-deepGray max-w-[90%] mx-auto mt-5" />
      </div>

      <div className="flex-1">
        <Tabs defaultValue="macro-environment" className="w-full">
          <TabsList className="grid grid-cols-2 w-full mb-4">
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
                    <CollapsibleTrigger className="flex flex-row items-center justify-between gap-2 text-left w-full">
                      <div className="flex flex-row justify-start gap-3">
                        <SvgIcon path={item.icon} />
                        <span className="font-normal text-sm">
                          {" "}
                          {item.title}
                        </span>
                      </div>

                      {isCollapse && currentCollapse === item.title ? (
                        <ChevronUp />
                      ) : (
                        <ChevronDown />
                      )}
                    </CollapsibleTrigger>

                    <CollapsibleContent className="CollapsibleContent">
                      {item.dropDownData.map((item) => (
                        <Button variant="text" className="text-left">
                          {item}
                        </Button>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>
                );
              })}
            </TabsContent>

            <TabsContent value="business-model">
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
                    <CollapsibleTrigger className="flex flex-row items-center justify-between gap-2 text-left w-full">
                      <div className="flex flex-row justify-start gap-3">
                        <SvgIcon path={item.icon} />
                        <span className="font-normal text-sm">
                          {" "}
                          {item.title}
                        </span>
                      </div>

                      {isCollapse && currentCollapse === item.title ? (
                        <ChevronUp />
                      ) : (
                        <ChevronDown />
                      )}
                    </CollapsibleTrigger>

                    <CollapsibleContent className="CollapsibleContent bg-red">
                      {item.dropDownData.map((item) => (
                        <Button variant="text">{item}</Button>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>
                );
              })}
            </TabsContent>
          </>
        </Tabs>
      </div>
    </div>
  );
};

export default SideBar;
