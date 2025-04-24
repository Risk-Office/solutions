import React from "react";
import { useLocation } from "react-router-dom";

type HeatmapValue = "Critical" | "High" | "Medium" | "Low" | "Insignificant";

interface HeatmapRowProps {
  title: string;
  values: HeatmapValue[];
}

const getBackgroundColor = (value: HeatmapValue): string => {
  const colors: Record<HeatmapValue, string> = {
    Critical: "#FF0000",
    High: "#FFA500",
    Medium: "#FFFF00",
    Low: "#00BFFF",
    Insignificant: "#008000",
  };
  return colors[value];
};

const HeatmapRow: React.FC<HeatmapRowProps> = ({ title, values }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="w-36 font-medium">{title}</div>
      <div className="flex flex-1">
        {values.map((value, index) => (
          <div
            key={index}
            className="flex-1 h-8 border border-gray-200"
            style={{ backgroundColor: getBackgroundColor(value) }}
          />
        ))}
      </div>
    </div>
  );
};

const FactorHeatmapCard = () => {
  const location = useLocation();

  // Overview model data
  const overviewData: HeatmapRowProps[] = [
    {
      title: "Political",
      values: ["Critical", "High", "Medium"] as HeatmapValue[],
    },
    {
      title: "Economic",
      values: ["Medium", "Critical", "Insignificant"] as HeatmapValue[],
    },
    {
      title: "Technological",
      values: ["Critical", "High", "Medium"] as HeatmapValue[],
    },
    {
      title: "Environmental",
      values: ["Low", "Low", "Low"] as HeatmapValue[],
    },
    {
      title: "Legal/Regulatory",
      values: ["Critical", "Critical", "Critical"] as HeatmapValue[],
    },
    {
      title: "Demographics",
      values: ["Critical", "High", "Medium"] as HeatmapValue[],
    },
    {
      title: "Competitive Forces",
      values: [
        "Insignificant",
        "Insignificant",
        "Insignificant",
      ] as HeatmapValue[],
    },
  ];

  // Business model data
  const businessModelData: HeatmapRowProps[] = [
    {
      title: "Value Props",
      values: ["Critical", "High", "Medium"] as HeatmapValue[],
    },
    {
      title: "Segments",
      values: ["Medium", "Critical", "Insignificant"] as HeatmapValue[],
    },
    {
      title: "Channels",
      values: ["Critical", "High", "Medium"] as HeatmapValue[],
    },
    {
      title: "Resource",
      values: ["Low", "Low", "Low"] as HeatmapValue[],
    },
    {
      title: "Partnerships",
      values: ["Critical", "Critical", "Critical"] as HeatmapValue[],
    },
    {
      title: "Activities",
      values: ["Critical", "High", "Medium"] as HeatmapValue[],
    },
    {
      title: "CRM",
      values: [
        "Insignificant",
        "Insignificant",
        "Insignificant",
      ] as HeatmapValue[],
    },
    {
      title: "Revenue Streams",
      values: [
        "Insignificant",
        "Insignificant",
        "Insignificant",
      ] as HeatmapValue[],
    },
    {
      title: "Cost Structure",
      values: [
        "Insignificant",
        "Insignificant",
        "Insignificant",
      ] as HeatmapValue[],
    },
  ];

  // Determine which data to use based on the current route
  const data = location.pathname.includes("business-model")
    ? businessModelData
    : overviewData;

  const legendValues: HeatmapValue[] = [
    "Critical",
    "High",
    "Medium",
    "Low",
    "Insignificant",
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-bold mb-4">Factor Heatmap</h2>
      <hr className="my-2 text-gray-200" />
      <div className="mb-4">
        <div className="flex mb-2">
          <div className="w-36"></div>
          <div className="flex flex-1 gap-1">
            <div className="flex-1 text-center font-medium shadow rounded-md py-1">
              Today
            </div>
            <div className="flex-1 text-center font-medium shadow rounded-md py-1">
              7 Days
            </div>
            <div className="flex-1 text-center font-medium shadow rounded-md py-1">
              Month
            </div>
          </div>
        </div>

        <div className="space-y-2">
          {data.map((row, index) => (
            <HeatmapRow key={index} title={row.title} values={row.values} />
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center gap-2 mt-6">
        {legendValues.map((level) => (
          <div key={level} className="flex items-center gap-2">
            <div
              className="w-3 h-3"
              style={{ backgroundColor: getBackgroundColor(level) }}
            />
            <span className="text-sm">{level}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FactorHeatmapCard;
