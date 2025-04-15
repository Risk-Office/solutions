import React, { useState, useEffect } from "react";
import { ArrowLeft, ClipboardList, Share2, MessageSquareQuote, Bell } from "lucide-react";
import { Button } from "~/components/ui/button";
import Modal from "~/components/ui/modal";
import type { ModalSize } from "~/components/ui/modal";
import { RequestReceivedModal, ShareModal, ExportModal, FeedbackModal } from "~/components/ui/modals";
import { RiskCard } from "./statement";
import DraggableChat from '~/components/ui/draggablechat'
import Menus from "~/components/ui/menus";

// images
import Yes from '~/assets/png/yes-thumbs.png';
import No from '~/assets/png/no-thumbs.png';

interface TrackingDetailsProps {
    id: string;
    title: string;
    type: string;
    lastUpdate: string;
    expectedUpdate: string;
    description: string;
    tags: string[];
    updates?: {
        id: string;
        type: string;
        date: string;
        description: string;
        tags: string[];
    }[];
    onBack: () => void;
}

// Sample related risk events data
const relatedRiskEvents = [
    {
        id: "re1",
        title: "Semiconductor giant AMD (Advanced Micro Devices) experienced a major cyber breach",
        source: "www.reuters.com",
        date: "March 15, 2025",
        imageUrl: "https://brandlogo.org/wp-content/uploads/2024/06/Reuters-Logo-Vertical.png.webp",
        timeHorizon: "6 months",
        severity: "Critical"
    },
    {
        id: "re2",
        title: "Major data breach at financial services provider exposes customer records",
        source: "www.bloomberg.com",
        date: "March 10, 2025",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Jsgqn65idTsvUVq8AbXLjbU5XhhTgQH6Eg&s",
        timeHorizon: "3 months",
        severity: "High"
    },
    {
        id: "re3",
        title: "Critical infrastructure vulnerability discovered in banking systems",
        source: "www.bbcnews.com",
        date: "March 5, 2025",
        imageUrl: "https://images.icon-icons.com/70/PNG/512/bbc_news_14062.png",
        timeHorizon: "1 month",
        severity: "Medium"
    }
];

const TrackingDetails: React.FC<TrackingDetailsProps> = ({
    title,
    type,
    lastUpdate,
    expectedUpdate,
    description,
    tags = [],
    updates = [],
    onBack
}) => {
    const [isShareModalOpen, setIsShareModalOpen] = useState(false);
    const [isExportModalOpen, setIsExportModalOpen] = useState(false);
    const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
    const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);
    const [modalSize, setModalSize] = useState<ModalSize>('default');
    const [showRatingSummary, setShowRatingSummary] = useState(false);
    const [showThankYou, setShowThankYou] = useState(false);
    const [selectedSeverity, setSelectedSeverity] = useState<string | null>(null);
    const [comment, setComment] = useState("");

    let impactSeverity = 'Insignificant'
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

    const openModal = (size: ModalSize = 'default') => {
        setModalSize(size);
        setIsShareModalOpen(true);
    };

    const openExportModal = (size: ModalSize = 'default') => {
        setModalSize(size);
        setIsExportModalOpen(true);
    };

    const handleSubmitRating = () => {
        if (!selectedSeverity) return;
        
        setShowThankYou(true);
        setTimeout(() => {
            setShowThankYou(false);
            setShowRatingSummary(true);
        }, 2000);
    };

    //   Chat
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);
  
  const openChat = (): void => {
    setIsChatOpen(true);
  };
  
  const closeChat = (): void => {
    setIsChatOpen(false);
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

            <div className="grid grid-cols-1 md:grid-cols-[1fr_23rem] 2xl:grid-cols-[1fr_26rem] gap-2 items-start w-full h-full">
                <div className="flex flex-col space-y-4 items-stretch overflow-hidden">
                    <div className="space-y-4 w-full bg-white rounded-lg h-full py-6 px-6 overflow-y-auto">
                        <h1 className="text-xl font-bold">Tracking Details</h1>

                        <div className="p-4 bg-gray-50 mt-3 rounded-md border-2 border-gray-300">
                            <div className="flex items-center justify-between">
                                <h2 className="text-md font-semibold mb-2">{title}</h2>
                                <span className="px-2 py-1 bg-primary text-white text-xs rounded-md">{type}</span>
                            </div>

                            <div className="flex space-x-3 items-center">
                                <p className="text-gray-600 text-sm">
                                    {lastUpdate} |
                                </p>
                                <Share2 onClick={() => openModal('default')} size={16} className="cursor-pointer text-gray-600 hover:text-gray-800" />
                                <Menus />
                                {/* <ClipboardList onClick={() => openExportModal('default')} size={16} className="cursor-pointer text-gray-600 hover:text-gray-800" />
                                <MessageSquareQuote onClick={openChat} size={16} className="cursor-pointer text-gray-600 hover:text-gray-800" />
                                <Bell size={16} className="cursor-pointer text-gray-600 hover:text-gray-800" /> */}
                            </div>

                            <hr className="my-4 border border-gray-300" />

                            <div className="space-y-4">
                                <p className="text-gray-800 text-sm">
                                    Healthcare providers report a 7% decline in Q1 revenue, citing delayed reimbursements has raised concerns among hospital networks, senior care providers, and private healthcare institutions In a significant cybersecurity breach, one of the largest financial institutions suffered a major attack that led to the exposure of sensitive customer data, raising concerns about digital security in the banking sector. The breach, which is believed to have occurred due to a vulnerability in the institution's online banking infrastructure, compromised thousands of accounts, putting both individuals and businesses at risk of fraud, identity theft, and financial losses.
                                </p>

                                <p className="text-gray-800 text-sm">
                                    Although the financial institution had security protocols in place, the breach went undetected for several days, allowing attackers to exfiltrate large volumes of sensitive data. Once the breach was confirmed, the bank swiftly initiated emergency containment measures, shutting down affected servers, isolating compromised systems, and notifying regulatory authorities.
                                </p>
                                {/* <p className="text-gray-800 text-sm">{description}</p> */}
                                <div className="flex flex-wrap gap-2">
                                    {tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Rate Impact Form */}
                        <div className="w-full bg-white rounded-lg py-6 px-6">
                            <h1 className="text-xl font-bold mb-4">Rate The Impact of This Incident</h1>
                            
                            <div className="space-y-6">
                                <div className="flex justify-between space-x-2">
                                    {Object.entries(severityColorMap).map(([severity, colors]) => (
                                        severity !== 'Default' && (
                                            <button 
                                                key={severity}
                                                className={`flex items-center justify-between gap-x-2 p-3 rounded-md border border-gray-200 hover:bg-gray-100 ${selectedSeverity === severity ? 'bg-gray-300' : 'bg-transparent'}`}
                                                onClick={() => setSelectedSeverity(severity)}
                                            >
                                                <span className="font-medium">{severity}</span>
                                                <div className={`w-6 h-2 ${colors.bar} rounded-full`}></div>
                                            </button>
                                        )
                                    ))}
                                </div>

                                <div>
                                    <h3 className="text-sm font-semibold mb-2">Comment</h3>
                                    <textarea
                                        className="w-full p-3 border border-gray-200 rounded-lg resize-none h-24 focus:outline-none focus:ring-1 focus:ring-gray-300"
                                        placeholder="Tell us reason why you rate this risk event"
                                        value={comment}
                                        onChange={(e) => setComment(e.target.value)}
                                    />
                                </div>

                                <div className="flex justify-end">
                                    <Button
                                        variant="default"
                                        onClick={handleSubmitRating}
                                        disabled={!selectedSeverity}
                                        className="bg-[#0F172A]"
                                    >
                                        SUBMIT
                                    </Button>
                                </div>
                            </div>

                            {/* Thank you overlay */}
                            {showThankYou && (
                                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                                    <div className="bg-white p-6 rounded-lg text-center">
                                        <h2 className="text-xl font-semibold mb-2">Thank You!</h2>
                                        <p>Your rating has been submitted successfully.</p>
                                    </div>
                                </div>
                            )}

                            {/* Rating Summary */}
                            {showRatingSummary && (
                                <div className="mt-8 border-t border-gray-200 pt-6">
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <h3 className="text-lg font-semibold mb-4">Community Risk Rating</h3>
                                            <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                                                {/* Graph placeholder */}
                                                <span className="text-gray-500">Graph Coming Soon</span>
                                            </div>
                                        </div>
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <h3 className="text-lg font-semibold mb-4">User Rating Summary</h3>
                                            <div className="space-y-2">
                                                <div className="flex justify-between items-center">
                                                    <span>Critical</span>
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-24 h-2 bg-red-500 rounded"></div>
                                                        <span>25%</span>
                                                    </div>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span>High</span>
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-32 h-2 bg-amber-600 rounded"></div>
                                                        <span>30%</span>
                                                    </div>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span>Medium</span>
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-20 h-2 bg-yellow-400 rounded"></div>
                                                        <span>20%</span>
                                                    </div>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span>Low</span>
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-16 h-2 bg-cyan-500 rounded"></div>
                                                        <span>15%</span>
                                                    </div>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span>Insignificant</span>
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-12 h-2 bg-green-500 rounded"></div>
                                                        <span>10%</span>
                                                    </div>
                                                </div>
                                                <div className="text-right text-sm text-gray-500 mt-4">
                                                    Total number of users: 150
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Related Risk Events */}
                        <div className="w-full bg-white rounded-lg py-6 px-6">
                            <h1 className="text-xl font-bold mb-4">Related Risk Events</h1>
                            <div className="space-y-4">
                                {relatedRiskEvents.map(event => (
                                    <RiskCard
                                        key={event.id}
                                        id={event.id}
                                        title={event.title}
                                        source={event.source}
                                        date={event.date}
                                        imageUrl={event.imageUrl}
                                        timeHorizon={event.timeHorizon}
                                        severity={event.severity as 'Critical' | 'High' | 'Medium' | 'Low' | 'Insignificant'}
                                        onClick={() => {}}
                                        showFull={false}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* <div className="w-full bg-white rounded-lg h-full py-6 px-6 overflow-y-auto">
                        <h1 className="text-xl font-bold">Update History</h1>
                        <div className="space-y-4 mt-4">
                            {updates.map((update) => (
                                <div key={update.id} className="border border-gray-200 rounded-lg p-4">
                                    <div className="flex flex-col gap-2">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-sm font-medium">{update.type}</span>
                                            <span className="text-sm text-gray-500">{update.date}</span>
                                        </div>

                                        <p className="text-sm text-gray-600">{update.description}</p>

                                        <div className="flex flex-wrap gap-2">
                                            {update.tags.map((tag, index) => (
                                                <span
                                                    key={index}
                                                    className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div> */}
                </div>

                <div className="flex flex-col items-stretch h-full">
                    <div className="flex flex-col gap-5 w-full">
                        <div className="flex flex-col gap-4 w-full bg-white py-4 px-4 rounded-lg">
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-bold">Assessments</h3>
                                <Button variant="default">Track updates</Button>
                            </div>

                            <div className="space-y-4">
                                <div className="text-center grid grid-cols-3 gap-3 bg-gray-100 rounded-md p-2">
                                    <div>
                                        <p className="font-semibold mt-1 text-red-500 text-xl">High</p>
                                        <hr className="mt-2 mb-1 border border-gray-200 w-[85%] mx-auto" />
                                        <p className="text-xs text-gray-600">Likelihood</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold mt-1 text-xl">April 4th, 2025</p>
                                        <hr className="mt-2 mb-1 border border-gray-200 w-[85%] mx-auto" />
                                        <p className="text-xs text-gray-600">Detected</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold mt-1 text-sm">{impactSeverity}</p>
                                        <div className={`p-1 px-2 ${severityColorMap[impactSeverity as keyof typeof severityColorMap]?.bar || severityColorMap.Default.bar} rounded-md w-[25%] mx-auto`}></div>
                                        <hr className="mt-2 mb-1 border border-gray-200 w-[85%] mx-auto" />
                                        <p className="text-xs text-gray-600">Impact Severity</p>
                                    </div>
                                </div>

                                <div className="bg-gray-100 rounded-md p-2">
                                    <h3 className="text-sm font-semibold mb-3">Current Status</h3>
                                    <p className="text-gray-700 text-sm">
                                        Last updated {lastUpdate}. Next update expected {expectedUpdate}.
                                    </p>
                                </div>

                                <div className="bg-gray-100 rounded-md p-2">
                                    <h3 className="text-sm font-semibold mb-3">Impact Assessment</h3>
                                    <p className="text-gray-700 text-sm">
                                        Analysis of how this situation affects your business operations and potential risks.
                                    </p>
                                </div>

                                <div className="bg-gray-100 rounded-md p-2">
                                    <h3 className="text-sm font-semibold mb-3">Recommended Actions</h3>
                                    <ul className="list-item pl-5 space-y-2 text-sm">
                                        <li>Monitor situation closely</li>
                                        <li>Review contingency plans</li>
                                        <li>Update stakeholders regularly</li>
                                    </ul>
                                </div>

                                <div className="bg-gray-100 rounded-md p-2">
                                    <h3 className="text-sm font-semibold mb-3">Request for more information</h3>
                                    <p className="text-gray-700 text-sm mb-3">Ask a question or request additional details about this situation</p>

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
                title="Share this tracking"
                articleTitle={title}
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

            <DraggableChat 
                isOpen={isChatOpen} 
                onClose={closeChat}
                initialPosition={{ x: window.innerWidth - 380, y: 100 }}
            />
        </div>
    );
};

export default TrackingDetails; 