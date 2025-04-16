import { CustomCheckbox } from "~/components/form/customcheckbox";
import { Button } from "~/components/ui/button";
import { useFormStore } from "~/store/useForm";
import { useState } from "react";
import { 
    FormInput,
    FormSelect,
    FormSelectContent,
    FormSelectItem,
    FormSelectTrigger,
    FormSelectValue,
} from "~/components/form/formComponents";

interface B2CSegmentProps {
    onNext: () => void;
    onPrevious: () => void;
}

export default function B2CSegment({ onNext, onPrevious }: B2CSegmentProps) {
    const { formData, updateSegmentData } = useFormStore();
    const [currentLayer, setCurrentLayer] = useState(1);
    const [activeTab, setActiveTab] = useState('age');

    const dataTypes = [
        { id: 'demographic', label: 'Demographic: Age, gender, income' },
        { id: 'geographic', label: 'Geographic: ZIP code, Country' },
        { id: 'behavioral', label: 'Behavioral: Purchase history, site visits' },
        { id: 'psychographic', label: 'Psychographic: Survey responses, brand values' },
        { id: 'technographic', label: 'Technographic: Device, OS, app usage' },
        { id: 'journey', label: 'Journey stage: new vs returning customers' },
        { id: 'events', label: 'Life events: baby registry, moving address' },
        { id: 'financial', label: 'Financial: CLV, discount used, payment methods' }
    ];

    const tabs = [
        { id: 'age', label: 'Age Range/Gender Identity' },
        { id: 'house', label: 'House' },
        { id: 'status', label: 'Status' },
        { id: 'country', label: 'Country' },
        { id: 'education', label: 'Education Level' },
        { id: 'ethnicity', label: 'Ethnicity or Race' },
        { id: 'others', label: 'Others' }
    ];

    const ageOptions = [
        { id: 'under18', label: '<18' },
        { id: '18-40', label: '18-40' },
        { id: '40-60', label: '40-60' },
        { id: '60plus', label: '60+ years' }
    ];

    const genderOptions = [
        { id: 'male', label: 'Male' },
        { id: 'female', label: 'Female' },
        { id: 'others', label: 'Others' }
    ];

    const householdTypeOptions = [
        { id: 'single', label: 'Single' },
        { id: 'couple', label: 'Couple' },
        { id: 'family', label: 'Family' }
    ];

    const homeOwnershipOptions = [
        { id: 'own', label: 'Own' },
        { id: 'rent', label: 'Rent' }
    ];

    const residenceTypeOptions = [
        { id: 'house', label: 'House' },
        { id: 'apartment', label: 'Apartment' },
        { id: 'shared', label: 'Shared Housing' }
    ];

    const residenceLengthOptions = [
        { id: 'less2', label: '<2' },
        { id: '2-5', label: '2-5' },
        { id: '5plus', label: '5+' }
    ];

    const maritalOptions = [
        { id: 'single', label: 'Single' },
        { id: 'married', label: 'Married' },
        { id: 'divorced', label: 'Divorced' },
        { id: 'widowed', label: 'Widowed' }
    ];

    const dependentsOptions = [
        { id: 'less2', label: '<2' },
        { id: '2-5', label: '2-5' },
        { id: '5plus', label: '5+' }
    ];

    const employmentOptions = [
        { id: 'employed', label: 'Employed' },
        { id: 'student', label: 'Student' },
        { id: 'self-employed', label: 'Self-employed' },
        { id: 'unemployed', label: 'Unemployed' },
        { id: 'retired', label: 'Retired' }
    ];

    const educationOptions = [
        { id: 'highschool', label: 'High School' },
        { id: 'college', label: 'College' },
        { id: 'graduate', label: 'Graduate' },
        { id: 'postgraduate', label: 'Post Graduate' }
    ];

    const occupationOptions = [
        { id: 'profession', label: 'Profession' },
        { id: 'jobsector', label: 'Job Sector' }
    ];

    const ethnicityOptions = [
        { id: 'asian', label: 'Asian' },
        { id: 'hispanic', label: 'Hispanic' },
        { id: 'caucasian', label: 'Caucasian' },
        { id: 'indigenous', label: 'Indigenous (US/Australian)' },
        { id: 'black', label: 'Black' },
        { id: 'others', label: 'Others' }
    ];

    const countryOptions = [
        { value: 'us', label: 'United States' },
        { value: 'uk', label: 'United Kingdom' },
        { value: 'ca', label: 'Canada' },
        { value: 'au', label: 'Australia' },
        { value: 'other', label: 'Other' }
    ];

    const languageOptions = [
        { value: 'en', label: 'English' },
        { value: 'es', label: 'Spanish' },
        { value: 'fr', label: 'French' },
        { value: 'de', label: 'German' },
        { value: 'other', label: 'Other' }
    ];

    const handleDataTypeChange = (selected: string[]) => {
        updateSegmentData('b2c', { dataTypes: selected });
    };

    const handleDemographicChange = (field: string, value: any) => {
        updateSegmentData('b2c', { demographics: { ...formData.b2cData?.demographics, [field]: value } });
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

    const renderDemographicContent = () => {
        switch (activeTab) {
            case 'age':
                return (
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-2">Age Range (Select all that applies)</label>
                            <CustomCheckbox
                                options={ageOptions}
                                selected={formData.b2cData?.demographics?.ageRange || []}
                                onChange={(selected) => handleDemographicChange('ageRange', selected)}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Gender Identity (Select all that applies)</label>
                            <CustomCheckbox
                                options={genderOptions}
                                selected={formData.b2cData?.demographics?.gender || []}
                                onChange={(selected) => handleDemographicChange('gender', selected)}
                            />
                        </div>
                    </div>
                );
            case 'house':
                return (
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-2">Household Type (Select all that applies)</label>
                            <CustomCheckbox
                                options={householdTypeOptions}
                                selected={formData.b2cData?.demographics?.householdType || []}
                                onChange={(selected) => handleDemographicChange('householdType', selected)}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Household Income Bracket</label>
                            <FormInput
                                type="text"
                                placeholder="Enter household income bracket"
                                value={formData.b2cData?.demographics?.householdIncome || ''}
                                onChange={(e) => handleDemographicChange('householdIncome', e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Home Ownership Status (Select all that applies)</label>
                            <CustomCheckbox
                                options={homeOwnershipOptions}
                                selected={formData.b2cData?.demographics?.homeOwnership || []}
                                onChange={(selected) => handleDemographicChange('homeOwnership', selected)}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Type of Residence (Select all that applies)</label>
                            <CustomCheckbox
                                options={residenceTypeOptions}
                                selected={formData.b2cData?.demographics?.residenceType || []}
                                onChange={(selected) => handleDemographicChange('residenceType', selected)}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Length of Residence (Select all that applies)</label>
                            <CustomCheckbox
                                options={residenceLengthOptions}
                                selected={formData.b2cData?.demographics?.residenceLength || []}
                                onChange={(selected) => handleDemographicChange('residenceLength', selected)}
                            />
                        </div>
                    </div>
                );
            case 'status':
                return (
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-2">Marital Status (Select all that applies)</label>
                            <CustomCheckbox
                                options={maritalOptions}
                                selected={formData.b2cData?.demographics?.maritalStatus || []}
                                onChange={(selected) => handleDemographicChange('maritalStatus', selected)}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Number of Dependents (Select all that applies)</label>
                            <CustomCheckbox
                                options={dependentsOptions}
                                selected={formData.b2cData?.demographics?.dependents || []}
                                onChange={(selected) => handleDemographicChange('dependents', selected)}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Employment Status (Select all that applies)</label>
                            <CustomCheckbox
                                options={employmentOptions}
                                selected={formData.b2cData?.demographics?.employment || []}
                                onChange={(selected) => handleDemographicChange('employment', selected)}
                            />
                        </div>
                    </div>
                );
            case 'country':
                return (
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-2">Country</label>
                            <FormSelect value={formData.b2cData?.demographics?.country || ''} onValueChange={(value) => handleDemographicChange('country', value)}>
                                <FormSelectTrigger>
                                    <FormSelectValue placeholder="Select country" />
                                </FormSelectTrigger>
                                <FormSelectContent>
                                    {countryOptions.map((country) => (
                                        <FormSelectItem key={country.value} value={country.value}>
                                            {country.label}
                                        </FormSelectItem>
                                    ))}
                                </FormSelectContent>
                            </FormSelect>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Nationality/Citizenship</label>
                            <FormInput
                                type="text"
                                placeholder="Enter nationality/citizenship"
                                value={formData.b2cData?.demographics?.nationality || ''}
                                onChange={(e) => handleDemographicChange('nationality', e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">State/Province</label>
                            <FormInput
                                type="text"
                                placeholder="Enter state/province"
                                value={formData.b2cData?.demographics?.state || ''}
                                onChange={(e) => handleDemographicChange('state', e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">City or Postal Code</label>
                            <FormInput
                                type="text"
                                placeholder="Enter city or postal code"
                                value={formData.b2cData?.demographics?.city || ''}
                                onChange={(e) => handleDemographicChange('city', e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Urban/Suburban/Rural</label>
                            <FormInput
                                type="text"
                                placeholder="Enter area type"
                                value={formData.b2cData?.demographics?.areaType || ''}
                                onChange={(e) => handleDemographicChange('areaType', e.target.value)}
                            />
                        </div>
                    </div>
                );
            case 'education':
                return (
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-2">Education Level (Select all that applies)</label>
                            <CustomCheckbox
                                options={educationOptions}
                                selected={formData.b2cData?.demographics?.education || []}
                                onChange={(selected) => handleDemographicChange('education', selected)}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Occupation (Select all that applies)</label>
                            <CustomCheckbox
                                options={occupationOptions}
                                selected={formData.b2cData?.demographics?.occupation || []}
                                onChange={(selected) => handleDemographicChange('occupation', selected)}
                            />
                        </div>
                    </div>
                );
            case 'ethnicity':
                return (
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-2">Ethnicity or Race (Select all that applies)</label>
                            <CustomCheckbox
                                options={ethnicityOptions}
                                selected={formData.b2cData?.demographics?.ethnicity || []}
                                onChange={(selected) => handleDemographicChange('ethnicity', selected)}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Language Preference</label>
                            <FormSelect value={formData.b2cData?.demographics?.language || ''} onValueChange={(value) => handleDemographicChange('language', value)}>
                                <FormSelectTrigger>
                                    <FormSelectValue placeholder="Select language preference" />
                                </FormSelectTrigger>
                                <FormSelectContent>
                                    {languageOptions.map((language) => (
                                        <FormSelectItem key={language.value} value={language.value}>
                                            {language.label}
                                        </FormSelectItem>
                                    ))}
                                </FormSelectContent>
                            </FormSelect>
                        </div>
                    </div>
                );
            case 'others':
                return (
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-2">Customer Journey Stage</label>
                            <FormInput
                                type="text"
                                placeholder="Enter customer journey stage"
                                value={formData.b2cData?.demographics?.journeyStage || ''}
                                onChange={(e) => handleDemographicChange('journeyStage', e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">New Visitors</label>
                            <FormInput
                                type="text"
                                placeholder="Enter new visitors information"
                                value={formData.b2cData?.demographics?.newVisitors || ''}
                                onChange={(e) => handleDemographicChange('newVisitors', e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">First Time Buyers</label>
                            <FormInput
                                type="text"
                                placeholder="Enter first time buyers information"
                                value={formData.b2cData?.demographics?.firstTimeBuyers || ''}
                                onChange={(e) => handleDemographicChange('firstTimeBuyers', e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Returning Customers</label>
                            <FormInput
                                type="text"
                                placeholder="Enter returning customers information"
                                value={formData.b2cData?.demographics?.returningCustomers || ''}
                                onChange={(e) => handleDemographicChange('returningCustomers', e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Churned Customers</label>
                            <FormInput
                                type="text"
                                placeholder="Enter churned customers information"
                                value={formData.b2cData?.demographics?.churnedCustomers || ''}
                                onChange={(e) => handleDemographicChange('churnedCustomers', e.target.value)}
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
                <h3 className="text-lg font-medium">Questions for B2C (Business-to-Consumer)</h3>
                <span className="text-sm text-gray-500">{currentLayer}/2</span>
            </div>

            {currentLayer === 1 && (
                <div className="mb-4">
                    <label className="block text-md font-medium mb-3">What data types does your company keep on retail customers? (select all that applies)</label>
                    <CustomCheckbox
                        options={dataTypes}
                        selected={formData.b2cData?.dataTypes || []}
                        onChange={handleDataTypeChange}
                    />
                </div>
            )}

            {currentLayer === 2 && (
                <div>
                    <p className="text-md mb-3 font-medium">Demographics</p>

                    <div className="flex gap-6">
                        {/* Vertical Tabs Sidebar */}
                        <div className="w-64 border-r border-gray-200">
                            <div className="flex flex-col space-y-1">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        className={`px-4 py-3 text-left text-sm font-medium ${activeTab === tab.id
                                                ? 'bg-gray-100 border-l-4 border-gray-900 text-gray-700'
                                                : 'text-gray-600 hover:bg-gray-100'
                                            }`}
                                        onClick={() => setActiveTab(tab.id)}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="flex-1">
                            {renderDemographicContent()}
                        </div>
                    </div>
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