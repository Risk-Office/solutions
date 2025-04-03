import overview from "~/assets/svg/overview.svg";
import overviewActive from "~/assets/svg/overview-active.svg";
import political from "~/assets/svg/political.svg";
import politicalNonActive from "~/assets/svg/political-non-active.svg";
import economic from "~/assets/svg/economic.svg";
import economicActive from "~/assets/svg/economic-active.svg";
import technologyActive from "~/assets/svg/technology.svg";
import technology from "~/assets/svg/technology-active.svg";
import environmental from "~/assets/svg/environmental.svg";
import environmentalActive from "~/assets/svg/environmental-active.svg";
import legal from "~/assets/svg/legal.svg";
import legalActive from "~/assets/svg/legal-active.svg";
import socialDemo from "~/assets/svg/social-demo.svg";
import socialDemoActive from "~/assets/svg/population-active.svg";
import competitive from "~/assets/svg/competitive-forces.svg";
import competitiveActive from "~/assets/svg/competition-active.svg";
import partners from "~/assets/svg/partnership.svg";
import partnersActive from "~/assets/svg/partnership-active.svg";
import resources from "~/assets/svg/resource-allocation.svg";
import resourcesActive from "~/assets/svg/resource-allocation-active.svg";
import activities from "~/assets/svg/activity.svg";
import activitiesActive from "~/assets/svg/activity-active.svg";
import valueProp from "~/assets/svg/value-proposition.svg";
import valuePropActive from "~/assets/svg/value-proposition-active.svg";
import customerSegment from "~/assets/svg/customer-segmentation.svg";
import customerSegmentActive from "~/assets/svg/customer-segmentation-active.svg";
import crm from "~/assets/svg/CMR.svg";
import crmActive from "~/assets/svg/CMR-active.svg";
import channels from "~/assets/svg/channels.svg";
import channelsActive from "~/assets/svg/channels-active.svg";
import revenueStream from "~/assets/svg/revenue-streams.svg";
import revenueStreamActive from "~/assets/svg/revenue-streams-active.svg";
import costStructure from "~/assets/svg/cost-structure.svg";
import costStructureActive from "~/assets/svg/cost-structure-active.svg";

interface BaseTab {
  icon: string;
  title: string;
  activeIcon: string;
}

interface DropdownTab extends BaseTab {
  type: "dropdown";
  dropDownData: string[];
}

interface LinkTab extends BaseTab {
  type: "link";
  url: string;
}

type TabsData = DropdownTab | LinkTab;

export const macroEnvironmentData: TabsData[] = [
  {
    title: "Overview",
    icon: overview,
    type: "link",
    url: "/dashboard",
    activeIcon: overviewActive,
  },
  {
    title: "Political",
    icon: politicalNonActive,
    type: "dropdown",
    activeIcon: political,
    dropDownData: [
      "Government Funding",
      "Healthcare Policy",
      "Labour Policy",
      "Tax Policy",
      "Energy Policy",
      "Political Climate",
      "Educational Policy",
    ],
  },
  {
    title: "Economic",
    icon: economic,
    activeIcon: economicActive,
    type: "dropdown",
    dropDownData: [
      "Healthcare Services CPI",
      "Interest Rates",
      "Disposable Income",
      "Housing",
      "Labour & Wages",
    ],
  },
  {
    title: "Technological",
    icon: technologyActive,
    activeIcon: technology,
    type: "dropdown",
    dropDownData: [
      "Healthcare Tech R & D",
      "Process Inovation",
      "Automation & AI",
      "Technology Adoption",
      "Cybersecurity",
    ],
  },
  {
    title: "Environmental",
    icon: environmental,
    activeIcon: environmentalActive,
    type: "dropdown",
    dropDownData: [
      "Climate Change",
      "Energy Consumption",
      "Waste Management",
      "Pollution",
      "Carbon Footprint",
      "Zoning & Location",
    ],
  },
  {
    title: "Legal/Regulatory",
    icon: legal,
    activeIcon: legalActive,
    type: "dropdown",
    dropDownData: [
      "Industry",
      "Licensing & Accreditation",
      "Employment",
      "Contract",
      "Elder right & protection",
      "Taxes",
      "Data Privacy",
    ],
  },
  {
    title: "Social & Demographics",
    icon: socialDemo,
    activeIcon: socialDemoActive,
    type: "dropdown",
    dropDownData: [
      "Age Distribution",
      "Income Distribution",
      "Family Structure",
      "Quality Expectations",
      "Lifestyle & Attitudes",
    ],
  },
  {
    title: "Competitive Forces",
    icon: competitive,
    activeIcon: competitiveActive,
    type: "dropdown",
    dropDownData: [
      "Clients/Buyers",
      "Suppliers",
      "Substitutes",
      "New Entrants",
      "Complimentary Products",
      "Government Effect",
    ],
  },
];

export const businessModelData: TabsData[] = [
  {
    title: "Overview",
    icon: overview,
    activeIcon: overviewActive,
    type: "link",
    url: "/dashboard",
  },
  {
    title: "Partners",
    icon: partnersActive,
    activeIcon: partners,
    type: "dropdown",
    dropDownData: [
      "Operations & Supply Chain Partners",
      "Financial & Legal Partners",
      "Technology & IT Support",
      "Marketing and Sales Partner",
      "Human Resource & Team Management",
      "Facility & Infrastructure Support",
      "Industry Specific and Specialized partners",
    ],
  },
  {
    title: "Resources",
    icon: resources,
    activeIcon: resourcesActive,
    type: "dropdown",
    dropDownData: [
      "Human Resources",
      "Financial Resources",
      "Physical Resources",
      "Intellectual & Intangible resources",
      "Technological Resources",
      "Regulatory & Complaince Resources",
    ],
  },
  {
    title: "Activities",
    icon: activities,
    activeIcon: activitiesActive,
    type: "dropdown",
    dropDownData: [
      "Financial Services",
      "Hospitalities Services",
      "Brokage",
      "Franchising",
      "E-commerce",
      "Rental / Leasing",
      "Administrative",
    ],
  },
  {
    title: "Value Preposition",
    icon: valueProp,
    activeIcon: valuePropActive,
    type: "dropdown",
    dropDownData: [
      "Cost Efficiency & Saving",
      "Quality & Performance",
      "Convenience & Accessibility",
      "Customization & Personalization",
      "Risk Reduction & Security",
      "Brand & Trust Reputation",
      "Innovation & Differentiation",
      "Emotional & Experiential Benefits",
      "Speed & Agility",
      "Environmental & Social Impact",
    ],
  },
  {
    title: "Customer Segments",
    icon: customerSegment,
    activeIcon: customerSegmentActive,
    type: "dropdown",
    dropDownData: [
      "B2B (Business-to-Business)",
      "B2C (Business-to-Consumer)",
      "Non-Profit Organizations",
      "Government (B2G)",
    ],
  },
  {
    title: "Customer Relationship Management",
    icon: crm,
    activeIcon: crmActive,
    type: "dropdown",
    dropDownData: [
      "Customer Relationship Management (CRM) Systems",
      "Customer Service &  Support",
      "Personalized Communication & Engagement",
      "Loyalty Programs & Incentives",
      "Regular Customer Feedback & Improvement",
      "Proactive Relationship Building",
    ],
  },
  {
    title: "Channels",
    icon: channels,
    activeIcon: channelsActive,
    type: "dropdown",
    dropDownData: [
      "Direct Channels",
      "Indirect Channels",
      "Digital Channels",
      "Physical Channels",
      "Hybrid Channels",
    ],
  },
  {
    title: "Revenue Streams",
    icon: revenueStream,
    url: "",
    activeIcon: revenueStreamActive,
    type: "link",
  },
  {
    title: "Cost Structure",
    icon: costStructure,
    activeIcon: costStructureActive,
    type: "dropdown",
    dropDownData: [
      "Fixed Costs",
      "Variable Costs",
      "Semi-Variable Costs",
      "Financing Costs",
      "Compliance & Regulatory Costs",
    ],
  },
];
