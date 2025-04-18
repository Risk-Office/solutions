import TabTitle from "~/components/form/tabtitle";
import { offeredSolutions } from "~/constants/solutions";
import { Button } from "~/components/ui/button";
import { SolutionTag } from "~/views/home";
import { useState } from "react";
import { CustomCheckbox } from "~/components/form/customcheckbox";
import { useNavigate } from "react-router";
import { useFormStore } from "~/store/useForm";
import { FormNavigation } from "~/components/form/FormNavigation";
import { SaveForLaterModal } from "~/components/ui/modals";

import Sideimg from '~/assets/png/forms/form2.png';

export interface Option {
    id: string;
    label: string;
}

export default function Step1() {
    const { formData, updateFormData, setCurrentStep } = useFormStore();
    const navigate = useNavigate();
    const [showSaveModal, setShowSaveModal] = useState(false);

    const options: Option[] = [
        { id: 'b2b', label: 'B2B (Business-to-Business)' },
        { id: 'government', label: 'Government (B2G)' },
        { id: 'b2c', label: 'B2C (Business-to-Consumer)' },
        { id: 'non-profit', label: 'Non-profit Organizations' },
        { id: 'others', label: 'Others' }
    ];

    const toggleOption = (selected: string[]) => {
        // Ensure only storing a flat array of strings
        const flatSelected = selected.filter(item => typeof item === 'string');
        updateFormData({ customerSegments: flatSelected });
    };

    const handleNext = () => {
        setCurrentStep(2);
        navigate('/form/step2');
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
        setShowSaveModal(true);
    };

    return (
        <div>
            <TabTitle title="Customer Segments" />

            <div className="grid grid-cols-4">
                <div className="border-r border-gray-300 pt-10">
                    <div className="w-[90%] mx-auto">
                        <div className="space-y-6">
                            <div className="p-4">
                                <CustomCheckbox
                                    options={options}
                                    selected={formData.customerSegments || []}
                                    onChange={toggleOption}
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
                            <span className="text-sm text-gray-500">1/1</span>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-lg font-medium mb-4">
                                    Who are your target customers?
                                </h3>
                                <p className="text-sm text-gray-600 mb-4">
                                    Select all the customer segments that apply to your business.
                                </p>
                            </div>
                        </div>

                        <div className="mt-24">
                            <FormNavigation
                                currentStep={1}
                                currentSection={1}
                                totalSections={1}
                                nextDisabled={!formData.customerSegments?.length}
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <img src={Sideimg} alt="sideimg" className="w-full h-full object-cover" />
                </div>
            </div>

            <SaveForLaterModal
                isOpen={showSaveModal}
                onClose={() => setShowSaveModal(false)}
            />
        </div>
    );
}
