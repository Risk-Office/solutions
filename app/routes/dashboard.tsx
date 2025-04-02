import Dashboard from "~/views/dashboard";
import type { Route } from "./+types/dashboard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Solutions | Dasboard" },
    { name: "description", content: "Solutions Dasboard" },
  ];
}

const DashboardLayout = () => {
  return <Dashboard />;
};

export default DashboardLayout;
