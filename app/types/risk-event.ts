export type RiskEvent = {
  id: number;
  title: string;
  description: string;
  date: string;
  status: string;
  time: string;
};

export type RiskEventCardProps = {
  event: RiskEvent;
  color: string;
  onClick?: () => void;
};
