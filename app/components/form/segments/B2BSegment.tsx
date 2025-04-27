import React, { useEffect } from 'react';
import { useFormStore } from '~/store/useForm';
import { Button } from "~/components/ui/button";
import { ChevronRight } from "lucide-react";

interface B2BSegmentProps {
    onNext?: () => void;
    onPrevious?: () => void;
    currentSection?: number;
    onSectionChange?: (section: number) => void;
}

interface BusinessType {
    id: string;
    label: string;
    subsections?: BusinessType[];
}

interface B2BData {
    businessTypes: string[];
    selectedSector: string;
    selectedSubSector: string;
    selectedIndustry: string;
    selectedBusinessType: string;
}

export default function B2BSegment({ onNext, onPrevious, currentSection, onSectionChange }: B2BSegmentProps) {
    const { formData, updateSegmentData } = useFormStore();
    const [activeSector, setActiveSector] = React.useState<string>(formData.segmentData?.b2bData?.selectedSector || "");
    const [activeSubSector, setActiveSubSector] = React.useState<string>(formData.segmentData?.b2bData?.selectedSubSector || "");
    const [activeIndustry, setActiveIndustry] = React.useState<string>(formData.segmentData?.b2bData?.selectedIndustry || "");

    useEffect(() => {
        console.log('Form Data:', formData);
        console.log('Segment Data:', formData.segmentData);
        console.log('B2B Data:', formData.segmentData?.b2bData);
        // Initialize with saved data
        if (formData.segmentData?.b2bData?.selectedSector) {
            setActiveSector(formData.segmentData.b2bData.selectedSector);
        }
        if (formData.segmentData?.b2bData?.selectedSubSector) {
            setActiveSubSector(formData.segmentData.b2bData.selectedSubSector);
        }
        if (formData.segmentData?.b2bData?.selectedIndustry) {
            setActiveIndustry(formData.segmentData.b2bData.selectedIndustry);
        }
    }, [formData]);

    if (!formData.segmentData?.b2bData) {
        console.error('b2bData is undefined');
        return null;
    }

    const { b2bData } = formData.segmentData;

    const businessTypes: BusinessType[] = [
        { id: 'agriculture', label: 'Agriculture & Forestry' },
        { id: 'mining', label: 'Mining & Natural Resources' },
        { id: 'manufacturing', label: 'Manufacturing' },
        { id: 'construction', label: 'Construction & Real Estate' },
        { id: 'transportation', label: 'Transportation & Logistics' },
        { id: 'technology', label: 'Information Technology & Telecommunications' },
        {
            id: 'financial_services',
            label: 'Financial Services',
            subsections: [
                {
                    id: 'banking',
                    label: 'Banking & Financial Institutions',
                    subsections: [
                        {
                            id: 'retail_banking',
                            label: 'Retail Banking',
                            subsections: [
                                { id: 'traditional_banks', label: 'Traditional Banks' },
                                { id: 'credit_union', label: 'Credit Union & Cooperative Banks' },
                                { id: 'challenger_banks', label: 'Challenger & Digital Only Banks' }
                            ]
                        },
                        { id: 'commercial_banking', label: 'Commercial & Corporate Banking' },
                        { id: 'investment_banking', label: 'Investment Banking' },
                        { id: 'central_banking', label: 'Central & Regulatory Banks' }
                    ]
                },
                { id: 'investment', label: 'Investment & Asset Management' },
                { id: 'insurance', label: 'Insurance & Risk Management' },
                { id: 'payment', label: 'Payment Systems & Fintech' },
                { id: 'markets', label: 'Financial Markets & Trading' },
                { id: 'corporate_finance', label: 'Corporate Finance & Treasury Services' }
            ]
        },
        { id: 'healthcare', label: 'Healthcare & Life Sciences' }
    ];

    const handleSectorClick = (sector: BusinessType) => {
        if (!sector.subsections) {
            updateSegmentData('b2bData', {
                ...b2bData,
                selectedSector: sector.id,
                selectedSubSector: "",
                selectedIndustry: "",
                selectedBusinessType: ""
            });
        }
        setActiveSector(sector.id);
        setActiveSubSector("");
        setActiveIndustry("");
    };

    const handleSubSectorClick = (subSector: BusinessType) => {
        if (!subSector.subsections) {
            updateSegmentData('b2bData', {
                ...b2bData,
                selectedSector: activeSector,
                selectedSubSector: subSector.id,
                selectedIndustry: "",
                selectedBusinessType: ""
            });
        }
        setActiveSubSector(subSector.id);
        setActiveIndustry("");
    };

    const handleIndustryClick = (industry: BusinessType) => {
        if (!industry.subsections) {
            updateSegmentData('b2bData', {
                ...b2bData,
                selectedSector: activeSector,
                selectedSubSector: activeSubSector,
                selectedIndustry: industry.id,
                selectedBusinessType: ""
            });
        }
        setActiveIndustry(industry.id);
    };

    const handleBusinessTypeClick = (businessType: BusinessType) => {
        updateSegmentData('b2bData', {
            ...b2bData,
            selectedSector: activeSector,
            selectedSubSector: activeSubSector,
            selectedIndustry: activeIndustry,
            selectedBusinessType: businessType.id
        });
    };

    const activeSubsections = businessTypes.find(s => s.id === activeSector)?.subsections;
    const activeIndustries = activeSubsections?.find(ss => ss.id === activeSubSector)?.subsections;
    const activeBusinessTypes = activeIndustries?.find(i => i.id === activeIndustry)?.subsections;

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-medium">What business types are your B2B customers?</h3>
                <span className="text-sm text-gray-500">{currentSection}/1</span>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-10">
                {/* Sectors */}
                <div className="space-y-2">
                    {businessTypes.map((sector) => (
                        <div
                            key={sector.id}
                            className={`p-3 rounded cursor-pointer ${activeSector === sector.id
                                    ? 'bg-[#AB8B1A] text-white'
                                    : 'hover:bg-gray-50'
                                }`}
                            onClick={() => handleSectorClick(sector)}
                        >
                            <div className="flex justify-between items-center">
                                <span>{sector.label}</span>
                                {sector.subsections && (
                                    <ChevronRight className="h-4 w-4" />
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Subsectors */}
                {activeSubsections && (
                    <div className='-translate-y-8'>
                        <div className='bg-white p-2 w-full'>
                            <p className='text-md text-slate-900 font-medium text-center'>Subsectors</p>
                        </div>
                        <div className="space-y-2">
                            {activeSubsections.map((subSector) => (
                                <div
                                    key={subSector.id}
                                    className={`p-3 rounded cursor-pointer ${activeSubSector === subSector.id
                                        ? 'bg-[#AB8B1A] text-white'
                                        : 'hover:bg-gray-50'
                                        }`}
                                    onClick={() => handleSubSectorClick(subSector)}
                                >
                                    <div className="flex justify-between items-center">
                                        <span>{subSector.label}</span>
                                        {subSector.subsections && (
                                            <ChevronRight className="h-4 w-4" />
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Industries and Business Types */}
                {activeIndustries && (
                    <div className='-translate-y-8'>
                        {/* Industries Section */}
                        <div className='bg-white p-2 w-full'>
                            <p className='text-md text-slate-900 font-medium text-center'>Industries</p>
                        </div>
                        <div className="space-y-2">
                            {activeIndustries.map((industry) => (
                                <div
                                    key={industry.id}
                                    className={`p-3 rounded cursor-pointer ${activeIndustry === industry.id
                                            ? 'bg-[#AB8B1A] text-white'
                                            : 'hover:bg-gray-50'
                                        }`}
                                    onClick={() => handleIndustryClick(industry)}
                                >
                                    <div className="flex justify-between items-center">
                                        <span>{industry.label}</span>
                                        {industry.subsections && (
                                            <ChevronRight className="h-4 w-4" />
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Business Types Section - shows only when an industry with subsections is selected */}
                        {activeBusinessTypes && (
                            <div className="mt-6">
                                <div className='bg-white p-2 w-full'>
                                    <p className='text-md text-slate-900 font-medium text-center'>Business Type</p>
                                </div>
                                <div className="space-y-2">
                                    {activeBusinessTypes.map((businessType) => (
                                        <div
                                            key={businessType.id}
                                            className={`p-3 rounded cursor-pointer ${b2bData.selectedBusinessType === businessType.id
                                                    ? 'bg-[#AB8B1A] text-white'
                                                    : 'hover:bg-gray-50'
                                                }`}
                                            onClick={() => handleBusinessTypeClick(businessType)}
                                        >
                                            <span>{businessType.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>

            <div className="mt-24 flex items-center justify-end space-x-3">
                <Button variant="text" className="text-sm uppercase border border-blue-900" onClick={onPrevious}>
                    Back
                </Button>
                <Button
                    variant="default"
                    className="text-sm uppercase"
                    onClick={onNext}
                    disabled={!b2bData.selectedSector}
                >
                    Next
                </Button>
            </div>
        </div>
    );
}