import {
  type RouteConfig,
  index,
  route,
  layout,
  prefix,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("more-info", "routes/more-info.tsx"),
  route("more-info-2", "routes/more-info2.tsx"),

  ...prefix("dashboard", [
    layout("routes/dashboard/layout.tsx", [
      index("routes/dashboard/overview.tsx"),
      route("government-funding", "routes/dashboard/government-funding.tsx"),
      route("healthcare-policy", "routes/dashboard/healthcare-policy.tsx"),
      route("labour-policy", "routes/dashboard/labour-policy.tsx"),

      // team-hub

      ...prefix("team-hub", [
        index("routes/team-hub/chat.tsx"),
        route("my-tasks", "routes/team-hub/my-tasks.tsx"),
        route("team-members", "routes/team-hub/team-members.tsx"),
      ]),

      // report
      route("report", "routes/report/index.tsx"),
    ]),
  ]),
] satisfies RouteConfig;
