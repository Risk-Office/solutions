import scanIcon from "~/assets/svg/i-scan.svg";
import auditIcon from "~/assets/svg/i-audit.svg";
import complyIcon from "~/assets/svg/comply.svg";
import projectIcon from "~/assets/svg/project.svg";
import fragileIcon from "~/assets/svg/fragile.svg";
import partnerIcon from "~/assets/svg/partner.svg";
import eventIcon from "~/assets/svg/event.svg";
import myAuditIcon from "~/assets/svg/my-audit.svg";
import integrateIcon from "~/assets/svg/i-integrate.svg";
import sergentIcon from "~/assets/svg/drill-sergent.svg";
import iscanLogo from "~/assets/svg/i-scan-logo.svg"
import iauditLogo from "~/assets/svg/i-audit-logo.svg"
import icomplyLogo from "~/assets/svg/i-comply-icon.svg"
import ieventLogo from "~/assets/svg/i-event-icon.svg"
import fragileILogo from "~/assets/svg/fragile-i-icon.svg"
import ipartnerLogo from "~/assets/svg/partner-logo.svg"
import myAuditLogo from "~/assets/svg/my-audit-logo.svg"
import integrateLogo from "~/assets/svg/i-Integrate-icon.svg"
import sergentLogo from "~/assets/svg/drill-sergeant-icon.svg"
export interface SolutionProps {
  name: string;
  icon: string;
  tag: string;
  route: string;
  reversed?: boolean;
  description: string;
  solutionLogo: string
}

export const offeredSolutions: SolutionProps[] = [
  {
    name: "Scan",
    icon: scanIcon,
    tag: "i",
    description: "Transform raw data into strategic advantage with real-time risk monitoring",
    route: "/solutions/i-scan",
    solutionLogo: iscanLogo
  },
  {
    name: "Audit",
    icon: auditIcon,
    tag: "i",
    description: "Transform Risk Audits into Strategic Advantage",
    route: "/solutions/i-audit",
    solutionLogo: iauditLogo
  },
  {
    name: "Comply",
    icon: complyIcon,
    tag: "i",
    description: "Track, manage, and adhere to regulatory requirements with ease",
    route: "/solutions/i-comply",
    solutionLogo: icomplyLogo
  },
  {
    name: "Project",
    icon: projectIcon,
    tag: "i",
    description: "Identify and manage potential risks in your projects with i-Project",
    route: "/solutions/i-project",
    solutionLogo: projectIcon
  },
  {
    name: "Fragile",
    icon: fragileIcon,
    tag: "i",
    description: "Turning Business Fragility into Strength",
    route: "/solutions/fragile-i",
    reversed: true,
    solutionLogo: fragileILogo
  },
  {
    name: "Partner",
    icon: partnerIcon,
    tag: "360",
    description: "Secure Your Vendor and Service Provider Relationships",
    route: "/solutions/partner-360",
    reversed: true,
    solutionLogo: ipartnerLogo
  },
  {
    name: "Event",
    icon: eventIcon,
    tag: "i",
    description: "Take Control of Risk Event Management",
    route: "/solutions/i-event",
    solutionLogo: ieventLogo
  },
  {
    name: "Audit",
    icon: myAuditIcon,
    tag: "my",
    description: "Self-Identify and Strengthen Your Risk Controls",
    route: "/solutions/my-audit",
    solutionLogo: myAuditLogo
  },
  {
    name: "Integr8",
    icon: integrateIcon,
    tag: "i",
    description: "Empower your organization with a tailored approach to risk management",
    route: "/solutions/i-integrate",
    solutionLogo: integrateLogo
  },
  {
    name: "Sergeant",
    icon: sergentIcon,
    tag: "Drill",
    description: "Simulate, Assess, and Transform Preparedness into Action",
    route: "/solutions/drill-sergeant",
    solutionLogo: sergentLogo
  },
];
