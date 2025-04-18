import { Outlet } from "react-router-dom";
import { useNavigate, useLocation } from "react-router"
import { Check } from 'lucide-react'

export function meta() {
  return [
    { title: "Solutions | Dashboard" },
    { name: "description", content: "Solutions Dashboard" },
  ];
}

const topTabs = [
    { label: "Customer Segment", path: "/form", activePaths: ["/form", "/form/step2"] }, // Step 1 & 2
    { label: "Value Proposition", path: "/form/step3" }, // Step 3
    { label: "Customer Relationship Management", path: "/form/step4" }, // Step 5
    { label: "Customer Channels", path: "/form/step5" }, // Step 7
    { label: "Key Resources", path: "/form/step6" }, // Step 10
    { label: "Key Activities", path: "/form/step7" }, // Step 13
    { label: "Key Partnerships", path: "/form/step8" }, // Step 15
    { label: "Cost Structure", path: "/form/step9" }, // Step 18
    { label: "Revenue Streams", path: "/form/step20" }, // Step 20
];

export default function FormLayout() {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <div>
            {/* Top Tabs */}
            <div className="bg-gray-50 w-full flex items-stretch space-x-2 py-2">
                {topTabs.map((tab, index) => {
                    const isCurrentPath = tab.activePaths 
                        ? tab.activePaths.includes(location.pathname)
                        : location.pathname === tab.path;
                    const isPreviousTab = index < topTabs.findIndex(t => 
                        t.activePaths 
                            ? t.activePaths.includes(location.pathname)
                            : t.path === location.pathname
                    );
                    
                    return (
                        <button
                            key={tab.label}
                            onClick={() => navigate(tab.path)}
                            className={`w-36 py-2 text-xs rounded flex items-center justify-center gap-2
                                ${isPreviousTab ? "bg-[#0A103E] text-white" : 
                                  isCurrentPath ? "bg-[#AB8B1A] text-white" : 
                                  "text-black bg-gray-200"}`}
                        >
                            {isPreviousTab && <Check className="w-4 h-4" />}
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