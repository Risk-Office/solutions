import { create } from 'zustand';

// Keep your existing interfaces the same
export interface SegmentData {
    b2bData: {
        businessTypes: string[];
        selectedSector?: string;
        selectedSubSector?: string;
        selectedIndustry?: string;
        selectedBusinessType?: string;
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

const STORAGE_KEY = 'saved-form-data';

// Default initial state
const getDefaultFormState = (): FormData => ({
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
        hybridChannels: [],
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
});

// Create the store without persist middleware
export const useFormStore = create<{
    formData: FormData;
    updateFormData: (data: Partial<Omit<FormData, 'currentStep'>>) => void;
    setCurrentStep: (step: number) => void;
    updateSegmentData: (segment: keyof SegmentData, data: Partial<SegmentData[keyof SegmentData]>) => void;
    saveFormToStorage: () => void;
    loadSavedForm: () => boolean;
    clearSavedForm: () => void;
    resetForm: () => void;
}>((set, get) => ({
    formData: getDefaultFormState(),

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
        })),

    // Explicitly save the current form state to localStorage
    saveFormToStorage: () => {
        const currentFormData = get().formData;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(currentFormData));
    },

    // Load saved form data from localStorage
    loadSavedForm: () => {
        const savedData = localStorage.getItem(STORAGE_KEY);
        if (savedData) {
            try {
                const parsedData = JSON.parse(savedData);
                set({ formData: parsedData });
                return true;
            } catch (error) {
                console.error('Error loading saved form data:', error);
                return false;
            }
        }
        return false;
    },

    // Clear saved form data from localStorage
    clearSavedForm: () => {
        localStorage.removeItem(STORAGE_KEY);
    },

    // Reset the form to default values
    resetForm: () => {
        set({ formData: getDefaultFormState() });
    }
}));