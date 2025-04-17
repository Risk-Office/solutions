import { Button } from "../ui/button"
import { Check } from "lucide-react"
import { useLocation } from "react-router-dom"

const Formtab = () => {
    const location = useLocation();
    const isStep3 = location.pathname === "/form/step3";
    
    const buttons = ["Customer Segment", "Value Proposition", "Customer Relationship Management", "Customer Channels", "Key Resources", "Key Activities", "Key Partnerships", "Cost Structure", "Revenue Streams"]
    return (
        <div>
            <div className="bg-gray-50 w-full flex items-stretch space-x-2 py-2">
                {buttons.map((button, index) => {
                    const isCustomerSegment = index === 0;
                    const isValueProposition = index === 1;
                    const buttonStyle = isStep3 
                        ? (isCustomerSegment 
                            ? "bg-[#0A103E] text-white flex items-center justify-center gap-2"
                            : isValueProposition 
                                ? "bg-[#AB8B1A] text-white" 
                                : "text-black bg-gray-200")
                        : (isCustomerSegment 
                            ? "bg-[#AB8B1A] text-white"
                            : "text-black bg-gray-200");

                    return (
                        <button
                            key={index}
                            className={`w-36 py-2 text-xs rounded ${buttonStyle}`}
                        >
                            {isStep3 && isCustomerSegment && <Check className="w-4 h-4" />}
                            {button}
                        </button>
                    );
                })}
            </div>

            {/* <div className="bg-[#0A103E] text-white px-6 py-4 pl-10">
                <h1 className="text-3xl font-semibold">Target Customer Segments</h1>
                <p className="text-sm mt-2">Answer a question to refine insights that align with your industry, risks, and strategies.</p>
            </div> */}
        </div>
    )
}

export default Formtab;