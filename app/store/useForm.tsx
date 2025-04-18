import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface SegmentData {
    b2bData: {
        businessTypes: string[];
        selectedSector?: string;
        selectedSubSector?: string;
        selectedIndustry?: string;
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
        customization: string[];
        riskReduction: string[];
        brand: string[];
    };
    painPoints: {
        financial: string[];
        operational: string[];
        support: string[];
        product: string[];
    };
    customerRelations: {
        crm: string[];
        customerService: string[];
        personalizedComm: string[];
        loyalty: string[];
        feedback: string[];
        relationshipBuilding: string[];
        socialMedia: string[];
        branding: string[];
        afterSales: string[];
    };
    customerChannels: {
        selectedChannel: string;
        directChannels: string[];
        indirectChannels: string[];
        digitalChannels: string[];
        physicalChannels: string[];
        hybridChannels: string[];
    };
    segmentData: SegmentData;
    keyResources: {
        humanResources: string[];
        physicalResources: string[];
        financialResources: string[];
        intellectualResources: string[];
        technologicalResources: string[];
        regulatoryResources: string[];
    };
    businessActivities: {
        administrativeServices: string[];
        consultancyServices: string[];
        creativeServices: string[];
        customerSupportServices: string[];
    };
    keyPartnerships: {
        operationsAndSupplyChain: string[];
        financialAndLegal: string[];
        technologyAndIT: string[];
        marketingAndSales: string[];
        humanResources: string[];
        facilityAndInfrastructure: string[];
        industrySpecific: string[];
    };
    costStructure: {
        fixedCosts: string[];
        variableCosts: string[];
        semiVariableCosts: string[];
        financingCosts: string[];
        complianceCosts: string[];
        researchAndDevelopment: string[];
        customerAcquisition: string[];
    };
    revenueStreams: string[];
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
                    innovation: [],
                    customization: [],
                    riskReduction: [],
                    brand: []
                },
                painPoints: {
                    financial: [],
                    operational: [],
                    support: [],
                    product: []
                },
                customerRelations: {
                    crm: [],
                    customerService: [],
                    personalizedComm: [],
                    loyalty: [],
                    feedback: [],
                    relationshipBuilding: [],
                    socialMedia: [],
                    branding: [],
                    afterSales: []
                },
                customerChannels: {
                    selectedChannel: '',
                    directChannels: [],
                    indirectChannels: [],
                    digitalChannels: [],
                    physicalChannels: [],
                    hybridChannels: []
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
                },
                keyResources: {
                    humanResources: [],
                    physicalResources: [],
                    financialResources: [],
                    intellectualResources: [],
                    technologicalResources: [],
                    regulatoryResources: []
                },
                businessActivities: {
                    administrativeServices: [],
                    consultancyServices: [],
                    creativeServices: [],
                    customerSupportServices: []
                },
                keyPartnerships: {
                    operationsAndSupplyChain: [],
                    financialAndLegal: [],
                    technologyAndIT: [],
                    marketingAndSales: [],
                    humanResources: [],
                    facilityAndInfrastructure: [],
                    industrySpecific: []
                },
                costStructure: {
                    fixedCosts: [],
                    variableCosts: [],
                    semiVariableCosts: [],
                    financingCosts: [],
                    complianceCosts: [],
                    researchAndDevelopment: [],
                    customerAcquisition: []
                },
                revenueStreams: []
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