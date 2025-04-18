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
    // route("step6", "routes/form/step6.tsx"),
    // route("step7", "routes/form/step7.tsx"),
    // route("step8", "routes/form/step8.tsx"),
    // route("step9", "routes/form/step9.tsx"),
    // route("step10", "routes/form/step10.tsx"),
    // route("step11", "routes/form/step11.tsx"),
    // route("step12", "routes/form/step12.tsx"),
    // route("step13", "routes/form/step13.tsx"),
    // route("step14", "routes/form/step14.tsx"),
    // route("step15", "routes/form/step15.tsx"),
    // route("step16", "routes/form/step16.tsx"),
    // route("step17", "routes/form/step17.tsx"),
    // route("step18", "routes/form/step18.tsx"),
    // route("step19", "routes/form/step19.tsx"),
    // route("step20", "routes/form/step20.tsx"),
    // route("step21", "routes/form/step21.tsx"),
  ]),
] satisfies RouteConfig;
