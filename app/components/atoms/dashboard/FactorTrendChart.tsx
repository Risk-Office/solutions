import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { ChevronDown } from "lucide-react";

// Define specific data points to match the exact line trajectories shown in the images
const timeFrameData = {
  Quarterly: [
    { name: "Q1", value: 0 },
    { name: "Q2", value: 0.2 },
    { name: "Q3", value: 0.4 },
    { name: "Q4", value: 0.8 },
    { name: "Q5", value: 1.2 },
    { name: "Q6", value: 1.8 },
    { name: "Q7", value: 2.5 },
    { name: "Q8", value: 3.2 },
    { name: "Q9", value: 3.8 },
    { name: "Q10", value: 4.2 },
  ],
  "7 days": [
    { name: "Day 1", value: 0 },
    { name: "Day 2", value: 0.2 },
    { name: "Day 3", value: 0.4 },
    { name: "Day 4", value: 0.6 },
    { name: "Day 5", value: 0.8 },
    { name: "Day 6", value: 1.0 },
    { name: "Day 7", value: 0.8 },
    { name: "Day 8", value: 1.2 },
    { name: "Day 9", value: 1.0 },
    { name: "Day 10", value: 1.4 },
    { name: "Day 11", value: 2.0 },
  ],
  "One month": [
    { name: "Week 1", value: 0 },
    { name: "Week 2", value: 0.3 },
    { name: "Week 3", value: 0.6 },
    { name: "Week 4", value: 1.0 },
    { name: "Week 5", value: 1.5 },
    { name: "Week 6", value: 2.2 },
    { name: "Week 7", value: 2.8 },
  ],
};

const overviewModel = [
  "Political",
  "Economic",
  "Social",
  "Technological",
  "Environmental",
  "Legal",
  "Ethical",
  "Regulatory",
  "Competitive",
];

const businessModel = [
  "Value Props",
  "Segments",
  "Channels",
  "Resources",
  "Partnerships",
  "Activities",
  "Customer Relationships",
  "Revenue Streams",
  "Cost Structure",
];

interface FactorTrendChartProps {
  modelType: "overview" | "business";
}

const FactorTrendChart: React.FC<FactorTrendChartProps> = ({ modelType }) => {
  const factors = modelType === "overview" ? overviewModel : businessModel;
  const [factorSelected, setFactorSelected] = useState(factors[0]);
  const [factorDropdownOpen, setFactorDropdownOpen] = useState(false);

  const toggleFactorDropdown = () => {
    setFactorDropdownOpen(!factorDropdownOpen);
  };

  const selectFactor = (factor: string) => {
    setFactorSelected(factor);
    setFactorDropdownOpen(false);
  };

  const lineColors = {
    Quarterly: "#1E90FF", // Light Blue
    "7 days": "#2E5984", // Dark Blue
    "One month": "#20B2AA", // Teal Green
  };

  // Severity levels in ascending order (bottom to top)
  const severityLevels = [
    { label: "Critical", value: 5 },
    { label: "Very High", value: 4 },
    { label: "High", value: 3 },
    { label: "Medium", value: 2 },
    { label: "Low", value: 1 },
    { label: "Insignificant", value: 0 },
  ];

  const title = modelType === "overview" ? "Factor Trend" : "BMC Risk Trend";

  return (
    <div
      className={`${
        modelType === "overview" ? "bg-white rounded-lg shadow p-4" : ""
      } w-full max-w-2xl mx-auto`}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <div className="relative">
          <div
            className="flex items-center border rounded px-3 py-1 cursor-pointer bg-white hover:bg-gray-50"
            onClick={toggleFactorDropdown}
          >
            <span>{factorSelected}</span>
            <ChevronDown className="ml-2 w-4 h-4" />
          </div>
          {factorDropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg z-10">
              {factors.map((factor) => (
                <div
                  key={factor}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => selectFactor(factor)}
                >
                  {factor}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <hr className="my-2 text-gray-200" />

      <div className="flex">
        {/* Left side labels */}
        <div className="flex flex-col justify-between pr-2 text-right w-24">
          {severityLevels.map(({ label }) => (
            <div key={label} className="h-12 flex items-center justify-end">
              <span className="text-sm text-gray-600">{label}</span>
            </div>
          ))}
          <div className="h-6 flex items-center justify-end">
            <span className="text-sm text-gray-600">0</span>
          </div>
        </div>

        {/* Right side chart */}
        <div className="flex-1">
          <div className="relative h-80">
            {/* Horizontal grid lines */}
            {severityLevels.map(({ label, value }) => (
              <div
                key={label}
                className="absolute w-full border-b border-dotted border-gray-300"
                style={{
                  top: `${100 - (value / 5) * 100}%`,
                  height: "1px",
                }}
              />
            ))}

            {/* Bottom horizontal line (0 axis) */}
            <div
              className="absolute w-full border-t border-gray-300"
              style={{
                bottom: "0",
                height: "1px",
              }}
            />

            {/* Main chart container */}
            <ResponsiveContainer width="100%" height="100%">
              <LineChart margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
                <XAxis dataKey="name" hide />
                <YAxis domain={[0, 5]} hide />

                {/* Three time period lines */}
                <Line
                  data={timeFrameData.Quarterly}
                  type="monotone"
                  dataKey="value"
                  stroke={lineColors.Quarterly}
                  strokeWidth={2}
                  dot={false}
                  isAnimationActive={true}
                  animationDuration={1500}
                  name={factorSelected}
                />
                <Line
                  data={timeFrameData["One month"]}
                  type="monotone"
                  dataKey="value"
                  stroke={lineColors["One month"]}
                  strokeWidth={2}
                  dot={false}
                  isAnimationActive={true}
                  animationDuration={1500}
                  name={factorSelected}
                />
                <Line
                  data={timeFrameData["7 days"]}
                  type="monotone"
                  dataKey="value"
                  stroke={lineColors["7 days"]}
                  strokeWidth={2}
                  dot={false}
                  isAnimationActive={true}
                  animationDuration={1500}
                  name={factorSelected}
                />
              </LineChart>
            </ResponsiveContainer>

            {/* Time period labels at the end of each line */}
            <div
              className="absolute text-xs shadow-md p-1 rounded"
              style={{
                top: "10%",
                left: "30%",
                color: lineColors.Quarterly,
              }}
            >
              Quarterly
            </div>

            <div
              className="absolute text-xs shadow-md p-1 rounded"
              style={{
                top: "40%",
                left: "18%",
                color: lineColors["One month"],
              }}
            >
              One month
            </div>

            <div
              className="absolute text-xs shadow-md p-1 rounded"
              style={{
                top: "52%",
                left: "25%",
                color: lineColors["7 days"],
              }}
            >
              7 days
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FactorTrendChart;
