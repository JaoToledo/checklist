import type { Task } from "../../types";

interface SideBarTasksProps {
  tasks: Task[];
  onTaskSelect: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (task: Task) => void;
}


/**
 * @fileoverview Componente de barra lateral que lista as tarefas com opções de edição
 * @module SideBarTasks
 */

/**
 * @typedef {Object} SideBarTasksProps
 * @property {Task[]} tasks - Array de tarefas para exibir
 * @property {(id: string) => void} onTaskSelect - Callback quando uma tarefa é selecionada
 * @property {(id: string) => void} onDelete - Callback quando uma tarefa é excluída
 * @property {(task: Task) => void} onEdit - Callback quando uma tarefa é editada
 */

/**
 * Componente que exibe lista de tarefas na barra lateral
 * @component
 * @param {SideBarTasksProps} props - Propriedades do componente
 * @returns {JSX.Element} Lista de tarefas renderizada
 */
export function SideBarTasks({ tasks, onTaskSelect, onDelete, onEdit }: SideBarTasksProps) {
  if (tasks.length === 0) {
    return <p className="text-gray-400 p-4 flex justify-center text-lg font-semibold">Nenhuma tarefa criada</p>;
  }

  return (
    <ul className="p-2 space-y-2 ">
      {tasks.map((task) => (
        <li
        key={task.id}
        className="flex items-center justify-between cursor-pointer p-2 rounded-lg hover:bg-gray-700 transition"
        onClick={() => onTaskSelect(task.id)}
        >

        <span
        className="flex-1 truncate pr-2"
        title={task.title} // 👈 tooltip com o nome completo
        >
        {task.title}
        </span>
      
        {/* Botões editar / deletar */}
        <div className="flex gap-2 flex-shrink-0">
          <button
          aria-label="Edit Task"
          onClick={(e) => {
            e.stopPropagation();
            onEdit(task);
          }}
            className="cursor-pointer hover:scale-110 transition"
           > ✏️
           </button>

          <button
          aria-label="Delete Task"
          onClick={(e) => {
            e.stopPropagation();
            onDelete(task.id);
          }}
            className="cursor-pointer hover:scale-110 transition"
          > 🗑
          </button>
        </div>
      </li>
      ))}
    </ul>
  );
}
