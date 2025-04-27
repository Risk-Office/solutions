import TabTitle from "~/components/form/tabtitle";
import { Button } from "~/components/ui/button";
import { useState } from "react";
import { CustomCheckbox } from "~/components/form/customcheckbox";
import { useNavigate } from "react-router";
import { useFormStore } from "~/store/useForm";
import { FormNavigation } from "~/components/form/FormNavigation";
import Sideimg from '~/assets/png/forms/form1.png';

export default function Step6() {
    const { formData, updateFormData } = useFormStore();
    const navigate = useNavigate();
    const [currentSection, setCurrentSection] = useState(1);

    const humanResourcesOptions = [
        { id: 'employees', label: 'Employees (Skilled & Unskilled)' },
        { id: 'leadership', label: 'Leadership & Management' },
        { id: 'consultants', label: 'Consultants & Contractors' },
        { id: 'specialized_talent', label: 'Specialized Talent (e.g., IT, Legal, Marketing)' },
        { id: 'customer_support', label: 'Customer Support & Sales Teams' }
    ];

    const physicalResourcesOptions = [
        { id: 'office_space', label: 'Office Space, Warehouses, Retail Stores' },
        { id: 'equipment', label: 'Equipment & Machinery' },
        { id: 'raw_materials', label: 'Raw Materials & Inventory' },
        { id: 'vehicles', label: 'Vehicles & Transportation Assets' },
        { id: 'tech_infrastructure', label: 'Technology Infrastructure' }
    ];

    const financialResourcesOptions = [
        { id: 'capital_investment', label: 'Capital Investment (Equity, Loans, Grants)' },
        { id: 'cash_flow', label: 'Cash Flow & Revenue' },
        { id: 'credit_lines', label: 'Credit & Lines of Credit' },
        { id: 'financial_reserves', label: 'Financial Reserves' },
        { id: 'investor_funding', label: 'Investor Funding (Venture Capital, Angel Investors)' }
    ];

    const intellectualResourcesOptions = [
        { id: 'brand', label: 'Brand & Reputation' },
        { id: 'patents', label: 'Patents, Trademarks, & Copyrights' },
        { id: 'proprietary', label: 'Proprietary Knowledge & Trade Secrets' },
        { id: 'software', label: 'Software & Digital Assets (Websites, Apps)' }
    ];

    const technologicalResourcesOptions = [
        { id: 'it_infrastructure', label: 'IT Infrastructure (Servers, Cloud, Networks)' },
        { id: 'enterprise_software', label: 'Enterprise Software (ERP, CRM, Accounting Tools)' },
        { id: 'cybersecurity', label: 'Cybersecurity & Data Protection Systems' },
        { id: 'ai_automation', label: 'AI & Automation Tools' }
    ];

    const regulatoryResourcesOptions = [
        { id: 'legal_advisors', label: 'Legal & Compliance Advisors' },
        { id: 'certifications', label: 'Industry Certifications & Licenses' },
        { id: 'regulatory_approvals', label: 'Government & Regulatory Approvals' },
        { id: 'risk_management', label: 'Risk Management & Insurance' }
    ];

    const handleHumanResourcesChange = (selected: string[]) => {
        updateFormData({
            keyResources: {
                ...formData.keyResources,
                humanResources: selected
            }
        });
    };

    const handlePhysicalResourcesChange = (selected: string[]) => {
        updateFormData({
            keyResources: {
                ...formData.keyResources,
                physicalResources: selected
            }
        });
    };

    const handleFinancialResourcesChange = (selected: string[]) => {
        updateFormData({
            keyResources: {
                ...formData.keyResources,
                financialResources: selected
            }
        });
    };

    const handleIntellectualResourcesChange = (selected: string[]) => {
        updateFormData({
            keyResources: {
                ...formData.keyResources,
                intellectualResources: selected
            }
        });
    };

    const handleTechnologicalResourcesChange = (selected: string[]) => {
        updateFormData({
            keyResources: {
                ...formData.keyResources,
                technologicalResources: selected
            }
        });
    };

    const handleRegulatoryResourcesChange = (selected: string[]) => {
        updateFormData({
            keyResources: {
                ...formData.keyResources,
                regulatoryResources: selected
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
            step5: {
                customerChannels: formData.customerChannels
            },
            step6: {
                keyResources: formData.keyResources
            },
            currentStep: formData.currentStep
        });
    };

    return (
        <div>
            <TabTitle title="Key Resources" />

            <div className="grid grid-cols-4 items-start h-[calc(100vh-160px)]">
                <div className="border-r border-gray-300 pt-10 h-full">
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

                <div className="col-span-2 pb-10 bg-gray-50 h-full overflow-y-scroll">
                    <div className="p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-lg font-medium">Questions</h3>
                            <span className="text-sm text-gray-500">{currentSection}/1</span>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-lg font-medium mb-4">
                                    Upon what critical resources does your business depend?
                                </h3>

                                <div className="space-y-6">
                                    <div>
                                        <h4 className="text-md font-medium mb-3">Human Resources (People) (Select all that apply)</h4>
                                        <CustomCheckbox
                                            options={humanResourcesOptions}
                                            selected={formData.keyResources?.humanResources || []}
                                            onChange={handleHumanResourcesChange}
                                        />
                                    </div>

                                    <div>
                                        <h4 className="text-md font-medium mb-3">Physical Resources (Select all that apply)</h4>
                                        <CustomCheckbox
                                            options={physicalResourcesOptions}
                                            selected={formData.keyResources?.physicalResources || []}
                                            onChange={handlePhysicalResourcesChange}
                                        />
                                    </div>

                                    <div>
                                        <h4 className="text-md font-medium mb-3">Financial Resources (Select all that apply)</h4>
                                        <CustomCheckbox
                                            options={financialResourcesOptions}
                                            selected={formData.keyResources?.financialResources || []}
                                            onChange={handleFinancialResourcesChange}
                                        />
                                    </div>

                                    <div>
                                        <h4 className="text-md font-medium mb-3">Intellectual & Intangible Resources (Select all that apply)</h4>
                                        <CustomCheckbox
                                            options={intellectualResourcesOptions}
                                            selected={formData.keyResources?.intellectualResources || []}
                                            onChange={handleIntellectualResourcesChange}
                                        />
                                    </div>

                                    <div>
                                        <h4 className="text-md font-medium mb-3">Technological Resources (Select all that apply)</h4>
                                        <CustomCheckbox
                                            options={technologicalResourcesOptions}
                                            selected={formData.keyResources?.technologicalResources || []}
                                            onChange={handleTechnologicalResourcesChange}
                                        />
                                    </div>

                                    <div>
                                        <h4 className="text-md font-medium mb-3">Regulatory & Compliance Resources (Select all that apply)</h4>
                                        <CustomCheckbox
                                            options={regulatoryResourcesOptions}
                                            selected={formData.keyResources?.regulatoryResources || []}
                                            onChange={handleRegulatoryResourcesChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-24">
                            <FormNavigation
                                currentStep={6}
                                currentSection={currentSection}
                                totalSections={1}
                                // nextDisabled={
                                //     !formData.keyResources?.humanResources?.length ||
                                //     !formData.keyResources?.physicalResources?.length ||
                                //     !formData.keyResources?.financialResources?.length ||
                                //     !formData.keyResources?.intellectualResources?.length ||
                                //     !formData.keyResources?.technologicalResources?.length ||
                                //     !formData.keyResources?.regulatoryResources?.length
                                // }
                            />
                        </div>
                    </div>
                </div>

                <div className="w-full h-full">
                    <img src={Sideimg} alt="sideimg" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    );
} 