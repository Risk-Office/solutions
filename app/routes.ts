import {
  type RouteConfig,
  index,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("more-info", "routes/more-info.tsx"),
  route("more-info-2", "routes/more-info2.tsx"),
  route("dashboard", "routes/dashboard.tsx"),
] satisfies RouteConfig;
