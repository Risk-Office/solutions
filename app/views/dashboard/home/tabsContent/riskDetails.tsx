import React from "react";
import { ArrowLeft, ClipboardList, Pen, Share2, MessageSquareQuote } from "lucide-react";
import { Button } from "~/components/ui/button";

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
        <div className="flex-[0.65] flex flex-col items-stretch overflow-hidden h-full">

          <div className="space-y-6 w-full bg-white rounded-lg h-full py-6 px-6 overflow-y-auto">
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
                
                <div className="flex items-start gap-4">
                  {/*  */}
                  <div className="flex-1">
                    
                    {/* <p className="text-gray-600">
                      <a href={`https://${source}`} className="underline italic">{source}</a>
                      {" "} | {date}
                    </p> */}
                  </div>
                </div>

                {/* <div className="grid grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Probability</p>
                    <p className="font-semibold mt-1">High</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Time Horizon & Urgency</p>
                    <p className="font-semibold mt-1">{timeHorizon}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Impact Severity</p>
                    <p className="font-semibold mt-1">{severity}</p>
                  </div>
                </div> */}

                {/* <div className="space-y-6">
                  <section>
                    <h3 className="text-lg font-semibold mb-3">Vulnerability & Preparedness</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Review Your Exposure</li>
                      <li>Useful Controls</li>
                      <li>What you need to do</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold mb-3">Potential Mitigation Strategies</h3>
                    <p className="text-gray-700">
                      As the healthcare industry adjusts to these wage hikes, stakeholders will need to balance fair
                      compensation with sustainable financial practices. The long-term effects of this policy will depend on
                      whether additional funding or support mechanisms are introduced to help organizations cope with rising costs.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold mb-3">Strategic and Competitive Implications</h3>
                    <p className="text-gray-700">
                      As the healthcare industry adjusts to these wage hikes, stakeholders will need to balance fair
                      compensation with sustainable financial practices. The long-term effects of this policy will depend on
                      whether additional funding or support mechanisms are introduced.
                    </p>
                  </section>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        <div className="flex-[0.35] flex flex-col items-stretch h-full">
          <div className="flex flex-col gap-5 w-full">
            <div className="flex flex-col gap-4 w-full bg-white py-4 px-4 rounded-lg">
              <h3 className="text-lg font-bold">Related Storyline</h3>
              <div className="space-y-4">
                {[1, 2].map((i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100">
                    <img src={imageUrl} alt={source} className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <h4 className="font-semibold">{title}</h4>
                      <p className="text-sm text-gray-600">{source} | {date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskDetails; 