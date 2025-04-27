import { offeredSolutions } from "~/constants/solutions";
import { SolutionTag } from "~/views/home";
import { Button } from "~/components/ui/button";
import { useState } from 'react'
import Formtab from "~/components/form/tab";

interface Option {
  id: string;
  label: string;
}

const Scratch = () => {
    const buttons = ["Customer Segment", "Value Proposition", "Customer Relationship Management", "Customer Channels", "Key Resources", "Key Activities", "Key Partnerships", "Cost Structure", "Revenue Streams"]

    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  
  const options: Option[] = [
    { id: 'b2b', label: 'B2B (Business-to-Business)' },
    { id: 'government', label: 'Government (B2G)' },
    { id: 'b2c', label: 'B2C (Business-to-Consumer)' },
    { id: 'non-profit', label: 'Non-profit Organizations' },
    { id: 'others', label: 'Others' }
  ];
  
  const toggleOption = (id: string) => {
    if (selectedOptions.includes(id)) {
      setSelectedOptions(selectedOptions.filter(optionId => optionId !== id));
    } else {
      setSelectedOptions([...selectedOptions, id]);
    }
  };

    return (
        <div>
            {/* <div className="bg-gray-50 w-full flex items-stretch space-x-2 py-2">
                {buttons.map((button, index) => {
                    const isActive = index === 0;

                    return (
                    <button
                        key={index}
                        className={`w-36 py-2 text-xs rounded 
                        ${isActive ? "bg-[#AB8B1A] text-white" : "text-black bg-gray-200"}`}
                    >
                        {button}
                    </button>
                    );
                })}
            </div>

            <div className="bg-[#0A103E] text-white px-6 py-4 pl-10">
                <h1 className="text-3xl font-semibold">Target Customer Segments</h1>
                <p className="text-sm mt-2">Answer a question to refine insights that align with your industry, risks, and strategies.</p>
            </div> */}

            <Formtab />

            <div className="min-h-screen grid grid-cols-1 md:grid-cols-[22rem_1fr] 2xl:grid-cols-[26rem_1fr]">
                <div className="border-r border-gray-300 pt-24">
                    <div className="w-[70%] mx-auto">
                        <div className="flex flex-col items-center justify-center gap-2 bg-gray p-2 w-full rounded-lg">
                        <div className="flex-[0.4] flex flex-col gap-2">
                            <img
                            src={offeredSolutions[8].icon}
                            alt={offeredSolutions[8].name}
                            className="w-[52px] h-[48px]"
                            />
                            <SolutionTag solution={offeredSolutions[8]} />
                        </div>

                        <div className="flex-1 flex items-center justify-start">
                            <span className="font-normal text-sm">
                            {offeredSolutions[8].description}
                            </span>
                        </div>

                        <Button variant="default" className="mt-4">Subscribe to Integr8</Button>
                    </div>

                    <div className="text-center">
                        <Button variant="default" className="text-sm uppercase mt-24">Save & Continue Later</Button>
                    </div>
                    </div>
                </div>

                <div>
                    <h3 className="text-md font-medium mb-6 pt-6 pl-6">Question</h3>

                    <hr className="w-[70%] border border-gray-300" />

                    <div className="pl-6">
                        <h3 className="text-md font-medium mb-6 pt-6">Who are your target customers? (select all that applies)</h3>

                        <div className="space-y-6">
                            {options.map((option) => (
                            <div key={option.id} className="flex items-center">
                                <div className="relative">
                                <input
                                    type="checkbox"
                                    id={option.id}
                                    className="absolute opacity-0 w-6 h-6 cursor-pointer z-10"
                                    checked={selectedOptions.includes(option.id)}
                                    onChange={() => toggleOption(option.id)}
                                />
                                <div 
                                    className={`w-6 h-6 rounded-full transition-colors duration-200 ${
                                    selectedOptions.includes(option.id) 
                                        ? 'bg-blue-800 border-2 border-blue-300' 
                                        : 'bg-gray-300'
                                    }`}
                                />
                                {selectedOptions.includes(option.id) && (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-2 h-2 rounded-full bg-white"></div>
                                    </div>
                                )}
                                </div>
                                <label 
                                htmlFor={option.id} 
                                className="ml-3 text-gray-700 font-medium cursor-pointer"
                                >
                                {option.label}
                                </label>
                            </div>
                            ))}
                        </div>

                        <div className="mt-24 flex items-center justify-end space-x-3 pr-6">
                            <Button variant="text" className="text-sm uppercase mt-24 border border-blue-900">Back</Button>
                            <Button variant="default" className="text-sm uppercase mt-24">Next</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Scratch;