import React from "react";
import { articles } from "~/data/statements";

interface RiskCardProps {
  id: string;
  title: string;
  source: string;
  date: string;
  imageUrl: string;
  timeHorizon: string;
  severity: 'Critical' | 'High' | 'Medium' | 'Low';
}

const RiskCard: React.FC<RiskCardProps> = ({
  id,
  title,
  source,
  date,
  imageUrl,
  timeHorizon,
  severity,
}) => {
  const severityColorMap = {
    Critical: {
      bar: 'bg-red-500',
    },
    High: {
      bar: 'bg-amber-500',
    },
    Medium: {
      bar: 'bg-green-500',
    },
    Low: {
      bar: 'bg-blue-500',
    },
    Default: {
      bar: 'bg-gray-400',
    },
  };

  const color = severityColorMap[severity] || severityColorMap.Default;

  return (
    <div className="bg-gray-50 relative overflow-hidden rounded-lg border border-gray-200">
      <div className={`w-2 rounded-l-lg ${color.bar} absolute left-0 h-full`} />

      <div className="flex space-x-3 items-center p-4">
        <div>
          <img
            src={imageUrl}
            alt="Publisher"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>

        <div>
          <h2 className="font-semibold text-md">{title}</h2>
          <p className="text-base my-2 text-gray-500">
            <a href={`https://${source}`} target="_blank" rel="noopener noreferrer" className="underline italic">
              {source}
            </a> &nbsp;|&nbsp;
            <span>{date}</span>
          </p>

          <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
            <span>Time Horizon: {timeHorizon}</span>
            <span className="border-l border-gray-300 pl-4">
              Impact severity:
              <span className="font-semibold ml-1">{severity}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};


const StatementAndAction = () => {
  return (
    <div className="space-y-4 w-full bg-white rounded-lg max-h-[115vh] py-4 px-4 overflow-y-auto">
      {articles.map((item) => (
        <RiskCard key={item.id} {...item} />
      ))}
    </div>
  );
};

export default StatementAndAction;