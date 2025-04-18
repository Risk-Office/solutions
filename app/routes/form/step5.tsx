import TabTitle from "~/components/form/tabtitle";
import { Button } from "~/components/ui/button";
import { useState } from "react";
import { CustomCheckbox } from "~/components/form/customcheckbox";
import { CustomRadio } from "~/components/form/customradio";
import { useNavigate } from "react-router";
import { useFormStore } from "~/store/useForm";
import { FormNavigation } from "~/components/form/FormNavigation";
import Sideimg from '~/assets/png/forms/form1.png';

export default function Step5() {
    const { formData, updateFormData } = useFormStore();
    const navigate = useNavigate();
    const [currentSection, setCurrentSection] = useState(1);
    const [selectedChannel, setSelectedChannel] = useState<string>("");

    const channelOptions = [
        { id: 'direct', label: 'Direct Channels' },
        { id: 'indirect', label: 'Indirect Channels' },
        { id: 'digital', label: 'Digital Channels' },
        { id: 'physical', label: 'Physical Channels' },
        { id: 'hybrid', label: 'Hybrid Channels' }
    ];

    // Direct Channel Options
    const directChannelOptions = [
        { id: 'company_website', label: 'Company Website — Selling products or services directly via an e-commerce platform' },
        { id: 'company_stores', label: 'Company-Owned Stores — Brick-and-mortar locations where customers can visit and purchase' },
        { id: 'direct_sales', label: 'Direct Sales — Sales representatives, door-to-door sales, or business development teams' },
        { id: 'call_centers', label: 'Company Call Centers — Customer support or sales teams engaging via phone' },
        { id: 'live_chat', label: "Live Chat & Chatbots — Direct communication through the company's website or app" }
    ];

    // Indirect Channel Options
    const indirectChannelOptions = [
        { id: 'retail_partnership', label: 'Retail Partnership - This involves selling through third-party physical or online stores (e.g., Walmart, Amazon)' },
        { id: 'distributors', label: 'Distributors and Wholesalers - Using a network to distribute products at scale' },
        { id: 'var', label: 'Value-Added Resellers (VAR) - Third-party resellers who bundle or enhance the product' },
        { id: 'affiliate', label: 'Affiliate Marketing - Partnering with influencers or bloggers to promote the product' },
        { id: 'franchise', label: 'Franchise Network - Expanding business network through franchises' }
    ];

    // Digital Channel Options
    const digitalChannelOptions = [
        { id: 'social_media', label: 'Social Media (Organic & Paid Ads) — Platforms like Facebook, LinkedIn, Instagram, Twitter, and TikTok' },
        { id: 'email', label: 'Email Marketing — Direct email campaigns to nurture leads and retain customers' },
        { id: 'sem', label: 'Search Engine Marketing (SEM & SEO) — Paid and organic search engine strategies (Google Ads, Bing Ads)' },
        { id: 'mobile_apps', label: 'Mobile Apps — Business-owned applications that offer services, content, or commerce' },
        { id: 'webinars', label: 'Webinars & Online Events — Educating and engaging potential customers through live or recorded sessions' },
        { id: 'streaming', label: 'Streaming & Podcast Advertising — Promoting through digital audio/video content' }
    ];

    // Physical Channel Options
    const physicalChannelOptions = [
        { id: 'retail_stores', label: 'Retail Stores & Showrooms — Partnered physical locations' },
        { id: 'print', label: 'Print Advertising — Magazines, newspapers, brochures, and direct mail' },
        { id: 'tv_radio', label: 'TV & Radio Advertising — Broadcasting commercials to mass audiences' },
        { id: 'billboards', label: 'Billboards & Outdoor Advertising — Large-scale brand visibility campaigns' },
        { id: 'trade_shows', label: 'Trade Shows & Conferences — Industry events where businesses showcase products and network' },
        { id: 'experiential', label: 'Experiential Marketing — Pop-up events, sampling, or interactive brand experiences' }
    ];

    // Hybrid Channel Options
    const hybridChannelOptions = [
        { id: 'click_mortar', label: 'Click-and-Mortar — Businesses with both physical stores and online presence' },
        { id: 'omnichannel', label: 'Omnichannel Retail — Integration of multiple customer touchpoints (online, in-store, mobile, call center)' },
        { id: 'bopis', label: 'Buy Online, Pick Up in Store (BOPIS) — E-commerce with an offline fulfillment component' },
        { id: 'loyalty', label: 'Customer Loyalty Programs — Digital and physical rewards programs' },
        { id: 'community', label: 'Community & Advocacy Programs — Engaging through forums, user groups, and ambassador programs' }
    ];

    const handleChannelChange = (id: string) => {
        setSelectedChannel(id);
        updateFormData({
            customerChannels: {
                ...formData.customerChannels,
                selectedChannel: id,
                directChannels: id === 'direct' ? formData.customerChannels?.directChannels || [] : [],
                indirectChannels: id === 'indirect' ? formData.customerChannels?.indirectChannels || [] : [],
                digitalChannels: id === 'digital' ? formData.customerChannels?.digitalChannels || [] : [],
                physicalChannels: id === 'physical' ? formData.customerChannels?.physicalChannels || [] : [],
                hybridChannels: id === 'hybrid' ? formData.customerChannels?.hybridChannels || [] : []
            }
        });
    };

    const handleDirectChannelsChange = (selected: string[]) => {
        updateFormData({
            customerChannels: {
                ...formData.customerChannels,
                directChannels: selected
            }
        });
    };

    const handleIndirectChannelsChange = (selected: string[]) => {
        updateFormData({
            customerChannels: {
                ...formData.customerChannels,
                indirectChannels: selected
            }
        });
    };

    const handleDigitalChannelsChange = (selected: string[]) => {
        updateFormData({
            customerChannels: {
                ...formData.customerChannels,
                digitalChannels: selected
            }
        });
    };

    const handlePhysicalChannelsChange = (selected: string[]) => {
        updateFormData({
            customerChannels: {
                ...formData.customerChannels,
                physicalChannels: selected
            }
        });
    };

    const handleHybridChannelsChange = (selected: string[]) => {
        updateFormData({
            customerChannels: {
                ...formData.customerChannels,
                hybridChannels: selected
            }
        });
    };

    const handleSaveForLater = () => {
        console.log('Form Data:', {
            step1: {
                customerSegments: formData.customerSegments
            },
            step2: {
                valueProposition: formData.valueProposition
            },
            step3: {
                painPoints: formData.painPoints
            },
            step4: {
                customerRelations: formData.customerRelations
            },
            step5: {
                customerChannels: formData.customerChannels
            },
            currentStep: formData.currentStep
        });
    };

    const getChannelOptions = () => {
        switch (selectedChannel) {
            case 'direct':
                return {
                    description: 'These involve direct interaction between the business and the customer without intermediaries.',
                    options: directChannelOptions,
                    handler: handleDirectChannelsChange,
                    selected: formData.customerChannels?.directChannels || []
                };
            case 'indirect':
                return {
                    description: 'These involve intermediaries that help distribute products or services.',
                    options: indirectChannelOptions,
                    handler: handleIndirectChannelsChange,
                    selected: formData.customerChannels?.indirectChannels || []
                };
            case 'digital':
                return {
                    description: 'These include online platforms where businesses can engage customers.',
                    options: digitalChannelOptions,
                    handler: handleDigitalChannelsChange,
                    selected: formData.customerChannels?.digitalChannels || []
                };
            case 'physical':
                return {
                    description: 'Traditional offline methods used for customer outreach.',
                    options: physicalChannelOptions,
                    handler: handlePhysicalChannelsChange,
                    selected: formData.customerChannels?.physicalChannels || []
                };
            case 'hybrid':
                return {
                    description: 'Combining both physical and digital elements',
                    options: hybridChannelOptions,
                    handler: handleHybridChannelsChange,
                    selected: formData.customerChannels?.hybridChannels || []
                };
            default:
                return null;
        }
    };

    return (
        <div>
            <TabTitle title="Customer Channels" />

            <div className="grid grid-cols-4">
                <div className="border-r border-gray-300 pt-10">
                    <div className="w-[90%] mx-auto">
                        <div className="space-y-6">
                            <div className="p-4">
                                <CustomCheckbox
                                    options={[
                                        { id: 'b2b', label: 'B2B (Business-to-Business)' },
                                        { id: 'government', label: 'Government (B2G)' },
                                        { id: 'b2c', label: 'B2C (Business-to-Consumer)' },
                                        { id: 'non-profit', label: 'Non-profit Organizations' }
                                    ]}
                                    selected={formData.customerSegments || []}
                                    onChange={() => {}}
                                />
                            </div>
                        </div>

                        <div className="text-center">
                            <Button variant="default" onClick={handleSaveForLater} className="text-sm uppercase mt-24">
                                Save & Continue Later
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="col-span-2 pb-10 bg-gray-50">
                    <div className="p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-lg font-medium">Questions</h3>
                            <span className="text-sm text-gray-500">{currentSection}/1</span>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-lg font-medium mb-4">
                                    How do you reach and interact with your customers?
                                </h3>

                                <div className="space-y-6">
                                    <div className="space-y-4">
                                        {channelOptions.map((option) => (
                                            <div key={option.id}>
                                                <div 
                                                    className={`p-4`}
                                                >
                                                    <CustomRadio
                                                        options={[option]}
                                                        selected={selectedChannel}
                                                        onChange={handleChannelChange}
                                                    />
                                                </div>
                                                
                                                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${selectedChannel === option.id ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                                                    {selectedChannel === option.id && getChannelOptions() && (
                                                        <div className="pl-6 bg-white p-1">
                                                            <p className="text-sm text-gray-600 mb-4">{getChannelOptions()?.description}</p>
                                                            <CustomCheckbox
                                                                options={getChannelOptions()?.options || []}
                                                                selected={getChannelOptions()?.selected || []}
                                                                onChange={getChannelOptions()?.handler || (() => {})}
                                                            />
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-24">
                            <FormNavigation
                                currentStep={5}
                                currentSection={currentSection}
                                totalSections={1}
                                nextDisabled={
                                    !selectedChannel ||
                                    (selectedChannel === 'direct' && !formData.customerChannels?.directChannels?.length) ||
                                    (selectedChannel === 'indirect' && !formData.customerChannels?.indirectChannels?.length) ||
                                    (selectedChannel === 'digital' && !formData.customerChannels?.digitalChannels?.length) ||
                                    (selectedChannel === 'physical' && !formData.customerChannels?.physicalChannels?.length) ||
                                    (selectedChannel === 'hybrid' && !formData.customerChannels?.hybridChannels?.length)
                                }
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <img src={Sideimg} alt="sideimg" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    );
} 