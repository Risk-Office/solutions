import { Button } from "~/components/ui/button";
import { useFormNavigation, type NavigationConfig } from "./navigation";

interface FormNavigationProps extends NavigationConfig {
    onNext?: () => void;
    onPrevious?: () => void;
    // nextDisabled?: boolean;
    previousDisabled?: boolean;
}

export function FormNavigation({
    currentStep,
    currentTab,
    currentSection,
    totalSections,
    nextTab,
    tabs,
    onComplete,
    onNext,
    onPrevious,
    // nextDisabled = false,
    previousDisabled = false
}: FormNavigationProps) {
    const { handleNext, handlePrevious } = useFormNavigation({
        currentStep,
        currentTab,
        currentSection,
        totalSections,
        nextTab,
        tabs,
        onComplete
    });

    const handleNextClick = () => {
        const result = handleNext();
        if (onNext) onNext();
        
        // Handle section navigation
        if (result.type === 'section') {
            // Update section state in parent component
            return;
        }
    };

    const handlePreviousClick = () => {
        const result = handlePrevious();
        if (onPrevious) onPrevious();
        
        // Handle section navigation
        if (result.type === 'section') {
            // Update section state in parent component
            return;
        }
    };

    return (
        <div className="flex items-center justify-end space-x-3">
            <Button
                variant="text"
                className="text-sm uppercase border border-blue-900"
                onClick={handlePreviousClick}
                disabled={previousDisabled || currentStep === 1}
            >
                Back
            </Button>
            <Button
                variant="default"
                className="text-sm uppercase"
                onClick={handleNextClick}
                // disabled={nextDisabled}
            >
                {currentSection && totalSections && currentSection < totalSections
                    ? 'Continue'
                    : 'Next'}
            </Button>
        </div>
    );
} 