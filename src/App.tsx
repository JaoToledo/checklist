import { useState, useEffect } from "react";
import { TaskBar } from "./components/TaskBar/TaskBar";
import { CreateTaskModal } from "./components/TaskModal/ModalTask";
import { Tasks } from "./components/Tasks/TaskCard";
import type { Task } from "./types"; 

/**
 * @fileoverview Componente principal da aplicação que gerencia tarefas e estado da UI
 * @module App
 */

/**
 * Componente App principal
 * @component
 * @returns {JSX.Element} O componente App renderizado
 */
function App() {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  
  const [taskBeingEdited, setTaskBeingEdited] = useState<Task | null>(null);

  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [selectedTaskIds, setSelectedTaskIds] = useState<string[]>([]);
  
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleSaveTask = (title: string, checklists: string[]) => {
    
    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      checklists: checklists.map((item) => ({
        id: crypto.randomUUID(),
        text: item,
        done: false,
      })),
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleUpdateTask = (id: string, title: string, checklists: string[]) => {
    
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? {
              ...task,
              title,
              checklists: [
                ...task.checklists,
                ...checklists.map((text) => ({
                  id: crypto.randomUUID(),
                  text,
                  done: false,
                })),
              ],
            }
          : task
      )
    );
  };

  const handleToggleChecklist = (taskId: string, checklistId: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              checklists: task.checklists.map((item) =>
                item.id === checklistId ? { ...item, done: !item.done } : item
              ),
            }
          : task
      )
    );
  };

  const handleDeleteTask = (taskId: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
    setSelectedTaskIds((prev) => prev.filter((id) => id !== taskId));
  };

  const handleEditTask = (task: Task) => {
    setTaskBeingEdited(task);
    setModalIsOpen(true);
  };

  const selectedTasks = tasks.filter((t) => selectedTaskIds.includes(t.id));

  

  return (
    <div className="flex items-start bg-gray-900 min-h-screen pt-5">

      <TaskBar
        onCreateTaskClick={() => {
          setTaskBeingEdited(null); // criação
          setModalIsOpen(true);
        }}
        tasks={tasks}
        onTaskSelect={(id) =>
          setSelectedTaskIds((prev) =>
            prev.includes(id) ? prev.filter((tid) => tid !== id) : [...prev, id]
          )
        }
        onDeleteTask={handleDeleteTask}
        onEditTask={handleEditTask} // edição
      />

      <div className="p-3">
        {selectedTasks.length > 0 ? (
          <Tasks 
            tasks={selectedTasks} 
            onToggleChecklist={handleToggleChecklist} 
            onClose={(taskId) => 
              setSelectedTaskIds((prev) => prev.filter((id) => id !== taskId))
            }
          />
        ) : (
          <p className="text-gray-400">Selecione uma tarefa na barra lateral</p>
        )}
      </div>

      {modalIsOpen && (
        <CreateTaskModal
          onClose={() => setModalIsOpen(false)}
          onSave={(title, checklists) => {
            if (taskBeingEdited) {
              handleUpdateTask(taskBeingEdited.id, title, checklists);
            } else {
              handleSaveTask(title, checklists);
            }
            setModalIsOpen(false);
          }}
          initialTask={taskBeingEdited}
        />
      )}
      
    </div>
  );
}

export default App;

  
