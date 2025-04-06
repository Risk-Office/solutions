import RiskEventCard from "~/riskevent/RiskEventCard";
import riskEvents from "../../../../riskevent/riskevent.json"
import { getColor } from "~/riskevent/getColor";

const RiskEvents = () => {
  return (
    <div className="flex flex-col w-full h-[810px] overflow-y-auto p-4">
      <div className="space-y-4 pr-2 flex-1"> 
        {riskEvents.map((event) => (
          <RiskEventCard
            key={event.id}
            event={event}
            color={getColor(event.status)}
          />
        ))}
      </div>
    </div>
  );
};

export default RiskEvents;