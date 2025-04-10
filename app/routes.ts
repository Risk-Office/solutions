import {
  type RouteConfig,
  index,
  route,
  layout,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("insight", "routes/insight.tsx"),
  route("more-info", "routes/more-info.tsx"),
  route("more-info-2", "routes/more-info2.tsx"),
  layout("routes/dashboard/layout.tsx", [
    route("dashboard", "routes/dashboard/home.tsx"),
  ]),
] satisfies RouteConfig;
