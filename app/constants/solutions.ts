import scanIcon from "../assets/svg/i-scan.svg";
import auditIcon from "../assets/svg/i-audit.svg";
import complyIcon from "../assets/svg/comply.svg";
import projectIcon from "../assets/svg/project.svg";
import fragileIcon from "../assets/svg/fragile.svg";
import partnerIcon from "../assets/svg/partner.svg";
import eventIcon from "../assets/svg/event.svg";
import myAuditIcon from "../assets/svg/my-audit.svg";
import integrateIcon from "../assets/svg/i-integrate.svg";
import sergentIcon from "../assets/svg/drill-sergent.svg";

export interface SolutionProps {
  name: string;
  icon: string;
  tag: string;
  route: string;
  reversed?: boolean;
  description: string;
}

export const offeredSolutions: SolutionProps[] = [
  {
    name: "Scan",
    icon: scanIcon,
    tag: "i",
    description:
      "Transform raw data into strategic advantage with real-time risk monitoring",
    route: "/solutions/i-scan",
  },
  {
    name: "Audit",
    icon: auditIcon,
    tag: "i",
    description: "Transform Risk Audits into Strategic Advantage",
    route: "/solutions/i-audit",
  },
  {
    name: "Comply",
    icon: complyIcon,
    tag: "i",
    description:
      "Track, manage, and adhere to regulatory requirements with ease",
    route: "/solutions/i-comply",
  },
  {
    name: "Project",
    icon: projectIcon,
    tag: "i",
    description:
      "Identify and manage potential risks in your projects with i-Project",
    route: "/solutions/i-project",
  },
  {
    name: "Fragile",
    icon: fragileIcon,
    tag: "i",
    description: "Turning Business Fragility into Strength",
    route: "/solutions/fragile-i",
    reversed: true,
  },
  {
    name: "Partner",
    icon: partnerIcon,
    tag: "360",
    description: "Secure Your Vendor and Service Provider Relationships",
    route: "/solutions/partner-360",
    reversed: true,
  },
  {
    name: "Event",
    icon: eventIcon,
    tag: "i",
    description: "Take Control of Risk Event Management",
    route: "/solutions/i-event",
  },
  {
    name: "Audit",
    icon: myAuditIcon,
    tag: "my",
    description: "Self-Identify and Strengthen Your Risk Controls",
    route: "/solutions/my-audit",
  },
  {
    name: "Integr8",
    icon: integrateIcon,
    tag: "i",
    description:
      "Empower your organization with a tailored approach to risk management",
    route: "/solutions/i-integrate",
  },
  {
    name: "Sergeant",
    icon: sergentIcon,
    tag: "Drill",
    description: "Simulate, Assess, and Transform Preparedness into Action",
    route: "/solutions/drill-sergeant",
  },
];
