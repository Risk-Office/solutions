import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ChevronDown } from "lucide-react";

// Sample data
const trendData = [
  {
    name: "Jan",
    Political: 4,
    Economic: 3,
    Legal: 2,
    Social: 1,
    Technological: 2,
    Environmental: 3,
    Competition: 4,
  },
  {
    name: "Feb",
    Political: 3,
    Economic: 4,
    Legal: 3,
    Social: 2,
    Technological: 3,
    Environmental: 2,
    Competition: 3,
  },
  {
    name: "Mar",
    Political: 2,
    Economic: 5,
    Legal: 4,
    Social: 3,
    Technological: 2,
    Environmental: 1,
    Competition: 2,
  },
  {
    name: "Apr",
    Political: 3,
    Economic: 4,
    Legal: 3,
    Social: 4,
    Technological: 1,
    Environmental: 2,
    Competition: 3,
  },
  {
    name: "May",
    Political: 4,
    Economic: 3,
    Legal: 2,
    Social: 3,
    Technological: 2,
    Environmental: 3,
    Competition: 4,
  },
  {
    name: "Jun",
    Political: 5,
    Economic: 2,
    Legal: 1,
    Social: 2,
    Technological: 3,
    Environmental: 4,
    Competition: 5,
  },
];

const bubbleChartData = [
  { name: "Political", value: 80, color: "#FF5733" },
  { name: "Economic", value: 120, color: "#33FF57" },
  { name: "Technological", value: 70, color: "#3357FF" },
  { name: "Environmental", value: 90, color: "#F3FF33" },
  { name: "Legal", value: 110, color: "#FF33F3" },
  { name: "Social", value: 60, color: "#33FFF3" },
  { name: "Competition", value: 100, color: "#8C33FF" },
];

const countriesData = [
  {
    id: "US",
    name: "United States",
    color: "#b9b74c",
    path: "M45,102 L65 353,102 L65,110 L45,110 Z",
  },
  {
    id: "BR",
    name: "Brazil",
    color: "#003366",
    path: "M130,170 L140,170 L140,185 L130,185 Z",
  },
  {
    id: "RU",
    name: "Russia",
    color: "#003366",
    path: "M180,75 L240,75 L240,95 L180,95 Z",
  },
  {
    id: "AU",
    name: "Australia",
    color: "#003366",
    path: "M240,180 L255,180 L255,190 L240,190 Z",
  },
  {
    id: "CA",
    name: "Canada",
    color: "#f0f0f0",
    path: "M45,80 L75,80 L75,95 L45,95 Z",
  },
  {
    id: "CN",
    name: "China",
    color: "#f0f0f0",
    path: "M205,110 L225,110 L225,125 L205,125 Z",
  },
  {
    id: "IN",
    name: "India",
    color: "#f0f0f0",
    path: "M195,130 L210,130 L210,142 L195,142 Z",
  },
  {
    id: "UK",
    name: "United Kingdom",
    color: "#f0f0f0",
    path: "M120,90 L125,90 L125,95 L120,95 Z",
  },
  {
    id: "FR",
    name: "France",
    color: "#f0f0f0",
    path: "M125,100 L132,100 L132,108 L125,108 Z",
  },
  {
    id: "DE",
    name: "Germany",
    color: "#f0f0f0",
    path: "M135,95 L142,95 L142,102 L135,102 Z",
  },
  {
    id: "ZA",
    name: "South Africa",
    color: "#f0f0f0",
    path: "M140,180 L148,180 L148,188 L140,188 Z",
  },
];

// StatCard Component
const StatCard = ({ color, title, subtitle, value }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex-1">
      <div className="flex items-center mb-2">
        <div className={`w-10 h-10 ${color} rounded`}></div>
        <div className="ml-3">
          <p className="font-medium text-gray-700">{title}</p>
          {subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
        </div>
      </div>
      <hr className="my-2" />
      <p className="text-xl font-bold">{value}</p>
    </div>
  );
};

// Custom SVG Map Component
const SimpleMapChart = () => {
  return (
    <div className="relative">
      <svg
        viewBox="0 0 300 200"
        className="w-full border border-gray-200 rounded"
      >
        {/* World map background */}
        <rect x="0" y="0" width="300" height="200" fill="#f8fbfd" />
        {/* Ocean */}
        <path d="M0,0 L300,0 L300,200 L0,200 Z" fill="#e6f2ff" />
        {/* Basic continental outlines */}
        <path
          d="M30,70 L80,70 L80,130 L30,130 Z"
          fill="#f0f0f0"
          stroke="#d0d0d0"
          strokeWidth="0.5"
        />{" "}
        {/* North America */}
        <path
          d="M120,70 L150,70 L150,110 L120,110 Z"
          fill="#f0f0f0"
          stroke="#d0d0d0"
          strokeWidth="0.5"
        />{" "}
        {/* Europe */}
        <path
          d="M120,150 L150,150 L150,190 L120,190 Z"
          fill="#f0f0f0"
          stroke="#d0d0d0"
          strokeWidth="0.5"
        />{" "}
        {/* South America */}
        <path
          d="M170,90 L230,90 L230,150 L170,150 Z"
          fill="#f0f0f0"
          stroke="#d0d0d0"
          strokeWidth="0.5"
        />{" "}
        {/* Asia */}
        <path
          d="M150,140 L170,140 L170,180 L150,180 Z"
          fill="#f0f0f0"
          stroke="#d0d0d0"
          strokeWidth="0.5"
        />{" "}
        {/* Africa */}
        <path
          d="M240,160 L260,160 L260,180 L240,180 Z"
          fill="#f0f0f0"
          stroke="#d0d0d0"
          strokeWidth="0.5"
        />{" "}
        {/* Australia */}
        {/* Countries with specific colors */}
        {countriesData.map((country) => (
          <path
            key={country.id}
            d={country.path}
            fill={country.color}
            stroke="#999"
            strokeWidth="0.3"
          >
            <title>{country.name}</title>
          </path>
        ))}
      </svg>
    </div>
  );
};

// BubbleChart Component
const BubbleChart = () => {
  return (
    <div className="relative h-64 w-full">
      {bubbleChartData.map((item, index) => {
        const size = item.value / 5;
        const top = 30 + Math.random() * 120;
        const left = 50 + Math.random() * 200;

        return (
          <div
            key={index}
            className="absolute rounded-full flex items-center justify-center text-xs text-white font-medium"
            style={{
              backgroundColor: item.color,
              width: `${size}px`,
              height: `${size}px`,
              top: `${top}px`,
              left: `${left}px`,
            }}
          >
            {item.name}
          </div>
        );
      })}
    </div>
  );
};

// HeatmapItem Component
const HeatmapItem = ({ title, values }) => {
  const colors = [
    "#FFD6D6",
    "#FFACAC",
    "#FF8282",
    "#FF5858",
    "#FF2E2E",
    "#FF0000",
  ];

  return (
    <div className="mb-3">
      <div className="flex items-center">
        <p className="w-32 text-sm font-medium">{title}</p>
        <div className="flex-1 flex">
          {Array(6)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="h-6 flex-1 border-r border-white"
                style={{ backgroundColor: colors[i] }}
              ></div>
            ))}
        </div>
      </div>
    </div>
  );
};

// WordCloud Component
const WordCloud = () => {
  const words = [
    { text: "policy", size: 24 },
    { text: "income", size: 20 },
    { text: "expenses", size: 22 },
    { text: "automation", size: 18 },
    { text: "healthcare", size: 26 },
    { text: "taxes", size: 19 },
    { text: "regulations", size: 21 },
    { text: "compliance", size: 17 },
    { text: "economy", size: 25 },
  ];

  return (
    <div className="p-4 flex flex-wrap justify-center">
      {words.map((word, i) => (
        <span
          key={i}
          className="m-2 inline-block"
          style={{
            fontSize: `${word.size}px`,
            fontWeight: word.size > 20 ? "bold" : "normal",
            color: `hsl(${Math.random() * 360}, 70%, 60%)`,
            transform: `rotate(${Math.random() * 20 - 10}deg)`,
          }}
        >
          {word.text}
        </span>
      ))}
    </div>
  );
};

// Main OverviewPage Component
const OverviewPage = () => {
  const [mapTimeframe, setMapTimeframe] = useState("today");
  const [factorSelected, setFactorSelected] = useState("Political");

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-6">Macro Environment Overview</h1>

      {/* Top Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard
          color="bg-red-500"
          title="Total Risked Items Tracked"
          value="3,456"
        />
        <StatCard color="bg-blue-500" title="Source Monitored" value="85" />
        <StatCard
          color="bg-green-500"
          title="High Risk Trend"
          subtitle="(last 7 days)"
          value="Economic, Legal"
        />
        <StatCard
          color="bg-yellow-500"
          title="New Risk Trend"
          subtitle="(today)"
          value="12"
        />
      </div>

      {/* Map and Factor Trend Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* World/Region Map - 2/3 width */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow p-4">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-medium">World/Region Map</h2>
            <div className="flex space-x-2">
              <button
                className={`px-3 py-1 text-sm rounded ${
                  mapTimeframe === "today"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => setMapTimeframe("today")}
              >
                Today
              </button>
              <button
                className={`px-3 py-1 text-sm rounded ${
                  mapTimeframe === "7days"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => setMapTimeframe("7days")}
              >
                7 Days
              </button>
              <button
                className={`px-3 py-1 text-sm rounded ${
                  mapTimeframe === "month"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => setMapTimeframe("month")}
              >
                Month
              </button>
            </div>
          </div>
          <hr className="mb-4" />

          <div className="relative">
            <SimpleMapChart />
            <div className="absolute top-4 right-4 space-y-2">
              {[
                "Political",
                "Economic",
                "Technological",
                "Environmental",
                "Legal",
                "Social",
                "Competition",
              ].map((item) => (
                <div
                  key={item}
                  className="bg-red-500 border border-red-600 text-white text-sm p-1 rounded"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Factor Trend - 1/3 width */}
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-medium">Factor Trend</h2>
            <div className="relative">
              <div className="flex items-center border rounded px-3 py-1 cursor-pointer">
                <span>{factorSelected}</span>
                <ChevronDown className="ml-2 w-4 h-4" />
              </div>
            </div>
          </div>
          <hr className="mb-4" />

          <div className="mb-4">
            <div className="flex justify-between items-center text-sm mb-1">
              <span>Critical</span>
              <span className="flex-1 mx-2 border-b border-dotted border-gray-300"></span>
              <span>5</span>
            </div>
            <div className="flex justify-between items-center text-sm mb-1">
              <span>Very High</span>
              <span className="flex-1 mx-2 border-b border-dotted border-gray-300"></span>
              <span>4</span>
            </div>
            <div className="flex justify-between items-center text-sm mb-1">
              <span>High</span>
              <span className="flex-1 mx-2 border-b border-dotted border-gray-300"></span>
              <span>3</span>
            </div>
            <div className="flex justify-between items-center text-sm mb-1">
              <span>Medium</span>
              <span className="flex-1 mx-2 border-b border-dotted border-gray-300"></span>
              <span>2</span>
            </div>
            <div className="flex justify-between items-center text-sm mb-1">
              <span>Low</span>
              <span className="flex-1 mx-2 border-b border-dotted border-gray-300"></span>
              <span>1</span>
            </div>
            <div className="flex justify-between items-center text-sm mb-1">
              <span>Insignificant</span>
              <span className="flex-1 mx-2 border-b border-dotted border-gray-300"></span>
              <span>0</span>
            </div>
          </div>

          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis domain={[0, 5]} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey={factorSelected}
                  stroke="#8884d8"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="flex justify-end space-x-2 mt-2">
            <span className="text-xs border px-2 py-1 rounded">Quarterly</span>
            <span className="text-xs border px-2 py-1 rounded">7 days</span>
            <span className="text-xs border px-2 py-1 rounded">One month</span>
          </div>
        </div>
      </div>

      {/* Impact Bubble Chart & Factor Heatmap */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Impact Bubble Chart */}
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-medium mb-2">Impact Bubble Chart</h2>
          <hr className="mb-4" />

          <div className="flex">
            <div className="w-24 flex flex-col justify-between py-2">
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
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2">
            {bubbleChartData.map((item, index) => (
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

        {/* Factor Heatmap */}
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-medium mb-2">Factor Heatmap</h2>
          <hr className="mb-4" />

          <div className="flex justify-start space-x-2 mb-4">
            <span className="px-3 py-1 text-sm border rounded bg-blue-100">
              Today
            </span>
            <span className="px-3 py-1 text-sm border rounded">7 days</span>
            <span className="px-3 py-1 text-sm border rounded">Month</span>
          </div>

          <div className="space-y-1">
            <HeatmapItem title="Political" />
            <HeatmapItem title="Economic" />
            <HeatmapItem title="Technological" />
            <HeatmapItem title="Environmental" />
            <HeatmapItem title="Legal" />
            <HeatmapItem title="Social" />
            <HeatmapItem title="Competition" />
          </div>

          <div className="flex mt-4 justify-center">
            {[
              "Insignificant",
              "Low",
              "Medium",
              "High",
              "Very High",
              "Critical",
            ].map((level, i) => (
              <div key={i} className="flex flex-col items-center mx-1">
                <div
                  className="w-4 h-4"
                  style={{
                    backgroundColor: [
                      "#FFD6D6",
                      "#FFACAC",
                      "#FF8282",
                      "#FF5858",
                      "#FF2E2E",
                      "#FF0000",
                    ][i],
                  }}
                ></div>
                <span className="text-xs mt-1">{level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Important Highlights & Word Cloud */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Important Highlights - 2/3 width */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-medium mb-2">Important Highlights</h2>
          <hr className="mb-4" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <img
                src="/api/placeholder/400/200"
                alt="Minimum wage changes"
                className="w-full h-40 object-cover rounded mb-2"
              />
              <p className="font-medium">Changes in minimum wage</p>
            </div>

            <div className="space-y-4">
              <div className="border rounded p-3 shadow-sm">
                <h3 className="font-medium">Corporate tax policy changes</h3>
                <p className="text-sm text-gray-500">
                  IRS, Congressional Budget Office
                </p>
                <p className="text-sm mt-1">
                  A recent 5%+ increase in corporate tax rates for healthcare
                  businesses has raised concerns among hospital networks, senior
                  care providers, and private healthcare institutions
                </p>
              </div>

              <div className="border rounded p-3 shadow-sm">
                <h3 className="font-medium">Property tax changes</h3>
                <p className="text-sm text-gray-500">
                  Local Government Tax Authorities
                </p>
                <p className="text-sm mt-1">
                  An 8%+ annual rise in property taxes for senior care
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Word Cloud - 1/3 width */}
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-medium mb-2">Word Cloud</h2>
          <hr className="mb-4" />

          <WordCloud />
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;
