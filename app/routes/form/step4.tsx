import TabTitle from "~/components/form/tabtitle";
import { Button } from "~/components/ui/button";
import { useState } from "react";
import { CustomCheckbox } from "~/components/form/customcheckbox";
import { useNavigate } from "react-router";
import { useFormStore } from "~/store/useForm";
import { FormNavigation } from "~/components/form/FormNavigation";
import Sideimg from '~/assets/png/forms/form3.png';

export default function Step4() {
    const { formData, updateFormData } = useFormStore();
    const navigate = useNavigate();
    const [currentSection, setCurrentSection] = useState(1);

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

    const handleCRMChange = (selected: string[]) => {
        updateFormData({
            customerRelations: {
                ...formData.customerRelations,
                crm: selected
            }
        });
    };

    const handleCustomerServiceChange = (selected: string[]) => {
        updateFormData({
            customerRelations: {
                ...formData.customerRelations,
                customerService: selected
            }
        });
    };

    const handlePersonalizedCommChange = (selected: string[]) => {
        updateFormData({
            customerRelations: {
                ...formData.customerRelations,
                personalizedComm: selected
            }
        });
    };

    const handleLoyaltyChange = (selected: string[]) => {
        updateFormData({
            customerRelations: {
                ...formData.customerRelations,
                loyalty: selected
            }
        });
    };

    const handleFeedbackChange = (selected: string[]) => {
        updateFormData({
            customerRelations: {
                ...formData.customerRelations,
                feedback: selected
            }
        });
    };

    const handleRelationshipBuildingChange = (selected: string[]) => {
        updateFormData({
            customerRelations: {
                ...formData.customerRelations,
                relationshipBuilding: selected
            }
        });
    };

    const handleSocialMediaChange = (selected: string[]) => {
        updateFormData({
            customerRelations: {
                ...formData.customerRelations,
                socialMedia: selected
            }
        });
    };

    const handleBrandingChange = (selected: string[]) => {
        updateFormData({
            customerRelations: {
                ...formData.customerRelations,
                branding: selected
            }
        });
    };

    const handleAfterSalesChange = (selected: string[]) => {
        updateFormData({
            customerRelations: {
                ...formData.customerRelations,
                afterSales: selected
            }
        });
    };

    const handleSaveForLater = () => {
        console.log('Form Data:', {
            step1: {
                customerSegments: formData.customerSegments
            },
            step2: {
                valueProposition: formData.valueProposition
            },
            step3: {
                painPoints: formData.painPoints
            },
            step4: {
                customerRelations: formData.customerRelations
            },
            currentStep: formData.currentStep
        });
    };

    return (
        <div>
            <TabTitle title="Customer Relationship Management" />

            <div className="grid grid-cols-4">
                <div className="border-r border-gray-300 pt-10">
                    <div className="w-[90%] mx-auto">
                        <div className="space-y-6">
                            <div className="p-4">
                                <CustomCheckbox
                                    options={[
                                        { id: 'b2b', label: 'B2B (Business-to-Business)' },
                                        { id: 'government', label: 'Government (B2G)' },
                                        { id: 'b2c', label: 'B2C (Business-to-Consumer)' },
                                        { id: 'non-profit', label: 'Non-profit Organizations' }
                                    ]}
                                    selected={formData.customerSegments || []}
                                    onChange={() => {}}
                                />
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
                    <div className="p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-lg font-medium">Questions</h3>
                            <span className="text-sm text-gray-500">{currentSection}/1</span>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-lg font-medium mb-4">
                                    How do you maintain relationships with your customers?
                                </h3>

                                <div className="space-y-6">
                                    <div>
                                        <h4 className="text-md font-medium mb-3">Customer Relationship Management (CRM) Systems (Select all that apply)</h4>
                                        <CustomCheckbox
                                            options={crmOptions}
                                            selected={formData.customerRelations?.crm || []}
                                            onChange={handleCRMChange}
                                        />
                                    </div>

                                    <div>
                                        <h4 className="text-md font-medium mb-3">Customer Service & Support (Select all that apply)</h4>
                                        <CustomCheckbox
                                            options={customerServiceOptions}
                                            selected={formData.customerRelations?.customerService || []}
                                            onChange={handleCustomerServiceChange}
                                        />
                                    </div>

                                    <div>
                                        <h4 className="text-md font-medium mb-3">Personalized Communication & Engagement (Select all that apply)</h4>
                                        <CustomCheckbox
                                            options={personalizedCommOptions}
                                            selected={formData.customerRelations?.personalizedComm || []}
                                            onChange={handlePersonalizedCommChange}
                                        />
                                    </div>

                                    <div>
                                        <h4 className="text-md font-medium mb-3">Loyalty Programs & Incentives (Select all that apply)</h4>
                                        <CustomCheckbox
                                            options={loyaltyOptions}
                                            selected={formData.customerRelations?.loyalty || []}
                                            onChange={handleLoyaltyChange}
                                        />
                                    </div>

                                    <div>
                                        <h4 className="text-md font-medium mb-3">Regular Customer Feedback & Improvement (Select all that apply)</h4>
                                        <CustomCheckbox
                                            options={feedbackOptions}
                                            selected={formData.customerRelations?.feedback || []}
                                            onChange={handleFeedbackChange}
                                        />
                                    </div>

                                    <div>
                                        <h4 className="text-md font-medium mb-3">Proactive Relationship Building (Select all that apply)</h4>
                                        <CustomCheckbox
                                            options={relationshipBuildingOptions}
                                            selected={formData.customerRelations?.relationshipBuilding || []}
                                            onChange={handleRelationshipBuildingChange}
                                        />
                                    </div>

                                    <div>
                                        <h4 className="text-md font-medium mb-3">Social Media Engagement (Select all that apply)</h4>
                                        <CustomCheckbox
                                            options={socialMediaOptions}
                                            selected={formData.customerRelations?.socialMedia || []}
                                            onChange={handleSocialMediaChange}
                                        />
                                    </div>

                                    <div>
                                        <h4 className="text-md font-medium mb-3">Consistent Branding & Messaging (Select all that apply)</h4>
                                        <CustomCheckbox
                                            options={brandingOptions}
                                            selected={formData.customerRelations?.branding || []}
                                            onChange={handleBrandingChange}
                                        />
                                    </div>

                                    <div>
                                        <h4 className="text-md font-medium mb-3">After-Sales Support & Relationship Nurturing (Select all that apply)</h4>
                                        <CustomCheckbox
                                            options={afterSalesOptions}
                                            selected={formData.customerRelations?.afterSales || []}
                                            onChange={handleAfterSalesChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-24">
                            <FormNavigation
                                currentStep={4}
                                currentSection={currentSection}
                                totalSections={1}
                                nextDisabled={
                                    !formData.customerRelations?.crm?.length ||
                                    !formData.customerRelations?.customerService?.length ||
                                    !formData.customerRelations?.personalizedComm?.length ||
                                    !formData.customerRelations?.loyalty?.length ||
                                    !formData.customerRelations?.feedback?.length ||
                                    !formData.customerRelations?.relationshipBuilding?.length ||
                                    !formData.customerRelations?.socialMedia?.length ||
                                    !formData.customerRelations?.branding?.length ||
                                    !formData.customerRelations?.afterSales?.length
                                }
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <img src={Sideimg} alt="sideimg" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    );
} 