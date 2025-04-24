import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Define types for your form data
export interface FormData {
    customerSegments: string[];
    b2bData?: Record<string, any>;
    governmentData?: Record<string, any>;
    b2cData?: Record<string, any>;
    nonProfitData?: Record<string, any>;
    othersData?: Record<string, any>;
    currentStep: number;
}

// Define the store interface
interface FormStore {
    formData: FormData;
    updateFormData: (newData: Partial<Omit<FormData, 'currentStep'>>) => void;
    updateSegmentData: (segment: string, data: Record<string, any>) => void;
    setCurrentStep: (step: number) => void;
    resetForm: () => void;
}

// Initial form data
const initialFormData: FormData = {
    customerSegments: [],
    // Initialize other fields as needed
    currentStep: 1,
};

// Create the Zustand store with persistence
export const useFormStore = create<FormStore>()(
    persist(
        (set) => ({
            formData: initialFormData,

            updateFormData: (newData) =>
                set((state) => ({
                    formData: {
                        ...state.formData,
                        ...newData,
                    },
                })),

            updateSegmentData: (segment, data) =>
                set((state) => ({
                    formData: {
                        ...state.formData,
                        [`${segment}Data`]: {
                            ...(typeof state.formData[`${segment}Data` as keyof FormData] === 'object' && state.formData[`${segment}Data` as keyof FormData] !== null
                                ? state.formData[`${segment}Data` as keyof FormData]
                                : {}),
                            ...data,
                        },
                    },
                })),

            setCurrentStep: (step) =>
                set((state) => ({
                    formData: {
                        ...state.formData,
                        currentStep: step,
                    },
                })),

            resetForm: () =>
                set(() => ({
                    formData: initialFormData,
                })),
        }),
        {
            name: 'form-storage',
            partialize: (state) => ({ formData: state.formData }),
        }
    )
);