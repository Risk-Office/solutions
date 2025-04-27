import { useState } from "react";
import StatCard from "~/components/atoms/dashboard/StatCard";
// import MapChart from "~/components/atoms/dashboard/MapChart";
import FactorTrendChart from "~/components/atoms/dashboard/FactorTrendChart";
import FactorHeatmapCard from "~/components/atoms/dashboard/FactorHeatMap";
import { SolutionTag } from "~/views/home";
import { offeredSolutions } from "~/constants/solutions";
import HighlightCard from "~/components/atoms/dashboard/HighlightCard";
import { businessModelHighlights } from "~/data/highlights";

type Marker = {
  name: string;
  coordinates: [number, number];
  value: number;
  info: string;
};

type MapChartProps = {
  timeframe?: string;
  categories: string[];
  riskMarkers: Record<string, Marker[]>;
};

const categories = [
  "Value Props",
  "segments",
  "Channels",
  "Resources",
  "Partnerships",
  "Activities",
  "Customer Relationships",
  "Revenue Streams",
  "Cost Structure",
];

const riskMarkers = {
  "Value Props": [
    {
      name: "USA",
      coordinates: [-95.7129, 37.0902],
      value: 4,
      info: "Innovative healthcare solutions driving value",
    },
    {
      name: "Germany",
      coordinates: [10.4515, 51.1657],
      value: 3,
      info: "Strong value propositions in medical tech",
    },
  ],
  Segments: [
    {
      name: "Brazil",
      coordinates: [-51.9253, -14.235],
      value: 5,
      info: "Targeting emerging markets for senior care",
    },
  ],
  Channels: [
    {
      name: "India",
      coordinates: [78.9629, 20.5937],
      value: 4,
      info: "Digital channels for telemedicine expansion",
    },
  ],
  Resources: [
    {
      name: "Australia",
      coordinates: [133.7751, -25.2744],
      value: 3,
      info: "Investment in healthcare infrastructure",
    },
  ],
  Partnerships: [
    {
      name: "France",
      coordinates: [2.2137, 46.2276],
      value: 4,
      info: "Strategic partnerships with hospitals",
    },
  ],
  Activities: [
    {
      name: "Singapore",
      coordinates: [103.8198, 1.3521],
      value: 3,
      info: "R&D activities in AI healthcare",
    },
  ],
  "Customer Relationships": [
    {
      name: "Spain",
      coordinates: [-3.7492, 40.4637],
      value: 2,
      info: "Building trust with personalized care",
    },
  ],
  "Revenue Streams": [
    {
      name: "Japan",
      coordinates: [138.2529, 36.2048],
      value: 5,
      info: "Subscription-based healthcare services",
    },
  ],
  "Cost Structure": [
    {
      name: "Canada",
      coordinates: [-106.3468, 56.1304],
      value: 3,
      info: "Optimizing operational costs",
    },
  ],
};

const BusinessModelOverviewPage = () => {
  const [mapTimeframe, setMapTimeframe] = useState("today");
  const [currentSection, setCurrentSection] = useState("Revenue Streams");

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      {/* Top Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 mt-2">
        <StatCard
          color="bg-primary"
          title="Total Risked Items Tracked"
          value="145"
        />
        <StatCard color="bg-primary" title="Source Monitored" value="85" />
        <StatCard
          color="bg-primary"
          title="High Risk Trends"
          subtitle="(Last 7 days)"
          value="Channels, Partnerships"
        />
        <StatCard
          color="bg-primary"
          title="New Risk Events"
          subtitle="(Today)"
          value="12"
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-4 mb-6">
        {/* World/Region Map - 65% width */}
        <div className="lg:w-[65%] bg-white rounded-lg shadow p-4">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-bold">World/Region Map</h2>
            <div className="flex space-x-2">
              <button
                className={`px-3 py-1 text-sm rounded ${
                  mapTimeframe === "today"
                    ? "bg-primary text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => setMapTimeframe("today")}
              >
                Today
              </button>
              <button
                className={`px-3 py-1 text-sm rounded ${
                  mapTimeframe === "7days"
                    ? "bg-primary text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => setMapTimeframe("7days")}
              >
                7 Days
              </button>
              <button
                className={`px-3 py-1 text-sm rounded ${
                  mapTimeframe === "month"
                    ? "bg-primary text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => setMapTimeframe("month")}
              >
                Month
              </button>
            </div>
          </div>
          <hr className="my-2 text-gray-200" />

          <div className="relative">
            {/* <MapChart
              timeframe={mapTimeframe}
              categories={categories}
              riskMarkers={riskMarkers}
            /> */}
          </div>
        </div>
        {/* Factor Trend - 35% width */}
        <div className="lg:w-[35%]">
          <FactorHeatmapCard />
        </div>
      </div>

      {/* Impact Bubble Chart & Factor Heatmap */}
      <div className="flex gap-4 mb-6">
        {/* Impact Bubble Chart */}
        <div className="bg-white rounded-lg shadow p-4 w-[65%]">
          <div className="flex-1">
            <FactorTrendChart modelType={"business"} />
          </div>
        </div>

        {/* Factor Heatmap */}
        <div className="w-[40%]">
          <div className="bg-white w-full flex flex-col gap-4 py-4 px-4 rounded-lg">
            <span className="text-lg font-bold text-left">
              Our Other Solutions
            </span>

            <div className="flex flex-col gap-4">
              {[
                offeredSolutions[8],
                offeredSolutions[2],
                offeredSolutions[3],
              ].map((solution, index) => (
                <div
                  key={index}
                  className="flex flex-row items-center justify-center gap-2 bg-gray-50 p-3 w-full rounded-lg"
                >
                  <div className="flex-[0.4] flex flex-col gap-2">
                    <img
                      src={solution.icon}
                      alt={solution.name}
                      className="w-[52px] h-[48px]"
                    />
                    <SolutionTag solution={solution} />
                  </div>

                  <div className="flex-1 flex items-center justify-start">
                    <span className="font-normal text-sm">
                      {solution.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* important highlight */}
      <div className="bg-white rounded-lg shadow p-4 w-full">
        <h2 className="text-lg font-semibold mb-4">Important Highlights</h2>
        <hr className="my-2 text-gray-200" />

        <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
          {Object.keys(businessModelHighlights).map((section) => (
            <button
              key={section}
              onClick={() => setCurrentSection(section)}
              className={`px-2 py-1 rounded-full whitespace-nowrap shadow cursor-pointer ${
                currentSection === section
                  ? "bg-primary text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {section}
            </button>
          ))}
        </div>
        <HighlightCard
          title={currentSection}
          highlights={businessModelHighlights[currentSection] || []}
        />
      </div>
    </div>
  );
};
export default BusinessModelOverviewPage;
