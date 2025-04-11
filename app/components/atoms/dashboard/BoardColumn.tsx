import React, { useState } from "react";
import { SortableContext } from "@dnd-kit/sortable";
import { Input } from "~/components/ui/input";
import type { BoardType } from "~/types/teamhubtypes";

const BoardColumn: React.FC<{
  board: BoardType;
  onTitleChange: (newTitle: string) => void;
  children: React.ReactNode;
}> = ({ board, onTitleChange, children }) => {
  const [tempTitle, setTempTitle] = useState(board.title);

  const handleTitleBlur = () => {
    const finalTitle = tempTitle.trim() || "Untitled Board";
    onTitleChange(finalTitle);
  };

  return (
    <div className="bg-white shadow-sm w-80 flex-shrink-0 min-h-[12rem] rounded-lg overflow-hidden">
      <div className="border-t-4 border-red-500 p-4">
        {board.isEditing ? (
          <Input
            value={tempTitle}
            onChange={(e) => setTempTitle(e.target.value)}
            onBlur={handleTitleBlur}
            onKeyDown={(e) => e.key === "Enter" && handleTitleBlur()}
            autoFocus
            className="w-full"
          />
        ) : (
          <h3 className="text-lg font-semibold">
            {board.title} [{board.tasks.length}]
          </h3>
        )}
      </div>
      <hr className="border-gray-200" />
      <SortableContext items={board.tasks}>
        <div className="min-h-[10rem]">{children}</div>
      </SortableContext>
    </div>
  );
};

export default BoardColumn;
