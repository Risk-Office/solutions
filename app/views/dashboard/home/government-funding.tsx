import { useTabChange } from "~/store";
import TeamHub from "../team-hub/chat";
import Report from "../report/report";
import { Search, SlidersHorizontal } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import NewsAndArticles from "./tabsContent/articles";
import RiskEvents from "./tabsContent/riskEvents";
import StatementAndAction from "./tabsContent/statement";
import Trends from "./tabsContent/trends";
import Tracking from "./tabsContent/tracking";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Separator } from "~/components/ui/separator";
import { SolutionTag } from "~/views/home";
import { offeredSolutions } from "~/constants/solutions";

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

const recommendedNews = [
  {
    title: "Corporate tax policy changes",
    subTitle: "IRS, Congressional Budget Office",
    description:
      "A recent 5%+ increase in corporate tax rates for healthcare businesses has raised concerns among hospital networks, senior care providers, and private healthcare institutions",
  },
  {
    title: "Property tax changes",
    subTitle: "Local Government Tax Authorities",
    description: "An 8%+ annual rise in property taxes for senior care ",
  },
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
        <div className="flex flex-row gap-2 w-full p-4 relative">
          <div className="flex-[0.65] flex flex-col items-stretch">
            <Tabs
              defaultValue={tabs[0].value}
              className="w-full bg-transparent"
            >
              <TabsList
                style={{
                  gridTemplateColumns: tabs.map((_tab) => "1fr").join(" "),
                }}
                className="grid place-content-center gap-2 w-full px-6 py-4 border h-full max-h-[3.75rem] dark:border-gray-600 border-deepGray dark:bg-[var(--nav-color)] bg-white rounded-lg"
              >
                {tabs.map((tab) => (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    className="text-base dark:text-white font-semibold py-2 rounded-[0.625rem]"
                  >
                    {tab.name}
                  </TabsTrigger>
                ))}
              </TabsList>

              <>
                {tabs.map((tab) => (
                  <TabsContent
                    key={tab.value}
                    value={tab.value}
                    className="mt-4"
                  >
                    <>{tab.component}</>
                  </TabsContent>
                ))}
              </>
            </Tabs>
          </div>

          <div className="flex-[0.35] flex flex-col items-stretch">
            <div className="flex flex-row items-center gap-4 dark:text-white dark:bg-[var(--nav-color)] bg-white rounded-lg w-full h-full max-h-[3.75rem] py-2 px-4 border dark:border-gray-700 border-deepGray">
              <div className="flex-1 flex flex-row items-center gap-2 border dark:border-gray-600 border-deepGray rounded-lg p-1">
                <Input
                  placeholder="Search for News/Articles"
                  className="placeholder:text-primary dark:placeholder:text-white"
                />

                <Button className="w-9 h-8 rounded-lg">
                  <Search />
                </Button>
              </div>
              <Button
                variant={"text"}
                className="rounded-lg border dark:border-white border-deepGray"
              >
                <SlidersHorizontal strokeWidth={"3px"} />
              </Button>
            </div>

            <div className="flex flex-col gap-5 w-full mt-6">
              <div className="flex flex-col gap-5 w-full bg-white dark:bg-[var(--nav-color)] py-2 px-4 rounded-lg">
                <span className="text-lg font-bold text-left dark:text-white">
                  Recommended for You
                </span>

                <div className="flex flex-col gap-4 w-full">
                  {recommendedNews.map((item) => (
                    <div
                      key={item.title}
                      className="flex flex-col gap-2 dark:bg-[var(--inner-color)] bg-gray p-4 w-full rounded-lg"
                    >
                      <div className="flex flex-col gap-4 w-full">
                        <span className="text-base font-semibold dark:text-white">
                          {item.title}
                        </span>
                        <span className="italic dark:text-white">
                          {item.subTitle}
                        </span>
                      </div>

                      <Separator className="my-1 dark:bg-gray-600 bg-deepGray" />

                      <span className="font-normal dark:text-white">
                        {item.description}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-[var(--nav-color)] w-full flex flex-col gap-2 py-2 px-4 rounded-lg">
                <span className="text-lg font-bold text-left dark:text-white">
                  Our Other Solutions
                </span>

                <div className="flex flex-row items-center justify-center dark:bg-[var(--inner-color)] gap-2 bg-gray p-2 w-full rounded-lg">
                  <div className="flex-[0.4] flex flex-col gap-2">
                    <img
                      src={offeredSolutions[8].icon}
                      alt={offeredSolutions[8].name}
                      className="w-[52px] h-[48px]"
                    />
                    <SolutionTag solution={offeredSolutions[8]} />
                  </div>

                  <div className="flex-1 flex items-center justify-start">
                    <span className="font-normal text-sm dark:text-white">
                      {offeredSolutions[8].description}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-[var(--nav-color)] w-full flex flex-col gap-2 py-2 px-4 rounded-lg">
                <span className="text-lg font-bold text-left dark:text-white">
                  Take Our Survey
                </span>

                <div className="flex flex-row items-center justify-center gap-2 dark:bg-[var(--inner-color)] bg-gray p-2 w-full rounded-lg">
                  <span className="font-normal text-sm dark:text-white">
                    Join other Assisted Living Facilities to understand the
                    trend in Labor Policy
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
};

export default DashboardEntry;
