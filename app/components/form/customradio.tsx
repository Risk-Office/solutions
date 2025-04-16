import React from "react";

type Option = {
    id: string;
    label: string;
};

type CustomRadioProps = {
    options: Option[];
    selected: string;
    onChange: (id: string) => void;
};

export const CustomRadio: React.FC<CustomRadioProps> = ({
    options,
    selected,
    onChange,
}) => {
    return (
        <div className="space-y-6">
            {options.map((option) => (
                <div key={option.id} className="flex items-center mb-2">
                    <div className="relative">
                        <input
                            type="radio"
                            id={option.id}
                            name="custom-radio"
                            className="absolute opacity-0 w-6 h-6 cursor-pointer z-10"
                            checked={selected === option.id}
                            onChange={() => onChange(option.id)}
                        />
                        <div
                            className={`w-6 h-6 rounded-full transition-colors duration-200 ${selected === option.id
                                    ? "bg-blue-800 border-2 border-blue-300"
                                    : "bg-gray-300"
                                }`}
                        />
                        {selected === option.id && (
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