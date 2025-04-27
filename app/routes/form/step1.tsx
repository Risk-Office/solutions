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
import { FormSelect, FormSelectContent, FormSelectItem, FormSelectTrigger, FormSelectValue } from "~/components/form/formComponents";

import Sideimg from '~/assets/png/forms/form2.png';
import Integr8 from '~/assets/png/integr8.png'

export interface Option {
    id: string;
    label: string;
}

export default function Step1() {
    const { formData, updateFormData, updateSegmentData, setCurrentStep } = useFormStore();
    const navigate = useNavigate();
    const [showSaveModal, setShowSaveModal] = useState(false);

    const options: Option[] = [
        { id: 'b2b', label: 'B2B (Business-to-Business)' },
        { id: 'government', label: 'Government (B2G)' },
        { id: 'b2c', label: 'B2C (Business-to-Consumer)' },
        { id: 'non-profit', label: 'Non-profit Organizations' },
        { id: 'others', label: 'Others' }
    ];

    const countryOptions = [
        { value: 'ar', label: 'Argentina' },
        { value: 'au', label: 'Australia' },
        { value: 'at', label: 'Austria' },
        { value: 'bd', label: 'Bangladesh' },
        { value: 'be', label: 'Belgium' },
        { value: 'br', label: 'Brazil' },
        { value: 'ca', label: 'Canada' },
        { value: 'cl', label: 'Chile' },
        { value: 'cn', label: 'China' },
        { value: 'co', label: 'Colombia' },
        { value: 'cz', label: 'Czech Republic' },
        { value: 'dk', label: 'Denmark' },
        { value: 'eg', label: 'Egypt' },
        { value: 'et', label: 'Ethiopia' },
        { value: 'fi', label: 'Finland' },
        { value: 'fr', label: 'France' },
        { value: 'de', label: 'Germany' },
        { value: 'gh', label: 'Ghana' },
        { value: 'gr', label: 'Greece' },
        { value: 'hk', label: 'Hong Kong' },
        { value: 'hu', label: 'Hungary' },
        { value: 'in', label: 'India' },
        { value: 'id', label: 'Indonesia' },
        { value: 'ie', label: 'Ireland' },
        { value: 'il', label: 'Israel' },
        { value: 'it', label: 'Italy' },
        { value: 'jp', label: 'Japan' },
        { value: 'ke', label: 'Kenya' },
        { value: 'kr', label: 'South Korea' },
        { value: 'my', label: 'Malaysia' },
        { value: 'mx', label: 'Mexico' },
        { value: 'ma', label: 'Morocco' },
        { value: 'nl', label: 'Netherlands' },
        { value: 'nz', label: 'New Zealand' },
        { value: 'ng', label: 'Nigeria' },
        { value: 'no', label: 'Norway' },
        { value: 'pk', label: 'Pakistan' },
        { value: 'pe', label: 'Peru' },
        { value: 'ph', label: 'Philippines' },
        { value: 'pl', label: 'Poland' },
        { value: 'pt', label: 'Portugal' },
        { value: 'qa', label: 'Qatar' },
        { value: 'ro', label: 'Romania' },
        { value: 'ru', label: 'Russia' },
        { value: 'sa', label: 'Saudi Arabia' },
        { value: 'sg', label: 'Singapore' },
        { value: 'za', label: 'South Africa' },
        { value: 'es', label: 'Spain' },
        { value: 'se', label: 'Sweden' },
        { value: 'ch', label: 'Switzerland' },
        { value: 'tw', label: 'Taiwan' },
        { value: 'th', label: 'Thailand' },
        { value: 'tr', label: 'Turkey' },
        { value: 'ua', label: 'Ukraine' },
        { value: 'ae', label: 'United Arab Emirates' },
        { value: 'uk', label: 'United Kingdom' },
        { value: 'us', label: 'United States' },
        { value: 'vn', label: 'Vietnam' },
        { value: 'zw', label: 'Zimbabwe' },
        { value: 'other', label: 'Other' }
    ];


    const handleDemographicChange = (field: string, value: any) => {
        updateSegmentData('b2cData', {
            demographics: {
                ...formData.segmentData.b2cData?.demographics,
                [field]: value
            }
        });
    };


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
                        <div className='bg-gray-50 w-full rounded-md p-3'>
                            <img src={Integr8} alt='integr8' className='w-[70px] mx-auto' />

                            <p className='text-md font-medium text-center'><span className='text-red-600'>i</span>-Integr8  </p>

                            <h3 className='text-md font-medium text-center mt-3'>Empower your organization with a tailored approach to risk management</h3>
                            <div className='text-center'>
                                <Button variant='default' className='mt-2'>Subscribe to Integr8</Button>
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
                                <label className="block text-sm font-medium mb-2">Country</label>
                                <FormSelect value={formData.segmentData.b2cData?.demographics?.country || ''} onValueChange={(value) => handleDemographicChange('country', value)}>
                                    <FormSelectTrigger>
                                        <FormSelectValue placeholder="Select country" />
                                    </FormSelectTrigger>
                                    <FormSelectContent>
                                        {countryOptions.map((country) => (
                                            <FormSelectItem key={country.value} value={country.value}>
                                                {country.label}
                                            </FormSelectItem>
                                        ))}
                                    </FormSelectContent>
                                </FormSelect>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium mb-4">
                                    Who are your target customers?
                                </h3>
                                <p className="text-sm text-gray-600 mb-4">
                                    Select all the customer segments that apply to your business.
                                </p>
                            </div>

                            <div className="space-y-6">
                            <div className="p-4">
                                <CustomCheckbox
                                    options={options}
                                    selected={formData.customerSegments || []}
                                    onChange={toggleOption}
                                />
                            </div>
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
