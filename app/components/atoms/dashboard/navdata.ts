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
import type { ReactNode } from "react";

interface BaseTab {
  icon: string;
  title: string;
  activeIcon: string;
}

interface DropdownTab extends BaseTab {
  type: "dropdown";
  dropDownData: { name: string; path: string }[];
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
      { name: "Government Funding", path: "/dashboard/government-funding" },
      { name: "Healthcare Policy", path: "/dashboard/healthcare-policy" },
      { name: "Labour Policy", path: "/dashboard/labour-policy" },

      // create actual routes for these
      { name: "Tax Policy", path: "/dashboard/government-funding" },
      { name: "Energy Policy", path: "/dashboard/government-funding" },
      { name: "Political Climate", path: "/dashboard/government-funding" },
      { name: "Educational Policy", path: "/dashboard/government-funding" },
    ],
  },
  {
    title: "Economic",
    icon: economic,
    activeIcon: economicActive,
    type: "dropdown",
    dropDownData: [
      // create the actual routes for these
      {
        name: "Healthcare Services CPI",
        path: "/dashboard/government-funding",
      },
      { name: "Interest Rates", path: "/dashboard/government-funding" },
      { name: "Disposable Income", path: "/dashboard/government-funding" },
      { name: "Housing", path: "/dashboard/government-funding" },
      { name: "Labour & Wages", path: "/dashboard/government-funding" },
    ],
  },
  {
    title: "Technological",
    icon: technologyActive,
    activeIcon: technology,
    type: "dropdown",
    dropDownData: [
      // create the actual routes for these
      { name: "Healthcare Tech R & D", path: "/dashboard/government-funding" },
      { name: "Process Inovation", path: "/dashboard/government-funding" },
      { name: "Automation & AI", path: "/dashboard/government-funding" },
      { name: "Technology Adoption", path: "/dashboard/government-funding" },
      { name: "Cybersecurity", path: "/dashboard/government-funding" },
    ],
  },
  {
    title: "Environmental",
    icon: environmental,
    activeIcon: environmentalActive,
    type: "dropdown",
    dropDownData: [
      // create the actual routes for these
      { name: "Climate Change", path: "/dashboard/government-funding" },
      { name: "Energy Consumption", path: "/dashboard/government-funding" },
      { name: "Waste Management", path: "/dashboard/government-funding" },
      { name: "Pollution", path: "/dashboard/government-funding" },
      { name: "Carbon Footprint", path: "/dashboard/government-funding" },
      { name: "Zoning & Location", path: "/dashboard/government-funding" },
    ],
  },
  {
    title: "Legal/Regulatory",
    icon: legal,
    activeIcon: legalActive,
    type: "dropdown",
    dropDownData: [
      // create the actual routes for these
      { name: "Industry", path: "/dashboard/government-funding" },
      {
        name: "Licensing & Accreditation",
        path: "/dashboard/government-funding",
      },
      { name: "Employment", path: "/dashboard/government-funding" },
      { name: "Contract", path: "/dashboard/government-funding" },
      {
        name: "Elder right & protection",
        path: "/dashboard/government-funding",
      },
      { name: "Taxes", path: "/dashboard/government-funding" },
      { name: "Data Privacy", path: "/dashboard/government-funding" },
    ],
  },
  {
    title: "Social & Demographics",
    icon: socialDemo,
    activeIcon: socialDemoActive,
    type: "dropdown",
    dropDownData: [
      // create the actual routes for these
      { name: "Age Distribution", path: "/dashboard/government-funding" },
      { name: "Income Distribution", path: "/dashboard/government-funding" },
      { name: "Family Structure", path: "/dashboard/government-funding" },
      { name: "Quality Expectations", path: "/dashboard/government-funding" },
      { name: "Lifestyle & Attitudes", path: "/dashboard/government-funding" },
    ],
  },
  {
    title: "Competitive Forces",
    icon: competitive,
    activeIcon: competitiveActive,
    type: "dropdown",
    dropDownData: [
      // create the actual routes for these
      { name: "Clients/Buyers", path: "/dashboard/government-funding" },
      { name: "Suppliers", path: "/dashboard/government-funding" },
      { name: "Substitutes", path: "/dashboard/government-funding" },
      { name: "New Entrants", path: "/dashboard/government-funding" },
      { name: "Complimentary Products", path: "/dashboard/government-funding" },
      { name: "Government Effect", path: "/dashboard/government-funding" },
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
      // create the actual routes for these
      {
        name: "Operations & Supply Chain Partners",
        path: "/dashboard/government-funding",
      },
      {
        name: "Financial & Legal Partners",
        path: "/dashboard/government-funding",
      },
      {
        name: "Technology & IT Support",
        path: "/dashboard/government-funding",
      },
      {
        name: "Marketing and Sales Partner",
        path: "/dashboard/government-funding",
      },
      {
        name: "Human Resource & Team Management",
        path: "/dashboard/government-funding",
      },
      {
        name: "Facility & Infrastructure Support",
        path: "/dashboard/government-funding",
      },
      {
        name: "Industry Specific and Specialized partners",
        path: "/dashboard/government-funding",
      },
    ],
  },
  {
    title: "Resources",
    icon: resources,
    activeIcon: resourcesActive,
    type: "dropdown",
    dropDownData: [
      // create the actual routes for these
      {
        name: "Human Resources",
        path: "/dashboard/government-funding",
      },
      {
        name: "Financial Resources",
        path: "/dashboard/government-funding",
      },
      {
        name: "Physical Resources",
        path: "/dashboard/government-funding",
      },
      {
        name: "Intellectual & Intangible resources",
        path: "/dashboard/government-funding",
      },
      {
        name: "Technological Resources",
        path: "/dashboard/government-funding",
      },
      {
        name: "Regulatory & Complaince Resources",
        path: "/dashboard/government-funding",
      },
    ],
  },
  {
    title: "Activities",
    icon: activities,
    activeIcon: activitiesActive,
    type: "dropdown",
    dropDownData: [
      // create the actual routes for these
      {
        name: "Financial Services",
        path: "/dashboard/government-funding",
      },
      {
        name: "Hospitalities Services",
        path: "/dashboard/government-funding",
      },
      {
        name: "Brokage",
        path: "/dashboard/government-funding",
      },
      {
        name: "Franchising",
        path: "/dashboard/government-funding",
      },
      {
        name: "E-commerce",
        path: "/dashboard/government-funding",
      },
      {
        name: "Rental / Leasing",
        path: "/dashboard/government-funding",
      },
      {
        name: "Administrative",
        path: "/dashboard/government-funding",
      },
    ],
  },
  {
    title: "Value Preposition",
    icon: valueProp,
    activeIcon: valuePropActive,
    type: "dropdown",
    dropDownData: [
      // create the actual routes for these
      {
        name: "Cost Efficiency & Saving",
        path: "/dashboard/government-funding",
      },
      {
        name: "Quality & Performance",
        path: "/dashboard/government-funding",
      },
      {
        name: "Convenience & Accessibility",
        path: "/dashboard/government-funding",
      },
      {
        name: "Customization & Personalization",
        path: "/dashboard/government-funding",
      },
      {
        name: "Risk Reduction & Security",
        path: "/dashboard/government-funding",
      },
      {
        name: "Brand & Trust Reputation",
        path: "/dashboard/government-funding",
      },
      {
        name: "Innovation & Differentiation",
        path: "/dashboard/government-funding",
      },
      {
        name: "Emotional & Experiential Benefits",
        path: "/dashboard/government-funding",
      },
      {
        name: "Speed & Agility",
        path: "/dashboard/government-funding",
      },
      {
        name: "Environmental & Social Impact",
        path: "/dashboard/government-funding",
      },
    ],
  },
  {
    title: "Customer Segments",
    icon: customerSegment,
    activeIcon: customerSegmentActive,
    type: "dropdown",
    dropDownData: [
      // create the actual routes for these
      {
        name: "B2B (Business-to-Business)",
        path: "/dashboard/government-funding",
      },
      {
        name: "B2C (Business-to-Consumer)",
        path: "/dashboard/government-funding",
      },
      {
        name: "Non-Profit Organizations",
        path: "/dashboard/government-funding",
      },
      {
        name: "Government (B2G)",
        path: "/dashboard/government-funding",
      },
    ],
  },
  {
    title: "Customer Relationship Management",
    icon: crm,
    activeIcon: crmActive,
    type: "dropdown",
    dropDownData: [
      // create the actual routes for these
      {
        name: "Customer Relationship Management (CRM) Systems",
        path: "/dashboard/government-funding",
      },
      {
        name: "Customer Service &  Support",
        path: "/dashboard/government-funding",
      },
      {
        name: "Personalized Communication & Engagement",
        path: "/dashboard/government-funding",
      },
      {
        name: "Loyalty Programs & Incentives",
        path: "/dashboard/government-funding",
      },
      {
        name: "Regular Customer Feedback & Improvement",
        path: "/dashboard/government-funding",
      },
      {
        name: "Proactive Relationship Building",
        path: "/dashboard/government-funding",
      },
    ],
  },
  {
    title: "Channels",
    icon: channels,
    activeIcon: channelsActive,
    type: "dropdown",
    dropDownData: [
      // create the actual routes for these
      { name: "Direct Channels", path: "/dashboard/government-funding" },
      { name: "Indirect Channels", path: "/dashboard/government-funding" },
      { name: "Digital Channels", path: "/dashboard/government-funding" },
      { name: "Physical Channels", path: "/dashboard/government-funding" },
      { name: "Hybrid Channels", path: "/dashboard/government-funding" },
    ],
  },
  {
    // create the actual routes for these
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
      // create the actual routes for these
      { name: "Fixed Costs", path: "/dashboard/government-funding" },
      { name: "Variable Costs", path: "/dashboard/government-funding" },
      { name: "Semi-Variable Costs", path: "/dashboard/government-funding" },
      { name: "Financing Costs", path: "/dashboard/government-funding" },
      {
        name: "Compliance & Regulatory Costs",
        path: "/dashboard/government-funding",
      },
    ],
  },
];
