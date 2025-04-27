import { Outlet } from "react-router";
import { useNavigate } from "react-router";

export function meta() {
  return [
    { title: "Solutions | Dashboard" },
    { name: "description", content: "Solutions Dashboard" },
  ];
}

const topTabs = [
  { label: "Customer Segment", path: "/form" }, // Step 1
  { label: "Value Proposition", path: "/form/step3" }, // Step 3
  { label: "Customer Relationship Management", path: "/form/step5" }, // Step 5
  { label: "Customer Channels", path: "/form/step7" }, // Step 7
  { label: "Key Resources", path: "/form/step10" }, // Step 10
  { label: "Key Activities", path: "/form/step13" }, // Step 13
  { label: "Key Partnerships", path: "/form/step15" }, // Step 15
  { label: "Cost Structure", path: "/form/step18" }, // Step 18
  { label: "Revenue Streams", path: "/form/step20" }, // Step 20
];
export default function FormLayout() {
  // const location = useLocation();
  const navigate = useNavigate();

  return (
    <div>
      {/* Top Tabs */}
      <div className="bg-gray-50 w-full flex items-stretch space-x-2 py-2">
        {topTabs.map((tab, index) => {
          const isActive = index === 0;
          return (
            <button
              key={tab.label}
              // onClick={() => navigate(tab.path)}
              className={`w-36 py-2 text-xs rounded 
                        ${
                          isActive
                            ? "bg-[#AB8B1A] text-white"
                            : "text-black bg-gray-200"
                        }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Current Form Step */}
      <Outlet />
    </div>
  );
}
