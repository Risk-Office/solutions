import React, { useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical, CircleX, EllipsisVertical } from "lucide-react";
import type { TaskType } from "~/types/teamhubtypes";

interface TaskCardProps {
  task: TaskType;
  onUpdateStatus?: (taskId: string, newStatus: TaskType["status"]) => void;
  onSelect?: (task: TaskType) => void;
  isSelected?: boolean;
  isOverlay?: boolean;
}

const TaskCard: React.FC<TaskCardProps> = ({
  task,
  onUpdateStatus,
  onSelect,
  isSelected = false,
  isOverlay = false,
}) => {
  const [showModal, setShowModal] = useState(false);

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task.id,
    data: {
      type: "Task",
      task,
    },
  });

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

  // Format date to display "15th April, 2025" format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);

    // Get day with ordinal suffix
    const day = date.getDate();
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

  const handleCardClick = () => {
    if (onSelect && !isDragging) {
      onSelect(task);
    }
  };

  const handleMenuClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowModal(!showModal);
  };

  const handleUpdateStatus = (newStatus: TaskType["status"]) => {
    if (onUpdateStatus) {
      onUpdateStatus(task.id, newStatus);
      setShowModal(false);
    }
  };

  // Determine if a deadline is approaching (within 3 days)
  const isDeadlineApproaching = () => {
    const deadline = new Date(task.deadline);
    const today = new Date();
    const diffTime = deadline.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays >= 0 && diffDays <= 3;
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`bg-white rounded-lg shadow p-4 cursor-pointer hover:border hover:border-primary  ${
        isSelected ? "ring-2 ring-red-500" : ""
      } ${isDragging ? "opacity-60" : ""} select-none relative`}
      data-task-id={task.id}
      data-task-status={task.status}
    >
      {/* Card Content */}
      <div className="flex flex-col space-y-2" onClick={handleCardClick}>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 flex-1">
            <span className="font-semibold whitespace-nowrap">Task</span>
            <div className={`h-1 w-[50%]  ${criticalColor} rounded-full`}></div>
          </div>
          <div className="flex items-center gap-1">
            {/* Menu button */}
            <button
              onClick={handleMenuClick}
              className="text-gray-500 hover:text-gray-700 cursor-pointer"
            >
              <EllipsisVertical className="w-5 h-5" />
            </button>

            {/* Drag handle */}
            <div
              {...attributes}
              {...listeners}
              className="cursor-grab active:cursor-grabbing p-1"
              onClick={(e) => e.stopPropagation()}
            >
              <GripVertical className="w-4 h-4 text-gray-400" />
            </div>
          </div>
        </div>

        <div className="mt-2 space-y-2">
          <h3 className="font-normal text-gray-900">{task.title}</h3>
          <div>
            <h3 className="font-semibold text-gray-900">Description:</h3>
            <p className="text-sm text-gray-900 line-clamp-2">
              {task.description}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold">Critical Level:</span>
            <div className="flex items-center gap-1">
              <span className={`w-5 h-5 ${criticalColor} rounded-sm`}></span>
              <span className="text-sm px-2 py-1">
                {task.criticalLevel.charAt(0).toUpperCase() +
                  task.criticalLevel.slice(1)}
              </span>
            </div>
          </div>

          <div className="flex items-center">
            <span className="text-sm font-semibold">Deadline Date:</span>
            <span
              className={`text-sm mx-1 ${
                isDeadlineApproaching()
                  ? "text-red-500 font-medium"
                  : "text-gray-600"
              }`}
            >
              {formatDate(task.deadline)}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold">Deliverables:</span>
            <p className="text-sm text-gray-600">{task.deliverable}</p>
          </div>
        </div>
      </div>

      {/* Status Update Modal */}
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
              <CircleX className="w-5 h-5 text-red-500 cursor-pointer" />
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
              onClick={() => onSelect && onSelect(task)}
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
