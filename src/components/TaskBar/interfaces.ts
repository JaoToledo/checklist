import type { Task } from "../../types";

 {/* Interfaces */}

export interface TaskBarProps {
  onCreateTaskClick: () => void;
  tasks: Task[];
  onTaskSelect: (id: string) => void;
  onDeleteTask: (id: string) => void;
  onEditTask: (task: Task) => void; 
}
