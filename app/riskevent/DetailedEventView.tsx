// DetailedEventView.tsx
import { useState } from "react";
import type { RiskEvent } from "~/types/risk-event";
import { getColor } from "~/riskevent/getColor";
import RiskEventCard from "./RiskEventCard";
import {
  ArrowLeft,
  ClipboardList,
  FolderInput,
  MessagesSquare,
  Pencil,
  Share2,
} from "lucide-react";
import CommunityRating from "./communityRating";

const DetailedEventView: React.FC<{
  event: RiskEvent;
  onBack: () => void;
  allEvents: RiskEvent[];
  setSelectedEvent: (event: RiskEvent) => void;
}> = ({ event, onBack, allEvents, setSelectedEvent }) => {
  const [selectedRating, setSelectedRating] = useState<string | null>(null);

  // Get related events (example: exclude current event and take first 3)
  const relatedEvents = allEvents.filter((e) => e.id !== event.id).slice(0, 3);

  return (
    <div className="space-y-6">
      <button
        onClick={onBack}
        className="flex items-center text-red-600 font-semibold cursor-pointer"
      >
        <ArrowLeft />
        Back
      </button>
      {/* Event Details */}
      <div className="bg-white dark:bg-[var(--inner-color)] p-6 rounded-lg shadow-sm">
        <h1 className="text-2xl font-bold mb-4 dark:text-white">
          {event.title}
        </h1>
        <div className="bg-gray dark:bg-[var(--nav-color)] p-4 rounded-lg mb-4">
          <div className="flex gap-4 mb-6 text-primary dark:text-white">
            <span className="pr-2 text-sm italic text-primary dark:text-white border-r dark:border-gray-600 border-gray-300">
              {event.date}
            </span>
            <Share2 className="pr-2 text-primary dark:text-white dark:border-gray-600 border-r border-gray-300" />
            <FolderInput className="pr-2 text-primary dark:text-white dark:border-gray-600 border-r border-gray-300" />
            <MessagesSquare className="pr-2 text-primary dark:text-white dark:border-gray-600 border-r border-gray-300" />
            <Pencil className="pr-2 text-primary dark:text-white dark:border-gray-600 border-r border-gray-300" />
            <ClipboardList className="pr-2 text-primary dark:text-white dark:border-gray-600 border-r border-gray-300" />
          </div>
          <div className="space-y-4 text-red-500">
            {event.description.split("\n\n").map((paragraph, index) => (
              <p
                key={index}
                className="text-primary dark:text-white mb-4 last:mb-0"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
      {/* Rating Card */}

      <CommunityRating />
      {/* Related Events */}
      <div className="bg-white dark:bg-[var(--nav-color)] p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-4 dark:text-white">
          Related Risk Events
        </h2>
        <div className="grid gap-4">
          {relatedEvents.map((relatedEvent) => (
            <RiskEventCard
              key={relatedEvent.id}
              event={relatedEvent}
              color={getColor(relatedEvent.status)}
              onClick={() => setSelectedEvent(relatedEvent)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailedEventView;
