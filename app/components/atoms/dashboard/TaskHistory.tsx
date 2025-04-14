import React, { useState } from "react";
import { ArrowLeft, EllipsisVertical, Pencil } from "lucide-react";
import { Button } from "~/components/ui/button";
import avartarImage from "~/assets/png/avar.png";
import avartImage from "~/assets/png/avar1.png";

// Mock data for demonstration
const initialTasks = [
  {
    id: "1",
    title: "Implement Auth System",
    description:
      "Set up authentication middleware for the application. This will include JWT token validation and role-based access control.",
    criticalLevel: "high",
    deadline: "2025-04-15",
    deliverable: "Auth Module",
    status: "todo",
  },
  {
    id: "2",
    title: "Design UI",
    description:
      "Create wireframes for dashboard and main application screens.",
    criticalLevel: "medium",
    deadline: "2024-03-28",
    deliverable: "Wireframes",
    status: "todo",
  },
  {
    id: "3",
    title: "API Integration",
    description:
      "Connect frontend to backend services and implement data fetching.",
    criticalLevel: "critical",
    deadline: "2024-03-30",
    deliverable: "API Docs",
    status: "doing",
  },
  {
    id: "4",
    title: "Cybersecurity Audit",
    description:
      "Conduct a thorough security audit of the application to identify vulnerabilities.",
    criticalLevel: "high",
    deadline: "2024-03-30",
    deliverable: "Audit Report",
    status: "doing",
  },
  {
    id: "5",
    title: "Performance Optimization",
    description:
      "Optimize the application for better performance and load times.",
    criticalLevel: "medium",
    deadline: "2024-04-01",
    deliverable: "Performance Report",
    status: "done",
  },
];

const assignee = { name: "John Doe", image: avartarImage };
const reporter = { name: "Jane Smith", image: avartImage };

interface CloseProps {
  onClose: () => void;
}

const TaskHistory: React.FC<CloseProps> = () => {
  const [selectedTask, setSelectedTask] = useState(initialTasks[0]);
  const [tasks] = useState(initialTasks);

  // Format date to display "15th April, 2025" format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate();

    // Get day with ordinal suffix
    const suffix = getDaySuffix(day);

    // Format as "15th April, 2025"
    return `${day}${suffix} ${date.toLocaleString("default", {
      month: "long",
    })}, ${date.getFullYear()}`;
  };

  // Helper function to get day suffix (st, nd, rd, th)
  const getDaySuffix = (day: number) => {
    if (day > 3 && day < 21) return "th";
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  const handleSelectTask = (
    task: React.SetStateAction<{
      id: string;
      title: string;
      description: string;
      criticalLevel: string;
      deadline: string;
      deliverable: string;
      status: string;
    }>
  ) => {
    setSelectedTask(task);
  };

  const statusOptions = ["todo", "doing", "done"];

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Main content area with grid on left and details on right */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left side - Task Cards Grid */}
        <div className="w-[60%] p-2 overflow-y-auto">
          <h2 className="text-xl font-bold mb-4 w-full p-6 bg-white border-b border-gray-200 rounded-md">
            Tasks History
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tasks.map((task) => (
              <div
                key={task.id}
                onClick={() => handleSelectTask(task)}
                className={`bg-white rounded-lg shadow p-4 cursor-pointer hover:shadow-md transition-shadow ${
                  selectedTask.id === task.id ? "ring-2 ring-primary" : ""
                }`}
              >
                <div className="flex flex-col space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2 flex-1">
                      <span className="font-semibold whitespace-nowrap">
                        Task
                      </span>
                      <div
                        className={`h-1 w-1/2 ${
                          task.criticalLevel === "high"
                            ? "bg-orange-500"
                            : task.criticalLevel === "medium"
                            ? "bg-yellow-500"
                            : task.criticalLevel === "critical"
                            ? "bg-red-500"
                            : "bg-green-500"
                        } rounded-full`}
                      ></div>
                    </div>
                    <div className="flex items-center gap-1">
                      <button className="text-gray-500 hover:text-gray-700 cursor-pointer">
                        <EllipsisVertical className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  <div className="mt-2 space-y-2">
                    <h3 className="font-normal text-gray-900">{task.title}</h3>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Description:
                      </h3>
                      <p className="text-sm text-gray-900 line-clamp-2">
                        {task.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold">
                        Critical Level:
                      </span>
                      <div className="flex items-center gap-1">
                        <span
                          className={`w-5 h-5 ${
                            task.criticalLevel === "high"
                              ? "bg-orange-500"
                              : task.criticalLevel === "medium"
                              ? "bg-yellow-500"
                              : task.criticalLevel === "critical"
                              ? "bg-red-500"
                              : "bg-green-500"
                          } rounded-sm`}
                        ></span>
                        <span className="text-sm px-2 py-1">
                          {task.criticalLevel.charAt(0).toUpperCase() +
                            task.criticalLevel.slice(1)}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <span className="text-sm font-semibold">
                        Deadline Date:
                      </span>
                      <span className="text-sm mx-1 text-gray-600">
                        {formatDate(task.deadline)}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold">
                        Deliverables:
                      </span>
                      <p className="text-sm text-gray-600">
                        {task.deliverable}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right side - Task Details */}
        <div className="w-[47%] overflow-y-auto">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-6 text-center">
              Tasks Full Details
            </h2>
            <div className="mb-6">
              <h1 className="text-2xl font-bold mb-2">{selectedTask.title}</h1>

              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center">
                  <select
                    value={selectedTask.status}
                    className="px-3 py-1 rounded-md text-sm border border-gray-300"
                  >
                    {statusOptions.map((status) => (
                      <option key={status} value={status}>
                        {status.charAt(0).toUpperCase() + status.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center gap-1 border border-gray-300 rounded-md px-3 py-1">
                  <span className="text-sm">
                    {selectedTask.criticalLevel.charAt(0).toUpperCase() +
                      selectedTask.criticalLevel.slice(1)}
                  </span>
                  <span
                    className={`w-5 h-5 ${
                      selectedTask.criticalLevel === "high"
                        ? "bg-orange-500"
                        : selectedTask.criticalLevel === "medium"
                        ? "bg-yellow-500"
                        : selectedTask.criticalLevel === "critical"
                        ? "bg-red-500"
                        : "bg-green-500"
                    } rounded-sm`}
                  ></span>
                </div>

                <div className="text-sm flex items-center border border-gray-300 rounded-md px-1 py-1">
                  Due Date:{" "}
                  <span className="font-semibold">
                    {formatDate(selectedTask.deadline)}
                  </span>
                </div>
              </div>
            </div>

            <div className="my-10">
              <div className="flex items-center gap-2 mb-2">
                <h2 className="text-lg font-semibold">Description</h2>
                <button className="cursor-pointer">
                  <Pencil size={16} />
                </button>
              </div>
              <div className="py-2">
                {selectedTask.description || "No description provided."}
              </div>
            </div>

            <div className="bg-white rounded-lg">
              <h2 className="text-lg font-semibold mb-3">Details</h2>

              <div className="flex flex-col gap-4 text-sm">
                <div className="flex items-center">
                  <span className="mr-4">Assignee:</span>
                  <div className="flex items-center">
                    <img
                      src={assignee.image}
                      alt={assignee.name}
                      className="w-6 h-6 rounded-full mr-2"
                    />
                    <span>{assignee.name}</span>
                  </div>
                </div>

                <div>
                  <span className="mr-4">Label:</span>
                  <span>None</span>
                </div>

                <div>
                  <span className="mr-4">Team:</span>
                  <span>None</span>
                </div>

                <div>
                  <span className="mr-4">Attachment:</span>
                  <span>None</span>
                </div>

                <div>
                  <span className="mr-4">Sprint:</span>
                  <span>Implement Auth method</span>
                </div>

                <div className="flex items-center">
                  <span className="mr-4">Reporter:</span>
                  <img
                    src={reporter.image}
                    alt={reporter.name}
                    className="w-6 h-6 rounded-full mr-2"
                  />
                  <span>{reporter.name}</span>
                </div>

                <div>
                  <span className="mr-4">Created:</span>
                  <span>2 days ago</span>
                </div>

                <div>
                  <span className="mr-4">Updated:</span>
                  <span>1 day ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskHistory;
