import TabTitle from "~/components/form/tabtitle";
import { Button } from "~/components/ui/button";
import { useState } from "react";
import { CustomCheckbox } from "~/components/form/customcheckbox";
import { useNavigate } from "react-router";
import { useFormStore } from "~/store/useForm";
import { FormNavigation } from "~/components/form/FormNavigation";
import Sideimg from '~/assets/png/forms/form4.png';

export default function Step8() {
    const { formData, updateFormData } = useFormStore();
    const navigate = useNavigate();
    const [currentSection, setCurrentSection] = useState(1);

    const operationsAndSupplyChainOptions = [
        { id: 'raw_material_suppliers', label: 'Raw Material Suppliers — Essential for manufacturing and production businesses' },
        { id: 'wholesalers_distributors', label: 'Wholesalers & Distributors — Companies that supply bulk goods for resale' },
        { id: 'logistics_shipping', label: 'Logistics & Shipping Providers — Freight, courier, and last-mile delivery services' },
        { id: 'third_party_manufacturers', label: 'Third-Party Manufacturers — Contract manufacturers or private label suppliers' }
    ];

    const financialAndLegalOptions = [
        { id: 'banks_financial', label: 'Banks & Financial Institutions — For business loans, credit lines, insurance and merchant services' },
        { id: 'investors_vc', label: 'Investors & Venture Capitalists — Funding and strategic financial backing' },
        { id: 'legal_compliance', label: 'Legal & Compliance Firms — Business attorneys, intellectual property firms, and regulatory compliance experts' },
        { id: 'accounting_tax', label: 'Accounting & Tax Services — Bookkeepers, CPAs, and tax consultants' }
    ];

    const technologyAndITOptions = [
        { id: 'software_providers', label: 'Software Providers — SaaS solutions (e.g., ERP, CRM, project management)' },
        { id: 'cloud_hosting', label: 'Cloud & Hosting Services — Web hosting, cloud storage, and cybersecurity' },
        { id: 'it_support', label: 'IT Support & Managed Services — Network administration, troubleshooting, and system security' },
        { id: 'ecommerce_payment', label: 'E-commerce & Payment Processors — Shopify, Stripe, PayPal, and POS systems' }
    ];

    const marketingAndSalesOptions = [
        { id: 'digital_marketing', label: 'Digital Marketing Agencies — SEO, PPC, social media, and branding services' },
        { id: 'pr_media', label: 'Public Relations & Media Partners — Reputation management, press releases, and media outreach' },
        { id: 'sales_distribution', label: 'Sales & Distribution Channels — Retailers, affiliates, and sales representatives' },
        { id: 'advertising_platforms', label: 'Advertising Platforms — Google Ads, Facebook Ads, influencer marketing platforms' }
    ];

    const humanResourcesOptions = [
        { id: 'recruitment_staffing', label: 'Recruitment & Staffing Agencies — For hiring employees and contractors' },
        { id: 'hr_payroll', label: 'HR & Payroll Services — Payroll management, benefits administration, and compliance' },
        { id: 'employee_training', label: 'Employee Training & Development — Learning management systems, corporate trainers, and industry-specific certifications' },
        { id: 'background_check', label: 'Background Check & Compliance Services — Employee verification, workplace safety compliance' }
    ];

    const facilityAndInfrastructureOptions = [
        { id: 'real_estate', label: 'Real Estate & Leasing Services — Office spaces, warehouses, co-working spaces' },
        { id: 'facility_management', label: 'Facility Management & Maintenance — Cleaning, security, HVAC, plumbing, and office maintenance' },
        { id: 'utilities_energy', label: 'Utilities & Energy Providers — Electricity, gas, water, and internet service providers' }
    ];

    const industrySpecificOptions = [
        { id: 'regulatory_bodies', label: 'Regulatory Bodies & Industry Associations — Compliance with industry standards and best practices' },
        { id: 'rd_innovation', label: 'R&D and Innovation Partners — Universities, research institutions, and technology incubators' },
        { id: 'sustainability_esg', label: 'Sustainability & ESG Consultants — Companies that support corporate social responsibility efforts' },
        { id: 'franchise_licensing', label: 'Franchise & Licensing Partners — If operating under a franchised or licensed business model' }
    ];

    const handleOperationsAndSupplyChainChange = (selected: string[]) => {
        updateFormData({
            keyPartnerships: {
                ...formData.keyPartnerships,
                operationsAndSupplyChain: selected
            }
        });
    };

    const handleFinancialAndLegalChange = (selected: string[]) => {
        updateFormData({
            keyPartnerships: {
                ...formData.keyPartnerships,
                financialAndLegal: selected
            }
        });
    };

    const handleTechnologyAndITChange = (selected: string[]) => {
        updateFormData({
            keyPartnerships: {
                ...formData.keyPartnerships,
                technologyAndIT: selected
            }
        });
    };

    const handleMarketingAndSalesChange = (selected: string[]) => {
        updateFormData({
            keyPartnerships: {
                ...formData.keyPartnerships,
                marketingAndSales: selected
            }
        });
    };

    const handleHumanResourcesChange = (selected: string[]) => {
        updateFormData({
            keyPartnerships: {
                ...formData.keyPartnerships,
                humanResources: selected
            }
        });
    };

    const handleFacilityAndInfrastructureChange = (selected: string[]) => {
        updateFormData({
            keyPartnerships: {
                ...formData.keyPartnerships,
                facilityAndInfrastructure: selected
            }
        });
    };

    const handleIndustrySpecificChange = (selected: string[]) => {
        updateFormData({
            keyPartnerships: {
                ...formData.keyPartnerships,
                industrySpecific: selected
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
            currentStep: formData.currentStep
        });
    };

    return (
        <div>
            <TabTitle title="Key Partnerships" />

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
                                    What external partners are critical for your business operations?
                                </h3>

                                <div className="space-y-6">
                                    <div>
                                        <h4 className="text-md font-medium mb-3">Operations & Supply Chain Partners (Select all that apply)</h4>
                                        <CustomCheckbox
                                            options={operationsAndSupplyChainOptions}
                                            selected={formData.keyPartnerships?.operationsAndSupplyChain || []}
                                            onChange={handleOperationsAndSupplyChainChange}
                                        />
                                    </div>

                                    <div>
                                        <h4 className="text-md font-medium mb-3">Financial & Legal Partners (Select all that apply)</h4>
                                        <CustomCheckbox
                                            options={financialAndLegalOptions}
                                            selected={formData.keyPartnerships?.financialAndLegal || []}
                                            onChange={handleFinancialAndLegalChange}
                                        />
                                    </div>

                                    <div>
                                        <h4 className="text-md font-medium mb-3">Technology & IT Support (Select all that apply)</h4>
                                        <CustomCheckbox
                                            options={technologyAndITOptions}
                                            selected={formData.keyPartnerships?.technologyAndIT || []}
                                            onChange={handleTechnologyAndITChange}
                                        />
                                    </div>

                                    <div>
                                        <h4 className="text-md font-medium mb-3">Marketing & Sales Partners (Select all that apply)</h4>
                                        <CustomCheckbox
                                            options={marketingAndSalesOptions}
                                            selected={formData.keyPartnerships?.marketingAndSales || []}
                                            onChange={handleMarketingAndSalesChange}
                                        />
                                    </div>

                                    <div>
                                        <h4 className="text-md font-medium mb-3">Human Resources & Talent Management (Select all that apply)</h4>
                                        <CustomCheckbox
                                            options={humanResourcesOptions}
                                            selected={formData.keyPartnerships?.humanResources || []}
                                            onChange={handleHumanResourcesChange}
                                        />
                                    </div>

                                    <div>
                                        <h4 className="text-md font-medium mb-3">Facility & Infrastructure Support (Select all that apply)</h4>
                                        <CustomCheckbox
                                            options={facilityAndInfrastructureOptions}
                                            selected={formData.keyPartnerships?.facilityAndInfrastructure || []}
                                            onChange={handleFacilityAndInfrastructureChange}
                                        />
                                    </div>

                                    <div>
                                        <h4 className="text-md font-medium mb-3">Industry-Specific & Specialized Partners (Select all that apply)</h4>
                                        <CustomCheckbox
                                            options={industrySpecificOptions}
                                            selected={formData.keyPartnerships?.industrySpecific || []}
                                            onChange={handleIndustrySpecificChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-24">
                            <FormNavigation
                                currentStep={8}
                                currentSection={currentSection}
                                totalSections={1}
                                nextDisabled={
                                    !formData.keyPartnerships?.operationsAndSupplyChain?.length ||
                                    !formData.keyPartnerships?.financialAndLegal?.length ||
                                    !formData.keyPartnerships?.technologyAndIT?.length ||
                                    !formData.keyPartnerships?.marketingAndSales?.length ||
                                    !formData.keyPartnerships?.humanResources?.length ||
                                    !formData.keyPartnerships?.facilityAndInfrastructure?.length ||
                                    !formData.keyPartnerships?.industrySpecific?.length
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