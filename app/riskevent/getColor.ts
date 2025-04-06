// getColor.ts (utility function)
export const getColor = (status: string): string => {
  switch (status.toLowerCase()) {
    case "critical":
      return "#FF4757";
    case "severe":
      return "#8A2BE2";
    case "emergency":
      return "#FF1493";
    case "high":
      return "#FFA502";
    case "medium":
      return "#2ED573";
    case "low":
      return "#1E90FF";
    case "resolved":
      return "#57606F";
    default:
      return "#CCCCCC"; // default gray
  }
};
