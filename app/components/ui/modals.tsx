import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Button } from './button';
import Modal from './modal';
import type { ModalSize } from './modal';
import ThumbsUp from '~/assets/png/thumbs-up.png';
import Spinner from '~/assets/png/spinner.png';
import Integr8 from '~/assets/png/integr8.png';

// Import sharing and export icons
import Link from '~/assets/png/logos/link.png';
import LinkedIn from '~/assets/png/logos/linkedin.png';
import X from '~/assets/png/logos/x.png';
import Facebook from '~/assets/png/logos/facebook.png';
import Email from '~/assets/png/logos/mail.png';
import Whatsapp from '~/assets/png/logos/whatsapp.png';
import Skype from '~/assets/png/logos/skype.png';
import Slack from '~/assets/png/logos/slack.png';
import Adobe from '~/assets/png/logos/adobe-pdf.png';
import PNG from '~/assets/png/logos/png.png';

interface CommonModalProps {
    isOpen: boolean;
    onClose: () => void;
    size?: ModalSize;
}

interface ShareModalProps extends CommonModalProps {
    title: string;
    source?: string;
    articleTitle?: string;
    imageUrl?: string;
}

interface ExportModalProps extends CommonModalProps {
    title: string;
}

export const PreferencesSavedModal: React.FC<CommonModalProps> = ({ isOpen, onClose }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center" onClick={onClose}>
        <div className="bg-white rounded-lg p-6 w-[400px] text-center" onClick={e => e.stopPropagation()}>
            <img src={ThumbsUp} alt="Success" className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Preferences Saved!</h2>
            <p className="text-gray-600 mb-4">Your dashboard settings have been updated successfully.</p>
            <Button onClick={onClose} className="w-full">APPLY CHANGES</Button>
        </div>
    </div>
);

export const ApplyingPreferencesModal: React.FC<CommonModalProps> = ({ isOpen }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
        <div className="bg-white rounded-lg p-6 w-[400px] text-center">
            <img src={Spinner} alt="Loading" className="w-16 h-16 mx-auto mb-4 animate-spin" />
            <h2 className="text-xl font-semibold mb-2">Applying Your Preferences</h2>
            <p className="text-gray-600">This may take a moment.</p>
        </div>
    </div>
);

export const AllSetModal: React.FC<CommonModalProps> = ({ isOpen, onClose }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center" onClick={onClose}>
        <div className="bg-white rounded-lg p-6 w-[400px] text-center" onClick={e => e.stopPropagation()}>
            <img src={ThumbsUp} alt="Success" className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">All Set!</h2>
            <p className="text-gray-600">Your preferences are now active. Enjoy your customized experience!</p>
        </div>
    </div>
);

export const RequestReceivedModal: React.FC<CommonModalProps> = ({ isOpen, onClose }) => (
    <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 overflow-hidden"
        onClick={onClose}
        style={{ overflowY: 'hidden' }}
    >
        <div
            className="bg-white rounded-lg p-6 w-[400px] text-center"
            onClick={e => e.stopPropagation()}
        >
            <img src={ThumbsUp} alt="Success" className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Request Received!</h2>
            <p className="text-gray-600">You'll be notified once we provide more depth.</p>
        </div>
    </div>
);

export const ThankYouFeedbackModal: React.FC<CommonModalProps> = ({ isOpen, onClose }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center" onClick={onClose}>
        <div className="bg-white rounded-lg p-6 w-[400px] text-center" onClick={e => e.stopPropagation()}>
            <img src={ThumbsUp} alt="Success" className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Thank You for Your Feedback!</h2>
            <p className="text-gray-600">Your input helps us improve. We appreciate your time and effort!</p>
        </div>
    </div>
);

export const ShareModal: React.FC<ShareModalProps> = ({ 
    isOpen, 
    onClose, 
    title,
    source,
    articleTitle,
    imageUrl
}) => (
    <Modal
        isOpen={isOpen}
        onClose={onClose}
        title={title}
        size="default"
    >
        <div className="pb-4">
            <p className='text-xs text-gray-700 italic'>Choose how you want to share this information with your team or network.</p>
            
            {source && articleTitle && (
                <div className="mt-6 mb-2 grid grid-cols-2 items-center gap-4 bg-gray-50 px-2 py-2 rounded-lg w-[90%] mx-auto">
                    <div>
                        <p className="text-sm italic">{source}</p>
                        <h1 className="text-lg font-semibold mt-3">{articleTitle}</h1>
                    </div>
                    {imageUrl && (
                        <div>
                            <img src={imageUrl} alt="article placeholder image" className="w-full rounded-sm"/>
                        </div>
                    )}
                </div>
            )}

            <div className="grid grid-cols-4 gap-3 w-[85%] mx-auto">
                {[
                    { image: Link, text: 'Copy Link' },
                    { image: LinkedIn, text: 'LinkedIn' },
                    { image: X, text: 'X' },
                    { image: Facebook, text: 'Facebook' },
                    { image: Email, text: 'Email' },
                    { image: Whatsapp, text: 'WhatsApp' },
                    { image: Skype, text: 'Skype' },
                    { image: Slack, text: 'Slack' }
                ].map((item, index) => (
                    <button
                        key={index}
                        className="flex flex-col items-center justify-center gap-2 p-3 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                        <img src={item.image} alt={item.text} className="w-8 h-8" />
                        <span className="text-xs text-gray-600">{item.text}</span>
                    </button>
                ))}
            </div>
        </div>
    </Modal>
);

export const ExportModal: React.FC<ExportModalProps> = ({ 
    isOpen, 
    onClose, 
    title 
}) => (
    <Modal
        isOpen={isOpen}
        onClose={onClose}
        title={title}
        size="default"
    >
        <div className="pb-4">
            <p className='text-xs text-gray-700 italic'>Select the file format that best suits your needs.</p>

            <div className="flex space-x-3 justify-center items-center w-[85%] mx-auto mt-6">
                {[
                    { image: Adobe },
                    { image: PNG }
                ].map((item, index) => (
                    <button key={index} className="flex flex-col items-center justify-center gap-2 p-3 rounded-lg hover:bg-gray-100 transition-colors">
                        <img src={item.image} alt="export format" className="w-[60px]" />
                    </button>
                ))}
            </div>

            <div className="text-center">
                <Button variant="default" className="w-[45%] mt-4 mx-auto uppercase font-semibold">Download</Button>
            </div>
        </div>
    </Modal>
);

export const FlaggedForReviewModal: React.FC<CommonModalProps> = ({ isOpen, onClose }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 h-screen"
            onClick={onClose}
            style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
        >
            <div
                className="bg-white rounded-lg p-6 w-[400px] text-center"
                onClick={e => e.stopPropagation()}
            >
                <img src={ThumbsUp} alt="Success" className="w-16 h-16 mx-auto mb-4" />
                <h2 className="text-xl font-semibold mb-2">Flagged for Review!</h2>
                <p className="text-gray-600">Our risk management team will review this trend and provide additional insights.</p>
            </div>
        </div>
    );
};

export const SubscribeToExportModal: React.FC<CommonModalProps> = ({ isOpen, onClose }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50">
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                title=" "
                size="default"
            >
                <div className="p-6">
                    <img src={Integr8} alt="Integr8" className='w-22 mx-auto mb-6' />
                    <h3 className='text-center text-xl font-semibold mb-2'>Subscribe to <span className='text-red-500'>i</span>-Integr8</h3>
                    <p className="text-gray-600 mb-6 text-center">
                        To export risks to a risk register, you'll need an active subscription to <span className="text-red-500">i</span>-Integr8 Solutions.
                    </p>
                    <div className="text-center">
                        <Button variant="default" className="w-[45%] mx-auto">Subscribe Now</Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export const HelpUsImproveModal: React.FC<CommonModalProps> = ({ isOpen, onClose }) => {
    const navigate = useNavigate();
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title="Help us improve your insight"
            size="default"
        >
            <div className="flex flex-col items-center gap-4 p-4">
                <img src={ThumbsUp} alt="Thumbs up" className="w-16 h-16" />
                <p className="text-center text-gray-600">
                    Your feedback helps us provide better insights tailored to your needs.
                </p>
                <Button variant="default" className="w-full" onClick={() => {
                    navigate('/insight')
                }}>
                    Tell us more
                </Button>
            </div>
        </Modal>
    );
};

export const FeedbackModal: React.FC<CommonModalProps> = ({ isOpen, onClose }) => (
    <Modal
        isOpen={isOpen}
        onClose={onClose}
        title="Share Your Thoughts on This Insight"
        size="default"
    >
        <div className="pb-4">
            <p className='text-gray-600 mb-4'>Help us improve your experience by sharing your thoughts. Let us know your feedback!</p>
            
            <div className="mt-4">
                <textarea 
                    className="w-full p-4 border border-gray-200 rounded-lg resize-none h-[150px] focus:outline-none focus:ring-1 focus:ring-gray-300" 
                    placeholder="Feedback"
                />
            </div>

            <div className="flex justify-end gap-2 mt-4">
                <Button 
                    variant="text" 
                    onClick={onClose}
                    className="px-8"
                >
                    DISMISS
                </Button>
                <Button 
                    variant="default"
                    onClick={onClose}
                    className="px-8 bg-[#0F172A]"
                >
                    SUBMIT
                </Button>
            </div>
        </div>
    </Modal>
);
