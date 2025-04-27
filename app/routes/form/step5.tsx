import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TabTitle from "~/components/form/tabtitle";
import { Button } from "~/components/ui/button";
import { useFormStore } from "~/store/useForm";
import { FormNavigation } from "~/components/form/FormNavigation";
import { CustomRadio } from "~/components/form/customradio";
import { CustomCheckbox } from "~/components/form/customcheckbox";
import Sideimg from '~/assets/png/forms/form1.png';
import { ChevronRight, CircleCheckBig } from "lucide-react";

export default function Step5() {
    const { formData, updateFormData, setCurrentStep } = useFormStore();
    const navigate = useNavigate();
    const [currentSection, setCurrentSection] = useState(1);
    const [activeSegment, setActiveSegment] = useState<string>("");
    const [isInitialized, setIsInitialized] = useState(false);
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

    // Initialize store data if needed
    useEffect(() => {
        if (!formData.channelsBySegment) {
            updateFormData({
                channelsBySegment: {}
            });
        }
        setIsInitialized(true);
    }, []);

    // Reset active segment and update when segments change
    useEffect(() => {
        if (!isInitialized) return;

        const segments = formData.customerSegments || [];
        const validSegments = segments.filter((seg): seg is string => typeof seg === 'string');

        if (segments.length !== validSegments.length) {
            updateFormData({ customerSegments: validSegments });
        }

        if (validSegments.length === 0) {
            navigate('/form/step1');
            return;
        }

        if (!validSegments.includes(activeSegment)) {
            setActiveSegment(validSegments[0]);
        }
    }, [formData.customerSegments, activeSegment, isInitialized, navigate, updateFormData]);

    const handleSegmentClick = (segment: string) => {
        setActiveSegment(segment);
        setCurrentSection(1);
        // Reset channel selection when changing segments
        setSelectedChannel("");
    };

    const handleChannelChange = (id: string) => {
        setSelectedChannel(id);
        updateFormData({
            channelsBySegment: {
                ...formData.channelsBySegment,
                [activeSegment]: {
                    ...formData.channelsBySegment?.[activeSegment],
                    selectedChannel: id,
                    directChannels: id === 'direct' ? formData.channelsBySegment?.[activeSegment]?.directChannels || [] : [],
                    indirectChannels: id === 'indirect' ? formData.channelsBySegment?.[activeSegment]?.indirectChannels || [] : [],
                    digitalChannels: id === 'digital' ? formData.channelsBySegment?.[activeSegment]?.digitalChannels || [] : [],
                    physicalChannels: id === 'physical' ? formData.channelsBySegment?.[activeSegment]?.physicalChannels || [] : [],
                    hybridChannels: id === 'hybrid' ? formData.channelsBySegment?.[activeSegment]?.hybridChannels || [] : []
                }
            }
        });
    };

    const handleDirectChannelsChange = (selected: string[]) => {
        updateFormData({
            channelsBySegment: {
                ...formData.channelsBySegment,
                [activeSegment]: {
                    ...formData.channelsBySegment?.[activeSegment],
                    directChannels: selected
                }
            }
        });
    };

    const handleIndirectChannelsChange = (selected: string[]) => {
        updateFormData({
            channelsBySegment: {
                ...formData.channelsBySegment,
                [activeSegment]: {
                    ...formData.channelsBySegment?.[activeSegment],
                    indirectChannels: selected
                }
            }
        });
    };

    const handleDigitalChannelsChange = (selected: string[]) => {
        updateFormData({
            channelsBySegment: {
                ...formData.channelsBySegment,
                [activeSegment]: {
                    ...formData.channelsBySegment?.[activeSegment],
                    digitalChannels: selected
                }
            }
        });
    };

    const handlePhysicalChannelsChange = (selected: string[]) => {
        updateFormData({
            channelsBySegment: {
                ...formData.channelsBySegment,
                [activeSegment]: {
                    ...formData.channelsBySegment?.[activeSegment],
                    physicalChannels: selected
                }
            }
        });
    };

    const handleHybridChannelsChange = (selected: string[]) => {
        updateFormData({
            channelsBySegment: {
                ...formData.channelsBySegment,
                [activeSegment]: {
                    ...formData.channelsBySegment?.[activeSegment],
                    hybridChannels: selected
                }
            }
        });
    };

    const handleSaveForLater = () => {
        console.log('Form Data:', formData);
    };

    const getChannelOptions = () => {
        const segmentData = formData.channelsBySegment?.[activeSegment] || {};

        switch (selectedChannel) {
            case 'direct':
                return {
                    description: 'These involve direct interaction between the business and the customer without intermediaries.',
                    options: directChannelOptions,
                    handler: handleDirectChannelsChange,
                    selected: segmentData.directChannels || []
                };
            case 'indirect':
                return {
                    description: 'These involve intermediaries that help distribute products or services.',
                    options: indirectChannelOptions,
                    handler: handleIndirectChannelsChange,
                    selected: segmentData.indirectChannels || []
                };
            case 'digital':
                return {
                    description: 'These include online platforms where businesses can engage customers.',
                    options: digitalChannelOptions,
                    handler: handleDigitalChannelsChange,
                    selected: segmentData.digitalChannels || []
                };
            case 'physical':
                return {
                    description: 'Traditional offline methods used for customer outreach.',
                    options: physicalChannelOptions,
                    handler: handlePhysicalChannelsChange,
                    selected: segmentData.physicalChannels || []
                };
            case 'hybrid':
                return {
                    description: 'Combining both physical and digital elements',
                    options: hybridChannelOptions,
                    handler: handleHybridChannelsChange,
                    selected: segmentData.hybridChannels || []
                };
            default:
                return null;
        }
    };

    const getSegmentLabel = (segment: string): string => {
        switch (segment) {
            case 'b2b': return 'B2B (Business-to-Business)';
            case 'government': return 'Government (B2G)';
            case 'b2c': return 'B2C (Business-to-Consumer)';
            case 'non-profit': return 'Non-profit Organizations';
            case 'others': return 'Others';
            default: return '';
        }
    };

    const segments = (formData.customerSegments || []).filter((item): item is string => typeof item === 'string');

    const isSegmentCompleted = (segment: string) => {
        const segmentData = formData.channelsBySegment?.[segment];
        if (!segmentData) return false;

        // Check if channel type is selected and at least one channel option is selected
        if (!segmentData.selectedChannel) return false;

        switch (segmentData.selectedChannel) {
            case 'direct':
                return segmentData.directChannels?.length > 0;
            case 'indirect':
                return segmentData.indirectChannels?.length > 0;
            case 'digital':
                return segmentData.digitalChannels?.length > 0;
            case 'physical':
                return segmentData.physicalChannels?.length > 0;
            case 'hybrid':
                return segmentData.hybridChannels?.length > 0;
            default:
                return false;
        }
    };

    // Custom navigation handler for next button
    const handleCustomNext = () => {
        if (currentSection < 1) {
            setCurrentSection(currentSection + 1);
        } else {
            const nextSegment = getNextSegment();
            if (nextSegment) {
                setActiveSegment(nextSegment);
                setCurrentSection(1);
                setSelectedChannel("");
            } else {
                goToStep6();
            }
        }
    };

    // Custom navigation handler for previous button
    const handleCustomPrevious = () => {
        if (currentSection > 1) {
            setCurrentSection(currentSection - 1);
        } else {
            const prevSegment = getPreviousSegment();
            if (prevSegment) {
                setActiveSegment(prevSegment);
                setCurrentSection(1);
                setSelectedChannel("");
            }
        }
    };

    const getNextSegment = () => {
        const segments = formData.customerSegments || [];
        const currentIndex = segments.indexOf(activeSegment);
        if (currentIndex === -1 || currentIndex + 1 >= segments.length) return null;
        return segments[currentIndex + 1];
    };

    const getPreviousSegment = () => {
        const segments = formData.customerSegments || [];
        const currentIndex = segments.indexOf(activeSegment);
        if (currentIndex <= 0) return null;
        return segments[currentIndex - 1];
    };

    const goToStep6 = () => {
        setCurrentStep(6);
        navigate("/form/step6");
    };

    return (
        <div>
            <TabTitle title="Customer Channels" />

            <div className="grid grid-cols-4 items-start h-[calc(100vh-160px)]">
                <div className="border-r border-gray-300 pt-10 h-full">
                    <div>
                        <div className="space-y-6">
                            <div>
                                {segments.map((segment) => (
                                    <button
                                        key={segment}
                                        className={`w-full text-left p-3 flex items-center ${activeSegment === segment
                                            ? 'bg-gray-100'
                                            : ''
                                            }`}
                                        onClick={() => handleSegmentClick(segment)}
                                    >
                                        <div className="mr-3">
                                            <svg className={`w-5 h-5 ${activeSegment === segment ? 'text-amber-700' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                {isSegmentCompleted(segment) ? (
                                                    <CircleCheckBig />
                                                ) : (
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                )}
                                            </svg>
                                        </div>
                                        {getSegmentLabel(segment)}

                                        <ChevronRight className="ml-auto" />
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="text-center">
                            <Button variant="default" onClick={handleSaveForLater} className="text-sm uppercase mt-24">
                                Save & Continue Later
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="col-span-2 pb-10 bg-gray-50 h-full overflow-y-scroll">
                    <div className="p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-lg font-medium">
                                {getSegmentLabel(activeSegment)}: Customer Channels
                            </h3>
                            <span className="text-sm text-gray-500">{currentSection}/1</span>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <div className="space-y-6">
                                    <h3 className="text-lg font-medium mb-4">
                                        How do you reach and interact with your {getSegmentLabel(activeSegment)} customers?
                                    </h3>

                                    <div className="space-y-6">
                                        <div className="space-y-4">
                                            {channelOptions.map((option) => (
                                                <div key={option.id}>
                                                    <div className={`p-4`}>
                                                        <CustomRadio
                                                            options={[option]}
                                                            selected={formData.channelsBySegment?.[activeSegment]?.selectedChannel || ""}
                                                            onChange={handleChannelChange}
                                                        />
                                                    </div>

                                                    <div className={`transition-all duration-300 ease-in-out overflow-hidden ${formData.channelsBySegment?.[activeSegment]?.selectedChannel === option.id ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                                                        {formData.channelsBySegment?.[activeSegment]?.selectedChannel === option.id && getChannelOptions() && (
                                                            <div className="pl-6 bg-white p-1">
                                                                <p className="text-sm text-gray-600 mb-4">{getChannelOptions()?.description}</p>
                                                                <CustomCheckbox
                                                                    options={getChannelOptions()?.options || []}
                                                                    selected={getChannelOptions()?.selected || []}
                                                                    onChange={getChannelOptions()?.handler || (() => { })}
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
                        </div>

                        <div className="mt-24">
                            <div className="flex items-center justify-end space-x-3">
                                <Button
                                    variant="text"
                                    className="text-sm uppercase border border-blue-900"
                                    onClick={handleCustomPrevious}
                                    disabled={currentSection === 1 && !getPreviousSegment()}
                                >
                                    Back
                                </Button>
                                <Button
                                    variant="default"
                                    className="text-sm uppercase"
                                    onClick={handleCustomNext}
                                    disabled={
                                        !formData.channelsBySegment?.[activeSegment]?.selectedChannel ||
                                        (formData.channelsBySegment?.[activeSegment]?.selectedChannel === 'direct' && !formData.channelsBySegment?.[activeSegment]?.directChannels?.length) ||
                                        (formData.channelsBySegment?.[activeSegment]?.selectedChannel === 'indirect' && !formData.channelsBySegment?.[activeSegment]?.indirectChannels?.length) ||
                                        (formData.channelsBySegment?.[activeSegment]?.selectedChannel === 'digital' && !formData.channelsBySegment?.[activeSegment]?.digitalChannels?.length) ||
                                        (formData.channelsBySegment?.[activeSegment]?.selectedChannel === 'physical' && !formData.channelsBySegment?.[activeSegment]?.physicalChannels?.length) ||
                                        (formData.channelsBySegment?.[activeSegment]?.selectedChannel === 'hybrid' && !formData.channelsBySegment?.[activeSegment]?.hybridChannels?.length)
                                    }
                                >
                                    {getNextSegment() ? 'Next Segment' : 'Continue'}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='h-full w-full'>
                    <img src={Sideimg} alt="sideimg" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    );
}