import TabTitle from "~/components/form/tabtitle";
import { Button } from "~/components/ui/button";
import { useState } from "react";
import { CustomCheckbox } from "~/components/form/customcheckbox";
import { useNavigate } from "react-router";
import { useFormStore } from "~/store/useForm";
import { FormNavigation } from "~/components/form/FormNavigation";
import Sideimg from '~/assets/png/forms/form1.png';

export default function Step7() {
    const { formData, updateFormData } = useFormStore();
    const navigate = useNavigate();
    const [currentSection, setCurrentSection] = useState(1);

    const administrativeServicesOptions = [
        { id: 'document_management', label: 'Document Management' },
        { id: 'office_management', label: 'Office Management' }
    ];

    const consultancyServicesOptions = [
        { id: 'management_consulting', label: 'Management Consulting' },
        { id: 'operational_consulting', label: 'Operational Consulting' },
        { id: 'technology_consulting', label: 'Technology Consulting' }
    ];

    const creativeServicesOptions = [
        { id: 'content_creation', label: 'Content Creation' },
        { id: 'event_planning', label: 'Event Planning' },
        { id: 'graphic_design', label: 'Graphic Design' }
    ];

    const customerSupportServicesOptions = [
        { id: 'call_center', label: 'Call Center Services' },
        { id: 'chat_email_support', label: 'Chat and Email Support' }
    ];

    const handleAdministrativeServicesChange = (selected: string[]) => {
        updateFormData({
            businessActivities: {
                ...formData.businessActivities,
                administrativeServices: selected
            }
        });
    };

    const handleConsultancyServicesChange = (selected: string[]) => {
        updateFormData({
            businessActivities: {
                ...formData.businessActivities,
                consultancyServices: selected
            }
        });
    };

    const handleCreativeServicesChange = (selected: string[]) => {
        updateFormData({
            businessActivities: {
                ...formData.businessActivities,
                creativeServices: selected
            }
        });
    };

    const handleCustomerSupportServicesChange = (selected: string[]) => {
        updateFormData({
            businessActivities: {
                ...formData.businessActivities,
                customerSupportServices: selected
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
            currentStep: formData.currentStep
        });
    };

    return (
        <div>
            <TabTitle title="Business Activities" />

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
                                    What are the most important activities for your business to operate successfully?
                                </h3>

                                <div className="space-y-6">
                                    <div>
                                        <h4 className="text-md font-medium mb-3">Administrative Services (Select all that apply)</h4>
                                        <CustomCheckbox
                                            options={administrativeServicesOptions}
                                            selected={formData.businessActivities?.administrativeServices || []}
                                            onChange={handleAdministrativeServicesChange}
                                        />
                                    </div>

                                    <div>
                                        <h4 className="text-md font-medium mb-3">Consultancy Services (Select all that apply)</h4>
                                        <CustomCheckbox
                                            options={consultancyServicesOptions}
                                            selected={formData.businessActivities?.consultancyServices || []}
                                            onChange={handleConsultancyServicesChange}
                                        />
                                    </div>

                                    <div>
                                        <h4 className="text-md font-medium mb-3">Creative Services (Select all that apply)</h4>
                                        <CustomCheckbox
                                            options={creativeServicesOptions}
                                            selected={formData.businessActivities?.creativeServices || []}
                                            onChange={handleCreativeServicesChange}
                                        />
                                    </div>

                                    <div>
                                        <h4 className="text-md font-medium mb-3">Customer Support Services (Select all that apply)</h4>
                                        <CustomCheckbox
                                            options={customerSupportServicesOptions}
                                            selected={formData.businessActivities?.customerSupportServices || []}
                                            onChange={handleCustomerSupportServicesChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-24">
                            <FormNavigation
                                currentStep={7}
                                currentSection={currentSection}
                                totalSections={1}
                                // nextDisabled={
                                //     !formData.businessActivities?.administrativeServices?.length ||
                                //     !formData.businessActivities?.consultancyServices?.length ||
                                //     !formData.businessActivities?.creativeServices?.length ||
                                //     !formData.businessActivities?.customerSupportServices?.length
                                // }
                            />
                        </div>
                    </div>
                </div>

                <div className='w-full h-full'>
                    <img src={Sideimg} alt="sideimg" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    );
} 