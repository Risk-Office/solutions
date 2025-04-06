import React from "react";
import type { RiskEventCardProps } from "~/types/risk-event";

const RiskEventCard: React.FC<RiskEventCardProps> = ({ event, color }) => {
  const truncatedDescription =
    event.description.length > 150
      ? `${event.description.substring(0, 150)}...`
      : event.description;

  return (
    <div
    className="bg-gray"
      style={{
        borderLeft: `10px solid ${color}`,
        padding: "1rem",
        borderRadius: "10px",
        boxShadow: "0 1px 1px rgba(0,0,0,0.1)",
      }}
    >
      <h3 className="text-lg bg-gray font-semibold">{event.title}</h3>

      <div className="flex items-center gap-4 mb-3 text-sm text-gray-500 relative">
        <span className="pr-4 text-sm italic text-gray-950 border-r border-gray-300">{event.date}</span>
        <span className="pr-4 text-sm italic text-gray-950 border-r border-gray-300">
          Time Horizon: {event.time}
        </span>
        <span className="pr-4 text-sm italic text-gray-950 ">Impact severity: {event.status}</span>

        {/* Bottom border separator */}
        <div className="absolute bottom-[-0.75rem] left-0 right-0 border-b border-gray-200"></div>
      </div>

      <p className="text-gray-950 mt-6">{truncatedDescription}</p>
    </div>
  );
};

export default RiskEventCard;
