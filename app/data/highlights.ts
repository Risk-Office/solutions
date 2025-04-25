type TimeframeOption = "today" | "7days" | "month";

interface Highlight {
  title: string;
  description: string;
  type: "success" | "warning" | "danger" | "info";
}

interface HighlightData {
  timeframe: TimeframeOption;
  data: Highlight[];
}

interface SectionHighlights {
  [key: string]: HighlightData[];
}

export const businessModelHighlights: SectionHighlights = {
  "Revenue Streams": [
    {
      timeframe: "today",
      data: [
        {
          title: "Budget cuts threaten healthcare access",
          description: "Budget cuts threaten healthcare access in rural areas.",
          type: "danger",
        },
        {
          title: "Alternative funding proposed",
          description: "Lobbyists propose alternative funding",
          type: "info",
        },
        {
          title: "Healthcare costs rising",
          description: "New policies may raise healthcare costs",
          type: "warning",
        },
      ],
    },
    {
      timeframe: "7days",
      data: [
        {
          title: "Weekly Revenue Analysis",
          description: "Revenue streams show positive growth in urban markets",
          type: "success",
        },
        {
          title: "Subscription Model Performance",
          description: "15% increase in subscription renewals",
          type: "success",
        },
      ],
    },
    {
      timeframe: "month",
      data: [
        {
          title: "Monthly Revenue Overview",
          description: "Consistent growth across all revenue streams",
          type: "success",
        },
        {
          title: "Market Expansion Impact",
          description: "New market entry shows promising results",
          type: "info",
        },
      ],
    },
  ],

  "Cost Structure": [
    {
      timeframe: "today",
      data: [
        {
          title: "Operating Costs Alert",
          description: "Sudden increase in operational expenses",
          type: "danger",
        },
        {
          title: "Cost Optimization",
          description: "New cost-saving measures implemented",
          type: "success",
        },
      ],
    },
    // Add 7days and month data similarly
  ],

  "Customer Segments": [
    {
      timeframe: "today",
      data: [
        {
          title: "B2B Segment Growth",
          description: "Positive response from enterprise clients",
          type: "success",
        },
        {
          title: "Market Penetration",
          description: "New segment acquisition rate increased",
          type: "info",
        },
      ],
    },
    // Add 7days and month data similarly
  ],

  "Value Proposition": [
    {
      timeframe: "today",
      data: [
        {
          title: "Value Enhancement",
          description: "New features added to core offerings",
          type: "success",
        },
        {
          title: "Customer Feedback",
          description: "Positive response to recent updates",
          type: "info",
        },
      ],
    },
    // Add 7days and month data similarly
  ],

  "Customer Relationships": [
    {
      timeframe: "today",
      data: [
        {
          title: "Customer Satisfaction",
          description: "Improved response times in support",
          type: "success",
        },
        {
          title: "Engagement Metrics",
          description: "Higher interaction rates observed",
          type: "info",
        },
      ],
    },
    // Add 7days and month data similarly
  ],

  Partnerships: [
    {
      timeframe: "today",
      data: [
        {
          title: "New Partnership",
          description: "Strategic alliance formed with key player",
          type: "success",
        },
        {
          title: "Partnership Performance",
          description: "Existing partnerships showing growth",
          type: "info",
        },
      ],
    },
    // Add 7days and month data similarly
  ],

  Channels: [
    {
      timeframe: "today",
      data: [
        {
          title: "Channel Efficiency",
          description: "Digital channels showing improved conversion",
          type: "success",
        },
        {
          title: "Distribution Update",
          description: "New channel partner onboarded",
          type: "info",
        },
      ],
    },
    // Add 7days and month data similarly
  ],

  Activities: [
    {
      timeframe: "today",
      data: [
        {
          title: "Process Optimization",
          description: "Key activities streamlined",
          type: "success",
        },
        {
          title: "Activity Metrics",
          description: "Operational efficiency improved",
          type: "info",
        },
      ],
    },
    // Add 7days and month data similarly
  ],
};
