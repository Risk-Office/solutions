// getColor.ts (utility function)
export const getColor = (status: string): string => {
  switch (status.toLowerCase()) {
    case "critical":
      return "#d21116";
    case "low":
      return "#23b4e4";
    case "high":
      return "#ffb25a";
    case "insignificant":
      return "#1ba019";
    case "medium":
      return "#fde030";
    default:
      return "#CCCCCC";
  }
};
