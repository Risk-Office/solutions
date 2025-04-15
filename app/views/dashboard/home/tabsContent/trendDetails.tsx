import React, { useState, useEffect } from "react";
import { ArrowLeft, Share2, ClipboardList, Pen, Flag, MessageSquareQuote, TrendingDown } from "lucide-react";
import { Button } from "~/components/ui/button";
import Modal from "~/components/ui/modal";
import type { ModalSize } from "~/components/ui/modal";
import { HelpUsImproveModal, ShareModal, ExportModal, FeedbackModal, AddNotesModal, FlaggedForReviewModal } from "~/components/ui/modals";
import DraggableChat from '~/components/ui/draggablechat'
import Menus from "~/components/ui/menus";

import Yes from '~/assets/png/yes-thumbs.png'
import No from '~/assets/png/no-thumbs.png'

interface TrendDetailsProps {
    id: string;
    title: string;
    tags: string[];
    description: string;
    detectedDate: string;
    likelihood: string;
    impactSeverity: 'Critical' | 'High' | 'Medium' | 'Low' | 'Insignificant';
    signal: 'Strong' | 'Moderate' | 'Weak';
    onBack: () => void;
}

const TrendDetails: React.FC<TrendDetailsProps> = ({
    title,
    tags,
    description,
    detectedDate,
    likelihood,
    impactSeverity,
    signal,
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
    const [isFlagModalOpen, setIsFlagModalOpen] = useState(false);
    const [isHelpUsImproveModalOpen, setIsHelpUsImproveModalOpen] = useState(false);
    const [isAddNotesModalOpen, setIsAddNotesModalOpen] = useState(false)
    const [modalSize, setModalSize] = useState<ModalSize>('default');
    const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);
    // const [isFlagModalOpen, setIsFlagModalOpen] = useState(false)

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

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsHelpUsImproveModalOpen(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const openModal = (size: ModalSize = 'default') => {
        setModalSize(size);
        setIsShareModalOpen(true);
    };

    const openExportModal = (size: ModalSize = 'default') => {
        setModalSize(size);
        setIsExportModalOpen(true);
    };

    const openFlagModal = (size: ModalSize = 'default') => {
        setModalSize(size);
        setIsFlagModalOpen(true);
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
                        <h1 className="text-xl font-bold">Trend Analysis</h1>

                        <div className="p-4  mt-3 rounded-md border-2 border-gray-300">
                            <div className="flex items-center justify-between">
                                <h2 className="text-md font-semibold mb-2">{title}</h2>
                            </div>

                            <div className="flex space-x-3 items-center">
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
                                <Share2 onClick={() => openModal('default')} size={16} className="cursor-pointer text-gray-600 hover:text-gray-800" />
                                {/* <ClipboardList onClick={() => openExportModal('default')} size={16} className="cursor-pointer text-gray-600 hover:text-gray-800" />
                                <MessageSquareQuote onClick={openChat} size={16} className="cursor-pointer text-gray-600 hover:text-gray-800" />
                                <Pen onClick={() => openNotesModal('default')} size={16} className="cursor-pointer text-gray-600 hover:text-gray-800" /> */}
                                <Menus />
                                <Flag onClick={() => openFlagModal('default')} size={16} className="cursor-pointer text-gray-600 hover:text-gray-800" />
                            </div>

                            <hr className="my-4 border border-gray-300" />

                            <div className="space-y-4">
                                <p className="text-gray-800 text-sm">
                                    Healthcare providers report a 7% decline in Q1 revenue, citing delayed reimbursements has raised concerns among hospital networks, senior care providers, and private healthcare institutions In a significant cybersecurity breach, one of the largest financial institutions suffered a major attack that led to the exposure of sensitive customer data, raising concerns about digital security in the banking sector. The breach, which is believed to have occurred due to a vulnerability in the institution's online banking infrastructure, compromised thousands of accounts, putting both individuals and businesses at risk of fraud, identity theft, and financial losses
                                </p>
                                {/* <p className="text-gray-800 text-sm">{description}</p> */}
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 mt-4">
                                <div className="flex items-center space-x-1">
                                    <p className="text-sm text-gray-600">Impact Severity:</p>
                                    <div className={`p-1 px-2 ${severityColorMap[impactSeverity]?.bar || severityColorMap.Default.bar} rounded-md w-[25px]`}></div>                                    
                                </div>

                                <div className="flex items-center space-x-2">
                                    <p className="text-sm text-gray-600">Trend direction:</p>
                                    <TrendingDown className="text-gray-600 w-5" />
                                </div>

                                <div className="flex items-center space-x-2">
                                    <p className="text-sm text-gray-600">Detected:</p>
                                    <p className="text-sm text-gray-900">April 4, 2025</p>
                                </div>

                                <div className="flex items-center space-x-2 md:justify-end">
                                    <p className="text-sm text-gray-600">Likelihood:</p>
                                    <p className="text-sm text-gray-900">High</p>
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center justify-end space-x-2 mt-2">
                                <Button
                                    variant="default"
                                    onClick={() => openFlagModal('default')}
                                    
                                >
                                    Flag for Review
                                </Button>
                                <Button
                                    variant="default"
                                    onClick={() => openFlagModal('default')}

                                >
                                    Acknowledge
                                </Button>
                                <Button
                                    variant="default"
                                    onClick={() => openExportModal('default')}
                                    
                                >
                                    Export to Risk Register
                                </Button>
                            </div>
                        </div>
                    </div>


                    <div className="flex justify-between gap-4 mt-4">
                        
                    </div>
                </div>

                <div className="flex flex-col items-stretch h-full">
                    <div className="flex flex-col gap-5 w-full">
                        <div className="flex flex-col gap-4 w-full bg-white py-4 px-4 rounded-lg">
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-bold">Assessments</h3>
                                <Button variant="default">Track trend</Button>
                            </div>

                            <div className="space-y-4">
                                <div className="text-center grid grid-cols-3 gap-3 bg-gray-100 rounded-md p-2">
                                    <div>
                                        <p className="font-semibold mt-1 text-red-500 text-xl">{likelihood}</p>
                                        <hr className="mt-2 mb-1 border border-gray-200 w-[85%] mx-auto" />
                                        <p className="text-xs text-gray-600">Likelihood</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold mt-1 text-xl">{detectedDate}</p>
                                        <hr className="mt-2 mb-1 border border-gray-200 w-[85%] mx-auto" />
                                        <p className="text-xs text-gray-600">Detected</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold mt-1 text-sm">{impactSeverity}</p>
                                        <div className={`p-1 px-2 ${severityColorMap[impactSeverity]?.bar || severityColorMap.Default.bar} rounded-md w-[25%] mx-auto`}></div>
                                        <hr className="mt-2 mb-1 border border-gray-200 w-[85%] mx-auto" />
                                        <p className="text-xs text-gray-600">Impact Severity</p>
                                    </div>
                                </div>

                                <div className="bg-gray-100 rounded-md p-2">
                                    <h3 className="text-sm font-semibold mb-3">Signal Strength</h3>
                                    <p className="text-gray-700 text-sm">{signal}</p>
                                </div>

                                <div className="bg-gray-100 rounded-md p-2">
                                    <h3 className="text-sm font-semibold mb-3">Potential Impact</h3>
                                    <p className="text-gray-700 text-sm">
                                        {description}
                                    </p>
                                </div>

                                <div className="bg-gray-100 rounded-md p-2">
                                    <h3 className="text-sm font-semibold mb-3">Strategic Implications</h3>
                                    <p className="text-gray-700 text-sm">
                                        {description}
                                    </p>
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

            <ShareModal
                isOpen={isShareModalOpen}
                onClose={() => setIsShareModalOpen(false)}
                title="Share this trend"
                articleTitle={title}
            />

            <ExportModal
                isOpen={isExportModalOpen}
                onClose={() => setIsExportModalOpen(false)}
                title="Export to Risk Register"
            />

            <FlaggedForReviewModal isOpen={isFlagModalOpen} onClose={() => setIsFlagModalOpen(false)} />

            <FeedbackModal
                isOpen={isFeedbackModalOpen}
                onClose={() => setIsFeedbackModalOpen(false)}
            />

            {isHelpUsImproveModalOpen && (
                <HelpUsImproveModal
                    isOpen={isHelpUsImproveModalOpen}
                    onClose={() => setIsHelpUsImproveModalOpen(false)}
                />
            )}

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

export default TrendDetails; 