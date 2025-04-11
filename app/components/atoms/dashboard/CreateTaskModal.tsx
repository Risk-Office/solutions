import React, { useState } from "react";
import type { TaskType } from "~/types/teamhubtypes";
import { CircleX } from "lucide-react";
import { Button } from "~/components/ui/button";

interface CreateTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (task: Omit<TaskType, "id">) => void;
}

const CreateTaskModal: React.FC<CreateTaskModalProps> = ({
  isOpen,
  onClose,
  onCreate,
}) => {
  const [formData, setFormData] = useState<Omit<TaskType, "id">>({
    title: "",
    description: "",
    criticalLevel: "medium",
    deadline: "",
    deliverable: "",
    status: "todo",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.title.trim()) newErrors.title = "Task Name is required";
    if (!formData.deliverable.trim())
      newErrors.deliverable = "Summary is required";
    if (!formData.deadline) newErrors.deadline = "Due Date is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onCreate(formData);
      setFormData({
        title: "",
        description: "",
        criticalLevel: "medium",
        deadline: "",
        deliverable: "",
        status: "todo", // Reset to default
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div
        className="bg-white p-6 rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
      >
        {/* Header with close button */}
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-semibold">New Task</h2>
          <button
            onClick={onClose}
            className="text-red-500 cursor-pointer flex items-center gap-1"
            type="button"
          >
            <span>Close</span>
            <CircleX className="w-5 h-5" />
          </button>
        </div>

        <hr className="border-gray-200 mb-2" />

        {/* Required fields notice */}
        <div className="flex justify-end mb-4">
          <span className="text-sm text-gray-500">
            Required fields are marked with asterisk{" "}
            <span className="text-red-500">*</span>
          </span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium mb-1">
              Task Name <span className="text-red-500">*</span>
            </label>
            <input
              id="title"
              type="text"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              className="w-full p-2 border rounded-lg"
              aria-invalid={!!errors.title}
              aria-describedby="title-error"
            />
            {errors.title && (
              <p id="title-error" className="text-red-500 text-sm mt-1">
                {errors.title}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="deliverable"
              className="block text-sm font-medium mb-1"
            >
              Summary <span className="text-red-500">*</span>
            </label>
            <input
              id="deliverable"
              type="text"
              value={formData.deliverable}
              onChange={(e) =>
                setFormData({ ...formData, deliverable: e.target.value })
              }
              className="w-full p-2 border rounded-lg"
              aria-invalid={!!errors.deliverable}
              aria-describedby="deliverable-error"
            />
            {errors.deliverable && (
              <p id="deliverable-error" className="text-red-500 text-sm mt-1">
                {errors.deliverable}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="criticalLevel"
              className="block text-sm font-medium mb-1"
            >
              Critical Level <span className="text-red-500">*</span>
            </label>
            <select
              id="criticalLevel"
              value={formData.criticalLevel}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  criticalLevel: e.target.value as TaskType["criticalLevel"],
                })
              }
              className="w-full p-2 border rounded-lg"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
              <option value="critical">Critical</option>
              <option value="insignificant">Insignificant</option>
            </select>
          </div>

          {/* Status and Due Date side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="status"
                className="block text-sm font-medium mb-1"
              >
                Status <span className="text-red-500">*</span>
              </label>
              <select
                id="status"
                value={formData.status}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    status: e.target.value as TaskType["status"],
                  })
                }
                className="w-full p-2 border rounded-lg"
              >
                <option value="todo">Todo</option>
                <option value="doing">Doing</option>
                <option value="done">Done</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="deadline"
                className="block text-sm font-medium mb-1"
              >
                Due Date <span className="text-red-500">*</span>
              </label>
              <input
                id="deadline"
                type="date"
                value={formData.deadline}
                onChange={(e) =>
                  setFormData({ ...formData, deadline: e.target.value })
                }
                className="w-full p-2 border rounded-lg"
                aria-invalid={!!errors.deadline}
                aria-describedby="deadline-error"
              />
              {errors.deadline && (
                <p id="deadline-error" className="text-red-500 text-sm mt-1">
                  {errors.deadline}
                </p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium mb-1"
            >
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              id="description"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              className="w-full p-2 border rounded-lg"
              rows={3}
            />
          </div>
          <div className="flex justify-end gap-2">
            <Button type="submit">Create Task</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTaskModal;
