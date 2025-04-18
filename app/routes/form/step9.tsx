import TabTitle from "~/components/form/tabtitle";
import { Button } from "~/components/ui/button";
import { useState } from "react";
import { CustomCheckbox } from "~/components/form/customcheckbox";
import { useNavigate } from "react-router";
import { useFormStore } from "~/store/useForm";
import { FormNavigation } from "~/components/form/FormNavigation";
import Sideimg from '~/assets/png/forms/form2.png';

export default function Step9() {
    const { formData, updateFormData } = useFormStore();
    const navigate = useNavigate();
    const [currentSection, setCurrentSection] = useState(1);

    const fixedCostOptions = [
        { id: 'rent_lease', label: 'Rent or Lease — Office, warehouse, or retail space' },
        { id: 'salaries', label: 'Salaries — Permanent staff and executives' },
        { id: 'insurance', label: 'Insurance — General liability, health, workers\' comp, etc.' },
        { id: 'depreciation', label: 'Depreciation & Amortization' },
        { id: 'software_licenses', label: 'Software & Licenses — Subscription-based tools like CRM, ERP, and security software' }
    ];

    const variableCostOptions = [
        { id: 'raw_materials', label: 'Raw Materials & Inventory — Inputs for production.' },
        { id: 'hourly_wages', label: 'Hourly Wages & Contractors — Employees paid based on output or project completion' },
        { id: 'utilities', label: 'Utilities & Energy Consumption — Electricity, water, gas, etc.' },
        { id: 'sales_commissions', label: 'Sales Commissions — Paid to sales teams or partners based on revenue generated' },
        { id: 'shipping_logistics', label: 'Shipping & Logistics — Costs for transportation, warehousing, and delivery' }
    ];

    const semiVariableCostOptions = [
        { id: 'marketing', label: 'Marketing & Advertising — Can be budgeted but adjusted based on performance.' },
        { id: 'technology', label: 'Technology Infrastructure — Cloud services, cybersecurity, and IT maintenance.' },
        { id: 'equipment', label: 'Equipment Maintenance — Regular servicing of tools and machinery' }
    ];

    const financingCostOptions = [
        { id: 'loan_repayments', label: 'Loan Repayments — Business loans, lines of credit.' },
        { id: 'interest', label: 'Interest Payments — Costs of borrowing' },
        { id: 'dividends', label: 'Dividends — If applicable, payments to shareholders.' }
    ];

    const complianceCostOptions = [
        { id: 'taxes', label: 'Taxes — Corporate, payroll, sales tax' },
        { id: 'legal_fees', label: 'Legal & Professional Fees — Attorneys, accountants, compliance audits' },
        { id: 'permits', label: 'Industry-Specific Permits & Licenses— Regulatory requirements for operation.' }
    ];

    const researchAndDevelopmentOptions = [
        { id: 'product_development', label: 'Product Development — Prototyping, testing, and refining.' },
        { id: 'innovation', label: 'Innovation Investments — New tech, processes, or business model improvements.' }
    ];

    const customerAcquisitionOptions = [
        { id: 'customer_support', label: 'Customer Support & Service — Helpdesk, training, onboarding.' },
        { id: 'loyalty_programs', label: 'Loyalty Programs & Discounts — Incentives to retain customers.' }
    ];

    const handleFixedCostsChange = (selected: string[]) => {
        updateFormData({
            costStructure: {
                ...formData.costStructure,
                fixedCosts: selected
            }
        });
    };

    const handleVariableCostsChange = (selected: string[]) => {
        updateFormData({
            costStructure: {
                ...formData.costStructure,
                variableCosts: selected
            }
        });
    };

    const handleSemiVariableCostsChange = (selected: string[]) => {
        updateFormData({
            costStructure: {
                ...formData.costStructure,
                semiVariableCosts: selected
            }
        });
    };

    const handleFinancingCostsChange = (selected: string[]) => {
        updateFormData({
            costStructure: {
                ...formData.costStructure,
                financingCosts: selected
            }
        });
    };

    const handleComplianceCostsChange = (selected: string[]) => {
        updateFormData({
            costStructure: {
                ...formData.costStructure,
                complianceCosts: selected
            }
        });
    };

    const handleResearchAndDevelopmentChange = (selected: string[]) => {
        updateFormData({
            costStructure: {
                ...formData.costStructure,
                researchAndDevelopment: selected
            }
        });
    };

    const handleCustomerAcquisitionChange = (selected: string[]) => {
        updateFormData({
            costStructure: {
                ...formData.costStructure,
                customerAcquisition: selected
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
            step7: {
                businessActivities: formData.businessActivities
            },
            step8: {
                keyPartnerships: formData.keyPartnerships
            },
            step9: {
                costStructure: formData.costStructure
            },
            currentStep: formData.currentStep
        });
    };

    return (
        <div>
            <TabTitle title="Cost Structure" />

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
                                    What are the major cost drivers in your business?
                                </h3>

                                <div className="space-y-6">
                                    <div>
                                        <h4 className="text-md font-medium mb-3">Fixed Costs (Unchanging regardless of output) (Select all that apply)</h4>
                                        <CustomCheckbox
                                            options={fixedCostOptions}
                                            selected={formData.costStructure?.fixedCosts || []}
                                            onChange={handleFixedCostsChange}
                                        />
                                    </div>

                                    <div>
                                        <h4 className="text-md font-medium mb-3">Variable Costs (Fluctuate based on business activity) (Select all that apply)</h4>
                                        <CustomCheckbox
                                            options={variableCostOptions}
                                            selected={formData.costStructure?.variableCosts || []}
                                            onChange={handleVariableCostsChange}
                                        />
                                    </div>

                                    <div>
                                        <h4 className="text-md font-medium mb-3">Semi-Variable Costs (Part fixed, part variable) (Select all that apply)</h4>
                                        <CustomCheckbox
                                            options={semiVariableCostOptions}
                                            selected={formData.costStructure?.semiVariableCosts || []}
                                            onChange={handleSemiVariableCostsChange}
                                        />
                                    </div>

                                    <div>
                                        <h4 className="text-md font-medium mb-3">Financing Costs (Select all that apply)</h4>
                                        <CustomCheckbox
                                            options={financingCostOptions}
                                            selected={formData.costStructure?.financingCosts || []}
                                            onChange={handleFinancingCostsChange}
                                        />
                                    </div>

                                    <div>
                                        <h4 className="text-md font-medium mb-3">Compliance & Regulatory Costs (Select all that apply)</h4>
                                        <CustomCheckbox
                                            options={complianceCostOptions}
                                            selected={formData.costStructure?.complianceCosts || []}
                                            onChange={handleComplianceCostsChange}
                                        />
                                    </div>

                                    <div>
                                        <h4 className="text-md font-medium mb-3">Research & Development (R&D) (Select all that apply)</h4>
                                        <CustomCheckbox
                                            options={researchAndDevelopmentOptions}
                                            selected={formData.costStructure?.researchAndDevelopment || []}
                                            onChange={handleResearchAndDevelopmentChange}
                                        />
                                    </div>

                                    <div>
                                        <h4 className="text-md font-medium mb-3">Customer Acquisition & Retention Costs (Select all that apply)</h4>
                                        <CustomCheckbox
                                            options={customerAcquisitionOptions}
                                            selected={formData.costStructure?.customerAcquisition || []}
                                            onChange={handleCustomerAcquisitionChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-24">
                            <FormNavigation
                                currentStep={9}
                                currentSection={currentSection}
                                totalSections={1}
                                nextDisabled={
                                    !formData.costStructure?.fixedCosts?.length ||
                                    !formData.costStructure?.variableCosts?.length ||
                                    !formData.costStructure?.semiVariableCosts?.length ||
                                    !formData.costStructure?.financingCosts?.length ||
                                    !formData.costStructure?.complianceCosts?.length ||
                                    !formData.costStructure?.researchAndDevelopment?.length ||
                                    !formData.costStructure?.customerAcquisition?.length
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