import React from 'react';
import TrendCard from '~/components/ui/trend-card';
import { trends } from '~/data/trends';

const Trends = () => {
  const criticalTrends = trends.filter(trend => trend.impactSeverity === 'Critical');
  const highTrends = trends.filter(trend => trend.impactSeverity === 'High');
  const mediumTrends = trends.filter(trend => trend.impactSeverity === 'Medium');

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 items-start gap-3">
        <div className="bg-white rounded-lg py-3">
          <h2 className="text-xl font-bold pl-2">Critical</h2>
          <hr className='border-t border-gray-200 my-2' />
          <div className="px-2 space-y-4">
            {criticalTrends.map(trend => (
              <TrendCard key={trend.id} {...trend} />
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg py-3">
          <h2 className="text-xl font-bold pl-2">High</h2>
          <hr className='border-t border-gray-200 my-2' />
          <div className="px-2 space-y-4">
            {highTrends.map(trend => (
              <TrendCard key={trend.id} {...trend} />
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg py-3">
          <h2 className="text-xl font-bold pl-2">Medium</h2>
          <hr className='border-t border-gray-200 my-2' />
          <div className="px-2 space-y-4">
            {mediumTrends.map(trend => (
              <TrendCard key={trend.id} {...trend} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trends;
