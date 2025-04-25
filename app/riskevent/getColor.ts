// getColor.ts (utility function)
export const getColor = (status: string): string => {
  switch (status.toLowerCase()) {
    case "critical":
      return "#DC3545";
    case "high":
      return "#FD7E14";
    case "medium":
      return "#FFC107";
    case "low":
      return "#17A2B8";
    case "insignificant":
      return "#28A745";
    default:
      return "#6C757D";
  }
};
