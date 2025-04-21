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

// Expanded bubble data with more points spread across the chart
const bubbleData = [
  // Political bubbles (red)
  { name: "Political", likelihood: 60, impact: 2.5, z: 400 },
  { name: "Political", likelihood: 55, impact: 2, z: 200 },
  { name: "Political", likelihood: 90, impact: 3, z: 300 },
  { name: "Political", likelihood: 25, impact: 4.5, z: 350 },
  { name: "Political", likelihood: 80, impact: 1.5, z: 250 },

  // Economic bubbles (blue)
  { name: "Economic", likelihood: 40, impact: 4, z: 500 },
  { name: "Economic", likelihood: 60, impact: 2.5, z: 350 },
  { name: "Economic", likelihood: 15, impact: 3, z: 250 },
  { name: "Economic", likelihood: 95, impact: 1, z: 200 },
  { name: "Economic", likelihood: 75, impact: 3.5, z: 450 },
  { name: "Economic", likelihood: 30, impact: 4.5, z: 380 },

  // Socio-Demographic bubbles (green)
  { name: "Socio-Demographic", likelihood: 35, impact: 4, z: 450 },
  { name: "Socio-Demographic", likelihood: 55, impact: 4, z: 350 },
  { name: "Socio-Demographic", likelihood: 20, impact: 2.5, z: 200 },
  { name: "Socio-Demographic", likelihood: 65, impact: 1.5, z: 180 },
  { name: "Socio-Demographic", likelihood: 10, impact: 0.5, z: 150 },
  { name: "Socio-Demographic", likelihood: 85, impact: 3.2, z: 320 },

  // Technological bubbles (orange)
  { name: "Technological", likelihood: 20, impact: 3, z: 400 },
  { name: "Technological", likelihood: 80, impact: 3, z: 500 },
  { name: "Technological", likelihood: 25, impact: 2.5, z: 150 },
  { name: "Technological", likelihood: 50, impact: 1.2, z: 200 },
  { name: "Technological", likelihood: 70, impact: 4.7, z: 450 },
  { name: "Technological", likelihood: 40, impact: 0.8, z: 180 },

  // Environmental bubbles (dark blue)
  { name: "Environmental", likelihood: 15, impact: 2.5, z: 300 },
  { name: "Environmental", likelihood: 45, impact: 3, z: 400 },
  { name: "Environmental", likelihood: 75, impact: 4.2, z: 480 },
  { name: "Environmental", likelihood: 5, impact: 1.5, z: 120 },
  { name: "Environmental", likelihood: 35, impact: 0.7, z: 170 },
  { name: "Environmental", likelihood: 90, impact: 2.2, z: 280 },

  // Legal bubbles (yellow)
  { name: "Legal", likelihood: 75, impact: 2.5, z: 350 },
  { name: "Legal", likelihood: 85, impact: 3, z: 200 },
  { name: "Legal", likelihood: 90, impact: 2.5, z: 400 },
  { name: "Legal", likelihood: 30, impact: 1.8, z: 220 },
  { name: "Legal", likelihood: 45, impact: 4.5, z: 370 },
  { name: "Legal", likelihood: 65, impact: 0.6, z: 150 },

  // Competition bubbles (purple)
  { name: "Competition", likelihood: 50, impact: 2.5, z: 250 },
  { name: "Competition", likelihood: 70, impact: 3, z: 500 },
  { name: "Competition", likelihood: 25, impact: 4.8, z: 420 },
  { name: "Competition", likelihood: 40, impact: 1.3, z: 280 },
  { name: "Competition", likelihood: 95, impact: 3.7, z: 350 },
  { name: "Competition", likelihood: 10, impact: 2.1, z: 190 },
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
      const { name, likelihood, impact, z } = payload[0].payload;
      return (
        <div className="bg-white p-2 border rounded shadow-md">
          <p className="font-bold">{name}</p>
          <p>Impact: {impactLevels[Math.floor(impact)]}</p>
          <p>Likelihood: {likelihood}%</p>
          <p>Factor: {z}</p>
        </div>
      );
    }
    return null;
  };

  const percentageFormatter = (value) => `${value}%`;

  return (
    <ResponsiveContainer width="100%" height="100%" aspect={1.2}>
      <ScatterChart margin={{ top: 30, right: 10, bottom: 5, left: -55 }}>
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
        <ZAxis type="number" dataKey="z" range={[80, 600]} domain={[0, 500]} />
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
