import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
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
import { ChevronRight, CircleCheckBig } from "lucide-react";

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

    const goToStep3 = () => {
        setCurrentStep(3);
        navigate("/form/step3");
    };

    const handleNext = () => {
        if (currentSection < 2) {
            setCurrentSection(currentSection + 1);
        } else {
            const nextSegment = getNextSegment();
            if (nextSegment) {
                setActiveSegment(nextSegment);
                setCurrentSection(1);
            } else {
                goToStep3(); // This is where we route to step 3 if we're on the final section of the last segment
            }
        }
    };


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
    }, []);


    // Reset active segment and update when segments change
    useEffect(() => {
        if (!isInitialized) return;

        const segments = formData.customerSegments || [];
        const validSegments = segments.filter((seg): seg is string => typeof seg === 'string');

        if (segments.length !== validSegments.length) {
            updateFormData({ customerSegments: validSegments });
        }

        if (validSegments.length === 0) {
            navigate('/form/step1');
            return;
        }

        if (!validSegments.includes(activeSegment)) {
            setActiveSegment(validSegments[0]);
        }
    }, [formData.customerSegments, activeSegment, isInitialized, navigate, updateFormData]);


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
                    onNext={handleNext}
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
                    onNext={handleNext}
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
                    onNext={handleNext}
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
                    onNext={handleNext}
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
        if (currentIndex === -1 || currentIndex + 1 >= segments.length) return null;
        return segments[currentIndex + 1];
    };

    const getPreviousSegment = () => {
        const segments = formData.customerSegments || [];
        const currentIndex = segments.indexOf(activeSegment);
        if (currentIndex <= 0) return null;
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

    const isSegmentCompleted = (segment: string) => {
        switch(segment) {
            case 'b2b':
                return formData.segmentData?.b2bData?.selectedIndustry || formData.segmentData?.b2bData?.selectedSector;
            case 'b2c':
                return formData.segmentData?.b2cData?.dataTypes?.length > 0;
            case 'government':
                return formData.segmentData?.governmentData?.types?.length > 0;
            case 'non-profit':
                return formData.segmentData?.nonProfitData?.missionFocus?.length > 0;
            default:
                return false;
        }
    };

    return (
        <div>
            <TabTitle title="Customer Segments" />

            <div className="grid grid-cols-4 items-start h-[calc(100vh-160px)]">
                <div className="border-r border-gray-300 pt-10 h-full">
                    <div>
                        <div className="space-y-6">
                            <div>
                                {segments.map((segment) => (
                                    <button
                                        key={segment}
                                        className={`w-full text-left p-3 flex items-center ${
                                            activeSegment === segment
                                                ? 'bg-gray-100'
                                                : ''
                                        }`}
                                        onClick={() => handleSegmentClick(segment)}
                                    >
                                        <div className="mr-3">
                                            <svg className={`w-5 h-5 ${activeSegment === segment ? 'text-amber-700' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                {isSegmentCompleted(segment) ? (
                                                    <CircleCheckBig />
                                                ) : (
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                )}
                                            </svg>
                                        </div>
                                        {getSegmentLabel(segment)}

                                        <ChevronRight className="ml-auto" />
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

                <div className="col-span-2 pb-10 bg-gray-50 h-full overflow-y-scroll">
                    {renderSegment()}
                </div>

                <div className='h-full w-full'>
                    <img src={Sideimg} alt="sideimg" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    );
}
