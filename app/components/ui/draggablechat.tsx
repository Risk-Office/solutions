import React, { useState, useRef, useEffect } from 'react';
import { X, Send, MoreVertical, Image, FileText } from 'lucide-react';

// Define prop types for the component
interface DraggableChatProps {
  isOpen: boolean;
  onClose: () => void;
  initialPosition?: { x: number; y: number };
}

// Define interfaces for the data
interface MessageReaction {
  emoji: string;
  count: number;
}

interface ChatMessage {
  id: number;
  sender: string;
  time: string;
  content: string;
  reactions?: string[]; // Using simple string array for now
}

// Separate standalone draggable chat component
const DraggableChat: React.FC<DraggableChatProps> = ({ 
  isOpen, 
  onClose, 
  initialPosition = { x: 50, y: 50 } 
}) => {
  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [showOverlay, setShowOverlay] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 1, sender: 'Tobi', time: '4:30 PM', content: 'Thanks for the update, Fikayo. @Femi @Bukayo Can you confirm the estimated time of occurrence? We need to check server load trends and implement preventive measures.', reactions: ['😂', '2'] },
    { id: 2, sender: 'Bukayo', time: '11:30 AM', content: 'Based on our risk model, the event has a 40% probability of occurring within the next 12 hours. @Feranmi, can you confirm mitigation steps?' },
    { id: 3, sender: 'Feranmi', time: '01:30 PM', content: 'We are deploying load balancers and scaling up server resources. If this doesn\'t stabilize the system, we may need a 30-minute maintenance window.' }
  ]);
  const [inputText, setInputText] = useState('');
  
  const chatRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  
  const toggleOverlay = (): void => {
    setShowOverlay(!showOverlay);
  };
  
  // Handle clicks outside the overlay to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        showOverlay && 
        overlayRef.current && 
        menuButtonRef.current && 
        !overlayRef.current.contains(event.target as Node) &&
        !menuButtonRef.current.contains(event.target as Node)
      ) {
        setShowOverlay(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showOverlay]);
  
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (chatRef.current && e.target instanceof Element && e.target.closest('.drag-handle')) {
      setIsDragging(true);
      const rect = chatRef.current.getBoundingClientRect();
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };
  
  const handleMouseMove = (e: MouseEvent): void => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y
      });
    }
  };
  
  const handleMouseUp = (): void => {
    setIsDragging(false);
  };
  
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    }
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);
  
  const handleSendMessage = (): void => {
    if (inputText.trim()) {
      const newMessage: ChatMessage = {
        id: messages.length + 1,
        sender: 'Me',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        content: inputText
      };
      setMessages([...messages, newMessage]);
      setInputText('');
    }
  };
  
  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>): void => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  if (!isOpen) return null;
  
  return (
    <div 
      ref={chatRef}
      className="fixed shadow-lg rounded-lg w-96 h-[80vh] bg-white border border-gray-200 flex flex-col"
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px`,
        zIndex: 100 
      }}
    >
      {/* Header/Drag Handle */}
      <div 
        className="drag-handle text-black p-3 rounded-t-lg flex justify-between items-center cursor-move"
        onMouseDown={handleMouseDown}
      >
        <h3 className="font-medium">Changes in Minimum Wage Laws</h3>
        <button 
          onClick={onClose}
          className="text-red-500 hover:text-red-700 rounded-full p-1 transition-colors"
        >
          <X size={18} />
        </button>
      </div>
      
      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-3 bg-gray-50">
        {messages.map(message => (
          <div key={message.id} className="mb-4">
            <div className="flex items-center mb-1">
              <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center font-medium text-gray-600">
                {message.sender.charAt(0)}
              </div>
              <div className="ml-2">
                <span className="font-medium">{message.sender}</span>
                <span className="text-gray-500 text-xs ml-2">{message.time}</span>
              </div>
            </div>
            <div className="pl-10 text-gray-800">
              {message.content}
            </div>
            {message.reactions && (
              <div className="pl-10 mt-1 flex items-center">
                <span className="bg-gray-100 text-sm px-2 py-1 rounded-full">
                  {message.reactions[0]} {message.reactions[1]}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Input Area - Redesigned with flex layout */}
      <div className="p-3 border-t border-gray-200">
        <div className="flex items-center">
          {/* Input and submit button */}
          <div className="flex-1 relative">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type a message..."
              className="w-full border border-gray-300 rounded-lg pl-3 pr-10 py-2 focus:outline-none focus:border-blue-500 resize-none"
            />
            <button
              onClick={handleSendMessage}
              className="absolute top-2 right-2 text-blue-600 hover:text-blue-800 p-1"
            >
              <Send size={18} />
            </button>
          </div>
          
          {/* Three dot menu button */}
          <div className="ml-2 relative">
            <button
              ref={menuButtonRef}
              onClick={toggleOverlay}
              className="text-gray-600 hover:text-gray-800 p-2 rounded-full hover:bg-gray-100"
            >
              <MoreVertical size={20} />
            </button>
            
            {showOverlay && (
              <div 
                ref={overlayRef}
                className="absolute bottom-12 right-0 bg-white shadow-lg rounded-md border border-gray-200 w-40 py-2"
              >
                <button className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center">
                  <Image size={16} className="mr-2" />
                  Upload photo
                </button>
                <button className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center">
                  <FileText size={16} className="mr-2" />
                  Upload document
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DraggableChat;