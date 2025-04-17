import { useNavigate } from "react-router";
import { useFormStore } from "~/store/useForm";

export interface NavigationConfig {
    currentStep: number;
    currentTab?: string;
    currentSection?: number;
    totalSections?: number;
    nextTab?: string;
    tabs?: string[];
    onComplete?: () => void;
}

export function useFormNavigation(config: NavigationConfig) {
    const navigate = useNavigate();
    const { setCurrentStep } = useFormStore();

    const handleNext = () => {
        // If there are sections and we're not at the last section
        if (config.totalSections && config.currentSection && config.currentSection < config.totalSections) {
            // Navigate to next section
            return { type: 'section' as const, section: config.currentSection + 1 };
        }

        // If there are tabs and we're not at the last tab
        if (config.tabs && config.currentTab) {
            const currentIndex = config.tabs.indexOf(config.currentTab);
            if (currentIndex < config.tabs.length - 1) {
                // Navigate to next tab
                return { type: 'tab' as const, tab: config.tabs[currentIndex + 1] };
            }
        }

        // If we have a next tab defined
        if (config.nextTab) {
            return { type: 'tab' as const, tab: config.nextTab };
        }

        // If we're at the last step, call onComplete
        if (config.onComplete) {
            config.onComplete();
            return { type: 'complete' as const };
        }

        // Otherwise, move to next step
        const nextStep = config.currentStep + 1;
        setCurrentStep(nextStep);
        navigate(`/form/step${nextStep}`);
        return { type: 'step' as const, step: nextStep };
    };

    const handlePrevious = () => {
        // If there are sections and we're not at the first section
        if (config.totalSections && config.currentSection && config.currentSection > 1) {
            // Navigate to previous section
            return { type: 'section' as const, section: config.currentSection - 1 };
        }

        // If there are tabs and we're not at the first tab
        if (config.tabs && config.currentTab) {
            const currentIndex = config.tabs.indexOf(config.currentTab);
            if (currentIndex > 0) {
                // Navigate to previous tab
                return { type: 'tab' as const, tab: config.tabs[currentIndex - 1] };
            }
        }

        // If we're at the first step, do nothing
        if (config.currentStep === 1) {
            return { type: 'none' as const };
        }

        // Otherwise, move to previous step
        const prevStep = config.currentStep - 1;
        setCurrentStep(prevStep);
        navigate(`/form/step${prevStep}`);
        return { type: 'step' as const, step: prevStep };
    };

    return { handleNext, handlePrevious };
} 