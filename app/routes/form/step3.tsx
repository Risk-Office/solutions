import TabTitle from "~/components/form/tabtitle";
import { Button } from "~/components/ui/button";
import { useState } from "react";
import { CustomCheckbox } from "~/components/form/customcheckbox";
import { useNavigate } from "react-router";
import { useFormStore } from "~/store/useForm";
import { FormNavigation } from "~/components/form/FormNavigation";
import Sideimg from '~/assets/png/forms/form1.png';

export default function Step3() {
    const { formData, updateFormData, setCurrentStep } = useFormStore();
    const navigate = useNavigate();
    const [currentSection, setCurrentSection] = useState(1);

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

    const handleCostEfficiencyChange = (selected: string[]) => {
        updateFormData({
            valueProposition: {
                ...formData.valueProposition,
                costEfficiency: selected
            }
        });
    };

    const handleQualityChange = (selected: string[]) => {
        updateFormData({
            valueProposition: {
                ...formData.valueProposition,
                quality: selected
            }
        });
    };

    const handleConvenienceChange = (selected: string[]) => {
        updateFormData({
            valueProposition: {
                ...formData.valueProposition,
                convenience: selected
            }
        });
    };

    const handleCustomizationChange = (selected: string[]) => {
        updateFormData({
            valueProposition: {
                ...formData.valueProposition,
                customization: selected
            }
        });
    };

    const handleRiskReductionChange = (selected: string[]) => {
        updateFormData({
            valueProposition: {
                ...formData.valueProposition,
                riskReduction: selected
            }
        });
    };

    const handleBrandChange = (selected: string[]) => {
        updateFormData({
            valueProposition: {
                ...formData.valueProposition,
                brand: selected
            }
        });
    };

    const handleFinancialPainChange = (selected: string[]) => {
        updateFormData({
            painPoints: {
                ...formData.painPoints,
                financial: selected
            }
        });
    };

    const handleOperationalPainChange = (selected: string[]) => {
        updateFormData({
            painPoints: {
                ...formData.painPoints,
                operational: selected
            }
        });
    };

    const handleSupportPainChange = (selected: string[]) => {
        updateFormData({
            painPoints: {
                ...formData.painPoints,
                support: selected
            }
        });
    };

    const handleProductPainChange = (selected: string[]) => {
        updateFormData({
            painPoints: {
                ...formData.painPoints,
                product: selected
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
                // Add step3 data when implemented
            },
            currentStep: formData.currentStep
        });
    };

    return (
        <div>
            <TabTitle title="Value Proposition" />

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
                            <span className="text-sm text-gray-500">{currentSection}/2</span>
                        </div>

                        <div className="space-y-8">
                            <div>
                               

                                <div className="space-y-6">
                                    {currentSection === 1 && (
                                        <>
                                            <h3 className="text-lg font-medium mb-4">
                                                What unique value does your business offer to resolve the pain points of your target customers?
                                            </h3>
                                            <div>
                                                <h4 className="text-md font-medium mb-3">Cost Efficiency & Savings (Select all that apply)</h4>
                                                <CustomCheckbox
                                                    options={costEfficiencyOptions}
                                                    selected={formData.valueProposition?.costEfficiency || []}
                                                    onChange={handleCostEfficiencyChange}
                                                />
                                            </div>

                                            <div>
                                                <h4 className="text-md font-medium mb-3">Quality and Performance (Select all that apply)</h4>
                                                <CustomCheckbox
                                                    options={qualityOptions}
                                                    selected={formData.valueProposition?.quality || []}
                                                    onChange={handleQualityChange}
                                                />
                                            </div>

                                            <div>
                                                <h4 className="text-md font-medium mb-3">Convenience and Accessibility (Select all that apply)</h4>
                                                <CustomCheckbox
                                                    options={convenienceOptions}
                                                    selected={formData.valueProposition?.convenience || []}
                                                    onChange={handleConvenienceChange}
                                                />
                                            </div>

                                            <div>
                                                <h4 className="text-md font-medium mb-3">Customization & Personalization (Select all that apply)</h4>
                                                <CustomCheckbox
                                                    options={customizationOptions}
                                                    selected={formData.valueProposition?.customization || []}
                                                    onChange={handleCustomizationChange}
                                                />
                                            </div>

                                            <div>
                                                <h4 className="text-md font-medium mb-3">Risk Reduction & Security (Select all that apply)</h4>
                                                <CustomCheckbox
                                                    options={riskReductionOptions}
                                                    selected={formData.valueProposition?.riskReduction || []}
                                                    onChange={handleRiskReductionChange}
                                                />
                                            </div>

                                            <div>
                                                <h4 className="text-md font-medium mb-3">Brand Value and Reputation (Select all that apply)</h4>
                                                <CustomCheckbox
                                                    options={brandOptions}
                                                    selected={formData.valueProposition?.brand || []}
                                                    onChange={handleBrandChange}
                                                />
                                            </div>
                                        </>
                                    )}

                                    {currentSection === 2 && (
                                        <>
                                            <div>
                                                <h3 className="text-lg font-medium mb-4">
                                                    What are your customers' main pain points?
                                                </h3>

                                                <div className="space-y-6">
                                                    <div>
                                                        <h4 className="text-md font-medium mb-3">Financial Pain Points (Select all that apply)</h4>
                                                        <CustomCheckbox
                                                            options={financialPainPoints}
                                                            selected={formData.painPoints?.financial || []}
                                                            onChange={handleFinancialPainChange}
                                                        />
                                                    </div>

                                                    <div>
                                                        <h4 className="text-md font-medium mb-3">Process & Operational Pain Points (Select all that apply)</h4>
                                                        <CustomCheckbox
                                                            options={operationalPainPoints}
                                                            selected={formData.painPoints?.operational || []}
                                                            onChange={handleOperationalPainChange}
                                                        />
                                                    </div>

                                                    <div>
                                                        <h4 className="text-md font-medium mb-3">Support & Service Pain Points (Select all that apply)</h4>
                                                        <CustomCheckbox
                                                            options={supportPainPoints}
                                                            selected={formData.painPoints?.support || []}
                                                            onChange={handleSupportPainChange}
                                                        />
                                                    </div>

                                                    <div>
                                                        <h4 className="text-md font-medium mb-3">Product & Performance Pain Points (Select all that apply)</h4>
                                                        <CustomCheckbox
                                                            options={productPainPoints}
                                                            selected={formData.painPoints?.product || []}
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
                            <FormNavigation
                                currentStep={3}
                                currentSection={currentSection}
                                totalSections={2}
                                onNext={() => {
                                    if (currentSection < 2) {
                                        setCurrentSection(currentSection + 1);
                                    }
                                }}
                                onPrevious={() => {
                                    if (currentSection > 1) {
                                        setCurrentSection(currentSection - 1);
                                    }
                                }}
                                nextDisabled={currentSection === 1 ? 
                                    !formData.valueProposition?.costEfficiency?.length ||
                                    !formData.valueProposition?.quality?.length ||
                                    !formData.valueProposition?.convenience?.length ||
                                    !formData.valueProposition?.customization?.length ||
                                    !formData.valueProposition?.riskReduction?.length ||
                                    !formData.valueProposition?.brand?.length 
                                    : currentSection === 2 ?
                                    !formData.painPoints?.financial?.length ||
                                    !formData.painPoints?.operational?.length ||
                                    !formData.painPoints?.support?.length ||
                                    !formData.painPoints?.product?.length
                                    : false}
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