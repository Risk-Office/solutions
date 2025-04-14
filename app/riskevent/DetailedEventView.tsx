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
import { Button } from "~/components/ui/button";

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
        <h1 className="text-2xl font-bold mb-4 dark:text-white">{event.title}</h1>
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
              <p key={index} className="text-primary dark:text-white mb-4 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Rating Card */}
      <div className="bg-white dark:bg-[var(--inner-color)] p-6 rounded-lg shadow-sm">
        <h2 className="text-xl mb-2 dark:text-white">Rate the impact of this incident</h2>
        <div className="flex gap-4 mb-6">
          {["critical", "high", "medium", "low", "insignificant"].map(
            (status) => (
              <button
                key={status}
                onClick={() =>
                  setSelectedRating(status === selectedRating ? null : status)
                }
                className={`flex items-center gap-2 px-4 py-2 cursor-pointer rounded-md transition-colors ${
                  selectedRating === status ? "bg-opacity-30" : "bg-opacity-10"
                }`}
                style={{
                  backgroundColor:
                    selectedRating === status
                      ? `${getColor(status)}30`
                      : "transparent",
                }}
              >
                <span className="capitalize dark:text-white">{status}</span>
                <div
                  className="w-4 h-4 rounded-sm"
                  style={{ backgroundColor: getColor(status) }}
                />
              </button>
            )
          )}
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2 dark:text-white">Comments</label>
            <textarea
              className="w-full p-2 border dark:border-gray-300 rounded-md resize-none dark:placeholder:text-white"
              rows={2}
              placeholder="Tell us the reason why you rate this risk event"
            />
          </div>
          <div className="flex justify-end">
            <Button className="px-6 py-2 text-white rounded-md hover:bg-opacity-80 transition-colors duration-200 ease-in-out">
              Submit
            </Button>
          </div>
        </div>
      </div>

      {/* Related Events */}
      <div className="bg-white dark:bg-[var(--nav-color)] p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-4 dark:text-white">Related Risk Events</h2>
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
