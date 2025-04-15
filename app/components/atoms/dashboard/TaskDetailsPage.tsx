import React from "react";
import { Pencil } from "lucide-react";
import type { TaskType } from "~/types/teamhubtypes";
import avartarImage from "~/assets/png/avar.png";
import avartImage from "~/assets/png/avar1.png";

interface TaskDetailsPanelProps {
  task: TaskType;
  onClose: () => void;
  onUpdateStatus?: (taskId: string, newStatus: TaskType["status"]) => void;
}

const TaskDetailsPage: React.FC<TaskDetailsPanelProps> = ({
  task,
  onUpdateStatus,
}) => {
  const criticalColor = {
    low: "bg-green-500",
    medium: "bg-yellow-500",
    high: "bg-orange-500",
    critical: "bg-red-500",
    insignificant: "bg-green-500",
  }[task.criticalLevel];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  // Sample data that would come from props in a real implementation
  const assignee = { name: "John Doe", image: avartarImage };
  const reporter = { name: "Jane Smith", image: avartImage };
  const activityItems = [
    {
      user: { name: "Jane Smith", image: avartImage },
      action: "created a task",
      timestamp: "2 days ago",
      type: "history",
    },
    {
      user: { name: "John Doe", image: avartarImage },
      action: "changed the status to doing",
      timestamp: "1 day ago",
      type: "history",
    },
    {
      user: { name: "Mike Johnson", image: avartImage },
      action: "can you share the report",
      timestamp: "15 hours ago",
      type: "comment",
    },
  ];

  const [activeTab, setActiveTab] = React.useState("all");
  const statusOptions = ["todo", "doing", "done"] as const;

  const currentUser = {
    name: "John Doe",
    image: avartarImage,
  };

  return (
    <div className="flex flex-col h-full bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Task Details */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left panel - Main content */}
        <div className="flex-1 overflow-y-auto p-4 border-r border-gray-300">
          <div className="mb-6">
            <h1 className="text-2xl font-bold mb-2">{task.title}</h1>

            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center">
                <select
                  value={task.status}
                  onChange={(e) =>
                    onUpdateStatus?.(
                      task.id,
                      e.target.value as TaskType["status"]
                    )
                  }
                  className="px-3 py-1 rounded-md text-sm border border-gray-300 "
                >
                  {statusOptions.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-center gap-1 border border-gray-300 rounded-md px-3 py-1">
                <span className="text-sm ">
                  {task.criticalLevel.charAt(0).toUpperCase() +
                    task.criticalLevel.slice(1)}
                </span>
                <span className={`w-5 h-5 ${criticalColor} rounded-sm`}></span>
              </div>

              <div className="text-sm flex items-center border border-gray-300 rounded-md px-3 py-1">
                Due Date:{" "}
                <span className="font-semibold px-1">
                  {formatDate(task.deadline)}
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
              {task.description || "No description provided."}
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
                <span className=" mr-4">Label:</span>
                <span>None</span>
              </div>

              <div>
                <span className=" mr-4">Team:</span>
                <span>None</span>
              </div>

              <div>
                <span className=" mr-4">Attachment:</span>
                <span>None</span>
              </div>

              <div>
                <span className=" mr-4">Sprint:</span>
                <span>Implement Auth method</span>
              </div>

              <div className="flex items-center">
                <span className=" mr-4">Reporter:</span>
                <div className="flex items-center">
                  <img
                    src={reporter.image}
                    alt={reporter.name}
                    className="w-6 h-6 rounded-full mr-2"
                  />
                  <span>{reporter.name}</span>
                </div>
              </div>

              <div>
                <span className=" mr-4">Created:</span>
                <span>2 days ago</span>
              </div>

              <div>
                <span className=" mr-4">Updated:</span>
                <span>1 day ago</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right panel - Activity */}
        <div className="w-100 overflow-y-auto p-4">
          <h2 className="text-lg font-semibold mb-3">Activity</h2>
          {/* Tabs */}
          <div className="flex border p-2 rounded-lg mb-4 overflow-hidden">
            <div
              className={`text-center w-1/3 mx-1 rounded-md  ${
                activeTab === "all" ? "bg-primary border border-primary" : ""
              }`}
            >
              <button
                className={`w-full cursor-pointer py-2 ${
                  activeTab === "all" ? "text-white" : "text-gray-700"
                }`}
                onClick={() => setActiveTab("all")}
              >
                All
              </button>
            </div>
            <div
              className={`text-center w-1/3 mx-1 rounded-md ${
                activeTab === "comments"
                  ? "bg-primary border border-primary"
                  : ""
              }`}
            >
              <button
                className={`w-full cursor-pointer py-2 ${
                  activeTab === "comments" ? "text-white" : "text-gray-700"
                }`}
                onClick={() => setActiveTab("comments")}
              >
                Comments
              </button>
            </div>
            <div
              className={`text-center w-1/3 mx-1 rounded-md ${
                activeTab === "history"
                  ? "bg-primary border border-primary"
                  : ""
              }`}
            >
              <button
                className={`w-full cursor-pointer py-2 ${
                  activeTab === "history" ? "text-white" : "text-gray-700"
                }`}
                onClick={() => setActiveTab("history")}
              >
                History
              </button>
            </div>
          </div>
          {/* Activity list */}
          <div className="space-y-4">
            {activityItems
              .filter((item) => {
                if (activeTab === "all") return true;
                if (activeTab === "comments") return item.type === "comment";
                if (activeTab === "history") return item.type === "history";
                return true;
              })
              .map((item, index) => (
                <div key={index} className="pb-3">
                  <div className="flex items-center mb-2">
                    <img
                      src={item.user.image}
                      alt={item.user.name}
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    <span className="font-medium">{item.user.name}</span>
                  </div>
                  <div className="ml-10">
                    <p className="text-gray-700">{item.action}</p>
                    <div className="flex items-center mt-1">
                      <span className="text-gray-500 text-sm mr-2">
                        {item.timestamp}
                      </span>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ${
                          item.type === "comment"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {item.type}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          {/* Comment input */}
          {activeTab === "comments" && (
            <div className="mt-4 rounded-lg p-1">
              <div className="flex items-center mb-2">
                <img
                  src={currentUser.image}
                  alt={currentUser.name}
                  className="w-8 h-8 rounded-full mr-2"
                />
                <span className="font-medium">{currentUser.name}</span>
              </div>
              <textarea
                placeholder="Add a comment..."
                className="w-full border rounded-lg p-2 resize-none mt-1"
                rows={1}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskDetailsPage;
