import React, { useState } from "react";
import { ArrowLeft, ClipboardList, Pen, Share2, MessageSquareQuote } from "lucide-react";
import { Button } from "~/components/ui/button";
import { RiskCard } from "./statement";
import Modal from "~/components/ui/modal";
import type { ModalSize } from "~/components/ui/modal";
import { ArrowUp } from 'lucide-react'
import { RequestReceivedModal, ShareModal, ExportModal, FeedbackModal, AddNotesModal } from "~/components/ui/modals";
import DraggableChat from '~/components/ui/draggablechat'
import Menus from "~/components/ui/menus";
// import { Bar, BarChart } from "recharts"
// import { ChartConfig, ChartContainer } from "~/components/ui/chart"

// images

import Yes from '~/assets/png/yes-thumbs.png'
import No from '~/assets/png/no-thumbs.png'

interface ArticlesDetailsProps {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  featuredImage: string;
  timeHorizon: string;
  severity: 'Critical' | 'High' | 'Medium' | 'Low' | 'Insignificant';
  onBack: () => void;
}

// const chartConfig = {
//   desktop: {
//     label: "Desktop",
//     color: "#2563eb",
//   },
//   mobile: {
//     label: "Mobile",
//     color: "#60a5fa",
//   },
// } satisfies ChartConfig

const ArticlesDetails: React.FC<ArticlesDetailsProps> = ({
  title,
  subtitle,
  date,
  timeHorizon,
  severity,
  featuredImage,
  category,
  onBack
}) => {

  const severityColorMap = {
    Critical: {
      bar: 'bg-red-500',
    },
    High: {
      bar: 'bg-amber-600',
    },
    Medium: {
      bar: 'bg-yellow-400',
    },
    Low: {
      bar: 'bg-cyan-500',
    },
    Insignificant: {
      bar: 'bg-green-500',
    },
    Default: {
      bar: 'bg-gray-400',
    },
  };

  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);
  const [isAddNotesModalOpen, setIsAddNotesModalOpen] = useState(false)
  const [modalSize, setModalSize] = useState<ModalSize>('default');

  const openModal = (size: ModalSize = 'default') => {
    setModalSize(size);
    setIsShareModalOpen(true);
  };

  const openExportModal = (size: ModalSize = 'default') => {
    setModalSize(size);
    setIsExportModalOpen(true);
  };

  const openNotesModal = (size: ModalSize = 'default') => {
    setModalSize(size);
    setIsAddNotesModalOpen(true)
  }

    //   Chat
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);
  
  const openChat = (): void => {
    setIsChatOpen(true);
  };
  
  const closeChat = (): void => {
    setIsChatOpen(false);
  };

  const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
]


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

      <div className="grid grid-cols-1 md:grid-cols-[1fr_23rem] 2xl:grid-cols-[1fr_26rem] gap-2 items-start w-full h-full">
        <div className="flex flex-col space-y-4 items-stretch overflow-hidden">

          <div className="space-y-4 w-full bg-white rounded-lg h-full py-6 px-6 overflow-y-auto">
            <h1 className="text-xl font-bold">Featured</h1>
            
            <div className="bg-white mt-3">
                <div
                    style={{ backgroundImage: `url(${featuredImage})` }}
                    className="flex items-end justify-start bg-cover bg-no-repeat min-h-[15rem] w-full rounded-[0.6rem]"
                >
                    <div className="flex items-center justify-center p-1 bg-gold min-h-[1.875rem] rounded-bl-[0.6rem] w-full max-w-[6rem]">
                        <span className="text-semibold text-sm">{category}</span>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                  <h2 className="text-md font-semibold mb-2">{title}</h2>
                  {/* <img src={imageUrl} alt={source} className="w-12 h-12 rounded-lg object-cover" /> */}
                </div>

                <div className="flex space-x-3 items-center">
                  <p className="text-gray-600 text-sm">
                    {subtitle} |
                  </p>
                  <p className="text-gray-600 text-sm">
                    Reading time: 3 minutes |
                  </p>
                  <Share2 onClick={() => openModal('default')} size={16} className="cursor-pointer text-gray-600 hover:text-gray-800" />
                  {/* <ClipboardList onClick={() => openExportModal('default')} size={16} className="cursor-pointer text-gray-600 hover:text-gray-800" />
                  <MessageSquareQuote onClick={openChat} size={16} className="cursor-pointer text-gray-600 hover:text-gray-800" />
                  <Pen onClick={() => openNotesModal('default')} size={16} className="cursor-pointer text-gray-600 hover:text-gray-800" /> */}
                  <Menus />
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


          <div className="grid grid-cols-1 md:grid-cols-[14rem_1fr] 2xl:grid-cols-[17rem_1fr] gap-4">
            <div className="p-3 bg-white rounded-md">
                <p className="text-lg text-center font-semibold">Your locations</p>

                <div className="space-y-5 mt-3 text-center">
                    <div>
                        <div className="flex text-gray-700 items-center justify-center">
                            <span className="text-2xl">8%</span>
                            <ArrowUp />
                        </div>
                        <p className="text-md font-medium text-gray-500">Anchorage</p>
                    </div>

                    <div>
                        <div className="flex text-gray-700 items-center justify-center">
                            <span className="text-2xl">6%</span>
                            <ArrowUp />
                        </div>
                        <p className="text-md font-medium text-gray-500">Tacoma</p>
                    </div>

                    <div>
                        <div className="flex text-gray-700 items-center justify-center">
                            <span className="text-2xl">2%</span>
                            <ArrowUp />
                        </div>
                        <p className="text-md font-medium text-gray-500">Baltimore</p>
                    </div>
                </div>
            </div>

            <div className="p-3 bg-white rounded-md">
                {/* <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </ChartContainer> */}
            </div>
          </div>

          {/* <div className="w-full bg-white rounded-lg h-full py-6 px-6 overflow-y-auto">
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
          </div> */}
        </div>

        <div className="flex flex-col items-stretch h-full">
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

                <div className="bg-gray-100 rounded-md p-2">
                  <h3 className="text-sm font-semibold mb-3">Let's simulate how this affects your business</h3>
                  <Button 
                    onClick={() => setIsRequestModalOpen(true)}
                    className="w-full"
                  >
                    Simulate
                  </Button>
                </div>

                <div className="bg-gray-100 rounded-md p-2">
                  <h3 className="text-sm font-semibold mb-3">Request for more depth</h3>
                  <p className="text-gray-700 text-sm mb-3">Ask a question or request for more depth from the Risk Managament Officer</p>

                  <textarea className="resize-none bg-white w-full px-2 py-2.5 text-sm focus:outline-none rounded-md border border-gray-300 h-28" placeholder="Type your question here..." />
                  <Button
                    onClick={() => setIsRequestModalOpen(true)}
                    className="w-full"
                  >
                    Send Request
                  </Button>
                </div>

                <div className="p-2 text-center">
                  <h1 className="text-sm font-semibold mb-3">Was this insight useful?</h1>
                  <div className="flex items-center justify-center gap-2">
                    <img 
                      src={Yes} 
                      onClick={() => setIsFeedbackModalOpen(true)} 
                      alt="Yes" 
                      className="w-13 cursor-pointer" 
                    />
                    <img 
                      src={No} 
                      onClick={() => setIsFeedbackModalOpen(true)} 
                      alt="No" 
                      className="w-13 cursor-pointer" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        title="Share this insight"
        source={""}
        articleTitle={title}
        imageUrl={featuredImage}
      />

      <ExportModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
        title="Choose your export format"
      />

      {isRequestModalOpen && (
        <RequestReceivedModal
          isOpen={isRequestModalOpen}
          onClose={() => setIsRequestModalOpen(false)}
        />
      )}

      <FeedbackModal
        isOpen={isFeedbackModalOpen}
        onClose={() => setIsFeedbackModalOpen(false)}
      />

      <AddNotesModal
        isOpen={isAddNotesModalOpen}
        onClose={() => setIsAddNotesModalOpen(false)}
      />

      <DraggableChat 
        isOpen={isChatOpen} 
        onClose={closeChat}
        initialPosition={{ x: window.innerWidth - 380, y: 100 }}
      />
    </div>
  );
};

export default ArticlesDetails;