import { CustomCheckbox } from "~/components/form/customcheckbox";
import { Button } from "~/components/ui/button";
import { useFormStore } from "~/store/useForm";
import { useState } from "react";

interface GovernmentSegmentProps {
    onNext: () => void;
    onPrevious: () => void;
    currentSection: number;
    onSectionChange: (section: number) => void;
}

export default function GovernmentSegment({ onNext, onPrevious, currentSection, onSectionChange }: GovernmentSegmentProps) {
    const { formData, updateSegmentData } = useFormStore();
    const [currentLayer, setCurrentLayer] = useState(1);

    const governmentTypes = [
        { id: 'federal', label: 'Federal' },
        { id: 'state', label: 'State/Province' },
        { id: 'local', label: 'Local/Municipal' },
        { id: 'international', label: 'International' }
    ];

    const departments = [
        { id: 'health', label: 'Health' },
        { id: 'education', label: 'Education' },
        { id: 'transportation', label: 'Transportation' },
        { id: 'defense', label: 'Defense' },
        { id: 'finance', label: 'Finance' },
        { id: 'environment', label: 'Environment' },
        { id: 'other', label: 'Other' }
    ];

    const handleGovernmentTypeChange = (selected: string[]) => {
        updateSegmentData('governmentData', { types: selected });
    };

    const handleDepartmentChange = (selected: string[]) => {
        updateSegmentData('governmentData', { departments: selected });
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

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-medium">Questions for Government (B2G)</h3>
                <span className="text-sm text-gray-500">{currentSection}/2</span>
            </div>

            {currentSection === 1 && (
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">What kind of government do you deal with?</label>
                    <CustomCheckbox
                        options={governmentTypes}
                        selected={formData.segmentData.governmentData?.types || []}
                        onChange={handleGovernmentTypeChange}
                    />
                </div>
            )}

            {currentSection === 2 && (
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Select functional area/department/ministry</label>
                    <CustomCheckbox
                        options={departments}
                        selected={formData.segmentData.governmentData?.departments || []}
                        onChange={handleDepartmentChange}
                    />
                </div>
            )}

            <div className="mt-24 flex items-center justify-end space-x-3">
                <Button variant="text" className="text-sm uppercase border border-blue-900" onClick={onPrevious}>
                    Back
                </Button>
                <Button variant="default" className="text-sm uppercase" onClick={onNext}>
                    {currentSection === 2 ? 'Next' : 'Continue'}
                </Button>
            </div>
        </div>
    );
} 