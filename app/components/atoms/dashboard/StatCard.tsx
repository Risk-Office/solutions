import React from "react";

type StatCardProps = {
  title: string;
  value: string | number;
  subtitle?: string;
  color: string;
};

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  subtitle,
  color,
}) => {
  return (
    <div className="bg-white rounded-lg p-4 flex-1">
      <div className="flex items-center py-1 mb-4">
        <div className={`w-6 h-6 ${color} rounded`}></div>
        <div className="ml-3">
          <p className="font-medium text-sm text-primary">{title}</p>
          {subtitle && (
            <p className="text-xs text-primary italic">{subtitle}</p>
          )}
        </div>
      </div>
      <hr className="my-2 text-gray-300" />
      <p className="text-2xl text-center font-extrabold">{value}</p>
    </div>
  );
};

export default StatCard;
