import { ArrowLeft, ClipboardList, Pen, Share2, MessageSquareQuote } from "lucide-react";
import type { ModalSize } from "~/components/ui/modal";
import { RequestReceivedModal, ExportModal, AddNotesModal, FeedbackModal } from "~/components/ui/modals";
import DraggableChat from '~/components/ui/draggablechat'
import { useState } from "react";

const Menus = () => {
    const [isExportModalOpen, setIsExportModalOpen] = useState(false);
    const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
    const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);
    const [isAddNotesModalOpen, setIsAddNotesModalOpen] = useState(false)
    const [modalSize, setModalSize] = useState<ModalSize>('default');

    const openNotesModal = (size: ModalSize = 'default') => {
        setModalSize(size);
        setIsAddNotesModalOpen(true)
    }

    //   Chat
    const [isChatOpen, setIsChatOpen] = useState<boolean>(false);

    const openChat = (): void => {
        setIsChatOpen(true);
    };

    const closeChat = (): void => {
        setIsChatOpen(false);
    };

    const openExportModal = (size: ModalSize = 'default') => {
        setModalSize(size);
        setIsExportModalOpen(true);
    };
    return (
        <div>
            <div className="flex space-x-3 items-center">
                <ClipboardList onClick={() => openExportModal('default')} size={16} className="cursor-pointer text-gray-600 hover:text-gray-800" />
                <MessageSquareQuote onClick={openChat} size={16} className="cursor-pointer text-gray-600 hover:text-gray-800" />
                <Pen onClick={() => openNotesModal('default')} size={16} className="cursor-pointer text-gray-600 hover:text-gray-800" />
                <ClipboardList size={16} className="cursor-pointer text-gray-600 hover:text-gray-800" />
            </div>

            {/* Modals */}
            <ExportModal
                isOpen={isExportModalOpen}
                onClose={() => setIsExportModalOpen(false)}
                title="Choose your export format"
            />

            {isRequestModalOpen && (
                <RequestReceivedModal
                    isOpen={isRequestModalOpen}
                    onClose={() => setIsRequestModalOpen(false)}
                />
            )}

            <FeedbackModal
                isOpen={isFeedbackModalOpen}
                onClose={() => setIsFeedbackModalOpen(false)}
            />

            <AddNotesModal
                isOpen={isAddNotesModalOpen}
                onClose={() => setIsAddNotesModalOpen(false)}
            />

            <DraggableChat
                isOpen={isChatOpen}
                onClose={closeChat}
                initialPosition={{ x: window.innerWidth - 380, y: 100 }}
            />
        </div>
    )
}

export default Menus;