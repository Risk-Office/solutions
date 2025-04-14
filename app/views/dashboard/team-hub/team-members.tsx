import { ArrowLeft, CircleX, Users } from "lucide-react";
import { useState } from "react";
import avartImage from "~/assets/png/avar1.png";
import { Button } from "~/components/ui/button";
import { Switch } from "~/components/ui/switch";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  access: "Admin" | "Member";
  totalTasks: number;
  pendingTasks: number;
  completedTasks: number;
  status: "active" | "inactive";
  image: string;
}

interface AccessibilitySettings {
  [key: string]: boolean;
}

const TeamMembersPage = () => {
  const [showAll, setShowAll] = useState(false);
  const [showAddMemberModal, setShowAddMemberModal] = useState(false);
  const [showAccessibility, setShowAccessibility] = useState(false);
  const [selectedMemberId, setSelectedMemberId] = useState<number | null>(null);
  const [accessibilitySettings, setAccessibilitySettings] = useState<{
    [key: number]: AccessibilitySettings;
  }>({});
  const [pendingSettings, setPendingSettings] = useState<{
    [key: number]: AccessibilitySettings;
  }>({});

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Christian Ferrani",
      role: "Senior Healthcare Analyst",
      access: "Admin",
      totalTasks: 10,
      pendingTasks: 5,
      completedTasks: 5,
      status: "active",
      image: avartImage,
    },
    ...Array.from(
      { length: 9 },
      (_, i): TeamMember => ({
        id: i + 2,
        name: `Team Member ${i + 2}`,
        role: "Healthcare Analyst",
        access: "Member",
        totalTasks: 8,
        pendingTasks: 3,
        completedTasks: 5,
        status: i % 2 === 0 ? "active" : "inactive",
        image: avartImage,
      })
    ),
  ];

  const visibleMembers = showAll ? teamMembers : teamMembers.slice(0, 5);
  const nonAdminMembers = teamMembers.filter(
    (member) => member.access !== "Admin"
  );

  const macroEnvironmentData = [
    "Political",
    "Economic",
    "Technological",
    "Environmental",
    "Legal/Regulatory",
    "Social & Demographics",
    "Competitive Forces",
  ];

  const businessModelData = [
    "Partners",
    "Resources",
    "Activities",
    "Value Preposition",
    "Customer Segments",
    "Customer Relationship Management",
    "Channels",
    "Revenue Streams",
    "Cost Structure",
  ];

  const otherModelData = ["settings", "Create Tasks"];

  const handleToggleAccessibility = (
    memberId: number,
    key: string,
    value: boolean
  ) => {
    setPendingSettings((prev) => ({
      ...prev,
      [memberId]: {
        ...prev[memberId],
        [key]: value,
      },
    }));
  };

  const handleSetAccessibility = () => {
    if (selectedMemberId) {
      setAccessibilitySettings((prev) => ({
        ...prev,
        [selectedMemberId]: {
          ...prev[selectedMemberId],
          ...pendingSettings[selectedMemberId],
        },
      }));
      setPendingSettings((prev) => {
        const newSettings = { ...prev };
        delete newSettings[selectedMemberId];
        return newSettings;
      });
    }
  };

  const isAccessibilitySet = (memberId: number) => {
    return (
      accessibilitySettings[memberId] &&
      Object.values(accessibilitySettings[memberId]).some((v) => v)
    );
  };

  const handleEdit = (memberId: number) => {
    setSelectedMemberId(memberId);
  };

  const handleRemove = (memberId: number) => {
    setAccessibilitySettings((prev) => {
      const newSettings = { ...prev };
      delete newSettings[memberId];
      return newSettings;
    });
    setPendingSettings((prev) => {
      const newSettings = { ...prev };
      delete newSettings[memberId];
      return newSettings;
    });
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Popup Modal for Adding Team Member */}
      {showAddMemberModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 backdrop-blur-sm bg-black opacity-50"
            onClick={() => setShowAddMemberModal(false)}
          ></div>
          <div className="relative bg-white rounded-lg p-6 w-full max-w-md shadow-lg z-10">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Add New Team Member</h2>
              <button
                onClick={() => setShowAddMemberModal(false)}
                className="text-red-500 hover:text-gray-700 focus:outline-none flex items-center gap-1 cursor-pointer"
              >
                <span className="font-semibold">close</span>
                <CircleX size={18} />
              </button>
            </div>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name <span className="text-red-500 ml-2">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email <span className="text-red-500 ml-2">*</span>
                </label>
                <input
                  type="email"
                  required
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter email address"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Position in Organization{" "}
                  <span className="text-red-500 ml-2">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter position"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Create Password <span className="text-red-500 ml-2">*</span>
                </label>
                <input
                  type="password"
                  required
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter password"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password <span className="text-red-500 ml-2">*</span>
                </label>
                <input
                  type="password"
                  required
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Confirm password"
                />
              </div>
              <div className="flex justify-end gap-3 mt-6">
                <Button type="submit">Submit</Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Main Content */}
      {!showAccessibility ? (
        <>
          <div className="flex flex-wrap gap-4 justify-between items-center mb-6 bg-white rounded-lg shadow p-4">
            <div className="flex items-center gap-4">
              <Users />
              <div className="flex flex-col">
                <h1 className="text-2xl font-bold">All Team Members</h1>
                <span className="text-sm text-gray-500">
                  {visibleMembers.length} out of {teamMembers.length}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                className="border border-gray-400 text-black px-4 py-2 cursor-pointer font-semibold rounded-lg flex items-center gap-2 hover:bg-gray-100"
                onClick={() => setShowAccessibility(true)}
              >
                Team Accessibility
              </button>
              <Button
                className="px-4 py-2"
                onClick={() => setShowAddMemberModal(true)}
              >
                Add New Team Member
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {visibleMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-lg shadow-sm p-4"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gray-100 rounded-full p-1">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl mb-1 font-semibold">
                      {member.name}
                    </h3>
                    <p className="text-sm mb-1">{member.role}</p>
                    <span className="font-semibold">{member.access}</span>
                  </div>
                </div>
                <div className="border-b border-gray-300 mb-4"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center gap-1 rounded">
                      <span className="text-gray-500">
                        Total Task Assigned:
                      </span>
                      <span className="font-semibold">{member.totalTasks}</span>
                    </div>
                    <div className="flex items-center gap-1 rounded">
                      <span className="text-gray-500">Pending Task:</span>
                      <span className="font-semibold">
                        {member.pendingTasks}
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex gap-1 items-center rounded">
                      <span className="text-gray-500">Completed Task:</span>
                      <span className="font-semibold">
                        {member.completedTasks}
                      </span>
                    </div>
                    <div className="flex gap-1 items-center rounded">
                      <span className="text-gray-500">Status</span>
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                          member.status === "active"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {member.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {!showAll && teamMembers.length > 5 && (
            <div className="mt-6 text-center">
              <button
                onClick={() => setShowAll(true)}
                className="text-[#0a103e] font-medium"
              >
                Show All {teamMembers.length} Members →
              </button>
            </div>
          )}
        </>
      ) : (
        <>
          <div className="flex items-center gap-2 mb-6">
            <button
              onClick={() => setShowAccessibility(false)}
              className="flex items-center gap-1 text-red-500 cursor-pointer"
            >
              <ArrowLeft size={20} />
              <span className="font-semibold">Back</span>
            </button>
          </div>

          <div className="flex gap-6">
            {/* Left Section: Accessibility Header and Member List */}
            <div className="w-[62%]">
              <div className="bg-white rounded-lg shadow p-4 flex items-center gap-4 mb-4">
                <Users />
                <h1 className="text-xl font-bold">All Team Accessibility</h1>
              </div>

              <div className="bg-white rounded-lg shadow">
                <div className="bg-[#0a103e] text-white rounded-lg p-4 flex justify-between">
                  <span className="font-semibold w-1/4 border-r border-white pr-4">
                    Name
                  </span>
                  <span className="font-semibold w-1/2 border-r border-white pr-4 mx-2">
                    Position In Organization
                  </span>
                  <span className="font-semibold w-1/4 border-r border-white pr-4">
                    Accessibility
                  </span>
                  <span className="font-semibold w-1/4 pl-4">Action</span>
                </div>
              </div>
              <div className="p-4">
                {nonAdminMembers.map((member) => (
                  <div
                    key={member.id}
                    className="flex justify-between items-center py-4"
                  >
                    <span className="w-1/3">{member.name}</span>
                    <span className="w-1/2">{member.role}</span>
                    <span className="w-1/4">
                      {isAccessibilitySet(member.id) ? "Set" : "Not Set"}
                    </span>
                    <div className="w-1/4 flex gap-2">
                      <button
                        className="text-[#0a103e] hover:underline"
                        onClick={() => handleEdit(member.id)}
                      >
                        Edit
                      </button>
                      /
                      <button
                        className="text-red-600 hover:underline"
                        onClick={() => handleRemove(member.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Section: Accessibility Settings */}
            <div className="w-[38%]">
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm flex flex-col">
                <h2 className="text-lg font-semibold mb-6 text-center">
                  Set Team Member Accessibility
                </h2>
                <div className="text-sm font-semibold mb-4">Team Member</div>
                <select
                  className="w-full p-2 border border-gray-300 rounded-lg mb-4"
                  value={selectedMemberId || ""}
                  onChange={(e) => setSelectedMemberId(Number(e.target.value))}
                >
                  <option value="" disabled>
                    Select Team Member
                  </option>
                  {nonAdminMembers.map((member) => (
                    <option key={member.id} value={member.id}>
                      {member.name}
                    </option>
                  ))}
                </select>

                {selectedMemberId && (
                  <>
                    <div className="flex-1 overflow-y-auto max-h-[90vh]">
                      <div className="text-sm font-medium mb-2">
                        Accessibility
                      </div>
                      <div className="text-sm italic text-gray-600 mb-4">
                        Toggle on/off to set team member accessibility
                      </div>
                      <div className="mb-6">
                        <h3 className="text-md font-semibold mb-2">
                          Macro Environment
                        </h3>
                        {macroEnvironmentData.map((item) => (
                          <div
                            key={item}
                            className="flex items-center justify-between mb-2"
                          >
                            <span>{item}</span>
                            <Switch
                              className="custom-switch data-[state=checked]:bg-blue-600 data-[state=unchecked]:bg-gray-200"
                              checked={
                                pendingSettings[selectedMemberId]?.[item] ??
                                accessibilitySettings[selectedMemberId]?.[
                                  item
                                ] ??
                                false
                              }
                              onCheckedChange={(checked) =>
                                handleToggleAccessibility(
                                  selectedMemberId,
                                  item,
                                  checked
                                )
                              }
                            />
                          </div>
                        ))}
                      </div>
                      <div className="mb-6">
                        <h3 className="text-md font-semibold mb-2">
                          Business Model
                        </h3>
                        {businessModelData.map((item) => (
                          <div
                            key={item}
                            className="flex items-center justify-between mb-2"
                          >
                            <span>{item}</span>
                            <Switch
                              className="custom-switch data-[state=checked]:bg-blue-600 data-[state=unchecked]:bg-gray-200"
                              checked={
                                pendingSettings[selectedMemberId]?.[item] ??
                                accessibilitySettings[selectedMemberId]?.[
                                  item
                                ] ??
                                false
                              }
                              onCheckedChange={(checked) =>
                                handleToggleAccessibility(
                                  selectedMemberId,
                                  item,
                                  checked
                                )
                              }
                            />
                          </div>
                        ))}
                      </div>
                      <div className="mb-6">
                        <h3 className="text-md font-semibold mb-2">Others</h3>
                        {otherModelData.map((item) => (
                          <div
                            key={item}
                            className="flex items-center justify-between mb-2"
                          >
                            <span>{item}</span>
                            <Switch
                              className="custom-switch data-[state=checked]:bg-blue-600 data-[state=unchecked]:bg-gray-200"
                              checked={
                                pendingSettings[selectedMemberId]?.[item] ??
                                accessibilitySettings[selectedMemberId]?.[
                                  item
                                ] ??
                                false
                              }
                              onCheckedChange={(checked) =>
                                handleToggleAccessibility(
                                  selectedMemberId,
                                  item,
                                  checked
                                )
                              }
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                    <Button
                      className="mt-4 self-end"
                      onClick={handleSetAccessibility}
                    >
                      Set Accessibility
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TeamMembersPage;
