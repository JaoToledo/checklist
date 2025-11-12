import type { AddTaskButtonProps } from "../../../types";

/**
 * @fileoverview Componente de botão para adicionar itens à tarefa
 * @module AddTaskButton
 */

/**
 * @typedef {Object} AddTaskButtonProps
 * @property {() => void} onAdd - Função callback executada ao adicionar item
 */

/**
 * Botão de adicionar no modal de tarefas
 * @component
 * @param {AddTaskButtonProps} props - Propriedades do componente
 * @returns {JSX.Element} Botão de adicionar renderizado
 */
export function AddTaskButton({ onAdd }: AddTaskButtonProps) {
  return (
    <button 
    aria-label="Add"
    className="px-3 w-9 h-9 mt-1 border-0 bg-green-400 text-white rounded-[10px]
    hover:bg-green-500 cursor-pointer transform active:scale-85 transition-transform duration-75
    font-black
    "
    onClick={onAdd}
    >
      +
    </button>
  )
}