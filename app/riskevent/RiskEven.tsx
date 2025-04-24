import { useState } from "react";
import RiskEventCard from "./RiskEventCard";
import riskEvents from "./riskevent.json";
import { getColor } from "./getColor";
import type { RiskEvent } from "~/types/risk-event";
import DetailedEventView from "./DetailedEventView";

const RiskEvents = () => {
  const [selectedEvent, setSelectedEvent] = useState<RiskEvent | null>(null);

  // Get first 2 events by default
  const displayedEvents = riskEvents.slice(0, 2);

  return (
    <div className="flex flex-col w-full h-full dark:bg-[var(--nav-color)] rounded-md overflow-y-auto p-4">
      {selectedEvent ? (
        <DetailedEventView
          event={selectedEvent}
          allEvents={riskEvents}
          setSelectedEvent={setSelectedEvent}
          onBack={() => setSelectedEvent(null)}
        />
      ) : (
        <div className="space-y-4 pr-2 flex-1">
          {displayedEvents.map((event) => (
            <RiskEventCard
              key={event.id}
              event={event}
              color={getColor(event.status)}
              onClick={() => setSelectedEvent(event)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default RiskEvents;
