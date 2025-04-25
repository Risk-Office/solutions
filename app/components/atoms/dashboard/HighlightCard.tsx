import { TrendingDown, TrendingUp } from "lucide-react";
import { useState } from "react";
import image1 from "~/assets/png/strong.png";

type TimeframeOption = "today" | "7days" | "month";

interface HighlightCardProps {
  title: string;
  highlights: {
    timeframe: TimeframeOption;
    data: {
      title: string;
      description: string;
      type: "success" | "warning" | "danger" | "info";
    }[];
  }[];
}

const HighlightCard = ({ title, highlights }: HighlightCardProps) => {
  const [selectedTimeframe, setSelectedTimeframe] =
    useState<TimeframeOption>("today");

  // Risk Signals data
  const riskSignals = {
    strong: 4,
    medium: 1,
    weak: 2,
  };

  const getHighlightTypeColor = (type: string) => {
    switch (type) {
      case "success":
        return "bg-green-500";
      case "warning":
        return "bg-yellow-500";
      case "danger":
        return "bg-red-500";
      case "info":
        return "bg-blue-500";
      default:
        return "bg-gray-500";
    }
  };

  const currentHighlights =
    highlights.find((h) => h.timeframe === selectedTimeframe)?.data || [];

  // News articles
  const newsArticles = [
    {
      title: "Shifting Market Dynamics Impact Revenue Growth",
      description:
        "A recent downturn in consumer demand and tightening regulatory policies have led to a slowdown in revenue generation across key healthcare markets.",
    },
    {
      title: "Shifting Market Dynamics Impact Revenue Growth",
      description:
        "A recent downturn in consumer demand and tightening regulatory policies have led to a slowdown in revenue generation across key healthcare markets.",
    },
    {
      title: "Shifting Market Dynamics Impact Revenue Growth",
      description:
        "A recent downturn in consumer demand and tightening regulatory policies have led to a slowdown in revenue generation across key healthcare markets.",
    },
  ];

  return (
    <div className="relative">
      {/* Header with Risk Signals */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <img src={image1} alt="Risk Signals" className="w-8 h-8" />
            <span className="font-semibold ml-2">Risk Signals:</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>Strong</span>
            <span className="px-1 py-0.5 text-primary font-semibold">
              {riskSignals.strong}
            </span>
            <span>Medium</span>
            <span className="px-1 py-0.5 text-primary font-semibold">
              {riskSignals.medium}
            </span>
            <span>Weak</span>
            <span className="px-1 py-0.5 text-primary font-semibold">
              {riskSignals.weak}
            </span>
          </div>
        </div>

        <div className="flex items-center">
          <div className="relative">
            <select
              className="appearance-none bg-white border rounded-md py-1 pl-3 pr-8 font-medium cursor-pointer"
              value={selectedTimeframe}
              onChange={(e) =>
                setSelectedTimeframe(e.target.value as TimeframeOption)
              }
            >
              <option value="today">Today</option>
              <option value="7days">7 Days</option>
              <option value="month">Month</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          <button className="ml-4 p-1 rounded-full border border-gray-300 bg-white">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* left side start*/}
      <div className="grid grid-cols-3 gap-4">
        {/* Left column */}
        <div className="col-span-1 space-y-4 border-r border-gray-200 pr-4">
          <div className="bg-gray-50 rounded-lg p-4 ">
            <h2 className="text-lg font-semibold mb-4">
              Revenue Streams At Risk
            </h2>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-black mr-2"></div>
                <span>Subscription Fees</span>
                <div className="w-10 h-1 bg-blue-400 rounded ml-2"></div>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-black mr-2"></div>
                <span>Product Sales</span>
                <div className="w-10 h-1 bg-green-500 rounded ml-2"></div>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-black mr-2"></div>
                <span>Dividend Income</span>
                <div className="w-10 h-1 bg-red-500 rounded ml-2"></div>
              </div>
            </div>
          </div>

          {/* Trends */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-4">Trends</h2>
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="text-primary font-bold mr-2">#</span>
                <span>Subscription Fees</span>
                <div className="border border-yellow-400 p-1 rounded ml-4">
                  <TrendingDown className="w-4 h-4 text-yellow-500" />
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-primary font-bold mr-2">#</span>
                <span>Pricing Strategy</span>
                <div className="border border-red-400 p-1 rounded ml-4">
                  <TrendingUp className="w-4 h-4 text-red-500" />
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-primary font-bold mr-2">#</span>
                <span>DOGE Medicaid</span>
                <div className="border border-green-400 p-1 rounded ml-4">
                  <TrendingDown className="w-4 h-4 text-green-500" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* left side end*/}
        {/* Middle column - News Articles */}
        <div className="col-span-1 border-r border-gray-200 pr-1">
          <h2 className="text-lg font-semibold mb-4">Top 5 News/Articles</h2>
          <div className="bg-white rounded-lg p-4">
            <div className="space-y-4">
              {newsArticles.map((article, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-lg">
                  <h3 className="font-medium text-sm mb-1">{article.title}</h3>
                  <p className="text-xs text-gray-600">{article.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="col-span-1 space-y-4">
          {/* Revenue-Impacting Risk Events */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h2 className="text-sm font-semibold mb-4">
              Revenue-Impacting Risk Events
            </h2>
            <div className="space-y-3">
              {currentHighlights.map((highlight, index) => (
                <div key={index} className="flex items-start">
                  <div
                    className={`w-1 h-full min-h-6 self-stretch mr-3 ${getHighlightTypeColor(
                      highlight.type
                    )}`}
                  ></div>
                  <p className="text-sm">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Important Statements & Actions */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h2 className="text-sm font-semibold mb-4">
              Important Statements & Actions
            </h2>
            <div className="space-y-3">
              {currentHighlights.map((highlight, index) => (
                <div key={index} className="flex items-start">
                  <div
                    className={`w-1 h-full min-h-6 self-stretch mr-3 ${getHighlightTypeColor(
                      highlight.type
                    )}`}
                  ></div>
                  <p className="text-sm">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighlightCard;
