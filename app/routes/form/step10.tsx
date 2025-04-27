import TabTitle from "~/components/form/tabtitle";
import { Button } from "~/components/ui/button";
import { useState } from "react";
import { CustomCheckbox } from "~/components/form/customcheckbox";
import { useNavigate } from "react-router";
import { useFormStore } from "~/store/useForm";
import { FormNavigation } from "~/components/form/FormNavigation";
import { FormSubmittedModal, SaveForLaterModal } from "~/components/ui/modals";
import Sideimg from '~/assets/png/forms/form3.png';

export default function Step10() {
    const { formData, updateFormData } = useFormStore();
    const navigate = useNavigate();
    const [currentSection, setCurrentSection] = useState(1);
    const [showSubmitModal, setShowSubmitModal] = useState(false);
    const [showSaveModal, setShowSaveModal] = useState(false);

    const revenueStreamOptions = [
        { id: 'product_sales', label: 'Product Sales — Revenue from selling physical or digital products' },
        { id: 'service_fees', label: 'Service Fees — Income from providing services' },
        { id: 'subscription_fees', label: 'Subscription Fees — Recurring revenue from periodic subscriptions' },
        { id: 'membership_fees', label: 'Membership Fees — Access to exclusive content or services' },
        { id: 'advertisement', label: 'Advertisement — Revenue from displaying ads or sponsored content' },
        { id: 'royalties', label: 'Royalties — Income from intellectual property usage' },
        { id: 'licensing_fees', label: 'Licensing Fees — Revenue from allowing use of proprietary assets' },
        { id: 'dividend_income', label: 'Dividend Income — Returns from investments' },
        { id: 'interest_income', label: 'Interest Income — Revenue from lending or deposits' },
        { id: 'rental_leasing', label: 'Rental/Leasing — Income from property or equipment' },
        { id: 'merchandising', label: 'Merchandising — Revenue from branded products' },
        { id: 'franchising_fees', label: 'Franchising Fees — Income from franchise operations' },
        { id: 'affiliate_fees', label: 'Affiliate Fees — Commission from referrals' },
        { id: 'brokerage_fees', label: 'Brokerage Fees — Commission from facilitating transactions' },
        { id: 'data_sales', label: 'Data Sales — Revenue from selling data or insights' },
        { id: 'asset_sales', label: 'Asset Sales — Income from selling company assets' },
        { id: 'government_grants', label: 'Government Grants/Subsidies — Public funding support' }
    ];

    const handleRevenueStreamsChange = (selected: string[]) => {
        updateFormData({
            revenueStreams: selected
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
            step10: {
                revenueStreams: formData.revenueStreams
            },
            currentStep: formData.currentStep
        });
        setShowSaveModal(true);
    };

    const handleSubmit = () => {
        console.log('Final Form Data:', {
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
            step10: {
                revenueStreams: formData.revenueStreams
            },
            currentStep: formData.currentStep
        });
        setShowSubmitModal(true);
    };

    return (
        <div>
            <TabTitle title="Revenue Streams" />

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
                                    How does your business generate revenue from your target customers?
                                </h3>

                                <div className="space-y-6">
                                    <CustomCheckbox
                                        options={revenueStreamOptions}
                                        selected={formData.revenueStreams || []}
                                        onChange={handleRevenueStreamsChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mt-24">
                            <div className="flex justify-end">
                                <Button 
                                    variant="default" 
                                    onClick={handleSubmit}
                                    disabled={!formData.revenueStreams?.length}
                                    className="px-8"
                                >
                                    Submit
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full h-full'>
                    <img src={Sideimg} alt="sideimg" className="w-full h-full object-cover" />
                </div>
            </div>

            <FormSubmittedModal
                isOpen={showSubmitModal}
                onClose={() => setShowSubmitModal(false)}
            />

            <SaveForLaterModal
                isOpen={showSaveModal}
                onClose={() => setShowSaveModal(false)}
            />
        </div>
    );
} 