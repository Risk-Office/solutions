import { FileText, Bot } from "lucide-react";

const InsightPage = () => {
    return (
        <div className="bg-gray-50 py-16 px-2 min-h-screen">
            <div className="bg-white px-10 py-12 rounded-xl max-w-3xl mx-auto">
                <h1 className="text-2xl font-semibold text-center">Choose How You Want to Provide Information</h1>
                <p className="text-base mt-2 text-center">Select a method that works best for you to share insights efficiently.</p>

                <div className="mt-10 space-y-5">
                    <div className="bg-gray-50 py-4 rounded-lg px-4 py flex items-center space-x-3">
                        <FileText />
                        <div>
                            <h1 className="text-lg font-semibold">Prefilled Templates</h1>
                            <p className="italic text-sm text-gray-400">Select from pre-filled templates with structured fields for quick input</p>
                        </div>
                    </div>

                    <div className="bg-gray-50 py-4 rounded-lg px-4 py flex items-center space-x-3">
                        <FileText />
                        <div>
                            <h1 className="text-lg font-semibold">Start from scratch</h1>
                            <p className="italic text-sm text-gray-400">Manually enter details with full customization</p>
                        </div>
                    </div>

                    <div className="bg-gray-50 py-4 rounded-lg px-4 py flex items-center space-x-3">
                        <Bot />
                        <div>
                            <h1 className="text-lg font-semibold">AI Chatbot Assistance</h1>
                            <p className="italic text-sm text-gray-400">Answer guided questions, and AI will format your input</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <h1>Insight</h1> */}
        </div>
    )
}

export default InsightPage;