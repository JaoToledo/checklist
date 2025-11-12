

export type ChecklistItem = {
  id: string;
  text: string;
  done: boolean;
};

export type Task = {
  id: string;
  title: string;
  checklists: ChecklistItem[];
};

export type CreateTaskButtonProps = {
  onClick: () => void;
  disabled?: boolean;
};

export type SaveTaskButtonProps = {
  onClick: () => void;
}


export type CancelTaskButtonProps = {
  onClick: () => void;
}

export type AddTaskButtonProps = {
  onAdd: () => void;
}

export type CreateTaskModalProps = {
  onClose: () => void;
  onSave: (title: string, checklists: string[]) => void;
  initialTask?: Task | null;
};

export type TasksProps = {
  tasks: Task[];
  onToggleChecklist: (taskId: string, checklistId: string) => void;
  onClose: (taskId: string) => void
};