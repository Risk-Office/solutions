import React, { useState, useEffect } from "react";
import { articles } from "~/data/statements";
import { offeredSolutions } from "~/constants/solutions";
import { Separator } from "~/components/ui/separator";
import { SolutionTag } from "~/views/home";
// import { Search, SlidersHorizontal } from "lucide-react";
// import { Button } from "~/components/ui/button";
// import { Input } from "~/components/ui/input";
import RiskDetails from "./riskDetails";
import { useViewState } from "~/store/viewState";

export interface RiskCardProps {
  id: string;
  title: string;
  source: string;
  date: string;
  imageUrl: string;
  timeHorizon: string;
  severity: 'Critical' | 'High' | 'Medium' | 'Low' | 'Insignificant';
  showFull?: boolean;
}

interface RecommendedNewsItem {
  title: string;    
  subTitle: string;
  description: string;
}

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

export const RiskCard: React.FC<RiskCardProps & { onClick: () => void }> = ({
  id,
  title,
  source,
  date,
  imageUrl,
  timeHorizon,
  severity,
  onClick,
  showFull = true
}) => {
  const severityColorMap = {
    Critical: {
      bar: 'bg-red-500',
    },
    High: {
      bar: 'bg-amber-600',
    },
    Medium: {
      bar: 'bg-yellow-400',
    },
    Low: {
      bar: 'bg-cyan-500',
    },
    Insignificant: {
      bar: 'bg-green-500',
    },
    Default: {
      bar: 'bg-gray-400',
    },
  };

  const color = severityColorMap[severity] || severityColorMap.Default;

  return (
    <div 
      key={id} 
      className="bg-gray-50 relative overflow-hidden rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-100 transition-colors"
      onClick={onClick}
    >
      <div className={`w-2 rounded-l-lg ${color.bar} absolute left-0 h-full`} />

      <div className="flex space-x-3 items-center p-4">
        <div>
          <img
            src={imageUrl}
            alt="Publisher"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>

        <div>
          <h2 className="font-semibold text-md">{title}</h2>
          <p className="text-base my-2 text-gray-500">
            <a href={`https://${source}`} target="_blank" rel="noopener noreferrer" className="underline italic">
              {source}
            </a> &nbsp;|&nbsp;
            <span>{date}</span>
          </p>

            {showFull && (
            <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
              <span>Time Horizon: {timeHorizon}</span>
              <span className="border-l border-gray-300 pl-4">
                Impact severity:
                <span className="font-semibold ml-1">{severity}</span>
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const StatementAndAction = () => {
  const [selectedRisk, setSelectedRisk] = useState<RiskCardProps | null>(null);
  const setIsViewingDetails = useViewState((state) => state.setIsViewingDetails);

  useEffect(() => {
    setIsViewingDetails(!!selectedRisk);
    return () => {
      setIsViewingDetails(false);
    };
  }, [selectedRisk, setIsViewingDetails]);

  const handleBack = () => {
    setSelectedRisk(null);
  };

  if (selectedRisk) {
    return <RiskDetails {...selectedRisk} onBack={handleBack} />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_23rem] 2xl:grid-cols-[1fr_26rem] gap-2 w-full h-full">
      <div className="flex flex-col items-stretch overflow-hidden h-full">
        {/* <div className="flex flex-row items-center gap-4 bg-white rounded-lg w-full h-full max-h-[3.75rem] py-2 px-4 border border-deepGray mb-4">
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
        </div> */}

        <div className="space-y-4 w-full bg-white rounded-lg h-full py-4 px-4 overflow-y-auto max-h-[100vh]">
          {articles.map((item) => (
            <RiskCard 
              key={item.id} 
              {...item} 
              onClick={() => setSelectedRisk(item)}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col items-stretch h-full overflow-auto">
        <div className="flex flex-col gap-5 w-full">
          <div className="flex flex-col gap-5 w-full bg-white py-2 px-4 rounded-lg max-h-[60vh] overflow-y-auto">
            <span className="text-lg font-bold text-left">
              News/Articles
            </span>

            <div className="flex flex-col gap-4 w-full">
              {recommendedNews.map((item: RecommendedNewsItem) => (
                <div
                  key={item.title}
                  className="flex flex-col gap-2 bg-gray p-4 w-full rounded-lg"
                >
                  <div className="flex flex-col gap-4 w-full">
                    <span className="text-base font-semibold">
                      {item.title}
                    </span>
                    <span className="italic">{item.subTitle}</span>
                  </div>

                  <Separator className="my-1 bg-deepGray" />

                  <span className="font-normal">{item.description}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white w-full flex flex-col gap-2 py-2 px-4 rounded-lg">
            <span className="text-lg font-bold text-left">
              Our Other Solutions
            </span>

            <div className="flex flex-row items-center justify-center gap-2 bg-gray p-2 w-full rounded-lg">
              <div className="flex-[0.4] flex flex-col gap-2">
                <img
                  src={offeredSolutions[8].icon}
                  alt={offeredSolutions[8].name}
                  className="w-[52px] h-[48px]"
                />
                <SolutionTag solution={offeredSolutions[8]} />
              </div>

              <div className="flex-1 flex items-center justify-start">
                <span className="font-normal text-sm">
                  {offeredSolutions[8].description}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white w-full flex flex-col gap-2 py-2 px-4 rounded-lg">
            <span className="text-lg font-bold text-left">
              Take Our Survey
            </span>

            <div className="flex flex-row items-center justify-center gap-2 bg-gray p-2 w-full rounded-lg">
              <span className="font-normal text-sm">
                Join other Assisted Living Facilities to understand the
                trend in Labor Policy
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatementAndAction;