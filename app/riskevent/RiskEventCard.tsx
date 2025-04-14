import React from "react";
import type { RiskEventCardProps } from "~/types/risk-event";

const RiskEventCard: React.FC<RiskEventCardProps> = ({
  event,
  color,
  onClick,
}) => {
  const truncatedDescription =
    event.description.length > 150
      ? `${event.description.substring(0, 150)}...`
      : event.description;

  return (
    <div
      className="bg-gray dark:bg-[var(--inner-color)] cursor-pointer hover:shadow-lg transition-shadow duration-200 ease-in-out"
      style={{
        borderLeft: `10px solid ${color}`,
        padding: "1rem",
        borderRadius: "10px",
        boxShadow: "0 1px 1px rgba(0,0,0,0.1)",
      }}
      onClick={onClick}
    >
      <h3 className="text-lg dark:text-white text-primary font-semibold">
        {event.title}
      </h3>

      <div className="flex items-center gap-4 mb-3 text-sm  relative">
        <span className="pr-4 text-sm italic dark:text-white text-primary border-r dark:border-gray-600 border-gray-300">
          {event.date}
        </span>
        <span className="pr-4 text-sm italic dark:text-white text-primary border-r dark:border-gray-600 border-gray-300">
          Time Horizon: {event.time}
        </span>
        <span className="pr-4 text-sm italic text-primary dark:text-white">
          Impact severity: {event.status}
        </span>

        {/* Bottom border separator */}
        <div className="absolute bottom-[-0.75rem] left-0 right-0 border-b dark:border-gray-600 border-gray-200"></div>
      </div>

      <p className="text-primary dark:text-white mt-6">{truncatedDescription}</p>
    </div>
  );
};

export default RiskEventCard;
