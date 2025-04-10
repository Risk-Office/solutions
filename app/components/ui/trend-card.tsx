import React, { useState } from 'react';
import { Button } from './button';
import { ArrowDown, Bookmark } from 'lucide-react';
import { FlaggedForReviewModal, SubscribeToExportModal } from './modals';
import Strong from '../../assets/png/strong.png';

interface TrendCardProps {
  id: string;
  title: string;
  tags: string[];
  description: string;
  detectedDate: string;
  likelihood: string;
  impactSeverity: 'Critical' | 'High' | 'Medium' | 'Low' | 'Insignificant';
  signal: 'Strong' | 'Moderate' | 'Weak';
  onClick: () => void;
}

const TrendCard: React.FC<TrendCardProps> = ({
  id,
  title,
  tags,
  description,
  detectedDate,
  likelihood,
  impactSeverity,
  signal,
  onClick
}) => {
  const [isFlagModalOpen, setIsFlagModalOpen] = useState(false);
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);

  const severityColorMap = {
    Critical: 'bg-red-500',
    High: 'bg-amber-600',
    Medium: 'bg-yellow-400',
    Low: 'bg-cyan-500',
    Insignificant: 'bg-green-500'
  };

  const handleFlagClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFlagModalOpen(true);
  };

  const handleExportClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExportModalOpen(true);
  };

  return (
    <>
      <div className="bg-white rounded-lg p-4 border border-deepGray">
        <div className="flex flex-col gap-3">
          <div 
            className="flex items-center gap-1 border-b border-gray-200 pb-2 justify-between top-div cursor-pointer" 
            onClick={onClick}
          >
            <div>
              <h3 className="text-lg font-semibold flex-1">{title}</h3>

              <div className="flex items-center space-x-2 mt-1">
                <Bookmark className="w-4 h-4" />
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-1.5 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <img src={Strong} alt="Strong" className='w-16' />
          </div>

          <p className="text-sm text-gray-600">{description}</p>

          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <p className="text-gray-500">Impact Severity:</p>
              <div className={`h-1 w-16 mt-1 rounded ${severityColorMap[impactSeverity]}`} />
            </div>
            <div>
              <p className="text-gray-500">Detected:</p>
              <p>{detectedDate}</p>
            </div>
            <div>
              <p className="text-gray-500">Trend Direction:</p>
              <ArrowDown className="mt-1" size={16} />
            </div>
            <div>
              <p className="text-gray-500">Likelihood:</p>
              <p>{likelihood}</p>
            </div>
          </div>

          <div className="flex items-center justify-between gap-1 mt-2">
            <Button
              variant="default"
              className='text-[11px]'
              onClick={handleFlagClick}
            >
              FLAG FOR REVIEW
            </Button>
            <Button
              variant="default"
              className='text-[11px]'
              onClick={handleExportClick}
            >
              EXPORT TO RISK REGISTER
            </Button>
          </div>
        </div>
      </div>

      <FlaggedForReviewModal
        isOpen={isFlagModalOpen}
        onClose={() => setIsFlagModalOpen(false)}
      />

      <SubscribeToExportModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
      />
    </>
  );
};

export default TrendCard; 