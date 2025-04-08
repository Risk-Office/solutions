import { useTabChange } from "~/store";
import TeamHub from "./team-hub";
import Report from "./report";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import NewsAndArticles from "./tabsContent/articles";
import RiskEvents from "./tabsContent/riskEvents";
import StatementAndAction from "./tabsContent/statement";
import Trends from "./tabsContent/trends";
import Tracking from "./tabsContent/tracking";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { Search, SlidersHorizontal } from "lucide-react";
import { useViewState } from "~/store/viewState";

const tabs = [
  {
    name: "News/Articles",
    value: "news-articles",
    component: <NewsAndArticles />,
  },
  { name: "Risk Events", value: "risk-events", component: <RiskEvents /> },
  {
    name: "Statement/Actions",
    value: "statement-actions",
    component: <StatementAndAction />,
  },
  { name: "Trends", value: "trends", component: <Trends /> },
  { name: "Tracking", value: "tracking", component: <Tracking /> },
];

const DashboardEntry = () => {
  const currentTab = useTabChange((state) => state.value);
  const isViewingDetails = useViewState((state) => state.isViewingDetails);

  switch (currentTab) {
    case 1: {
      return <TeamHub />;
    }
    case 2: {
      return <Report />;
    }

    default: {
      return (
        <div className="flex flex-row gap-2 w-full p-4 relative items-stretch h-full">
          <Tabs
            defaultValue={tabs[0].value}
            className="w-full bg-transparent h-full flex flex-col"
          >
            {!isViewingDetails && (
              <div className="flex flex-row gap-2 w-full">
                <div className="flex-[0.65]">
                  <TabsList
                    style={{
                      gridTemplateColumns: tabs.map((_tab) => "1fr").join(" "),
                    }}
                    className="grid place-content-center gap-2 w-full px-6 py-4 border h-full max-h-[3.75rem] border-deepGray bg-white rounded-lg"
                  >
                    {tabs.map((tab) => (
                      <TabsTrigger
                        key={tab.value}
                        value={tab.value}
                        className="text-base font-semibold py-2 rounded-[0.625rem]"
                      >
                        {tab.name}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </div>
              </div>
            )}

            <div className={`flex-1 ${!isViewingDetails ? "mt-4" : ""}`}>
              {tabs.map((tab) => (
                <TabsContent
                  key={tab.value}
                  value={tab.value}
                  className="h-full"
                >
                  {tab.component}
                </TabsContent>
              ))}
            </div>
          </Tabs>

          {/* <div className="">
            <div className="flex flex-row items-center gap-4 bg-white rounded-lg w-full h-full max-h-[3.75rem] py-2 px-4 border border-deepGray mb-4">
              <div className="flex-1 flex flex-row items-center gap-2 border border-deepGray rounded-lg p-1">
                <Input
                  placeholder="Search for Statements/Actions"
                  className="placeholder:text-primary"
                />

                <Button className="w-9 h-8 rounded-lg">
                  <Search />
                </Button>
              </div>
              <Button
                variant={"text"}
                className="rounded-lg border border-deepGray"
              >
                <SlidersHorizontal strokeWidth={"3px"} />
              </Button>
            </div>
          </div> */}
        </div>
      );
    }
  }
};

export default DashboardEntry;
