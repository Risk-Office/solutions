import { useTabChange } from "~/store";
import TeamHub from "./team-hub";
import Report from "./report";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import NewsAndArticles from "./tabsContent/articles";
import RiskEvents from "./tabsContent/riskEvents";
import StatementAndAction from "./tabsContent/statement";
import Trends from "./tabsContent/trends";
import Tracking from "./tabsContent/tracking";

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

  switch (currentTab) {
    case 1: {
      return <TeamHub />;
    }
    case 2: {
      return <Report />;
    }

    default: {
      return (
        <div className="flex flex-row gap-5 w-full p-4">
          <div className="flex-1 flex flex-col gap-5 items-stretch">
            <Tabs defaultValue={tabs[0].value} className="w-full">
              <TabsList
                style={{
                  gridTemplateColumns: tabs.map((_tab) => "1fr").join(" "),
                }}
                className="grid gap-2 w-full mb-4 px-6 py-4"
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

              <>
                {tabs.map((tab) => (
                  <TabsContent key={tab.value} value={tab.value}>
                    <>{tab.component}</>
                  </TabsContent>
                ))}
              </>
            </Tabs>
          </div>

          <div className="flex-[0.3]">SEARCH</div>
        </div>
      );
    }
  }
};

export default DashboardEntry;
