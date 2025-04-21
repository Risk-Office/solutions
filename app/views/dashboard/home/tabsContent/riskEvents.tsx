import { useState } from "react";
import RiskEventCard from "~/riskevent/RiskEventCard";
import riskEvents from "~/riskevent/riskevent.json";
import { getColor } from "~/riskevent/getColor";
import DetailedEventView from "~/riskevent/DetailedEventView";
import type { RiskEvent } from "~/types/risk-event";

const RiskEvents = () => {
  const [selectedEvent, setSelectedEvent] = useState<RiskEvent | null>(null);

  return (
    <div className="flex flex-col w-full h-[810px] dark:bg-[var(--nav-color)] rounded-md overflow-y-auto p-4">
      {selectedEvent ? (
        <DetailedEventView
          event={selectedEvent}
          allEvents={riskEvents}
          setSelectedEvent={setSelectedEvent}
          onBack={() => setSelectedEvent(null)}
        />
      ) : (
        <div className="space-y-4 pr-2 flex-1">
          {riskEvents.map((event) => (
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
