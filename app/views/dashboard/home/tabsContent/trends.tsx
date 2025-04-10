import React, { useState, useEffect } from 'react';
import TrendCard from '~/components/ui/trend-card';
import { trends } from '~/data/trends';
import TrendDetails from './trendDetails';
import { useViewState } from '~/store/viewState';

const Trends = () => {
  const [selectedTrend, setSelectedTrend] = useState<any>(null);
  const setIsViewingDetails = useViewState((state) => state.setIsViewingDetails);

  useEffect(() => {
    setIsViewingDetails(!!selectedTrend);
    return () => {
      setIsViewingDetails(false);
    };
  }, [selectedTrend, setIsViewingDetails]);

  const handleBack = () => {
    setSelectedTrend(null);
  };

  if (selectedTrend) {
    return <TrendDetails {...selectedTrend} onBack={handleBack} />;
  }

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
              <div key={trend.id}>
                <TrendCard {...trend} onClick={() => setSelectedTrend(trend)} />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg py-3">
          <h2 className="text-xl font-bold pl-2">High</h2>
          <hr className='border-t border-gray-200 my-2' />
          <div className="px-2 space-y-4">
            {highTrends.map(trend => (
              <div key={trend.id}>
                <TrendCard {...trend} onClick={() => setSelectedTrend(trend)} />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg py-3">
          <h2 className="text-xl font-bold pl-2">Medium</h2>
          <hr className='border-t border-gray-200 my-2' />
          <div className="px-2 space-y-4">
            {mediumTrends.map(trend => (
              <div key={trend.id}>
                <TrendCard {...trend} onClick={() => setSelectedTrend(trend)} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trends;
