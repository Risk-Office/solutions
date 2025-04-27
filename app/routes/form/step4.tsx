import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TabTitle from "~/components/form/tabtitle";
import { Button } from "~/components/ui/button";
import { useFormStore } from "~/store/useForm";
import { FormNavigation } from "~/components/form/FormNavigation";
import { CustomCheckbox } from "~/components/form/customcheckbox";
import Sideimg from '~/assets/png/forms/form3.png';
import { ChevronRight, CircleCheckBig } from "lucide-react";

export default function Step4() {
    const { formData, updateFormData, setCurrentStep } = useFormStore();
    const navigate = useNavigate();
    const [currentSection, setCurrentSection] = useState(1);
    const [activeSegment, setActiveSegment] = useState<string>("");
    const [isInitialized, setIsInitialized] = useState(false);

    const crmOptions = [
        { id: 'crm_software', label: 'Use of software (like Salesforce, HubSpot, or Zoho to track interactions, preferences, and history.)' },
        { id: 'automated_followup', label: 'Automating follow-ups and personalizing customer interactions' }
    ];

    const customerServiceOptions = [
        { id: 'multichannel_support', label: 'Providing multi-channel support (phone, email, chat social media)' },
        { id: 'quick_response', label: 'Ensuring quick response times and resolving issues efficiently' },
        { id: 'self_service', label: 'Offering self-service options (FAQs and knowledge bases.)' }
    ];

    const personalizedCommOptions = [
        { id: 'personalized_emails', label: 'Sending personalized emails, recommendations, and promotions based on customer preferences.' },
        { id: 'ai_analytics', label: 'Using AI and data analytics to predict needs and offer relevant solutions' }
    ];

    const loyaltyOptions = [
        { id: 'discounts_rewards', label: 'Offering discounts, rewards, and exclusive deals to repeat customers' },
        { id: 'membership_programs', label: 'Creating membership programs that add value (e.g., Amazon Prime)' }
    ];

    const feedbackOptions = [
        { id: 'surveys_reviews', label: 'Conducting surveys and reviews to gather insights.' },
        { id: 'feedback_enhancement', label: 'Using feedback to enhance products and services.' }
    ];

    const relationshipBuildingOptions = [
        { id: 'education', label: 'Educating customers through webinars, blogs, and newsletters' },
        { id: 'value_beyond_sales', label: 'Providing value beyond sales (such as expert advice and industry insights.)' }
    ];

    const socialMediaOptions = [
        { id: 'platform_engagement', label: 'Actively engaging customers through platforms like LinkedIn, Twitter, Facebook, and Instagram.' },
        { id: 'realtime_support', label: 'Addressing complaints and inquiries in real-time.' }
    ];

    const brandingOptions = [
        { id: 'uniform_experience', label: 'Maintaining a uniform tone and experience across all customer touchpoints' },
        { id: 'transparency', label: 'Ensuring transparency in communication and pricing' }
    ];

    const afterSalesOptions = [
        { id: 'followup', label: 'Following up post-purchase to ensure satisfaction' },
        { id: 'onboarding', label: 'Providing onboarding assistance and user guides' }
    ];

    const goToStep5 = () => {
        setCurrentStep(5);
        navigate("/form/step5");
    };

    // Custom navigation handler for next button
    const handleCustomNext = () => {
        if (currentSection < 2) {
            setCurrentSection(currentSection + 1);
        } else {
            const nextSegment = getNextSegment();

            if (nextSegment) {
                setActiveSegment(nextSegment);
                setCurrentSection(1); // Reset to first section for new segment
            } else {
                setCurrentStep(4);
                navigate("/form/step5");
                return;
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
                setCurrentSection(1); // Go to last section of previous segment
            }
            // If no previous segment, do nothing (stay on first section of first segment)
        }
    };

    // Initialize store data if needed
    useEffect(() => {
        if (!formData.customerRelationsBySegment) {
            updateFormData({
                customerRelationsBySegment: {}
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
                segmentData: formData.segmentData
            },
            step3: {
                valuePropositionBySegment: formData.valuePropositionBySegment
            },
            step4: {
                customerRelationsBySegment: formData.customerRelationsBySegment
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
        const segmentData = formData.customerRelationsBySegment?.[segment];
        if (!segmentData) return false;

        // Check if all required categories have at least one selection
        return (
            segmentData.crm?.length > 0 &&
            segmentData.customerService?.length > 0 &&
            segmentData.personalizedComm?.length > 0 &&
            segmentData.loyalty?.length > 0 &&
            segmentData.feedback?.length > 0 &&
            segmentData.relationshipBuilding?.length > 0 &&
            segmentData.socialMedia?.length > 0 &&
            segmentData.branding?.length > 0 &&
            segmentData.afterSales?.length > 0
        );
    };

    // Handle checkbox change functions for the current active segment
    const handleCRMChange = (selected: string[]) => {
        const currentSegmentData = formData.customerRelationsBySegment?.[activeSegment] || {};
        updateFormData({
            customerRelationsBySegment: {
                ...formData.customerRelationsBySegment,
                [activeSegment]: {
                    ...currentSegmentData,
                    crm: selected
                }
            }
        });
    };

    const handleCustomerServiceChange = (selected: string[]) => {
        const currentSegmentData = formData.customerRelationsBySegment?.[activeSegment] || {};
        updateFormData({
            customerRelationsBySegment: {
                ...formData.customerRelationsBySegment,
                [activeSegment]: {
                    ...currentSegmentData,
                    customerService: selected
                }
            }
        });
    };

    const handlePersonalizedCommChange = (selected: string[]) => {
        const currentSegmentData = formData.customerRelationsBySegment?.[activeSegment] || {};
        updateFormData({
            customerRelationsBySegment: {
                ...formData.customerRelationsBySegment,
                [activeSegment]: {
                    ...currentSegmentData,
                    personalizedComm: selected
                }
            }
        });
    };

    const handleLoyaltyChange = (selected: string[]) => {
        const currentSegmentData = formData.customerRelationsBySegment?.[activeSegment] || {};
        updateFormData({
            customerRelationsBySegment: {
                ...formData.customerRelationsBySegment,
                [activeSegment]: {
                    ...currentSegmentData,
                    loyalty: selected
                }
            }
        });
    };

    const handleFeedbackChange = (selected: string[]) => {
        const currentSegmentData = formData.customerRelationsBySegment?.[activeSegment] || {};
        updateFormData({
            customerRelationsBySegment: {
                ...formData.customerRelationsBySegment,
                [activeSegment]: {
                    ...currentSegmentData,
                    feedback: selected
                }
            }
        });
    };

    const handleRelationshipBuildingChange = (selected: string[]) => {
        const currentSegmentData = formData.customerRelationsBySegment?.[activeSegment] || {};
        updateFormData({
            customerRelationsBySegment: {
                ...formData.customerRelationsBySegment,
                [activeSegment]: {
                    ...currentSegmentData,
                    relationshipBuilding: selected
                }
            }
        });
    };

    const handleSocialMediaChange = (selected: string[]) => {
        const currentSegmentData = formData.customerRelationsBySegment?.[activeSegment] || {};
        updateFormData({
            customerRelationsBySegment: {
                ...formData.customerRelationsBySegment,
                [activeSegment]: {
                    ...currentSegmentData,
                    socialMedia: selected
                }
            }
        });
    };

    const handleBrandingChange = (selected: string[]) => {
        const currentSegmentData = formData.customerRelationsBySegment?.[activeSegment] || {};
        updateFormData({
            customerRelationsBySegment: {
                ...formData.customerRelationsBySegment,
                [activeSegment]: {
                    ...currentSegmentData,
                    branding: selected
                }
            }
        });
    };

    const handleAfterSalesChange = (selected: string[]) => {
        const currentSegmentData = formData.customerRelationsBySegment?.[activeSegment] || {};
        updateFormData({
            customerRelationsBySegment: {
                ...formData.customerRelationsBySegment,
                [activeSegment]: {
                    ...currentSegmentData,
                    afterSales: selected
                }
            }
        });
    };

    // Get current values for the active segment
    const getSegmentValue = (field: string) => {
        const segmentData = formData.customerRelationsBySegment?.[activeSegment];
        if (!segmentData) return [];

        return segmentData[field as keyof typeof segmentData] || [];
    };

    return (
        <div>
            <TabTitle title="Customer Relationship Management" />

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
                                {getSegmentLabel(activeSegment)}: Customer Relationship Management
                            </h3>
                            <span className="text-sm text-gray-500">{currentSection}/1</span>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-lg font-medium mb-4">
                                    How do you maintain relationships with your {getSegmentLabel(activeSegment)} customers?
                                </h3>

                                <div className="space-y-6">
                                    <div>
                                        <h4 className="text-md font-medium mb-3">Customer Relationship Management (CRM) Systems (Select all that apply)</h4>
                                        <CustomCheckbox
                                            options={crmOptions}
                                            selected={getSegmentValue('crm')}
                                            onChange={handleCRMChange}
                                        />
                                    </div>

                                    <div>
                                        <h4 className="text-md font-medium mb-3">Customer Service & Support (Select all that apply)</h4>
                                        <CustomCheckbox
                                            options={customerServiceOptions}
                                            selected={getSegmentValue('customerService')}
                                            onChange={handleCustomerServiceChange}
                                        />
                                    </div>

                                    <div>
                                        <h4 className="text-md font-medium mb-3">Personalized Communication & Engagement (Select all that apply)</h4>
                                        <CustomCheckbox
                                            options={personalizedCommOptions}
                                            selected={getSegmentValue('personalizedComm')}
                                            onChange={handlePersonalizedCommChange}
                                        />
                                    </div>

                                    <div>
                                        <h4 className="text-md font-medium mb-3">Loyalty Programs & Incentives (Select all that apply)</h4>
                                        <CustomCheckbox
                                            options={loyaltyOptions}
                                            selected={getSegmentValue('loyalty')}
                                            onChange={handleLoyaltyChange}
                                        />
                                    </div>

                                    <div>
                                        <h4 className="text-md font-medium mb-3">Regular Customer Feedback & Improvement (Select all that apply)</h4>
                                        <CustomCheckbox
                                            options={feedbackOptions}
                                            selected={getSegmentValue('feedback')}
                                            onChange={handleFeedbackChange}
                                        />
                                    </div>

                                    <div>
                                        <h4 className="text-md font-medium mb-3">Proactive Relationship Building (Select all that apply)</h4>
                                        <CustomCheckbox
                                            options={relationshipBuildingOptions}
                                            selected={getSegmentValue('relationshipBuilding')}
                                            onChange={handleRelationshipBuildingChange}
                                        />
                                    </div>

                                    <div>
                                        <h4 className="text-md font-medium mb-3">Social Media Engagement (Select all that apply)</h4>
                                        <CustomCheckbox
                                            options={socialMediaOptions}
                                            selected={getSegmentValue('socialMedia')}
                                            onChange={handleSocialMediaChange}
                                        />
                                    </div>

                                    <div>
                                        <h4 className="text-md font-medium mb-3">Consistent Branding & Messaging (Select all that apply)</h4>
                                        <CustomCheckbox
                                            options={brandingOptions}
                                            selected={getSegmentValue('branding')}
                                            onChange={handleBrandingChange}
                                        />
                                    </div>

                                    <div>
                                        <h4 className="text-md font-medium mb-3">After-Sales Support & Relationship Nurturing (Select all that apply)</h4>
                                        <CustomCheckbox
                                            options={afterSalesOptions}
                                            selected={getSegmentValue('afterSales')}
                                            onChange={handleAfterSalesChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-24">
                            {/* Custom navigation buttons */}
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
                                    {getNextSegment() ? 'Next' : 'Continue'}
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