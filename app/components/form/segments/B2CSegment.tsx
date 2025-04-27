import { CustomCheckbox } from "~/components/form/customcheckbox";
import { Button } from "~/components/ui/button";
import { useFormStore } from "~/store/useForm";
import { useState } from "react";
import { Input } from "~/components/ui/input";

interface B2CSegmentProps {
    onNext: () => void;
    onPrevious: () => void;
}

export default function B2CSegment({ onNext, onPrevious }: B2CSegmentProps) {
    const { formData, updateSegmentData } = useFormStore();
    const [currentLayer, setCurrentLayer] = useState(1);
    const [activeTab, setActiveTab] = useState('age');

    const dataTypes = [
        { id: 'personal', label: 'Personal Information' },
        { id: 'contact', label: 'Contact Information' },
        { id: 'purchase', label: 'Purchase History' },
        { id: 'preferences', label: 'Preferences' },
        { id: 'behavior', label: 'Behavioral Data' },
        { id: 'location', label: 'Location Data' },
        { id: 'social', label: 'Social Media Data' }
    ];

    const tabs = [
        { id: 'age', label: 'Age Range/Gender Identity' },
        { id: 'house', label: 'House' },
        { id: 'status', label: 'Status' },
        { id: 'country', label: 'Country' },
        { id: 'education', label: 'Education Level' },
        { id: 'ethnicity', label: 'Ethnicity or Race' },
        { id: 'others', label: 'Others' }
    ];

    const maritalOptions = [
        { id: 'single', label: 'Single' },
        { id: 'married', label: 'Married' },
        { id: 'divorced', label: 'Divorced' },
        { id: 'widowed', label: 'Widowed' }
    ];

    const dependentsOptions = [
        { id: 'less2', label: '<2' },
        { id: '2-5', label: '2 - 5' },
        { id: '5plus', label: '5+' }
    ];

    const employmentOptions = [
        { id: 'employed', label: 'Employed' },
        { id: 'student', label: 'Student' },
        { id: 'self-employed', label: 'Self-employed' }
    ];

    const handleDataTypeChange = (selected: string[]) => {
        updateSegmentData('b2c', { dataTypes: selected });
    };

    const handleDemographicChange = (field: string, value: any) => {
        updateSegmentData('b2c', { demographics: { ...formData.b2cData?.demographics, [field]: value } });
    };

    const handleNextLayer = () => {
        if (currentLayer < 2) {
            setCurrentLayer(currentLayer + 1);
        } else {
            onNext();
        }
    };

    const handlePreviousLayer = () => {
        if (currentLayer > 1) {
            setCurrentLayer(currentLayer - 1);
        } else {
            onPrevious();
        }
    };

    const renderDemographicContent = () => {
        switch (activeTab) {
            case 'age':
                return (
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-2">Age Range</label>
                            <Input
                                type="text"
                                placeholder="Enter age range"
                                value={formData.b2cData?.demographics?.ageRange || ''}
                                onChange={(e) => handleDemographicChange('ageRange', e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Gender Identity</label>
                            <Input
                                type="text"
                                placeholder="Enter gender identity"
                                value={formData.b2cData?.demographics?.gender || ''}
                                onChange={(e) => handleDemographicChange('gender', e.target.value)}
                            />
                        </div>
                    </div>
                );
            case 'status':
                return (
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-2">Marital Status (Select all that apply)</label>
                            <CustomCheckbox
                                options={maritalOptions}
                                selected={formData.b2cData?.demographics?.maritalStatus || []}
                                onChange={(selected) => handleDemographicChange('maritalStatus', selected)}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Number of Dependents (Select all that apply)</label>
                            <CustomCheckbox
                                options={dependentsOptions}
                                selected={formData.b2cData?.demographics?.dependents || []}
                                onChange={(selected) => handleDemographicChange('dependents', selected)}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Employment Status (Select all that apply)</label>
                            <CustomCheckbox
                                options={employmentOptions}
                                selected={formData.b2cData?.demographics?.employment || []}
                                onChange={(selected) => handleDemographicChange('employment', selected)}
                            />
                        </div>
                    </div>
                );
            // Add other cases for remaining tabs
            default:
                return <div>Content for {activeTab} tab coming soon</div>;
        }
    };

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-medium">Questions for B2C (Business-to-Consumer)</h3>
                <span className="text-sm text-gray-500">{currentLayer}/2</span>
            </div>

            {currentLayer === 1 && (
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">What data types does your company keep on retail customers?</label>
                    <CustomCheckbox
                        options={dataTypes}
                        selected={formData.b2cData?.dataTypes || []}
                        onChange={handleDataTypeChange}
                    />
                </div>
            )}

            {currentLayer === 2 && (
                <div className="flex gap-6">
                    {/* Vertical Tabs Sidebar */}
                    <div className="w-64 border-r border-gray-200">
                        <div className="flex flex-col space-y-1">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    className={`px-4 py-3 text-left text-sm font-medium ${
                                        activeTab === tab.id
                                            ? 'bg-blue-100 border-l-4 border-blue-500 text-blue-800'
                                            : 'text-gray-600 hover:bg-gray-50'
                                    }`}
                                    onClick={() => setActiveTab(tab.id)}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="flex-1">
                        {renderDemographicContent()}
                    </div>
                </div>
            )}

            <div className="mt-24 flex items-center justify-end space-x-3">
                <Button variant="text" className="text-sm uppercase border border-blue-900" onClick={handlePreviousLayer}>
                    Back
                </Button>
                <Button variant="default" className="text-sm uppercase" onClick={handleNextLayer}>
                    {currentLayer === 2 ? 'Next' : 'Continue'}
                </Button>
            </div>
        </div>
    );
} 