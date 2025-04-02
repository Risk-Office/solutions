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
    url: "/",
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
    icon: technology,
    activeIcon: technologyActive,
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
    ],
  },
  {
    title: "Competitive Forces",
    icon: competitive,
    activeIcon: competitiveActive,
    type: "dropdown",
    dropDownData: [],
  },
];

export const businessModelData: TabsData[] = [
  {
    title: "Overview",
    icon: overview,
    activeIcon: overviewActive,
    type: "link",
    url: "/",
  },
  {
    title: "Partners",
    icon: socialDemo,
    activeIcon: socialDemoActive,
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
    title: "Resource",
    icon: socialDemo,
    activeIcon: socialDemoActive,
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
    icon: socialDemo,
    activeIcon: socialDemoActive,
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
];
