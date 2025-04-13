import React, { useState, useRef } from "react";
import type { TaskType } from "~/types/teamhubtypes";
import { CircleX, Paperclip, Upload } from "lucide-react";
import { Button } from "~/components/ui/button";

interface CreateTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (task: Omit<TaskType, "id">) => void;
}

// Extended type with new fields
interface ExtendedTaskType extends Omit<TaskType, "id"> {
  assignee: string;
  label: string;
  team: string;
  accessibility: string;
  sprint: string;
  storyPoints: string;
  attachments: File[];
}

const CreateTaskModal: React.FC<CreateTaskModalProps> = ({
  isOpen,
  onClose,
  onCreate,
}) => {
  const [formData, setFormData] = useState<ExtendedTaskType>({
    title: "",
    description: "",
    criticalLevel: "medium",
    deadline: "",
    deliverable: "",
    status: "todo",
    assignee: "",
    label: "",
    team: "",
    accessibility: "public",
    sprint: "",
    storyPoints: "",
    attachments: [],
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Sample data for dropdowns
  const assignees = [
    { id: "user1", name: "John Doe" },
    { id: "user2", name: "Jane Smith" },
    { id: "user3", name: "Mike Johnson" },
  ];

  const labels = [
    { id: "label1", name: "Bug" },
    { id: "label2", name: "Feature" },
    { id: "label3", name: "Documentation" },
  ];

  const teams = [
    { id: "team1", name: "Frontend" },
    { id: "team2", name: "Backend" },
    { id: "team3", name: "Design" },
  ];

  const accessibilityOptions = [
    { id: "public", name: "Public" },
    { id: "team", name: "Team Only" },
    { id: "private", name: "Private" },
  ];

  const sprints = [
    { id: "sprint1", name: "Implement Auth method" },
    { id: "sprint2", name: "User Dashboard" },
    { id: "sprint3", name: "API Integration" },
  ];

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
      // Convert the extended type back to the expected TaskType for onCreate
      const taskData: Omit<TaskType, "id"> = {
        title: formData.title,
        description: formData.description,
        criticalLevel: formData.criticalLevel,
        deadline: formData.deadline,
        deliverable: formData.deliverable,
        status: formData.status,
      };

      onCreate(taskData);

      // Reset form
      setFormData({
        title: "",
        description: "",
        criticalLevel: "medium",
        deadline: "",
        deliverable: "",
        status: "todo",
        assignee: "",
        label: "",
        team: "",
        accessibility: "public",
        sprint: "",
        storyPoints: "",
        attachments: [],
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({
        ...formData,
        attachments: [...formData.attachments, ...Array.from(e.target.files)],
      });
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setFormData({
        ...formData,
        attachments: [
          ...formData.attachments,
          ...Array.from(e.dataTransfer.files),
        ],
      });
    }
  };

  const removeAttachment = (index: number) => {
    const updatedAttachments = [...formData.attachments];
    updatedAttachments.splice(index, 1);
    setFormData({ ...formData, attachments: updatedAttachments });
  };

  const openFileDialog = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div
        className="bg-white p-6 rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto"
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
          {/* Task Name */}
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

          {/* Summary */}
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

          {/* Critical Level */}
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

          {/* Status and Due Date - Side by side */}
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
                <option value="under-review">Under Review</option>
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

          {/* Description */}
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

          {/* Assignee */}
          <div>
            <label
              htmlFor="assignee"
              className="block text-sm font-medium mb-1"
            >
              Assignee
            </label>
            <select
              id="assignee"
              value={formData.assignee}
              onChange={(e) =>
                setFormData({ ...formData, assignee: e.target.value })
              }
              className="w-full p-2 border rounded-lg"
            >
              <option value="">Select Assignee</option>
              {assignees.map((assignee) => (
                <option key={assignee.id} value={assignee.id}>
                  {assignee.name}
                </option>
              ))}
            </select>
          </div>

          {/* Label */}
          <div>
            <label htmlFor="label" className="block text-sm font-medium mb-1">
              Label
            </label>
            <select
              id="label"
              value={formData.label}
              onChange={(e) =>
                setFormData({ ...formData, label: e.target.value })
              }
              className="w-full p-2 border rounded-lg"
            >
              <option value="">Select Label</option>
              {labels.map((label) => (
                <option key={label.id} value={label.id}>
                  {label.name}
                </option>
              ))}
            </select>
          </div>

          {/* Team */}
          <div>
            <label htmlFor="team" className="block text-sm font-medium mb-1">
              Team
            </label>
            <select
              id="team"
              value={formData.team}
              onChange={(e) =>
                setFormData({ ...formData, team: e.target.value })
              }
              className="w-full p-2 border rounded-lg"
            >
              <option value="">Select Team</option>
              {teams.map((team) => (
                <option key={team.id} value={team.id}>
                  {team.name}
                </option>
              ))}
            </select>
          </div>

          {/* Accessibility */}
          <div>
            <label
              htmlFor="accessibility"
              className="block text-sm font-medium mb-1"
            >
              Accessibility
            </label>
            <select
              id="accessibility"
              value={formData.accessibility}
              onChange={(e) =>
                setFormData({ ...formData, accessibility: e.target.value })
              }
              className="w-full p-2 border rounded-lg"
            >
              {accessibilityOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>

          {/* Sprint */}
          <div>
            <label htmlFor="sprint" className="block text-sm font-medium mb-1">
              Sprint
            </label>
            <select
              id="sprint"
              value={formData.sprint}
              onChange={(e) =>
                setFormData({ ...formData, sprint: e.target.value })
              }
              className="w-full p-2 border rounded-lg"
            >
              <option value="">Select Sprint</option>
              {sprints.map((sprint) => (
                <option key={sprint.id} value={sprint.id}>
                  {sprint.name}
                </option>
              ))}
            </select>
          </div>

          {/* Story Points */}
          <div>
            <label
              htmlFor="storyPoints"
              className="block text-sm font-medium mb-1"
            >
              Story Points Estimate
            </label>
            <input
              id="storyPoints"
              type="number"
              min="0"
              max="100"
              value={formData.storyPoints}
              onChange={(e) =>
                setFormData({ ...formData, storyPoints: e.target.value })
              }
              className="w-full p-2 border rounded-lg"
            />
          </div>

          {/* Attachments - Improved drag & drop */}
          <div>
            <label
              htmlFor="attachments"
              className="block text-sm font-medium mb-1"
            >
              Attachments
            </label>

            <div
              className={`border-2 border-dashed rounded-lg p-6 text-center ${
                isDragging ? "border-blue-500 bg-blue-50" : "border-gray-300"
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <input
                ref={fileInputRef}
                id="file-upload"
                type="file"
                multiple
                onChange={handleFileChange}
                className="hidden"
              />

              <div className="flex flex-col items-center">
                <Upload className="w-10 h-10 text-gray-400 mb-2" />
                <p className="text-gray-600 mb-1">Drop files to attach</p>
                <p className="text-gray-500 text-sm">or</p>
                <button
                  type="button"
                  onClick={openFileDialog}
                  className="mt-2 text-blue-500 font-medium hover:text-blue-700"
                >
                  Browse
                </button>
              </div>
            </div>

            {/* Display attached files */}
            {formData.attachments.length > 0 && (
              <div className="mt-4 space-y-2">
                <h4 className="font-medium text-sm text-gray-700">
                  Attached Files
                </h4>
                {formData.attachments.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-2 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center">
                      <Paperclip className="w-4 h-4 text-gray-500 mr-2" />
                      <span className="text-sm truncate">{file.name}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeAttachment(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <CircleX className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <Button type="submit">Create Task</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTaskModal;
