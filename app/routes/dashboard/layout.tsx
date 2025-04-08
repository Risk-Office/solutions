import Layout from "~/views/dashboard/layout";

export function meta() {
  return [
    { title: "Solutions | Dasboard" },
    { name: "description", content: "Solutions Dasboard" },
  ];
}

const DashboardLayout = () => {
  return (
      <Layout />
  )
};

export default DashboardLayout;
