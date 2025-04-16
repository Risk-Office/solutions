export interface TaskType {
  id: string;
  title: string;
  description: string;
  criticalLevel: "low" | "medium" | "high" | "critical" | "insignificant";
  deadline: string;
  deliverable: string;
  status: "todo" | "doing" | "done";
}

export interface BoardType {
  id: string;
  title: string;
  tasks: string[];
  isEditing?: boolean;
}
