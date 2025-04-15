export type Severity = "Critical" | "High" | "Medium" | "Low";

export interface Article {
  id: string;
  title: string;
  source: string;
  date: string;
  imageUrl: string;
  timeHorizon: string;
  severity: Severity;
}

export const articles: Article[] = [
  {
    id: "1",
    title: "AMD Announces Strategic R&D Collaboration with Yeshiva University",
    source: "www.bbcnews.com",
    date: "14th Nov. 2024",
    imageUrl: "https://images.icon-icons.com/70/PNG/512/bbc_news_14062.png",
    timeHorizon: "2 years",
    severity: "Critical",
  },
  {
    id: "2",
    title: "Federal Reserve Signals Possible Interest Rate Hike in Q1 2025",
    source: "www.reuters.com",
    date: "10th Nov. 2024",
    imageUrl:
      "https://brandlogo.org/wp-content/uploads/2024/06/Reuters-Logo-Vertical.png.webp",
    timeHorizon: "6 months",
    severity: "High",
  },
  {
    id: "3",
    title: "SEC Tightens Regulations on Crypto Asset Reporting",
    source: "www.bloomberg.com",
    date: "9th Nov. 2024",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Jsgqn65idTsvUVq8AbXLjbU5XhhTgQH6Eg&s",
    timeHorizon: "1 year",
    severity: "Medium",
  },
  {
    id: "4",
    title: "OPEC+ Plans Gradual Reduction in Oil Production",
    source: "www.bloomberg.com",
    date: "8th Nov. 2024",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Jsgqn65idTsvUVq8AbXLjbU5XhhTgQH6Eg&s",
    timeHorizon: "3 years",
    severity: "Low",
  },
  {
    id: "5",
    title: "Global Banks Urged to Prepare for Climate Risk Disclosures",
    source: "www.bbcnews.com",
    date: "6th Nov. 2024",
    imageUrl: "https://images.icon-icons.com/70/PNG/512/bbc_news_14062.png",
    timeHorizon: "5 years",
    severity: "High"
  },
  {
    id: "6",
    title: "China's Shadow Banking Sector Faces Renewed Scrutiny",
    source: "www.bbcnews.com",
    date: "5th Nov. 2024",
    imageUrl: "https://images.icon-icons.com/70/PNG/512/bbc_news_14062.png",
    timeHorizon: "1.5 years",
    severity: "Critical",
  },
  {
    id: "7",
    title: "Tech Startups Brace for Downturn in VC Funding",
    source: "www.forbes.com",
    date: "4th Nov. 2024",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsCj05p4vyZ2N9M5ng1gQol10jzx78ePwMXQ&s",
    timeHorizon: "1 year",
    severity: "Medium",
  },
  {
    id: "8",
    title: "India to Launch Sovereign Green Bonds in 2025",
    source: "www.reuters.com",
    date: "3rd Nov. 2024",
    imageUrl:
      "https://brandlogo.org/wp-content/uploads/2024/06/Reuters-Logo-Vertical.png.webp",
    timeHorizon: "2 years",
    severity: "Low",
  },
  {
    id: "9",
    title: "Cybersecurity Breach Impacts Major US Insurance Provider",
    source: "www.bbcnews.com",
    date: "2nd Nov. 2024",
    imageUrl: "https://images.icon-icons.com/70/PNG/512/bbc_news_14062.png",
    timeHorizon: "Immediate",
    severity: "Critical",
  },
  {
    id: "10",
    title: "US Housing Market Slows Amid Mortgage Rate Spike",
    source: "www.forbes.com",
    date: "1st Nov. 2024",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsCj05p4vyZ2N9M5ng1gQol10jzx78ePwMXQ&s",
    timeHorizon: "1 year",
    severity: "High",
  },
  {
    id: "11",
    title: "Eurozone Inflation Drops Below 3% for First Time in 2 Years",
    source: "www.bbcnews.com",
    date: "30th Oct. 2024",
    imageUrl: "https://images.icon-icons.com/70/PNG/512/bbc_news_14062.png",
    timeHorizon: "6 months",
    severity: "Medium",
  },
  {
    id: "12",
    title: "Goldman Sachs Revises Global Growth Forecast Downward",
    source: "www.bbcnews.com",
    date: "29th Oct. 2024",
    imageUrl: "https://images.icon-icons.com/70/PNG/512/bbc_news_14062.png",
    timeHorizon: "2 years",
    severity: "High",
  },
  {
    id: "13",
    title: "Ethiopia Signs Bilateral Trade Deal With South Korea",
    source: "www.reuters.com",
    date: "28th Oct. 2024",
    imageUrl:
      "https://brandlogo.org/wp-content/uploads/2024/06/Reuters-Logo-Vertical.png.webp",
    timeHorizon: "3 years",
    severity: "Low",
  },
  {
    id: "14",
    title: "Artificial Intelligence Policy Bill Moves Forward in US Senate",
    source: "www.forbes.com",
    date: "27th Oct. 2024",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsCj05p4vyZ2N9M5ng1gQol10jzx78ePwMXQ&s",
    timeHorizon: "1 year",
    severity: "Medium",
  },
  {
    id: "15",
    title: "Major Merger Announced Between Leading African Banks",
    source: "www.reuters.com",
    date: "25th Oct. 2024",
    imageUrl: "https://brandlogo.org/wp-content/uploads/2024/06/Reuters-Logo-Vertical.png.webp",
    timeHorizon: "2 years",
    severity: "High",
  },
];