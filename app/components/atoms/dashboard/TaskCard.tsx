import React, { useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { CircleX, EllipsisVertical } from "lucide-react";
import type { TaskType } from "~/types/teamhubtypes";
import { useNavigate } from "react-router";

interface TaskCardProps {
  task: TaskType;
  isOverlay?: boolean;
  onUpdateStatus?: (taskId: string, newStatus: TaskType["status"]) => void;
}
const TaskCard: React.FC<TaskCardProps> = ({
  task,
  isOverlay,
  onUpdateStatus,
}) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: task.id,
    });
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isOverlay ? 0.7 : 1,
  };

  const criticalColor = {
    low: "bg-green-500",
    medium: "bg-yellow-500",
    high: "bg-orange-500",
    critical: "bg-red-500",
    insignificant: "bg-green-500",
  }[task.criticalLevel];

  const handleUpdateStatus = (newStatus: TaskType["status"]) => {
    console.log(
      `Updating task ${task.id} status from ${task.status} to ${newStatus}`
    );

    if (onUpdateStatus) {
      onUpdateStatus(task.id, newStatus);
    }
    setShowModal(false);
  };

  // Navigate to details page
  const handleCardClick = () => {
    navigate(`/tasks/${task.id}`);
  };

  // Prevent propagation on the menu button
  const handleMenuClick = (e: React.MouseEvent) => {
    console.log(`Menu clicked for task ${task.id}`);
    e.stopPropagation();
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      onClick={handleCardClick}
      className="bg-white p-4 rounded-lg shadow-sm relative cursor-grab active:cursor-grabbing"
      data-task-id={task.id}
      data-task-status={task.status}
    >
      <div className="flex justify-between items-center">
        <span className="font-semibold">Task</span>
        <button
          onClick={handleMenuClick}
          className="text-gray-500 hover:text-gray-700 cursor-pointer"
        >
          <EllipsisVertical className="w-5 h-5" />
        </button>
      </div>
      <div className="mt-2 space-y-1">
        <p className="font-medium">{task.title}</p>
        <p className="text-sm text-gray-600">{task.description}</p>
        <div className="flex items-center gap-2">
          <span className="text-sm">Critical Level:</span>
          <span className={`w-3 h-3 ${criticalColor} rounded-sm`}></span>
        </div>
        <p className="text-sm">Deadline: {task.deadline}</p>
        <p className="text-sm">Deliverables: {task.deliverable}</p>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="absolute top-0 right-0 mt-8 mr-2 bg-white p-4 rounded-lg shadow-lg z-10 w-48"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold">Task Status</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowModal(false);
              }}
            >
              <CircleX className="w-5 h-5 text-red-500" />
            </button>
          </div>
          {task.status === "todo" && (
            <>
              <button
                onClick={() => handleUpdateStatus("doing")}
                className="block w-full text-left py-1 hover:bg-gray-100"
              >
                Update to Doing
              </button>
              <button
                onClick={() => handleUpdateStatus("done")}
                className="block w-full text-left py-1 hover:bg-gray-100"
              >
                Update to Done
              </button>
            </>
          )}
          {task.status === "doing" && (
            <button
              onClick={() => handleUpdateStatus("done")}
              className="block w-full text-left py-1 hover:bg-gray-100"
            >
              Update to Done
            </button>
          )}
          {task.status === "done" && (
            <button
              onClick={() => console.log("Go to details")} // Placeholder for details navigation
              className="block w-full text-left py-1 hover:bg-gray-100"
            >
              View Details
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default TaskCard;
