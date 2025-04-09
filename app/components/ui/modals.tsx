import React, { useEffect } from 'react';
import { Button } from './button';
import Modal from './modal';
import type { ModalSize } from './modal';
import ThumbsUp from '~/assets/png/thumbs-up.png';
import Spinner from '~/assets/png/spinner.png';
import Integr8 from '~/assets/png/integr8.png';

interface CommonModalProps {
    isOpen: boolean;
    onClose: () => void;
    size?: ModalSize;
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

export const ShareThoughtModal: React.FC<CommonModalProps> = ({ isOpen, onClose }) => (
    <Modal
        isOpen={isOpen}
        onClose={onClose}
        title="Share Your Thoughts on This Insight"
        size="default"
    >
        <div className="p-4">
            <p className="text-sm text-gray-600 mb-4">
                Help us improve your experience by sharing your thoughts. Let us know your feedback!
            </p>
            <textarea
                className="w-full h-32 p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Write your thoughts here..."
            />
            <div className="flex justify-end mt-4 space-x-2">
                <Button variant="text" onClick={onClose}>DISMISS</Button>
                <Button>SUBMIT</Button>
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
