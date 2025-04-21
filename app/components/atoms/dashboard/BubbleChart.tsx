import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Define factor categories with their respective colors - using your color scheme
const factorCategories = [
  { name: "Political", color: "#DC3545" },
  { name: "Economic", color: "#17A2B8" },
  { name: "Socio-Demographic", color: "#28A745" },
  { name: "Technological", color: "#FD7E14" },
  { name: "Environmental", color: "#6610F2" },
  { name: "Legal", color: "#FFC107" },
  { name: "Competition", color: "#6F42C1" },
];

// Define impact levels
const impactLevels = [
  "Insignificant",
  "Low",
  "Medium",
  "High",
  "Very High",
  "Critical",
];

// Updated bubble data with better alignment
const bubbleData = [
  // Political bubbles (red)
  { name: "Political", likelihood: 60, impact: 2.5, z: 250 },
  { name: "Political", likelihood: 55, impact: 2, z: 250 },
  { name: "Political", likelihood: 90, impact: 3, z: 250 },

  // Economic bubbles (blue)
  { name: "Economic", likelihood: 40, impact: 4, z: 350 },
  { name: "Economic", likelihood: 60, impact: 2.5, z: 350 },
  { name: "Economic", likelihood: 15, impact: 3, z: 250 },

  // Socio-Demographic bubbles (green)
  { name: "Socio-Demographic", likelihood: 35, impact: 4, z: 300 },
  { name: "Socio-Demographic", likelihood: 55, impact: 4, z: 250 },
  { name: "Socio-Demographic", likelihood: 20, impact: 2.5, z: 300 },

  // Technological bubbles (orange)
  { name: "Technological", likelihood: 20, impact: 3, z: 300 },
  { name: "Technological", likelihood: 80, impact: 3, z: 300 },
  { name: "Technological", likelihood: 25, impact: 2.5, z: 250 },

  // Environmental bubbles (dark blue)
  { name: "Environmental", likelihood: 15, impact: 2.5, z: 300 },
  { name: "Environmental", likelihood: 45, impact: 3, z: 300 },

  // Legal bubbles (yellow)
  { name: "Legal", likelihood: 75, impact: 2.5, z: 350 },
  { name: "Legal", likelihood: 85, impact: 3, z: 250 },
  { name: "Legal", likelihood: 90, impact: 2.5, z: 250 },

  // Competition bubbles (purple)
  { name: "Competition", likelihood: 50, impact: 2.5, z: 300 },
  { name: "Competition", likelihood: 70, impact: 3, z: 300 },
];

const BubbleChart = () => {
  const colorizedData = bubbleData.map((item) => {
    const category = factorCategories.find((cat) => cat.name === item.name);
    return {
      ...item,
      fill: category ? category.color : "#999",
    };
  });

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const { name, likelihood, impact } = payload[0].payload;
      return (
        <div className="bg-white p-2 border rounded shadow-md">
          <p className="font-bold">{name}</p>
          <p>Impact: {impactLevels[Math.floor(impact)]}</p>
          <p>Likelihood: {likelihood}%</p>
        </div>
      );
    }
    return null;
  };

  const percentageFormatter = (value) => `${value}%`;

  return (
    <ResponsiveContainer width="100%" height="100%" aspect={1.2}>
      <ScatterChart margin={{ top: 30, right: 20, bottom: 10, left: -55 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
        <XAxis
          type="number"
          dataKey="likelihood"
          name="Likelihood"
          domain={[0, 100]}
          ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
          tickFormatter={percentageFormatter}
          tick={{ fontSize: 10, fill: "#666" }}
          axisLine={{ stroke: "#ddd" }}
          tickLine={{ stroke: "#ddd" }}
        />
        <YAxis
          type="number"
          dataKey="impact"
          name="Impact"
          domain={[0, 5]}
          tickCount={6}
          tickFormatter={(value) => ""}
          tick={{ fontSize: 0 }}
          axisLine={{ stroke: "#ddd" }}
          tickLine={{ stroke: "transparent" }}
        />
        <ZAxis type="number" dataKey="z" range={[200, 400]} domain={[0, 500]} />
        <Tooltip content={<CustomTooltip />} />

        {factorCategories.map((category) => (
          <Scatter
            key={category.name}
            name={category.name}
            data={colorizedData.filter((item) => item.name === category.name)}
            fill={category.color}
          />
        ))}
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default BubbleChart;
