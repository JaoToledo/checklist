import type { TasksProps } from "../../types";

/**
 * @fileoverview Componente para renderização de cards de tarefas com checklists
 * @module Tasks
 */

/**
 * @typedef {Object} TasksProps
 * @property {Task[]} tasks - Array de tarefas para exibir
 * @property {Function} onToggleChecklist - Callback quando um item do checklist é alternado
 * @property {Function} onClose - Callback quando o card da tarefa é fechado
 */

/**
 * Componente Tasks que exibe cards de tarefas
 * @component
 * @param {TasksProps} props - Propriedades do componente
 * @returns {JSX.Element|null} Cards de tarefas renderizados ou null se não houver tarefas
 */

export function Tasks({ tasks, onToggleChecklist, onClose }: TasksProps) {
  if (tasks.length === 0) {
    return null;
  }

  const sortedTasks = [...tasks].sort((a, b) => b.checklists.length - a.checklists.length);

  return (
    <div className="flex flex-wrap gap-4 items-start"
    data-testid='task-card'
    >
     {sortedTasks.map((task) => (
      <div 
      key={task.id} 
      className="bg-white p-6 rounded-2xl shadow-md w-80 relative"
      >
      <button
      aria-label="minimize"
      onClick={() => onClose(task.id)}
      className="
        absolute top-0 right-0 mr-4  text-black hover:text-red-500
        font-semibold text-2xl p-1 rounded-full cursor-pointer "  
        >
        -
        </button>

          {/* título */}
            <div className="font-bold italic uppercase text-2xl mb-3 border-b border-gray-300 pb-2 break-words">
              <h1>{task.title}</h1>
            </div>

          {/* checklist */}
          <div className="space-y-2">
            {task.checklists.length === 0 ? (
              <p className="text-gray-600">Nenhum item no checklist.</p>
               ) : (
                task.checklists.map((item) => (
                  <div 
                  key={item.id} 
                  className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100"
                  >
                  <input 
                  aria-label="checklist-checkbox"
                  type="checkbox" 
                  checked={item.done} 
                  readOnly 
                  onChange={() => onToggleChecklist(task.id, item.id)}
                  />
                  <span
                  className={`${item.done ? "line-through text-gray-500" : "text-gray-900"} 
                  break-words whitespace-pre-wrap w-full`}
                  >

                {item.text}

                </span>
                </div>
              ))
            )}
          </div>
        </div>
      ))}
    </div>
  );
}



