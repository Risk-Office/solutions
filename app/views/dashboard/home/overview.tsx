import { useState } from "react";
import StatCard from "~/components/atoms/dashboard/StatCard";
import WordCloud from "~/components/atoms/dashboard/WordCloud";
import BubbleChart from "~/components/atoms/dashboard/BubbleChart";
import FactorTrendChart from "~/components/atoms/dashboard/FactorTrendChart";
import FactorHeatmapCard from "~/components/atoms/dashboard/FactorHeatMap";
import MapChart from "~/components/atoms/dashboard/MapChart";
import featuredImage from "~/assets/png/Screenshot.png";
import { Separator } from "~/components/ui/separator";

import RiskEven from "~/riskevent/RiskEven";

const categories = [
  "Political",
  "Economic",
  "Technological",
  "Environmental",
  "Legal",
  "Social",
  "Competition",
];

const riskMarkers = {
  Political: [
    {
      name: "USA",
      coordinates: [-95.7129, 37.0902],
      value: 10,
      info: "Tax policy change affecting healthcare businesses",
      subMarkers: [
        {
          name: "New York City",
          coordinates: [-74.006, 40.7128],
          value: 3,
          risks: [
            "New tax regulation for hospitals",
            "Labor union strike",
            "Healthcare funding cut",
          ],
        },
        {
          name: "California",
          coordinates: [-119.4179, 36.7783],
          value: 5,
          risks: [
            "State-level privacy law",
            "Medical supply chain disruption",
            "Increased operational costs",
            "Tech regulation impact",
            "Insurance policy change",
          ],
        },
        {
          name: "Texas",
          coordinates: [-99.9018, 31.9686],
          value: 2,
          risks: ["Property tax increase", "Healthcare worker shortage"],
        },
      ],
    },
    {
      name: "UK",
      coordinates: [-0.1278, 51.5074],
      value: 3,
      info: "Brexit regulations impact on imported medical supplies",
    },
    {
      name: "China",
      coordinates: [104.1954, 35.8617],
      value: 4,
      info: "New trade restrictions on pharmaceutical exports",
    },
  ],
  Economic: [
    {
      name: "Germany",
      coordinates: [10.4515, 51.1657],
      value: 4,
      info: "Interest rate changes affecting healthcare investments",
    },
    {
      name: "Japan",
      coordinates: [138.2529, 36.2048],
      value: 3,
      info: "Economic slowdown impacting senior care funding",
    },
    {
      name: "Brazil",
      coordinates: [-51.9253, -14.235],
      value: 5,
      info: "Currency devaluation affecting drug imports",
    },
  ],
  Technological: [
    {
      name: "India",
      coordinates: [78.9629, 20.5937],
      value: 4,
      info: "New telemedicine regulations",
    },
    {
      name: "South Korea",
      coordinates: [127.7669, 35.9078],
      value: 5,
      info: "AI healthcare approval processes",
    },
  ],
  Environmental: [
    {
      name: "Australia",
      coordinates: [133.7751, -25.2744],
      value: 3,
      info: "Climate change policy affecting healthcare facilities",
    },
    {
      name: "Canada",
      coordinates: [-106.3468, 56.1304],
      value: 2,
      info: "New environmental standards for medical waste",
    },
  ],
  Legal: [
    {
      name: "France",
      coordinates: [2.2137, 46.2276],
      value: 4,
      info: "Healthcare privacy law changes",
    },
    {
      name: "Italy",
      coordinates: [12.5674, 41.8719],
      value: 3,
      info: "Patient data protection regulations",
    },
  ],
  Social: [
    {
      name: "Spain",
      coordinates: [-3.7492, 40.4637],
      value: 2,
      info: "Healthcare worker union negotiations",
    },
    {
      name: "Mexico",
      coordinates: [-102.5528, 23.6345],
      value: 3,
      info: "Public healthcare access expansion",
    },
  ],
  Competition: [
    {
      name: "Singapore",
      coordinates: [103.8198, 1.3521],
      value: 4,
      info: "New healthcare market entrants",
    },
    {
      name: "UAE",
      coordinates: [53.8478, 23.4241],
      value: 3,
      info: "Healthcare consolidation trends",
    },
  ],
};

const criticalColor = {
  Critical: "bg-red-500",
  High: "bg-orange-500",
  Medium: "bg-yellow-500",
  Low: "bg-blue-500",
  Insignificant: "bg-green-500",
};

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

// Sample components for different highlight types
const NewsArticleContent = () => (
  <div className="flex gap-4">
    {/* Left side - Large image and minimum wage info */}
    <div className="w-1/2 border border-gray-200 rounded-lg p-4">
      <div className="relative">
        <img
          src={featuredImage}
          alt="Healthcare worker assisting senior patient"
          className="w-full h-48 object-cover rounded-lg mb-3"
        />
        <div className="mt-3">
          <h3 className="font-semibold text-sm mb-1">
            Changes in Minimum Wage Laws
          </h3>
          <div className="flex items-center gap-2 justify-between">
            <p className="text-[8px] text-primary mb-2 border-b py-1 border-gray-200">
              U.S. Department of Labor, State Labor Departments
            </p>
            <div
              className={`h-1 w-[20%] ${criticalColor.Low} rounded-full`}
            ></div>
          </div>
          <p className="text-sm">
            Recent legislation has mandated a 10%+ increase in caregiver wages,
            putting financial pressure on hospitals, nursing homes, and home
            healthcare providers.
          </p>
        </div>
      </div>
    </div>

    {/* Right side - Two cards */}
    <div className="w-1/2 space-y-4">
      {recommendedNews.map((item) => (
        <div
          key={item.title}
          className="flex flex-col gap-2 bg-gray p-4 w-full rounded-lg"
        >
          <div className="flex flex-col gap-4 w-full">
            <span className="text-sm font-semibold">{item.title}</span>
            <div className="flex items-center gap-2 justify-between">
              <span className="italic text-[12px]">{item.subTitle}</span>
              <div
                className={`h-1 w-[20%] ${criticalColor.High} rounded-full`}
              ></div>
            </div>
          </div>
          <Separator className="my-1 bg-deepGray" />
          <span className="font-normal text-[13px]">{item.description}</span>
        </div>
      ))}
    </div>
  </div>
);

const StatementActionContent = () => (
  <div className="p-4">
    <h3 className="font-semibold mb-4">Recent Statements & Actions</h3>
    <div className="space-y-4">
      <div className="border border-gray-200 rounded-lg p-4">
        <div className="flex justify-between items-start">
          <div>
            <h4 className="font-medium">FDA Policy Update</h4>
            <p className="text-sm text-gray-600">
              U.S. Food & Drug Administration
            </p>
          </div>
          <div className={`h-2 w-16 ${criticalColor.High} rounded-full`}></div>
        </div>
        <p className="mt-2">
          New guidelines on medical device approval processes will impact
          manufacturing and supply chain operations for healthcare providers.
        </p>
      </div>

      <div className="border border-gray-200 rounded-lg p-4">
        <div className="flex justify-between items-start">
          <div>
            <h4 className="font-medium">WHO Recommendation</h4>
            <p className="text-sm text-gray-600">World Health Organization</p>
          </div>
          <div
            className={`h-2 w-16 ${criticalColor.Medium} rounded-full`}
          ></div>
        </div>
        <p className="mt-2">
          Updated protocols for healthcare facility sanitation may require
          significant operational changes and staff training.
        </p>
      </div>
    </div>
  </div>
);

const TrendsContent = () => (
  <div className="p-4">
    <div className="flex justify-between items-center mb-4">
      <h3 className="font-semibold">Emerging Healthcare Trends</h3>
      <div className="text-sm text-primary">Last updated: Apr 19, 2025</div>
    </div>

    <div className="grid grid-cols-2 gap-4">
      <div className="border border-gray-200 rounded-lg p-4">
        <h4 className="font-medium">Telehealth Expansion</h4>
        <div className="flex items-center mt-2">
          <div className="h-2 w-full bg-gray-200 rounded-full">
            <div className="h-2 w-[82%] bg-primary rounded-full"></div>
          </div>
          <span className="ml-2 text-sm">82%</span>
        </div>
        <p className="mt-2 text-sm">
          Accelerating adoption of remote healthcare services across all
          provider types.
        </p>
      </div>

      <div className="border border-gray-200 rounded-lg p-4">
        <h4 className="font-medium">AI Diagnostics</h4>
        <div className="flex items-center mt-2">
          <div className="h-2 w-full bg-gray-200 rounded-full">
            <div className="h-2 w-[65%] bg-primary rounded-full"></div>
          </div>
          <span className="ml-2 text-sm">65%</span>
        </div>
        <p className="mt-2 text-sm">
          Increasing regulatory acceptance of AI-assisted diagnosis in clinical
          settings.
        </p>
      </div>

      <div className="border border-gray-200 rounded-lg p-4">
        <h4 className="font-medium">Value-Based Care</h4>
        <div className="flex items-center mt-2">
          <div className="h-2 w-full bg-gray-200 rounded-full">
            <div className="h-2 w-[78%] bg-primary rounded-full"></div>
          </div>
          <span className="ml-2 text-sm">78%</span>
        </div>
        <p className="mt-2 text-sm">
          Shift from fee-for-service to outcome-based reimbursement models
          across providers.
        </p>
      </div>

      <div className="border border-gray-200 rounded-lg p-4">
        <h4 className="font-medium">Healthcare Staffing</h4>
        <div className="flex items-center mt-2">
          <div className="h-2 w-full bg-gray-200 rounded-full">
            <div className="h-2 w-[91%] bg-primary rounded-full"></div>
          </div>
          <span className="ml-2 text-sm">91%</span>
        </div>
        <p className="mt-2 text-sm">
          Critical shortage of specialized healthcare workers affecting service
          delivery.
        </p>
      </div>
    </div>
  </div>
);

const OverviewPage = () => {
  const [mapTimeframe, setMapTimeframe] = useState("today");
  const [activeHighlightFilter, setActiveHighlightFilter] =
    useState("News/Article");

  const renderHighlightContent = () => {
    switch (activeHighlightFilter) {
      case "News/Article":
        return <NewsArticleContent />;
      case "Risk Event":
        return <RiskEven />;
      case "Statement/Action":
        return <StatementActionContent />;
      case "Trends":
        return <TrendsContent />;
      default:
        return <NewsArticleContent />;
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      {/* Top Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 mt-2">
        <StatCard
          color="bg-primary"
          title="Total Risked Items Tracked"
          value="3,456"
        />
        <StatCard color="bg-primary" title="Source Monitored" value="85" />
        <StatCard
          color="bg-primary"
          title="High Risk Trends"
          subtitle="(Last 7 days)"
          value="Economic, Legal"
        />
        <StatCard
          color="bg-primary"
          title="New Risk Events"
          subtitle="(Today)"
          value="12"
        />
      </div>

      {/* Map and Factor Trend Section */}
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
            <MapChart
              timeframe={mapTimeframe}
              categories={categories}
              riskMarkers={riskMarkers}
            />
          </div>
        </div>

        {/* Factor Trend - 35% width */}
        <div className="lg:w-[35%]">
          <FactorTrendChart modelType="overview" />
        </div>
      </div>

      {/* Impact Bubble Chart & Factor Heatmap */}
      <div className="flex gap-4 mb-6">
        {/* Impact Bubble Chart */}
        <div className="bg-white rounded-lg shadow p-4 w-[65%]">
          <h2 className="text-lg font-semibold mb-2">Impact Bubble Chart</h2>
          <hr className="my-2 text-gray-200" />

          <div className="flex">
            <div className="flex flex-col justify-between py-12">
              <span className="text-xs">Critical</span>
              <span className="text-xs">Very High</span>
              <span className="text-xs">High</span>
              <span className="text-xs">Medium</span>
              <span className="text-xs">Low</span>
              <span className="text-xs">Insignificant</span>
            </div>

            <div className="flex-1">
              <BubbleChart />
            </div>
            <div className="flex flex-col justify-between py-12">
              {[
                { name: "Political", color: "#DC3545" },
                { name: "Economic", color: "#17A2B8" },
                { name: "Socio-Demographic", color: "#28A745" },
                { name: "Technological", color: "#FD7E14" },
                { name: "Environmental", color: "#6610F2" },
                { name: "Legal", color: "#FFC107" },
                { name: "Competition", color: "#6F42C1" },
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <div
                    className="w-4 h-4 rounded"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="ml-2 text-xs">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Factor Heatmap */}
        <div className="w-[40%]">
          <FactorHeatmapCard />
        </div>
      </div>

      {/* Important Highlights & Word Cloud */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Important Highlights - 65% width */}
        <div className="lg:w-[65%] bg-white rounded-lg shadow p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Important Highlights</h2>
            <div className="flex space-x-2">
              <button
                className={`px-3 py-1 text-sm rounded cursor-pointer ${
                  activeHighlightFilter === "News/Article"
                    ? "bg-primary text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => setActiveHighlightFilter("News/Article")}
              >
                News/Article
              </button>
              <button
                className={`px-3 py-1 text-sm rounded cursor-pointer ${
                  activeHighlightFilter === "Risk Event"
                    ? "bg-primary text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => setActiveHighlightFilter("Risk Event")}
              >
                Risk Event
              </button>
              <button
                className={`px-3 py-1 text-sm rounded cursor-pointer ${
                  activeHighlightFilter === "Statement/Action"
                    ? "bg-primary text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => setActiveHighlightFilter("Statement/Action")}
              >
                Statement/Action
              </button>
              <button
                className={`px-3 py-1 text-sm rounded cursor-pointer ${
                  activeHighlightFilter === "Trends"
                    ? "bg-primary text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => setActiveHighlightFilter("Trends")}
              >
                Trends
              </button>
            </div>
          </div>
          <hr className="my-2 text-gray-200" />
          {renderHighlightContent()}
        </div>

        {/* Word Cloud - 35% width */}
        <div className="lg:w-[35%] bg-white rounded-lg shadow p-4 h-[400px]">
          <h2 className="text-lg font-medium mb-2">Word Cloud</h2>
          <hr className="my-2 text-gray-200" />

          <WordCloud />
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;
