import { CustomCheckbox } from "~/components/form/customcheckbox";
import { Button } from "~/components/ui/button";
import { useFormStore } from "~/store/useForm";
import { useState } from "react";
import { FormInput } from "~/components/form/formComponents";

interface NonProfitSegmentProps {
    onNext: () => void;
    onPrevious: () => void;
}

export default function NonProfitSegment({ onNext, onPrevious }: NonProfitSegmentProps) {
    const { formData, updateSegmentData } = useFormStore();
    const [currentLayer, setCurrentLayer] = useState(1);
    const [showOtherMission, setShowOtherMission] = useState(false);
    const [showOtherFunding, setShowOtherFunding] = useState(false);

    const missionOptions = [
        { id: 'health', label: 'Health & Human Services' },
        { id: 'environmental', label: 'Environmental' },
        { id: 'arts', label: 'Arts & Culture' },
        { id: 'religious', label: 'Religious/Faith Based' },
        { id: 'advocacy', label: 'Advocacy/Public Policy' },
        { id: 'international', label: 'International Aid' },
        { id: 'community', label: 'Community Development' },
        { id: 'education', label: 'Education' },
        { id: 'others', label: 'Others (please specify)' }
    ];

    const employeeSizeOptions = [
        { id: 'less100', label: '<100' },
        { id: '100-500', label: '100-500' },
        { id: '500plus', label: '500+' }
    ];

    const volunteerSizeOptions = [
        { id: 'less100', label: '<100' },
        { id: '100-500', label: '100-500' },
        { id: '500plus', label: '500+' }
    ];

    const fundingOptions = [
        { id: 'government', label: 'Government Grants' },
        { id: 'foundation', label: 'Foundation Grants' },
        { id: 'individual', label: 'Individual Donations' },
        { id: 'membership', label: 'Membership Dues' },
        { id: 'earned', label: 'Earned Income (e.g., ticket sales, services)' },
        { id: 'corporate', label: 'Corporate Sponsorships' },
        { id: 'others', label: 'Other Sources' }
    ];

    const maturityOptions = [
        { id: 'startup', label: 'Startups (<3 years)' },
        { id: 'growth', label: 'Growth Stage (3-10 years)' },
        { id: 'established', label: 'Established (10+ years)' }
    ];

    const programModelOptions = [
        { id: 'direct', label: 'Direct Service (e.g., food banks, shelter)' },
        { id: 'indirect', label: 'Indirect Service (e.g., training other non-profits)' },
        { id: 'advocacy', label: 'Advocacy/Lobbying' },
        { id: 'research', label: 'Research & Development' },
        { id: 'network', label: 'Network & Umbrella Organization' }
    ];

    const geographicalOptions = [
        { id: 'local', label: 'Local' },
        { id: 'regional', label: 'Regional' },
        { id: 'national', label: 'National' },
        { id: 'international', label: 'International' }
    ];

    const legalStructureOptions = [
        { id: '501c3', label: '501(c)(3) - Charitable Organizations' },
        { id: '501c4', label: '501(c)(4) - Social Welfare' },
        { id: '501c6', label: '501(c)(6) - Business Leagues or Chambers' },
        { id: 'religious', label: 'Religious Institutions (Special Exemptions)' }
    ];

    const handleMissionChange = (selected: string[]) => {
        updateSegmentData('nonProfit', { missionFocus: selected });
        setShowOtherMission(selected.includes('others'));
    };

    const handleOtherMissionChange = (value: string) => {
        updateSegmentData('nonProfit', { otherMission: value });
    };

    const handleEmployeeSizeChange = (selected: string[]) => {
        updateSegmentData('nonProfit', { employeeSize: selected });
    };

    const handleVolunteerSizeChange = (selected: string[]) => {
        updateSegmentData('nonProfit', { volunteerSize: selected });
    };

    const handleFundingChange = (selected: string[]) => {
        updateSegmentData('nonProfit', { fundingSources: selected });
        setShowOtherFunding(selected.includes('others'));
    };

    const handleOtherFundingChange = (value: string) => {
        updateSegmentData('nonProfit', { otherFunding: value });
    };

    const handleMaturityChange = (selected: string[]) => {
        updateSegmentData('nonProfit', { operationalMaturity: selected });
    };

    const handleProgramModelChange = (selected: string[]) => {
        updateSegmentData('nonProfit', { programModel: selected });
    };

    const handleGeographicalChange = (selected: string[]) => {
        updateSegmentData('nonProfit', { geographicalReach: selected });
    };

    const handleLegalStructureChange = (selected: string[]) => {
        updateSegmentData('nonProfit', { legalStructure: selected });
    };

    const handleNextLayer = () => {
        if (currentLayer < 7) {
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

    const renderCurrentLayer = () => {
        switch (currentLayer) {
            case 1:
                return (
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-2">Mission Focus/Sector (Select all that applies)</label>
                            <CustomCheckbox
                                options={missionOptions}
                                selected={formData.nonProfitData?.missionFocus || []}
                                onChange={handleMissionChange}
                            />
                            {showOtherMission && (
                                <div className="mt-4">
                                    <FormInput
                                        type="text"
                                        placeholder="Please specify other mission focus"
                                        value={formData.nonProfitData?.otherMission || ''}
                                        onChange={(e) => handleOtherMissionChange(e.target.value)}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium mb-2">Number of Employees (Select all that applies)</label>
                            <CustomCheckbox
                                options={employeeSizeOptions}
                                selected={formData.nonProfitData?.employeeSize || []}
                                onChange={handleEmployeeSizeChange}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Number of Volunteers (Select all that applies)</label>
                            <CustomCheckbox
                                options={volunteerSizeOptions}
                                selected={formData.nonProfitData?.volunteerSize || []}
                                onChange={handleVolunteerSizeChange}
                            />
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-2">Funding Sources (Select all that applies)</label>
                            <CustomCheckbox
                                options={fundingOptions}
                                selected={formData.nonProfitData?.fundingSources || []}
                                onChange={handleFundingChange}
                            />
                            {showOtherFunding && (
                                <div className="mt-4">
                                    <FormInput
                                        type="text"
                                        placeholder="Please specify other funding sources"
                                        value={formData.nonProfitData?.otherFunding || ''}
                                        onChange={(e) => handleOtherFundingChange(e.target.value)}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                );
            case 4:
                return (
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-2">Operational Maturity/Age (Select all that applies)</label>
                            <CustomCheckbox
                                options={maturityOptions}
                                selected={formData.nonProfitData?.operationalMaturity || []}
                                onChange={handleMaturityChange}
                            />
                        </div>
                    </div>
                );
            case 5:
                return (
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-2">Program Delivery Model (Select all that applies)</label>
                            <CustomCheckbox
                                options={programModelOptions}
                                selected={formData.nonProfitData?.programModel || []}
                                onChange={handleProgramModelChange}
                            />
                        </div>
                    </div>
                );
            case 6:
                return (
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-2">Geographical Reach (Select all that applies)</label>
                            <CustomCheckbox
                                options={geographicalOptions}
                                selected={formData.nonProfitData?.geographicalReach || []}
                                onChange={handleGeographicalChange}
                            />
                        </div>
                    </div>
                );
            case 7:
                return (
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-2">Legal Structure and Tax Status (Select all that applies)</label>
                            <CustomCheckbox
                                options={legalStructureOptions}
                                selected={formData.nonProfitData?.legalStructure || []}
                                onChange={handleLegalStructureChange}
                            />
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-medium">Questions for Non-profit Organizations</h3>
                <span className="text-sm text-gray-500">{currentLayer}/7</span>
            </div>

            {renderCurrentLayer()}

            <div className="mt-24 flex items-center justify-end space-x-3">
                <Button variant="text" className="text-sm uppercase border border-blue-900" onClick={handlePreviousLayer}>
                    Back
                </Button>
                <Button variant="default" className="text-sm uppercase" onClick={handleNextLayer}>
                    {currentLayer === 7 ? 'Next' : 'Continue'}
                </Button>
            </div>
        </div>
    );
} 