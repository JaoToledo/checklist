import { useState } from "react";
import { AddTaskButton } from "./ModalButtons/AddTaskButton";
import { CancelTaskButton } from "./ModalButtons/CancelTaskButton";
import { SaveTaskButton } from "./ModalButtons/SaveTaskButton";
import type { CreateTaskModalProps } from "../../types"

/**
 * @typedef {Object} CreateTaskModalProps
 * @property {Function} onClose - Callback quando o modal é fechado
 * @property {Function} onSave - Callback quando a tarefa é salva
 * @property {Task | null} [initialTask] - Dados iniciais da tarefa para edição
 */

/**
 * Componente modal para criação/edição de tarefas
 * @component
 * @param {CreateTaskModalProps} props - Propriedades do componente
 * @returns {JSX.Element} Modal renderizado
 */

export function CreateTaskModal({ onClose, onSave, initialTask }: CreateTaskModalProps) {
  const [taskInput, setTaskInput] = useState(initialTask ? initialTask.title : "");
  const [checklistInput, setChecklistInput] = useState("");
  const [checklists, setChecklists] = useState<string[]>([]);

  // Estado para edição
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editingValue, setEditingValue] = useState("");

  function handleAddChecklist() {
    if (checklistInput.trim() === "") return;
    setChecklists([...checklists, checklistInput]);
    setChecklistInput("");
  }

  function handleSaveClick() {
    if (taskInput.trim() === "" || checklists.length === 0 ) return;
    onSave(taskInput, checklists);
    onClose();
  }

  function handleDeleteChecklist(index: number) {
    setChecklists((prev) => prev.filter((_, i) => i !== index));
  }

  function handleStartEditing(index: number, value: string) {
    setEditingIndex(index);
    setEditingValue(value);
  }

  function handleConfirmEdit(index: number) {
    if (editingValue.trim() !== "") {
      setChecklists((prev) =>
        prev.map((item, i) => (i === index ? editingValue : item))
      );
    }
    setEditingIndex(null);
    setEditingValue("");
  }

  return (
    <div 
    data-testid="create-task-modal"
    className="backdrop-blur-[3px] flex inset-0 fixed justify-center items-center ">
      <div className="bg-white p-6 rounded-[40px] shadow-lg w-96 ">
        <h2 className="text-lg font-semibold mb-2 ml-1">New Task</h2>

        <input
          className="outline-none border border-gray-950 rounded-[10px] shadow-lg p-2 px-2 mb-10 w-full"
          placeholder="Task name"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />

        <h2 className="text-lg font-semibold mb-2 ml-1">Check Lists</h2>

        <div className="flex gap-2">
          <input
            className="w-full border rounded-[10px] outline-none p-2 mb-2 "
            placeholder="Checklist item"
            value={checklistInput}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleAddChecklist();
              }
            }}
            onChange={(e) => setChecklistInput(e.target.value)}
          />
          <AddTaskButton onAdd={handleAddChecklist} />
        </div>

        {/* Lista de checklists */}
        <ul className="ml-1 mb-4 space-y-1">
          {checklists.map((item, index) => (
            <li
              data-testid="checklist-item"
              key={index}
              className="flex"
            >
              {editingIndex === index ? (
  <div className="flex items-center w-full gap-2">
    <input
      value={editingValue}
      onChange={(e) => setEditingValue(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          handleConfirmEdit(index);
        }
        if (e.key === "Escape") {
          setEditingIndex(null); // cancelar com ESC também
        }
      }}
      className="flex-1 border rounded-md p-1 bg-white outline-none"
      autoFocus
    />
    <button
      onClick={() => handleConfirmEdit(index)}
      className="px-2 py-0.5 bg-blue-600 hover:bg-blue-700 text-white rounded-[5px]"
    >
      ✓
    </button>
    <button
      onClick={() => setEditingIndex(null)}
      className="px-2 py-0.5 bg-red-600  hover:bg-red-700 text-white rounded-[5px] font-semibold"
    >
      X
    </button>
  </div>
) : (
  <>
  <span
    className="flex-1 truncate pr-2"
    title={item} 
  >
    {item}
  </span>
  <div className="flex space-x-2 flex-shrink-0">

    {/* Editar */}
    <button
      onClick={() => handleStartEditing(index, item)}
      className="text-blue-500 hover:text-blue-700 cursor-pointer"
    >
      ✏️
    </button>

    {/* Deletar */}
    <button
      onClick={() => handleDeleteChecklist(index)}
      className="text-red-500 hover:text-red-700 cursor-pointer"
    >
      🗑️
    </button>
  </div>
</>

)}
</li>
  ))}
  </ul>
    <div className="flex justify-between">
      <SaveTaskButton onClick={handleSaveClick} />
      <CancelTaskButton onClick={onClose} />
    </div>
  </div>
</div>
  );
}
