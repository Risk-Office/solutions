import TabTitle from "~/components/form/tabtitle";
import { offeredSolutions } from "~/constants/solutions";
import { Button } from "~/components/ui/button";
import { SolutionTag } from "~/views/home";
import { useState } from "react";
import { CustomCheckbox } from "~/components/form/customcheckbox";
import { useNavigate } from "react-router"
import { useFormStore } from "~/store/useForm";

import Sideimg from '~/assets/png/forms/form2.png';

export interface Option {
    id: string;
    label: string;
}

export default function Step1() {
    const { formData, updateFormData, setCurrentStep } = useFormStore();
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const navigate = useNavigate();
    const options: Option[] = [
        { id: 'b2b', label: 'B2B (Business-to-Business)' },
        { id: 'government', label: 'Government (B2G)' },
        { id: 'b2c', label: 'B2C (Business-to-Consumer)' },
        { id: 'non-profit', label: 'Non-profit Organizations' },
        { id: 'others', label: 'Others' }
    ];

    const toggleOption = (selected: string[]) => {
        updateFormData({ customerSegments: selected });
    };

    const handleNext = () => {
        setCurrentStep(2);
        navigate('/form/step2');
    };

    const handleSaveForLater = () => {
        // With Zustand persist, data is already saved to localStorage
        console.log('Form data saved:', formData);
        // Could add additional save logic here if needed
    };

    return (
        <div>
            <TabTitle title="Target Customer Segments" />

            <div className="grid grid-cols-4 gap-4">
                <div className="border-r border-gray-300 pt-24">
                    <div className="w-[70%] mx-auto">
                        <div className="flex flex-col items-center justify-center gap-2 bg-gray p-2 w-full rounded-lg">
                            <div className="flex-[0.4] flex flex-col gap-2">
                                <img
                                    src={offeredSolutions[8].icon}
                                    alt={offeredSolutions[8].name}
                                    className="w-[52px] h-[48px]"
                                />
                                <SolutionTag solution={offeredSolutions[8]} />
                            </div>

                            <div className="flex-1 flex items-center justify-start">
                                <span className="font-normal text-sm">
                                    {offeredSolutions[8].description}
                                </span>
                            </div>

                            <Button variant="default" className="mt-4">Subscribe to Integr8</Button>
                        </div>

                        <div className="text-center">
                            <Button variant="default" onClick={handleSaveForLater} className="text-sm uppercase mt-24">Save & Continue Later</Button>
                        </div>
                    </div>
                </div>


                <div className="col-span-2 pb-10">
                    <h3 className="text-md font-medium mb-6 pt-6 pl-6">Question</h3>

                    <hr className="w-[70%] border border-gray-300" />

                    <div className="pl-6">
                        <h3 className="text-md font-medium mb-6 pt-6">Who are your target customers? (select all that applies)</h3>

                        <CustomCheckbox
                            options={options}
                            selected={formData.customerSegments}
                            onChange={toggleOption}
                        />

                        <div className="mt-24 flex items-center justify-end space-x-3 pr-6">
                            <Button variant="text" className="text-sm uppercase mt-24 border border-blue-900" disabled>Back</Button>
                            <Button variant="default" className="text-sm uppercase mt-24" onClick={handleNext}
                                disabled={formData.customerSegments.length === 0}>Next</Button>
                        </div>
                    </div>
                </div>

                <div>
                    <img src={Sideimg} alt="sideimg" className="w-full h-full object-cover" />
                </div>
            </div>
        </div >
    );
}
