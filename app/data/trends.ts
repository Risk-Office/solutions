export type TrendSeverity = 'Critical' | 'High' | 'Medium' | 'Low' | 'Insignificant';
export type SignalStrength = 'Strong' | 'Moderate' | 'Weak';

export interface Trend {
  id: string;
  title: string;
  tags: string[];
  description: string;
  detectedDate: string;
  likelihood: string;
  impactSeverity: TrendSeverity;
  signal: SignalStrength;
}

export const trends: Trend[] = [
  {
    id: "1",
    title: "Pricing Strategy",
    tags: ["Strategic", "Operational", "Financial"],
    description: "Healthcare providers report a 7% decline in Q1 revenue, citing delayed reimbursements has raised concerns among hospital networks, senior care providers, and private healthcare institutions",
    detectedDate: "April 4, 2025",
    likelihood: "High",
    impactSeverity: "Critical",
    signal: "Strong"
  },
  {
    id: "2",
    title: "Tech startups",
    tags: ["Strategic", "Operational"],
    description: "Healthcare providers report a 7% decline in Q1 revenue, citing delayed reimbursements has raised concerns among hospital networks, senior care providers, and private healthcare institutions",
    detectedDate: "April 4, 2025",
    likelihood: "High",
    impactSeverity: "High",
    signal: "Strong"
  },
  {
    id: "3",
    title: "Regulatory compliance",
    tags: ["Operational", "Financial"],
    description: "Healthcare providers report a 7% decline in Q1 revenue, citing delayed reimbursements has raised concerns among hospital networks, senior care providers",
    detectedDate: "April 4, 2025",
    likelihood: "Medium",
    impactSeverity: "Medium",
    signal: "Moderate"
  },
  {
    id: "4",
    title: "Market consolidation",
    tags: ["Strategic", "Financial"],
    description: "Increasing merger and acquisition activity among healthcare technology providers signals potential market consolidation",
    detectedDate: "April 2, 2025",
    likelihood: "High",
    impactSeverity: "Critical",
    signal: "Strong"
  },
  {
    id: "5",
    title: "Supply chain digitalization",
    tags: ["Operational", "Technology"],
    description: "Rapid adoption of digital supply chain solutions among healthcare providers to improve efficiency and reduce costs",
    detectedDate: "April 1, 2025",
    likelihood: "High",
    impactSeverity: "High",
    signal: "Strong"
  }
]; 