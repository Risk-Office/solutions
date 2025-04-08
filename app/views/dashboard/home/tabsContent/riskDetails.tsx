import React from "react";
import { ArrowLeft, ClipboardList, Pen, Share2, MessageSquareQuote } from "lucide-react";
import { Button } from "~/components/ui/button";
import { RiskCard } from "./statement";

interface RiskDetailsProps {
  id: string;
  title: string;
  source: string;
  date: string;
  imageUrl: string;
  timeHorizon: string;
  severity: 'Critical' | 'High' | 'Medium' | 'Low';
  onBack: () => void;
}

const RiskDetails: React.FC<RiskDetailsProps> = ({
  title,
  source,
  date,
  imageUrl,
  timeHorizon,
  severity,
  onBack
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

  return (
    <div>
      <div className="mb-4">
        <Button
          variant="text"
          className="flex items-center gap-2 text-red-500 hover:text-red-600"
          onClick={onBack}
        >
          <ArrowLeft size={20} />
          Back
        </Button>
      </div>

      <div className="flex flex-row gap-2 w-full h-full">
        <div className="flex-[0.65] flex flex-col space-y-4 items-stretch overflow-hidden h-full">

          <div className="space-y-4 w-full bg-white rounded-lg h-full py-6 px-6 overflow-y-auto">
            <h1 className="text-xl font-bold">Statement and Action</h1>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-xs text-gray-500 uppercase font-semibold">statement</h3>
              
              <div className="p-4 bg-gray-50 mt-3 rounded-md border-2 border-gray-300">
                <div className="flex items-center justify-between">
                  <h2 className="text-md font-semibold mb-2">{title}</h2>
                  <img src={imageUrl} alt={source} className="w-12 h-12 rounded-lg object-cover" />
                </div>

                <div className="flex space-x-3 items-center">
                  <p className="text-gray-600 text-sm">
                    <a href={`https://${source}`} className="underline italic">{source}</a>
                    &nbsp;  [{date}]
                  </p>
                  <Share2 size={16} className="cursor-pointer text-gray-600 hover:text-gray-800" />
                  <ClipboardList size={16} className="cursor-pointer text-gray-600 hover:text-gray-800" />
                  <MessageSquareQuote size={16} className="cursor-pointer text-gray-600 hover:text-gray-800" />
                  <Pen size={16} className="cursor-pointer text-gray-600 hover:text-gray-800" />
                  <ClipboardList size={16} className="cursor-pointer text-gray-600 hover:text-gray-800" />
                </div>

                <hr className="my-4 border border-gray-300" />

                <div className="space-y-4">
                  <p className="text-gray-800 text-sm">
                    We employ cutting-edge technologies and data analytics to provide real-time visibility into your supply chain in addition to meticulously identifying the weakest links that help you fortify these areas to minimize risks. We employ cutting-edge technologies and data analytics to provide real-time visibility into your supply chain in addition to meticulously identifying the weakest links that help you fortify these areas to minimize risks. We employ cutting-edge technologies and data analytics to provide real-time visibility into your supply chain in addition to meticulously identifying the weakest links that help you fortify these areas to minimize risks.
                  </p>

                  <p className="text-gray-800 text-sm">
                    We employ cutting-edge technologies and data analytics to provide real-time visibility into your supply chain in addition to meticulously identifying the weakest links that help you fortify these areas to minimize risks. We employ cutting-edge technologies and data analytics to provide real-time visibility into your supply chain in addition to meticulously identifying the weakest links that help you fortify these areas to minimize risks.
                  </p>

                  <p className="text-gray-800 text-sm">
                    We employ cutting-edge technologies and data analytics to provide real-time visibility into your supply chain in addition to meticulously identifying the weakest links that help you fortify these areas to minimize risks.
                  </p>

                </div>
              </div>
            </div>
          </div>

          <div className="w-full bg-white rounded-lg h-full py-6 px-6 overflow-y-auto">
            <h1 className="text-xl font-bold">Related Storyline</h1>

            <div className="space-y-4 mt-4">
              <RiskCard
                id="rs1"
                title="Healthcare Worker Shortage Intensifies"
                source="www.reuters.com" 
                date="12th Nov. 2024"
                imageUrl="https://brandlogo.org/wp-content/uploads/2024/06/Reuters-Logo-Vertical.png.webp"
                timeHorizon="1 year"
                severity="High"
                onClick={() => {}}
                showFull={false}
              />
              <RiskCard 
                id="rs2"
                title="New Healthcare Technology Regulations"
                source="www.bloomberg.com"
                date="11th Nov. 2024"
                imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Jsgqn65idTsvUVq8AbXLjbU5XhhTgQH6Eg&s"
                timeHorizon="6 months"
                severity="Medium"
                onClick={() => {}}
                showFull={false}
              />
              <RiskCard
                id="rs3" 
                title="Rising Insurance Premiums Impact Care Access"
                source="www.bbcnews.com"
                date="10th Nov. 2024"
                imageUrl="https://images.icon-icons.com/70/PNG/512/bbc_news_14062.png"
                timeHorizon="2 years"
                severity="Critical"
                onClick={() => {}}
                showFull={false}
              />
            </div>
          </div>
        </div>

        <div className="flex-[0.35] flex flex-col items-stretch h-full">
          <div className="flex flex-col gap-5 w-full">
            <div className="flex flex-col gap-4 w-full bg-white py-4 px-4 rounded-lg">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold">Assessments</h3>
                <Button variant="default">Track article</Button>
              </div>
              
              <div className="space-y-4">
                <div className="text-center grid grid-cols-3 gap-3 bg-gray-100 rounded-md p-2">
                  <div>
                    <p className="font-semibold mt-1 text-red-500 text-xl">High</p>
                    <hr className="mt-2 mb-1 border border-gray-200 w-[85%] mx-auto" />
                    <p className="text-xs text-gray-600">Probability</p>

                  </div>
                  <div>
                    <p className="font-semibold mt-1 text-xl">{timeHorizon}</p>
                    <hr className="mt-2 mb-1 border border-gray-200 w-[85%] mx-auto" />
                    <p className="text-xs text-gray-600">Time Horizon & Urgency</p>

                  </div>
                  <div>
                    <p className="font-semibold mt-1 text-sm">{severity}</p>
                    <div className={`p-1 px-2 ${severityColorMap[severity]?.bar || severityColorMap.Default.bar} rounded-md w-[25%] mx-auto`}></div>
                    <hr className="mt-2 mb-1 border border-gray-200 w-[85%] mx-auto" />
                    <p className="text-xs text-gray-600">Impact Severity</p>
                  </div>
                </div>

                <div className="bg-gray-100 rounded-md p-2">
                  <h3 className="text-sm font-semibold mb-3">Vulnerability & Preparedness</h3>
                  <ul className="list-item pl-5 space-y-2 text-sm">
                    <li>Review Your Exposure</li>
                    <li>Useful Controls</li>
                    <li>What you need to do</li>
                  </ul>
                </div>

                <div className="bg-gray-100 rounded-md p-2">
                  <h3 className="text-sm font-semibold mb-3">Potential Mitigation Strategies</h3>
                  <p className="text-gray-700 text-sm">
                    As the healthcare industry adjusts to these wage hikes, stakeholders will need to balance fair
                    compensation with sustainable financial practices. The long-term effects of this policy will depend on
                    whether additional funding or support mechanisms are introduced to help organizations cope with rising costs.
                  </p>
                </div>

                <div className="bg-gray-100 rounded-md p-2">
                  <h3 className="text-sm font-semibold mb-3">Strategic and Competitive Implications</h3>
                  <p className="text-gray-700 text-sm">
                    As the healthcare industry adjusts to these wage hikes, stakeholders will need to balance fair
                    compensation with sustainable financial practices. The long-term effects of this policy will depend on
                    whether additional funding or support mechanisms are introduced.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskDetails; 