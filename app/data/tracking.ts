export type TrackingItemType = 'Risk Event' | 'New/Article' | 'Statement/Actions' | 'Trends';

export interface TrackingItem {
  id: string;
  title: string;
  type: TrackingItemType;
  lastUpdate: string;
  expectedUpdate: string;
}

export interface UpdateItem {
  id: string;
  title: string;
  type: TrackingItemType;
  date: string;
  description: string;
  tags: string[];
}

export const trackingItems: TrackingItem[] = [
  {
    id: "1",
    title: "Fire at Costco Business, Mundoon",
    type: "Risk Event",
    lastUpdate: "27th Feb 2025",
    expectedUpdate: "In 3 Days"
  },
  {
    id: "2",
    title: "Changes in Minimum Wage Laws",
    type: "New/Article",
    lastUpdate: "27th Feb 2025",
    expectedUpdate: "In 3 Days"
  },
  {
    id: "3",
    title: "Impact of AI in Healthcare",
    type: "Statement/Actions",
    lastUpdate: "27th Feb 2025",
    expectedUpdate: "In 3 Days"
  },
  {
    id: "4",
    title: "AMD Announces Strategic R&D Collaboration",
    type: "New/Article",
    lastUpdate: "27th Feb 2025",
    expectedUpdate: "In 3 Days"
  },
  {
    id: "5",
    title: "Changes in Minimum Wage Laws",
    type: "Risk Event",
    lastUpdate: "27th Feb 2025",
    expectedUpdate: "In 3 Days"
  },
  {
    id: "6",
    title: "Telehealth Expansion & Patient Monitoring",
    type: "Trends",
    lastUpdate: "27th Feb 2025",
    expectedUpdate: "In 3 Days"
  }
];

export const updateItems: UpdateItem[] = [
  {
    id: "1",
    title: "Fire at Costco Business, Mundoon",
    type: "Risk Event",
    date: "5th March, 2025",
    description: "In a significant cybersecurity breach, one of the largest financial institutions suffered a major attack that led to the exposure",
    tags: ["Strategic", "Operational", "Financial"]
  },
  {
    id: "2",
    title: "Cybersecurity Breach at Major Bank",
    type: "Risk Event",
    date: "5th March, 2025",
    description: "In a significant cybersecurity breach, one of the largest financial institutions suffered a major attack that led to the exposure",
    tags: ["Strategic", "Operational", "Financial"]
  }
]; 