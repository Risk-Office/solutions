import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TabTitle from "~/components/form/tabtitle";
import { Button } from "~/components/ui/button";
import { useFormStore } from "~/store/useForm";
import B2BSegment from "~/components/form/segments/B2BSegment";
import GovernmentSegment from "~/components/form/segments/GovernmentSegment";
import B2CSegment from "~/components/form/segments/B2CSegment";
import NonProfitSegment from "~/components/form/segments/NonProfitSegment";

import Sideimg from '~/assets/png/forms/form2.png';

interface FormData {
    customerSegments: string[];
    b2bData?: any;
    governmentData?: any;
    b2cData?: any;
    nonProfitData?: any;
    othersData?: any;
    [key: string]: any;
}

export default function Step2() {
    const { formData, setCurrentStep, updateFormData } = useFormStore();
    const navigate = useNavigate();
    const [activeSegment, setActiveSegment] = useState<string>("");

    // Reset active segment and update when segments change
    useEffect(() => {
        // Ensure customerSegments is a flat array of strings
        const segments = formData.customerSegments || [];
        const flatSegments = segments.filter((item: any) => typeof item === 'string');
        
        if (flatSegments.length === 0) {
            // If no segments selected, go back to step 1
            navigate('/form/step1');
            return;
        }

        // Update formData if we had to flatten the array
        if (flatSegments.length !== segments.length) {
            updateFormData({ customerSegments: flatSegments });
        }

        // If current active segment is not in the list anymore, set to first available
        if (!flatSegments.includes(activeSegment)) {
            setActiveSegment(flatSegments[0]);
        }
    }, [formData.customerSegments, activeSegment, navigate, updateFormData]);

    const handlePrevious = () => {
        setCurrentStep(1);
        navigate('/form/step1');
    };

    const handleNext = () => {
        setCurrentStep(3);
        navigate('/form/step3');
    };

    const handleSegmentClick = (segment: string) => {
        setActiveSegment(segment);
    };

    const renderSegment = () => {
        switch (activeSegment) {
            case 'b2b':
                return <B2BSegment onNext={handleNext} onPrevious={handlePrevious} />;
            case 'government':
                return <GovernmentSegment onNext={handleNext} onPrevious={handlePrevious} />;
            case 'b2c':
                return <B2CSegment onNext={handleNext} onPrevious={handlePrevious} />;
            case 'non-profit':
                return <NonProfitSegment onNext={handleNext} onPrevious={handlePrevious} />;
            case 'others':
                return <div>Others segment coming soon</div>;
            default:
                return null;
        }
    };

    const getSegmentLabel = (segment: string): string => {
        switch(segment) {
            case 'b2b': return 'B2B (Business-to-Business)';
            case 'government': return 'Government (B2G)';
            case 'b2c': return 'B2C (Business-to-Consumer)';
            case 'non-profit': return 'Non-profit Organizations';
            case 'others': return 'Others';
            default: return '';
        }
    };

    const getSegmentData = (segment: string): any => {
        switch(segment) {
            case 'b2b': return formData.b2bData;
            case 'government': return formData.governmentData;
            case 'b2c': return formData.b2cData;
            case 'non-profit': return formData.nonProfitData;
            case 'others': return formData.othersData;
            default: return undefined;
        }
    };

    // Ensure we're only working with flat arrays
    const segments = (formData.customerSegments || []).filter((item: any) => typeof item === 'string');

    return (
        <div>
            <TabTitle title="Customer Segment Details" />

            <div className="grid grid-cols-4">
                {/* Left Sidebar - Show selected customer segments */}
                <div className="border-r border-gray-300 pt-10">
                    <div className="w-[90%] mx-auto">
                        <div className="space-y-2">
                            {segments.map((segment: string) => {
                                const isCompleted = getSegmentData(segment) !== undefined;
                                
                                return (
                                    <button
                                        key={segment}
                                        className={`w-full text-left p-3 rounded-lg flex items-center ${
                                            activeSegment === segment
                                                ? 'bg-gray-50'
                                                : ''
                                        }`}
                                        onClick={() => handleSegmentClick(segment)}
                                    >
                                        <div className="mr-3">
                                            {isCompleted ? (
                                                <svg className="w-5 h-5 text-white bg-black rounded-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            ) : (
                                                <svg className={`w-5 h-5 ${activeSegment === segment ? 'text-amber-700' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            )}
                                        </div>
                                        {getSegmentLabel(segment)}
                                    </button>
                                );
                            })}
                        </div>

                        <div className="text-center">
                            <Button variant="default" className="text-sm uppercase mt-24">Save & Continue Later</Button>
                        </div>
                    </div>
                </div>

                {/* Main Content Area - Show questions for the active segment */}
                <div className="col-span-2 bg-gray-50 pb-10">
                    {renderSegment()}
                </div>

                {/* Right column - could be for help text, previews, etc. */}
                <div>
                    <img src={Sideimg} alt="sideimg" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    );
}