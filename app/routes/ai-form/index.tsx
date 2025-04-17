import { useState } from "react";
import { Bot, Mic, Send, MoreVertical, Upload } from "lucide-react";
import { Button } from "~/components/ui/button";
import { CustomCheckbox } from "~/components/form/customcheckbox";

interface Message {
    type: 'ai' | 'user';
    content: string;
    options?: { id: string; label: string; }[];
    selected?: string[];
}

export default function AiForm() {
    const [isUploadOpen, setIsUploadOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [messages, setMessages] = useState<Message[]>([
        {
            type: 'ai',
            content: 'Welcome! I am Mojibade, your assistant through this process....I\'ll be asking a few questions to better understand your business model. Let\'s start!',
        },
        {
            type: 'ai',
            content: 'Who are your target customers? (select all that applies)',
            options: [
                { id: 'b2b', label: 'B2B (Business-to-Business)' },
                { id: 'government', label: 'Government (B2G)' },
                { id: 'b2c', label: 'B2C (Business-to-Consumer)' },
                { id: 'non-profit', label: 'Non-profit Organizations' },
                { id: 'others', label: 'Others' }
            ],
            selected: []
        }
    ]);

    const handleClickOutside = () => {
        if (isUploadOpen) {
            setIsUploadOpen(false);
        }
    };

    const handleSend = () => {
        if (inputValue.trim()) {
            setMessages([...messages, { type: 'user', content: inputValue }]);
            setInputValue('');
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    const handleCheckboxChange = (selected: string[], messageIndex: number) => {
        // Update the selected state in the original message
        const updatedMessages = messages.map((msg, idx) => {
            if (idx === messageIndex) {
                return { ...msg, selected };
            }
            return msg;
        });

        // Add the user's selection as a new message if there are selections
        if (selected.length > 0) {
            updatedMessages.push({
                type: 'user',
                content: selected.join(', ')
            });
        }

        setMessages(updatedMessages);
    };

    return (
        <div className="min-h-screen grid grid-cols-3 relative" onClick={handleClickOutside}>
            {/* Chat Section - Col span 2 */}
            <div className="col-span-2 flex flex-col h-screen border-r border-gray-200">
                {/* Header */}
                <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Bot className="w-8 h-8" />
                        <h1 className="text-xl font-semibold">AI Chatbot Assistance</h1>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="flex space-x-1">
                            {[...Array(9)].map((_, i) => (
                                <div
                                    key={i}
                                    className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-blue-600' : 'bg-gray-200'}`}
                                />
                            ))}
                        </div>
                        <span className="text-sm text-gray-500">1/9 Questions Answered</span>
                    </div>
                </div>

                {/* Chat Messages */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={`flex ${message.type === 'ai' ? 'justify-start' : 'justify-end'}`}
                        >
                            <div
                                className={`max-w-[80%] p-4 rounded-lg ${
                                    message.type === 'ai'
                                        ? 'bg-gray-100'
                                        : 'bg-blue-600 text-white'
                                }`}
                            >
                                <div>{message.content}</div>
                                {message.options && (
                                    <div className="mt-4">
                                        <CustomCheckbox
                                            options={message.options}
                                            selected={message.selected || []}
                                            onChange={(selected) => handleCheckboxChange(selected, index)}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Input Section */}
                <div className="p-6 border-t border-gray-200">
                    <div className="flex items-stretch gap-4">
                        <div className="flex-1 flex gap-2">
                            <div className="flex-1 relative">
                                <input
                                    type="text"
                                    placeholder="Type your message..."
                                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                />
                                <Button
                                    variant="text"
                                    size="icon"
                                    className="absolute right-2 top-1/2 -translate-y-1/2 hover:bg-gray-100"
                                    onClick={handleSend}
                                >
                                    <Send className="w-5 h-5 text-gray-500" />
                                </Button>
                            </div>
                        </div>
                        
                        {/* Upload Menu */}
                        <div className="relative">
                            <Button
                                variant="text"
                                size="icon"
                                className="p-7 border border-gray-300 rounded-lg hover:bg-gray-100"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setIsUploadOpen(!isUploadOpen);
                                }}
                            >
                                <MoreVertical className="w-10 h-10 text-gray-500" />
                            </Button>
                            
                            {isUploadOpen && (
                                <div className="absolute bottom-full right-0 mb-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200">
                                    <button
                                        className="w-full px-4 py-2 text-left flex items-center gap-2 hover:bg-gray-50"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <Upload className="w-4 h-4" />
                                        Upload Document
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Context Section - Fixed */}
            <div className="col-span-1 h-screen sticky top-0 border-r border-gray-200 bg-white overflow-y-auto flex flex-col">
                <div className="flex-1 p-6">
                    <h2 className="text-2xl font-semibold mb-4">Need More Context? 💡</h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-medium mb-2">Who are your target customers?</h3>
                            <p className="text-gray-600">
                                Identifying your target customers helps us tailor risk insights to market demand, consumer behavior trends, and potential regulatory impacts affecting your business.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium mb-2">How Your Answer Shapes Insights</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li className="flex items-start gap-2">
                                    <span>✓</span>
                                    <span>Choosing 'B2B' means you'll see insights about supply chain stability, vendor risks, and contract compliance.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span>✓</span>
                                    <span>Selecting 'B2C' tailors insights to consumer trends, digital marketing risks, and competitive positioning.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span>✓</span>
                                    <span>If 'Government' is selected, your dashboard will highlight regulatory updates, compliance tracking, and public sector contract risks.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Save Progress Section */}
                <div className="p-6 bg-[#0a103e] text-white">
                    <h3 className="text-lg font-semibold mb-2">Save your progress</h3>
                    <p className="text-sm opacity-90">
                        Simply type "Save this progress" to save and continue chat later.
                    </p>
                </div>
            </div>
        </div>
    );
}