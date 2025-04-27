import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TabTitle from "~/components/form/tabtitle";
import { Button } from "~/components/ui/button";
import { useFormStore } from "~/store/useForm";
import { FormNavigation } from "~/components/form/FormNavigation";
import { CustomCheckbox } from "~/components/form/customcheckbox";
import Sideimg from '~/assets/png/forms/form1.png';
import { ChevronRight, CircleCheckBig } from "lucide-react";

export default function Step3() {
    const { formData, updateFormData, setCurrentStep } = useFormStore();
    const navigate = useNavigate();
    const [currentSection, setCurrentSection] = useState(1);
    const [activeSegment, setActiveSegment] = useState<string>("");
    const [isInitialized, setIsInitialized] = useState(false);

    const costEfficiencyOptions = [
        { id: 'lower_price', label: 'Lower price than competitors' },
        { id: 'reduced_costs', label: 'Reduced operational costs for customers' },
        { id: 'subscription', label: 'Subscription or bundling benefits' },
        { id: 'automation', label: 'Automation and process optimization to save time/money' }
    ];

    const qualityOptions = [
        { id: 'superior_quality', label: 'Superior product/service quality' },
        { id: 'higher_durability', label: 'Higher durability' },
        { id: 'industry_leading', label: 'Industry leading technology or innovation' },
        { id: 'precision', label: 'Precision and reliability in outcomes' }
    ];

    const convenienceOptions = [
        { id: 'ease_of_use', label: 'Ease of use and intuitive design' },
        { id: 'omnichannel', label: 'Omnichannel availability (online, in-store, mobile)' },
        { id: 'faster_delivery', label: 'Faster delivery, setup or support' },
        { id: 'simplified_process', label: 'Simplified purchasing or onboarding process' }
    ];

    const customizationOptions = [
        { id: 'tailored_solutions', label: 'Tailored solutions for unique customer needs' },
        { id: 'modular', label: 'Modular or adaptable product offerings' },
        { id: 'ai_driven', label: 'AI-driven or data-informed recommendations' },
        { id: 'scalability', label: 'Scalability based on business size or needs' }
    ];

    const riskReductionOptions = [
        { id: 'compliance', label: 'Compliance with regulations and standards' },
        { id: 'safety', label: 'Enhanced safety and protection' },
        { id: 'guarantees', label: 'Guarantees, warranties, and insurance-backed products' },
        { id: 'continuity', label: 'Business continuity and resilience options' }
    ];

    const brandOptions = [
        { id: 'credibility', label: 'Strong brand credibility and industry leadership' },
        { id: 'ethical', label: 'Ethical and socially responsible business practices' },
        { id: 'transparent', label: 'Transparent and trustworthy customer engagement' },
        { id: 'testimonials', label: 'Positive customer testimonials and referrals' }
    ];

    const financialPainPoints = [
        { id: 'high_costs', label: 'High costs of products/services' },
        { id: 'hidden_fees', label: 'Hidden fees or unclear pricing' },
        { id: 'budget_constraints', label: 'Budget constraints or affordability issues' },
        { id: 'poor_roi', label: 'Poor return on investment (ROI)' }
    ];

    const operationalPainPoints = [
        { id: 'inefficient_workflows', label: 'Inefficient or slow workflows' },
        { id: 'difficulty_info', label: 'Difficulty accessing necessary information' },
        { id: 'complex_processes', label: 'Complex purchasing or onboarding processes' },
        { id: 'lack_automation', label: 'Lack of automation or excessive manual work' }
    ];

    const supportPainPoints = [
        { id: 'inadequate_self_service', label: 'Inadequate self-service options' },
        { id: 'difficulty_support', label: 'Difficulty reaching support teams' },
        { id: 'poor_service', label: 'Poor customer service or lack of responsiveness' },
        { id: 'unclear_communication', label: 'Unclear or misleading communication' }
    ];

    const productPainPoints = [
        { id: 'poor_integration', label: 'Poor integration with existing tools' },
        { id: 'security_concerns', label: 'Security and compliance concerns' },
        { id: 'lack_features', label: 'Lack of essential features or functionalities' },
        { id: 'unreliable_products', label: 'Unreliable or low-quality products/services' }
    ];

    const goToStep4 = () => {
        setCurrentStep(4);
        navigate("/form/step4");
        return;
    };

    // Custom navigation handler for next button
    const handleCustomNext = () => {
        if (currentSection < 2) {
            // If we're not on the final section, just move to the next section
            setCurrentSection(currentSection + 1);
        } else {
            // If we're on the final section, determine if we should move to the next segment
            const nextSegment = getNextSegment();

            if (nextSegment) {
                setActiveSegment(nextSegment);
                setCurrentSection(1); // Reset to first section for new segment
            } else {
                // If no next segment, go to step 4
                setCurrentStep(4);
                navigate("/form/step4");
                return; // Add this return statement to prevent any further state updates
            }
        }
    };


    // Custom navigation handler for previous button
    const handleCustomPrevious = () => {
        if (currentSection > 1) {
            // If we're not on the first section, just move to the previous section
            setCurrentSection(currentSection - 1);
        } else {
            // If we're on the first section, determine if we should move to the previous segment
            const prevSegment = getPreviousSegment();
            if (prevSegment) {
                setActiveSegment(prevSegment);
                setCurrentSection(2); // Go to last section of previous segment
            }
            // If no previous segment, do nothing (stay on first section of first segment)
        }
    };

    // Initialize store data if needed
    useEffect(() => {
        if (!formData.valuePropositionBySegment) {
            updateFormData({
                valuePropositionBySegment: {}
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
            navigate('/form/');
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
                segmentData: formData.segmentData
            },
            step3: {
                valuePropositionBySegment: formData.valuePropositionBySegment
            },
            currentStep: formData.currentStep
        });
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
        switch (segment) {
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
        const segmentData = formData.valuePropositionBySegment?.[segment];
        if (!segmentData) return false;

        // Check if both sections have required data
        const hasValueProposition =
            segmentData.costEfficiency?.length > 0 &&
            segmentData.quality?.length > 0 &&
            segmentData.convenience?.length > 0 &&
            segmentData.customization?.length > 0 &&
            segmentData.riskReduction?.length > 0 &&
            segmentData.brand?.length > 0;

        const hasPainPoints =
            segmentData.painPoints?.financial?.length > 0 &&
            segmentData.painPoints?.operational?.length > 0 &&
            segmentData.painPoints?.support?.length > 0 &&
            segmentData.painPoints?.product?.length > 0;

        return hasValueProposition && hasPainPoints;
    };

    // Handle checkbox change functions for the current active segment
    const handleCostEfficiencyChange = (selected: string[]) => {
        const currentSegmentData = formData.valuePropositionBySegment?.[activeSegment] || {};
        updateFormData({
            valuePropositionBySegment: {
                ...formData.valuePropositionBySegment,
                [activeSegment]: {
                    ...currentSegmentData,
                    costEfficiency: selected
                }
            }
        });
    };

    const handleQualityChange = (selected: string[]) => {
        const currentSegmentData = formData.valuePropositionBySegment?.[activeSegment] || {};
        updateFormData({
            valuePropositionBySegment: {
                ...formData.valuePropositionBySegment,
                [activeSegment]: {
                    ...currentSegmentData,
                    quality: selected
                }
            }
        });
    };

    const handleConvenienceChange = (selected: string[]) => {
        const currentSegmentData = formData.valuePropositionBySegment?.[activeSegment] || {};
        updateFormData({
            valuePropositionBySegment: {
                ...formData.valuePropositionBySegment,
                [activeSegment]: {
                    ...currentSegmentData,
                    convenience: selected
                }
            }
        });
    };

    const handleCustomizationChange = (selected: string[]) => {
        const currentSegmentData = formData.valuePropositionBySegment?.[activeSegment] || {};
        updateFormData({
            valuePropositionBySegment: {
                ...formData.valuePropositionBySegment,
                [activeSegment]: {
                    ...currentSegmentData,
                    customization: selected
                }
            }
        });
    };

    const handleRiskReductionChange = (selected: string[]) => {
        const currentSegmentData = formData.valuePropositionBySegment?.[activeSegment] || {};
        updateFormData({
            valuePropositionBySegment: {
                ...formData.valuePropositionBySegment,
                [activeSegment]: {
                    ...currentSegmentData,
                    riskReduction: selected
                }
            }
        });
    };

    const handleBrandChange = (selected: string[]) => {
        const currentSegmentData = formData.valuePropositionBySegment?.[activeSegment] || {};
        updateFormData({
            valuePropositionBySegment: {
                ...formData.valuePropositionBySegment,
                [activeSegment]: {
                    ...currentSegmentData,
                    brand: selected
                }
            }
        });
    };

    const handleFinancialPainChange = (selected: string[]) => {
        const currentSegmentData = formData.valuePropositionBySegment?.[activeSegment] || {};
        const currentPainPoints = currentSegmentData.painPoints || {};

        updateFormData({
            valuePropositionBySegment: {
                ...formData.valuePropositionBySegment,
                [activeSegment]: {
                    ...currentSegmentData,
                    painPoints: {
                        ...currentPainPoints,
                        financial: selected
                    }
                }
            }
        });
    };

    const handleOperationalPainChange = (selected: string[]) => {
        const currentSegmentData = formData.valuePropositionBySegment?.[activeSegment] || {};
        const currentPainPoints = currentSegmentData.painPoints || {};

        updateFormData({
            valuePropositionBySegment: {
                ...formData.valuePropositionBySegment,
                [activeSegment]: {
                    ...currentSegmentData,
                    painPoints: {
                        ...currentPainPoints,
                        operational: selected
                    }
                }
            }
        });
    };

    const handleSupportPainChange = (selected: string[]) => {
        const currentSegmentData = formData.valuePropositionBySegment?.[activeSegment] || {};
        const currentPainPoints = currentSegmentData.painPoints || {};

        updateFormData({
            valuePropositionBySegment: {
                ...formData.valuePropositionBySegment,
                [activeSegment]: {
                    ...currentSegmentData,
                    painPoints: {
                        ...currentPainPoints,
                        support: selected
                    }
                }
            }
        });
    };

    const handleProductPainChange = (selected: string[]) => {
        const currentSegmentData = formData.valuePropositionBySegment?.[activeSegment] || {};
        const currentPainPoints = currentSegmentData.painPoints || {};

        updateFormData({
            valuePropositionBySegment: {
                ...formData.valuePropositionBySegment,
                [activeSegment]: {
                    ...currentSegmentData,
                    painPoints: {
                        ...currentPainPoints,
                        product: selected
                    }
                }
            }
        });
    };

    // Get current values for the active segment
    const getSegmentValue = (field: string) => {
        const segmentData = formData.valuePropositionBySegment?.[activeSegment];
        if (!segmentData) return [];

        return segmentData[field as keyof typeof segmentData] || [];
    };

    const getPainPointValue = (field: string) => {
        const segmentData = formData.valuePropositionBySegment?.[activeSegment];
        if (!segmentData || !segmentData.painPoints) return [];

        return segmentData.painPoints[field as keyof typeof segmentData.painPoints] || [];
    };

    return (
        <div>
            <TabTitle title="Value Proposition" />

            <div className="grid grid-cols-4 items-start h-[calc(100vh-160px)]">
                <div className="border-r border-gray-300 pt-10 h-full">
                    <div>
                        <div className="space-y-6">
                            <div>
                                {segments.map((segment) => (
                                    <button
                                        key={segment}
                                        className={`w-full text-left p-3 flex items-center ${activeSegment === segment
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
                    <div className="p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-lg font-medium">
                                {getSegmentLabel(activeSegment)}: Value Proposition
                            </h3>
                            <span className="text-sm text-gray-500">{currentSection}/2</span>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <div className="space-y-6">
                                    {currentSection === 1 && (
                                        <>
                                            <h3 className="text-lg font-medium mb-4">
                                                What unique value does your business offer to resolve the pain points of your {getSegmentLabel(activeSegment)} customers?
                                            </h3>
                                            <div>
                                                <h4 className="text-md font-medium mb-3">Cost Efficiency & Savings (Select all that apply)</h4>
                                                <CustomCheckbox
                                                    options={costEfficiencyOptions}
                                                    selected={getSegmentValue('costEfficiency')}
                                                    onChange={handleCostEfficiencyChange}
                                                />
                                            </div>

                                            <div>
                                                <h4 className="text-md font-medium mb-3">Quality and Performance (Select all that apply)</h4>
                                                <CustomCheckbox
                                                    options={qualityOptions}
                                                    selected={getSegmentValue('quality')}
                                                    onChange={handleQualityChange}
                                                />
                                            </div>

                                            <div>
                                                <h4 className="text-md font-medium mb-3">Convenience and Accessibility (Select all that apply)</h4>
                                                <CustomCheckbox
                                                    options={convenienceOptions}
                                                    selected={getSegmentValue('convenience')}
                                                    onChange={handleConvenienceChange}
                                                />
                                            </div>

                                            <div>
                                                <h4 className="text-md font-medium mb-3">Customization & Personalization (Select all that apply)</h4>
                                                <CustomCheckbox
                                                    options={customizationOptions}
                                                    selected={getSegmentValue('customization')}
                                                    onChange={handleCustomizationChange}
                                                />
                                            </div>

                                            <div>
                                                <h4 className="text-md font-medium mb-3">Risk Reduction & Security (Select all that apply)</h4>
                                                <CustomCheckbox
                                                    options={riskReductionOptions}
                                                    selected={getSegmentValue('riskReduction')}
                                                    onChange={handleRiskReductionChange}
                                                />
                                            </div>

                                            <div>
                                                <h4 className="text-md font-medium mb-3">Brand Value and Reputation (Select all that apply)</h4>
                                                <CustomCheckbox
                                                    options={brandOptions}
                                                    selected={getSegmentValue('brand')}
                                                    onChange={handleBrandChange}
                                                />
                                            </div>
                                        </>
                                    )}

                                    {currentSection === 2 && (
                                        <>
                                            <div>
                                                <h3 className="text-lg font-medium mb-4">
                                                    What are your {getSegmentLabel(activeSegment)} customers' main pain points?
                                                </h3>

                                                <div className="space-y-6">
                                                    <div>
                                                        <h4 className="text-md font-medium mb-3">Financial Pain Points (Select all that apply)</h4>
                                                        <CustomCheckbox
                                                            options={financialPainPoints}
                                                            selected={getPainPointValue('financial')}
                                                            onChange={handleFinancialPainChange}
                                                        />
                                                    </div>

                                                    <div>
                                                        <h4 className="text-md font-medium mb-3">Process & Operational Pain Points (Select all that apply)</h4>
                                                        <CustomCheckbox
                                                            options={operationalPainPoints}
                                                            selected={getPainPointValue('operational')}
                                                            onChange={handleOperationalPainChange}
                                                        />
                                                    </div>

                                                    <div>
                                                        <h4 className="text-md font-medium mb-3">Support & Service Pain Points (Select all that apply)</h4>
                                                        <CustomCheckbox
                                                            options={supportPainPoints}
                                                            selected={getPainPointValue('support')}
                                                            onChange={handleSupportPainChange}
                                                        />
                                                    </div>

                                                    <div>
                                                        <h4 className="text-md font-medium mb-3">Product & Performance Pain Points (Select all that apply)</h4>
                                                        <CustomCheckbox
                                                            options={productPainPoints}
                                                            selected={getPainPointValue('product')}
                                                            onChange={handleProductPainChange}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="mt-24">
                            {/* Custom navigation buttons instead of FormNavigation component */}
                            <div className="flex items-center justify-end space-x-3">
                                <Button
                                    variant="text"
                                    className="text-sm uppercase border border-blue-900"
                                    onClick={handleCustomPrevious}
                                    disabled={currentSection === 1 && !getPreviousSegment()}
                                >
                                    Back
                                </Button>
                                <Button
                                    variant="default"
                                    className="text-sm uppercase"
                                    onClick={handleCustomNext}
                                >
                                    {currentSection < 2
                                        ? 'Continue'
                                        : getNextSegment() ? 'Next' : 'Continue'}
                                </Button>
                            </div> 
                        </div>
                    </div>
                </div>

                <div className='h-full w-full'>
                    <img src={Sideimg} alt="sideimg" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    );
}