import { X } from 'lucide-react';
import React, { useEffect } from 'react';
import type { ReactNode } from 'react';
import { Button } from '~/components/ui/button';

// Size options for the modal
export type ModalSize = 'default' | 'large' | 'xl';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    title?: string;
    size?: ModalSize;
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    children,
    title,
    size = 'default'
}) => {
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

    // Size classes based on the selected size prop
    const sizeClasses = {
        default: 'max-w-lg',
        large: 'max-w-2xl',
        xl: 'max-w-4xl'
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="px-4 py-2 sm:p-3 w-full">
                <div
                    className={`bg-white rounded-lg shadow-xl w-full ${sizeClasses[size]} max-h-[90vh] mx-auto overflow-hidden flex flex-col`}
                >
                    <div className="px-3 py-2 flex justify-between items-center">
                        {title && <h3 className="text-lg font-medium text-gray-900">{title}</h3>}
                        <Button
                            variant="text"
                            onClick={onClose}
                            className="flex items-center text-red-500"
                            aria-label="Close modal"
                        >
                            <span>Close</span>
                            <X className='text-red-500 p-0' />
                        </Button>
                    </div>
                    
                    <div className="flex-1 px-3 overflow-y-auto">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;