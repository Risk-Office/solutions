import React, { useState } from "react";
import { Calendar } from "~/components/ui/calendar";
import { format, parse } from "date-fns";
import type { TaskType } from "~/types/teamhubtypes";

interface CalendarViewProps {
  tasks: TaskType[];
}

const CalendarView: React.FC<CalendarViewProps> = ({ tasks }) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  // Color mapping for tasks
  const getCriticalStyle = (level: string) => {
    switch (level?.toLowerCase()) {
      case "high":
        return {
          bg: "bg-gradient-to-br from-red-500 to-red-700",
          bar: "bg-red-600",
          text: "text-white",
          shadow: "shadow-[0_0_10px_rgba(239,68,68,0.5)]",
        };
      case "medium":
        return {
          bg: "bg-gradient-to-br from-yellow-400 to-orange-500",
          bar: "bg-orange-500",
          text: "text-gray-900",
          shadow: "shadow-[0_0_10px_rgba(251,191,36,0.5)]",
        };
      case "low":
        return {
          bg: "bg-gradient-to-br from-green-400 to-emerald-500",
          bar: "bg-emerald-500",
          text: "text-white",
          shadow: "shadow-[0_0_10px_rgba(16,185,129,0.5)]",
        };
      default:
        return {
          bg: "bg-gradient-to-br from-gray-200 to-gray-300",
          bar: "bg-gray-400",
          text: "text-gray-800",
          shadow: "shadow-[0_0_5px_rgba(107,114,128,0.3)]",
        };
    }
  };

  // Group tasks by date
  const tasksByDate = tasks.reduce((acc, task) => {
    if (task.deadline) {
      // Parse deadline as a local date to avoid timezone issues
      const date = parse(task.deadline, "yyyy-MM-dd", new Date());
      const formattedDate = format(date, "yyyy-MM-dd");
      if (!acc[formattedDate]) {
        acc[formattedDate] = [];
      }
      acc[formattedDate].push(task);
    }
    return acc;
  }, {} as Record<string, TaskType[]>);

  const dayContent = (date: Date) => {
    const formattedDate = format(date, "yyyy-MM-dd");
    const dayTasks = tasksByDate[formattedDate] || [];

    return (
      <div className="h-full w-full p-2 flex flex-col">
        <div className="flex-1 space-y-2 text-left">
          {dayTasks.map((task) => {
            const styles = getCriticalStyle(task.criticalLevel);
            return (
              <div key={task.id} className="pb-2 border-b border-gray-600/50">
                <div
                  className={`text-sm break-words leading-tight ${styles.text}`}
                >
                  Task
                </div>
                <div
                  className={`h-[0.3rem] w-[60%] ${styles.bar} my-2 rounded-full`}
                />
                <div
                  className={`text-sm break-words leading-tight ${styles.text}`}
                >
                  {task.description}
                </div>
              </div>
            );
          })}
        </div>
        <div className="self-end mt-2">
          <div className="w-6 h-6 bg-white/90 rounded-full flex items-center justify-center text-sm font-bold text-gray-800 shadow-md">
            {date.getDate()}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full max-w-7xl mx-auto bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-2xl p-4">
      <Calendar
        mode="single"
        selected={selectedDate}
        onSelect={() => setSelectedDate(undefined)}
        className="w-full border-none text-white"
        components={{
          DayContent: (props) => dayContent(props.date),
        }}
        classNames={{
          months:
            "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
          month: "space-y-0 w-full",
          table: "w-full border-collapse border border-gray-700/50",
          head_row: "flex w-full",
          head_cell:
            "w-full font-medium text-lg py-3 text-gray-200 border-b border-gray-700/50",
          row: "flex w-full border-b border-gray-700/50",
          cell: "min-h-40 w-full text-left text-sm p-0 border-r border-gray-700/50 bg-gray-800/50 backdrop-blur-sm",
          day: "h-full w-full p-0 font-normal aria-selected:bg-transparent aria-selected:text-white",
          day_today: "bg-gray-700/70 text-white",
          day_outside: "text-gray-500 opacity-50",
        }}
      />
    </div>
  );
};

export default CalendarView;
