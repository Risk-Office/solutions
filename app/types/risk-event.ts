export interface RiskEvent {
  id: number;
  title: string;
  description: string;
  date: string;
  status: string;
  time: string;
}

export interface RiskEventCardProps {
  event: RiskEvent;
  color: string;
  onClick: () => void;
}
