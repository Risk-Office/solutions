import {
  type RouteConfig,
  index,
  route,
  layout,
  prefix,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("insight", "routes/insight.tsx"),
  route("scratch", "routes/scratch.tsx"),
  route("more-info", "routes/more-info.tsx"),
  route("more-info-2", "routes/more-info2.tsx"),
  route("ai-form", "routes/ai-form/index.tsx"),

  ...prefix("dashboard", [
    layout("routes/dashboard/layout.tsx", [
      index("routes/dashboard/overview.tsx"),
      route("government-funding", "routes/dashboard/government-funding.tsx"),
      route("healthcare-policy", "routes/dashboard/healthcare-policy.tsx"),
      route("labour-policy", "routes/dashboard/labour-policy.tsx"),

      // business model
      route("business-model", "routes/dashboard/business-model.tsx"),

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
  layout("routes/form/layout.tsx", [
    route("form", "routes/form/step1.tsx"), // default to first step
    route("form/step2", "routes/form/step2.tsx"),
    route("form/step3", "routes/form/step3.tsx"),
    route("form/step4", "routes/form/step4.tsx"),
    route("form/step5", "routes/form/step5.tsx"),
    route("form/step6", "routes/form/step6.tsx"),
    route("form/step7", "routes/form/step7.tsx"),
    route("form/step8", "routes/form/step8.tsx"),
    route("form/step9", "routes/form/step9.tsx"),
    route("form/step10", "routes/form/step10.tsx"),
  ]),
] satisfies RouteConfig;
