import Layout from "~/views/dashboard/layout";

export function meta() {
  return [
    { title: "Solutions | Dashboard" },
    { name: "description", content: "Solutions Dashboard" },
  ];
}

const DashboardLayout = () => {
  return <Layout />;
};

export default DashboardLayout;