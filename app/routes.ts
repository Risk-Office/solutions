import {
  type RouteConfig,
  index,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("more-info", "routes/more-info.tsx"),
] satisfies RouteConfig;
