import { SideBarTasks } from "../Tasks/SideBarTasks";
import { CreateTaskButton } from "./CreateTaskButton";
import type { TaskBarProps } from "./interfaces&props";

/**
 * @component
 * @param {TaskBarProps} props - Propriedades do componente
 * @returns {JSX.Element} Barra lateral renderizada
 */

/**
 * Componente Task Bar
 * 
 * Exibe o menu lateral com a lista de tarefas e o botão de criar nova task
 */
export function 
TaskBar({ 
  onCreateTaskClick, 
  tasks, 
  onTaskSelect, 
  onDeleteTask, 
  onEditTask }: 
  TaskBarProps) {
  return (
    <div
      className="
        bg-gray-800 text-white rounded-r-4xl
        w-3/4 sm:w-64 md:w-72 lg:w-80 ">
          
      {/* Header */}
      <div className="p-4 text-lg border-b border-gray-600
       flex justify-between items-center">

        <h1 className="font-bold">TODO LIST</h1>
        
        <CreateTaskButton onClick={onCreateTaskClick} />
      </div>

      {/* Lista de tasks na TaskBar */}
      <div className="p-4">
        <SideBarTasks
          tasks={tasks}
          onTaskSelect={onTaskSelect}
          onDelete={onDeleteTask}
          onEdit={onEditTask}
        />
      </div>
    </div>
  );
}
