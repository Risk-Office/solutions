import { CustomCheckbox } from "~/components/form/customcheckbox";
import { Button } from "~/components/ui/button";
import { useFormStore } from "~/store/useForm";
import { useState } from "react";

interface GovernmentSegmentProps {
    onNext: () => void;
    onPrevious: () => void;
}

export default function GovernmentSegment({ onNext, onPrevious }: GovernmentSegmentProps) {
    const { formData, updateSegmentData } = useFormStore();
    const [currentLayer, setCurrentLayer] = useState(1);

    const governmentTypes = [
        { id: 'federal', label: 'Federal/National' },
        { id: 'state', label: 'State/Provincial' },
        { id: 'local', label: 'Country/Regional' },
        { id: 'municipal', label: 'Municipal/Local/City' },
        { id: 'tribal', label: 'Tribal/Indigenuous Government Authorities' },
        { id: 'international', label: 'For gov-to-gov or foreign gov' }
    ];

    const departments = [
        { id: 'defense', label: 'Defense/Security' },
        { id: 'safety', label: 'Public Safety' },
        { id: 'health', label: 'Health and Human Services' },
        { id: 'transportation', label: 'Transportation' },
        { id: 'education', label: 'Education' },
        { id: 'resources', label: 'Environmental/Natural Resources' },
        { id: 'housing', label: 'Housing/Urban Development' },
        { id: 'finance', label: 'Finance/Treasury/Taxation' },
        { id: 'technology', label: 'Technology/Innovation/Smart Cities' },
        { id: 'regulatory', label: 'Regulatory Compliance' },
        { id: 'general', label: 'Procurement/General Services' }
    ];

    const handleGovernmentTypeChange = (selected: string[]) => {
        updateSegmentData('government', { types: selected });
    };

    const handleDepartmentChange = (selected: string[]) => {
        updateSegmentData('government', { departments: selected });
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
                <span className="text-sm text-gray-500">{currentLayer}/2</span>
            </div>

            {currentLayer === 1 && (
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">What kind of government do you deal with?</label>
                    <CustomCheckbox
                        options={governmentTypes}
                        selected={formData.governmentData?.types || []}
                        onChange={handleGovernmentTypeChange}
                    />
                </div>
            )}

            {currentLayer === 2 && (
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Select functional area/department/ministry</label>
                    <CustomCheckbox
                        options={departments}
                        selected={formData.governmentData?.departments || []}
                        onChange={handleDepartmentChange}
                    />
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