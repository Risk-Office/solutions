import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TabTitle from "~/components/form/tabtitle";
import { Button } from "~/components/ui/button";
import { useFormStore } from "~/store/useForm";
import { FormNavigation } from "~/components/form/FormNavigation";
import B2BSegment from "~/components/form/segments/B2BSegment";
import GovernmentSegment from "~/components/form/segments/GovernmentSegment";
import B2CSegment from "~/components/form/segments/B2CSegment";
import NonProfitSegment from "~/components/form/segments/NonProfitSegment";
import { CustomCheckbox } from "~/components/form/customcheckbox";

import Sideimg from '~/assets/png/forms/form2.png';

interface SegmentData {
    // Add your segment-specific fields here
    [key: string]: any;
}

interface FormData {
    customerSegments: string[];
    individualData?: SegmentData;
    businessData?: SegmentData;
    governmentData?: SegmentData;
    nonProfitData?: SegmentData;
    othersData?: SegmentData;
    segmentData?: {
        b2bData?: { businessTypes: string[] };
        b2cData?: { dataTypes: string[]; demographics: any };
        governmentData?: { types: string[]; departments: string[] };
        nonProfitData?: {
            missionFocus: string[];
            otherMission: string;
            employeeSize: string[];
            volunteerSize: string[];
            fundingSources: string[];
            otherFunding: string;
            operationalMaturity: string[];
            programModel: string[];
            geographicalReach: string[];
            legalStructure: string[];
        };
    };
}

export default function Step2() {
    const { formData, setCurrentStep, updateFormData, updateSegmentData } = useFormStore();
    const navigate = useNavigate();
    const [activeSegment, setActiveSegment] = useState<string>("");
    const [currentSection, setCurrentSection] = useState(1);
    const [isInitialized, setIsInitialized] = useState(false);

    // Initialize store data if needed
    useEffect(() => {
        if (!formData.segmentData) {
            updateFormData({
                segmentData: {
                    b2bData: { businessTypes: [] },
                    b2cData: { dataTypes: [], demographics: {} },
                    governmentData: { types: [], departments: [] },
                    nonProfitData: {
                        missionFocus: [],
                        otherMission: '',
                        employeeSize: [],
                        volunteerSize: [],
                        fundingSources: [],
                        otherFunding: '',
                        operationalMaturity: [],
                        programModel: [],
                        geographicalReach: [],
                        legalStructure: []
                    }
                }
            });
        }
        setIsInitialized(true);
    }, [formData.segmentData, updateFormData]);

    // Reset active segment and update when segments change
    useEffect(() => {
        if (!isInitialized) return;

        const segments = formData.customerSegments || [];
        const flatSegments = segments.filter((item: any) => typeof item === 'string');
        
        if (flatSegments.length === 0) {
            navigate('/form/step1');
            return;
        }

        if (flatSegments.length !== segments.length) {
            updateFormData({ customerSegments: flatSegments });
        }

        if (!flatSegments.includes(activeSegment)) {
            setActiveSegment(flatSegments[0]);
        }
    }, [formData.customerSegments, activeSegment, navigate, updateFormData, isInitialized]);

    const handleSegmentClick = (segment: string) => {
        setActiveSegment(segment);
        setCurrentSection(1);
    };

    const handleSaveForLater = () => {
        console.log('Form Data:', {
            step1: {
                customerSegments: formData.customerSegments
            },
            step2: {
                valueProposition: formData.valueProposition,
                segmentData: formData.segmentData
            },
            step3: {
                // Add step3 data when implemented
            },
            currentStep: formData.currentStep
        });
    };

    const renderSegment = () => {
        if (!isInitialized) return null;

        switch (activeSegment) {
            case 'b2b':
                return <B2BSegment 
                    currentSection={currentSection}
                    onSectionChange={setCurrentSection}
                    onNext={() => {
                        if (currentSection < 2) {
                            setCurrentSection(currentSection + 1);
                        } else {
                            const nextSegment = getNextSegment();
                            if (nextSegment) {
                                setActiveSegment(nextSegment);
                                setCurrentSection(1);
                            }
                        }
                    }}
                    onPrevious={() => {
                        if (currentSection > 1) {
                            setCurrentSection(currentSection - 1);
                        } else {
                            const prevSegment = getPreviousSegment();
                            if (prevSegment) {
                                setActiveSegment(prevSegment);
                                setCurrentSection(2);
                            }
                        }
                    }}
                />;
            case 'government':
                return <GovernmentSegment 
                    currentSection={currentSection}
                    onSectionChange={setCurrentSection}
                    onNext={() => {
                        if (currentSection < 2) {
                            setCurrentSection(currentSection + 1);
                        } else {
                            const nextSegment = getNextSegment();
                            if (nextSegment) {
                                setActiveSegment(nextSegment);
                                setCurrentSection(1);
                            }
                        }
                    }}
                    onPrevious={() => {
                        if (currentSection > 1) {
                            setCurrentSection(currentSection - 1);
                        } else {
                            const prevSegment = getPreviousSegment();
                            if (prevSegment) {
                                setActiveSegment(prevSegment);
                                setCurrentSection(2);
                            }
                        }
                    }}
                />;
            case 'b2c':
                return <B2CSegment 
                    currentSection={currentSection}
                    onSectionChange={setCurrentSection}
                    onNext={() => {
                        if (currentSection < 2) {
                            setCurrentSection(currentSection + 1);
                        } else {
                            const nextSegment = getNextSegment();
                            if (nextSegment) {
                                setActiveSegment(nextSegment);
                                setCurrentSection(1);
                            }
                        }
                    }}
                    onPrevious={() => {
                        if (currentSection > 1) {
                            setCurrentSection(currentSection - 1);
                        } else {
                            const prevSegment = getPreviousSegment();
                            if (prevSegment) {
                                setActiveSegment(prevSegment);
                                setCurrentSection(2);
                            }
                        }
                    }}
                />;
            case 'non-profit':
                return <NonProfitSegment 
                    currentSection={currentSection}
                    onSectionChange={setCurrentSection}
                    onNext={() => {
                        if (currentSection < 2) {
                            setCurrentSection(currentSection + 1);
                        } else {
                            const nextSegment = getNextSegment();
                            if (nextSegment) {
                                setActiveSegment(nextSegment);
                                setCurrentSection(1);
                            }
                        }
                    }}
                    onPrevious={() => {
                        if (currentSection > 1) {
                            setCurrentSection(currentSection - 1);
                        } else {
                            const prevSegment = getPreviousSegment();
                            if (prevSegment) {
                                setActiveSegment(prevSegment);
                                setCurrentSection(2);
                            }
                        }
                    }}
                />;
            case 'others':
                return <div>Others segment coming soon</div>;
            default:
                return null;
        }
    };

    const getNextSegment = () => {
        const segments = formData.customerSegments || [];
        const currentIndex = segments.indexOf(activeSegment);
        return segments[currentIndex + 1];
    };

    const getPreviousSegment = () => {
        const segments = formData.customerSegments || [];
        const currentIndex = segments.indexOf(activeSegment);
        return segments[currentIndex - 1];
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

    const segments = (formData.customerSegments || []).filter((item): item is string => typeof item === 'string');

    return (
        <div>
            <TabTitle title="Value Proposition" />

            <div className="grid grid-cols-4">
                <div className="border-r border-gray-300 pt-10">
                    <div className="w-[90%] mx-auto">
                        <div className="space-y-6">
                            <div className="p-4">
                                {segments.map((segment) => (
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
                                            <svg className={`w-5 h-5 ${activeSegment === segment ? 'text-amber-700' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        {getSegmentLabel(segment)}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="text-center">
                            <Button variant="default" onClick={handleSaveForLater} className="text-sm uppercase mt-24">
                                Save & Continue Later
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="col-span-2 pb-10 bg-gray-50">
                    {renderSegment()}
                </div>

                <div>
                    <img src={Sideimg} alt="sideimg" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    );
}