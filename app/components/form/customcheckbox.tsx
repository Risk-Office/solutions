import React from "react";
import type { Option } from "~/routes/form/step1";

interface CustomCheckboxProps {
    options: Option[];
    selected: string[];
    onChange: (selected: string[]) => void;
}

export const CustomCheckbox = ({ options, selected, onChange }: CustomCheckboxProps) => {
    const handleChange = (id: string) => {
        const updatedSelection = selected.includes(id)
            ? selected.filter(item => item !== id)
            : [...selected, id];
        onChange(updatedSelection);
    };

    return (
        <div className="space-y-8">
            {options.map((option) => (
                <div key={option.id} className="flex items-center">
                    <div className="relative">
                        <input
                            type="checkbox"
                            id={option.id}
                            className="absolute opacity-0 w-6 h-6 cursor-pointer z-10"
                            checked={selected.includes(option.id)}
                            onChange={() => handleChange(option.id)}
                        />
                        <div
                            className={`w-6 h-6 rounded-full transition-colors duration-200 ${
                                selected.includes(option.id)
                                    ? "bg-blue-800 border-2 border-blue-300"
                                    : "bg-gray-300"
                            }`}
                        />
                        {selected.includes(option.id) && (
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
    );
};
