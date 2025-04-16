import { CustomCheckbox } from "~/components/form/customcheckbox";
import { Button } from "~/components/ui/button";
import { useFormStore } from "~/store/useForm";

interface B2BSegmentProps {
    onNext: () => void;
    onPrevious: () => void;
}

export default function B2BSegment({ onNext, onPrevious }: B2BSegmentProps) {
    const { formData, updateSegmentData } = useFormStore();

    const businessTypes = [
        { id: 'manufacturing', label: 'Manufacturing' },
        { id: 'retail', label: 'Retail' },
        { id: 'technology', label: 'Technology' },
        { id: 'healthcare', label: 'Healthcare' },
        { id: 'finance', label: 'Finance' },
        { id: 'education', label: 'Education' },
        { id: 'other', label: 'Other' }
    ];

    const handleBusinessTypeChange = (selected: string[]) => {
        updateSegmentData('b2b', { businessTypes: selected });
    };

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-medium">Questions for B2B (Business-to-Business)</h3>
                <span className="text-sm text-gray-500">1/1</span>
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium mb-2">What type of businesses are your B2B customers?</label>
                <CustomCheckbox
                    options={businessTypes}
                    selected={formData.b2bData?.businessTypes || []}
                    onChange={handleBusinessTypeChange}
                />
            </div>

            <div className="mt-24 flex items-center justify-end space-x-3">
                <Button variant="text" className="text-sm uppercase border border-blue-900" onClick={onPrevious}>
                    Back
                </Button>
                <Button variant="default" className="text-sm uppercase" onClick={onNext}>
                    Next
                </Button>
            </div>
        </div>
    );
} 