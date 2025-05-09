import React, { useState } from "react";
import {
  closestCorners,
  DndContext,
  DragOverlay,
  type DragEndEvent,
  type DragStartEvent,
} from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import {
  Plus,
  Filter,
  ClipboardCheck,
  ArrowLeft,
  Kanban,
  CalendarDays,
} from "lucide-react";
import { Button } from "~/components/ui/button";
import CreateTaskModal from "~/components/atoms/dashboard/CreateTaskModal";
import TaskCard from "~/components/atoms/dashboard/TaskCard";
import BoardColumn from "~/components/atoms/dashboard/BoardColumn";
// import CalendarView from "~/components/atoms/dashboard/CalendarView";
import TaskHistory from "~/components/atoms/dashboard/TaskHistory";
import type { BoardType, TaskType } from "~/types/teamhubtypes";
import TaskDetailsPage from "~/components/atoms/dashboard/TaskDetailsPage";

const initialTasks: TaskType[] = [
  {
    id: "1",
    title: "Implement Auth System",
    description: "Set up authentication middleware",
    criticalLevel: "high",
    deadline: "2025-04-15",
    deliverable: "Auth Module",
    status: "todo",
  },
  {
    id: "2",
    title: "Design UI",
    description: "Create wireframes for dashboard",
    criticalLevel: "medium",
    deadline: "2024-03-28",
    deliverable: "Wireframes",
    status: "todo",
  },
  {
    id: "3",
    title: "API Integration",
    description: "Connect frontend to backend",
    criticalLevel: "critical",
    deadline: "2024-03-30",
    deliverable: "API Docs",
    status: "doing",
  },
  {
    id: "4",
    title: "Testing",
    description: "Run unit tests",
    criticalLevel: "low",
    deadline: "2025-04-11",
    deliverable: "Test Report",
    status: "doing",
  },
  {
    id: "5",
    title: "Deploy App",
    description: "Push to production",
    criticalLevel: "high",
    deadline: "2024-04-05",
    deliverable: "Live URL",
    status: "done",
  },
  {
    id: "6",
    title: "Documentation",
    description: "Write user guide",
    criticalLevel: "medium",
    deadline: "2024-04-07",
    deliverable: "PDF Guide",
    status: "done",
  },
];

const initialBoards: BoardType[] = [
  { id: "todo", title: "ToDo", tasks: ["1", "2"] },
  { id: "doing", title: "In-Progress", tasks: ["3", "4"] },
  { id: "done", title: "Done", tasks: ["5", "6"] },
];

const MyTasksPage: React.FC = () => {
  const [boards, setBoards] = useState<BoardType[]>(initialBoards);
  const [tasks, setTasks] = useState<TaskType[]>(initialTasks);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [activeTask, setActiveTask] = useState<TaskType | null>(null);
  const [filterLevel, setFilterLevel] = useState<
    TaskType["criticalLevel"] | "all"
  >("all");
  const [viewMode, setViewMode] = useState<"board" | "calendar">("board");
  const [selectedTask, setSelectedTask] = useState<TaskType | null>(null);
  const [showDetailsView, setShowDetailsView] = useState(false);
  const [showTaskHistory, setShowTaskHistory] = useState(false);

  // Function to toggle task history view
  const toggleTaskHistory = () => {
    setShowTaskHistory(!showTaskHistory);
  };

  // Filter tasks based on the selected critical level
  const filteredTasks = tasks.filter(
    (task) => filterLevel === "all" || task.criticalLevel === filterLevel
  );

  // Function to handle task selection
  const handleTaskSelect = (task: TaskType) => {
    setSelectedTask(task);
    setShowDetailsView(true);
  };

  // Function to handle back to board view
  const handleBackToBoard = () => {
    setShowDetailsView(false);
    setSelectedTask(null);
  };

  // Function to close task history
  const closeTaskHistory = () => {
    setShowTaskHistory(false);
  };

  const handleDragStart = (event: DragStartEvent) => {
    const task = tasks.find((t) => t.id === event.active.id);
    if (task) setActiveTask(task);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) {
      setActiveTask(null);
      return;
    }

    // Find the source task and its containing board
    const sourceTask = tasks.find((task) => task.id === active.id);
    if (!sourceTask) {
      setActiveTask(null);
      return;
    }
    // Find the boards involved in the drag operation
    const sourceBoard = boards.find((board) => board.id === sourceTask.status);

    // Check if we're dropping onto a task or a board
    const overTask = tasks.find((task) => task.id === over.id);
    const targetBoardId = overTask ? overTask.status : (over.id as string);
    const targetBoard = boards.find((board) => board.id === targetBoardId);

    if (!sourceBoard || !targetBoard) {
      setActiveTask(null);
      return;
    }

    // Handle dropping onto a different board
    if (sourceBoard.id !== targetBoard.id) {
      // Update task status
      const updatedTasks = tasks.map((task) =>
        task.id === active.id
          ? { ...task, status: targetBoard.id as TaskType["status"] }
          : task
      );
      // Remove task from source board and add to target board
      const updatedBoards = boards.map((board) => {
        if (board.id === sourceBoard.id) {
          return {
            ...board,
            tasks: board.tasks.filter((id) => id !== active.id),
          };
        }
        if (board.id === targetBoard.id) {
          // If dropping onto a task, place it at specific position
          if (overTask && overTask.id !== active.id) {
            const newTasks = [...board.tasks];
            const overIndex = newTasks.indexOf(overTask.id);
            if (overIndex !== -1) {
              // Remove the task ID first to avoid duplicates
              const filteredTasks = newTasks.filter((id) => id !== active.id);
              filteredTasks.splice(overIndex, 0, active.id as string);
              return { ...board, tasks: filteredTasks };
            }
          }
          // Otherwise add to end of the board
          return {
            ...board,
            tasks: board.tasks.includes(active.id as string)
              ? board.tasks
              : [...board.tasks, active.id as string],
          };
        }
        return board;
      });

      setTasks(updatedTasks);
      setBoards(updatedBoards);
    } // Handle reordering within the same board
    else if (over.id !== active.id) {
      if (overTask && overTask.id !== active.id) {
        // Dropping onto another task
        const oldIndex = sourceBoard.tasks.indexOf(active.id as string);
        const newIndex = sourceBoard.tasks.indexOf(over.id as string);

        if (oldIndex !== -1 && newIndex !== -1) {
          const newTasksOrder = arrayMove(
            sourceBoard.tasks,
            oldIndex,
            newIndex
          );
          const newBoards = boards.map((board) =>
            board.id === sourceBoard.id
              ? { ...board, tasks: newTasksOrder }
              : board
          );
          setBoards(newBoards);
        }
      } else if (over.id === sourceBoard.id) {
        // 2. Dropping onto the board itself
        const newTasksOrder = [
          ...sourceBoard.tasks.filter((id) => id !== active.id),
          active.id as string,
        ];

        const newBoards = boards.map((board) =>
          board.id === sourceBoard.id
            ? { ...board, tasks: newTasksOrder }
            : board
        );
        setBoards(newBoards);
      }
    }

    setActiveTask(null);
  };

  const handleCreateTask = (newTask: Omit<TaskType, "id">) => {
    // Create the task with the selected status
    const task: TaskType = {
      ...newTask,
      id: Date.now().toString(),
      status: "todo", // Default to "todo"
    };

    setTasks([...tasks, task]);
    // Add the task ID to the appropriate board
    setBoards((prev) =>
      prev.map((board) =>
        board.id === task.status
          ? { ...board, tasks: [...board.tasks, task.id] }
          : board
      )
    );
    setShowCreateModal(false);
  };

  const handleAddBoard = () => {
    const newBoard: BoardType = {
      id: `board-${Date.now()}`,
      title: "New Board",
      tasks: [],
      isEditing: true,
    };
    // Find the index of the "done" board
    const doneIndex = boards.findIndex((board) => board.id === "done");
    if (doneIndex !== -1) {
      // Insert the new board before the "done" board
      const updatedBoards = [
        ...boards.slice(0, doneIndex),
        newBoard,
        ...boards.slice(doneIndex),
      ];
      setBoards(updatedBoards);
    } else {
      // If "done" board isn't found for some reason, just append it
      setBoards([...boards, newBoard]);
    }
  };

  const handleBoardTitleChange = (boardId: string, newTitle: string) => {
    setBoards(
      boards.map((board) =>
        board.id === boardId
          ? { ...board, title: newTitle, isEditing: false }
          : board
      )
    );
  };

  const handleUpdateTaskStatus = (
    taskId: string,
    newStatus: TaskType["status"]
  ) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, status: newStatus } : task
    );

    const updatedBoards = boards.map((board) => {
      if (board.id === newStatus && !board.tasks.includes(taskId)) {
        return { ...board, tasks: [...board.tasks, taskId] };
      }
      if (board.tasks.includes(taskId) && board.id !== newStatus) {
        return { ...board, tasks: board.tasks.filter((id) => id !== taskId) };
      }
      return board;
    });
    setTasks(updatedTasks);
    setBoards(updatedBoards);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {showTaskHistory ? (
        <div className="w-full">
          <div className="mb-4">
            <Button
              onClick={closeTaskHistory}
              variant="text"
              className="flex items-center gap-1 text-red-500 "
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="font-semibold">Back</span>
            </Button>
          </div>
          <TaskHistory onClose={closeTaskHistory} />
        </div>
      ) : showDetailsView && selectedTask ? (
        <div className="w-full">
          <div className="mb-4">
            <Button
              onClick={handleBackToBoard}
              variant="text"
              className="flex items-center gap-1 text-red-500 "
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="font-semibold">Back</span>
            </Button>
          </div>
          <TaskDetailsPage
            task={selectedTask}
            onClose={handleBackToBoard}
            onUpdateStatus={handleUpdateTaskStatus}
          />
        </div>
      ) : (
        <>
          {/* Header */}
          <div className="flex justify-between items-center bg-white p-2 rounded-md shadow-md mb-6">
            <div className="flex items-center my-2">
              <ClipboardCheck size={30} />
              <div className="flex flex-col ml-2">
                <h1 className="text-lg font-semibold">Tasks</h1>
                <span className="text-sm text-gray-500">
                  All Totals [{tasks.length}]
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center border border-gray-200 p-2 rounded-lg">
                <div className="border border-gray-200 rounded-lg flex">
                  {/* Board Button */}
                  <button
                    onClick={() => setViewMode("board")}
                    className={`flex items-center gap-2 font-medium px-3 py-2 rounded-l-lg ${
                      viewMode === "board"
                        ? "bg-primary text-white"
                        : "text-gray-700 hover:bg-red-50"
                    } transition-colors h-10`}
                  >
                    <Kanban className="w-5 h-5" /> Board
                  </button>

                  {/* Add Board Button (Same Height) */}
                  <button
                    onClick={handleAddBoard}
                    className={`px-3 py-2 ${
                      viewMode === "board"
                        ? "text-primary hover:bg-primary hover:text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    } rounded-r-lg transition-colors h-10 flex items-center justify-center cursor-pointer`}
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>

                {/* Calendar Button */}
                <button
                  onClick={() => setViewMode("calendar")}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg ml-4 h-10 cursor-pointer text-primary font-semibold ${
                    viewMode === "calendar" ? "text-white" : "text-primary"
                  } transition-colors`}
                >
                  <CalendarDays className="w-5 h-5" /> Calendar
                </button>
              </div>

              <div className="flex items-center gap-1 border border-gray-200 px-2 py-2 rounded-lg h-10">
                <Filter className="w-4 h-4 text-gray-600" />
                <span className="text-gray-700">Filter By</span>
                <select
                  value={filterLevel}
                  onChange={(e) =>
                    setFilterLevel(
                      e.target.value as TaskType["criticalLevel"] | "all"
                    )
                  }
                  className="border-none outline-none bg-transparent text-gray-700 ml-1"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                  <option value="critical">Critical</option>
                  <option value="insignificant">Insignificant</option>
                </select>
              </div>
              <button
                onClick={toggleTaskHistory}
                className="border border-gray-200 px-3 py-2 rounded-lg h-10 text-primary font-semibold hover:bg-gray-50 transition-colors cursor-pointer"
              >
                Task History
              </button>
              <Button
                onClick={() => setShowCreateModal(true)}
                className="bg-primary text-white hover:bg-primary"
              >
                Create Task
              </Button>
            </div>
          </div>

          {/* Task Columns */}
          {viewMode === "board" ? (
            <DndContext
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              collisionDetection={closestCorners}
            >
              <div className="flex gap-4 overflow-x-auto pb-4">
                {boards.map((board) => (
                  <BoardColumn
                    key={board.id}
                    board={board}
                    onTitleChange={(newTitle) =>
                      handleBoardTitleChange(board.id, newTitle)
                    }
                  >
                    <SortableContext items={board.tasks}>
                      <div className="p-4 space-y-4">
                        {board.tasks
                          .map((taskId) =>
                            filteredTasks.find((task) => task.id === taskId)
                          )
                          .filter(
                            (task) =>
                              task &&
                              (filterLevel === "all" ||
                                task.criticalLevel === filterLevel)
                          )
                          .map(
                            (task) =>
                              task && (
                                <TaskCard
                                  key={task.id}
                                  task={task}
                                  onUpdateStatus={handleUpdateTaskStatus}
                                  onSelect={handleTaskSelect}
                                  isSelected={false}
                                />
                              )
                          )}
                      </div>
                    </SortableContext>
                  </BoardColumn>
                ))}
              </div>
              <DragOverlay>
                {activeTask && <TaskCard task={activeTask} isOverlay />}
              </DragOverlay>
            </DndContext>
          ) : (
            ""
            // <CalendarView tasks={tasks} />
          )}
        </>
      )}

      {/* Create Task Modal */}
      <CreateTaskModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        onCreate={handleCreateTask}
      />
    </div>
  );
};

export default MyTasksPage;
