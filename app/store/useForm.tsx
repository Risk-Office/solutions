import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface SegmentData {
    b2bData: {
        businessTypes: string[];
    };
    b2cData: {
        dataTypes: string[];
        demographics: {
            ageRange?: string[];
            gender?: string[];
            householdType?: string[];
            householdIncome?: string[];
            homeOwnership?: string[];
            residenceType?: string[];
            residenceLength?: string[];
            maritalStatus?: string[];
            dependents?: string[];
            employment?: string[];
            education?: string[];
            occupation?: string[];
            ethnicity?: string[];
            country?: string;
            nationality?: string;
            state?: string;
            city?: string;
            areaType?: string;
            language?: string;
            journeyStage?: string;
            newVisitors?: string;
            firstTimeBuyers?: string;
            returningCustomers?: string;
            churnedCustomers?: string;
        };
    };
    governmentData: {
        types: string[];
        departments: string[];
    };
    nonProfitData: {
        missionFocus: string[];
        otherMission?: string;
        employeeSize: string[];
        volunteerSize: string[];
        fundingSources: string[];
        otherFunding?: string;
        operationalMaturity: string[];
        programModel: string[];
        geographicalReach: string[];
        legalStructure: string[];
    };
}

export interface FormData {
    currentStep: number;
    customerSegments: string[];
    valueProposition: {
        costEfficiency: string[];
        quality: string[];
        convenience: string[];
        innovation: string[];
    };
    segmentData: SegmentData;
}

export const useFormStore = create<{
    formData: FormData;
    updateFormData: (data: Partial<Omit<FormData, 'currentStep'>>) => void;
    setCurrentStep: (step: number) => void;
    updateSegmentData: (segment: keyof SegmentData, data: Partial<SegmentData[keyof SegmentData]>) => void;
}>()(
    persist(
        (set) => ({
            formData: {
                currentStep: 1,
                customerSegments: [],
                valueProposition: {
                    costEfficiency: [],
                    quality: [],
                    convenience: [],
                    innovation: []
                },
                segmentData: {
                    b2bData: {
                        businessTypes: []
                    },
                    b2cData: {
                        dataTypes: [],
                        demographics: {}
                    },
                    governmentData: {
                        types: [],
                        departments: []
                    },
                    nonProfitData: {
                        missionFocus: [],
                        otherMission: '',
                        employeeSize: [],
                        volunteerSize: [],
                        fundingSources: [],
                        otherFunding: '',
                        operationalMaturity: [],
                        programModel: [],
                        geographicalReach: [],
                        legalStructure: []
                    }
                }
            },
            updateFormData: (data) =>
                set((state) => ({
                    formData: { ...state.formData, ...data }
                })),
            setCurrentStep: (step) =>
                set((state) => ({
                    formData: { ...state.formData, currentStep: step }
                })),
            updateSegmentData: (segment, data) =>
                set((state) => ({
                    formData: {
                        ...state.formData,
                        segmentData: {
                            ...state.formData.segmentData,
                            [segment]: {
                                ...state.formData.segmentData[segment],
                                ...data
                            }
                        }
                    }
                }))
        }),
        {
            name: 'form-storage'
        }
    )
);