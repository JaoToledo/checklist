import type { CreateTaskButtonProps } from "../../types";

/**
 * @fileoverview Componente de botão para criar novas tarefas
 * @module CreateTaskButton
 */

/**
 * @typedef {Object} CreateTaskButtonProps
 * @property {() => void} onClick - Função callback executada ao clicar no botão
 */

/**
 * Botão que permite criar novas tarefas
 * @component
 * @param {CreateTaskButtonProps} props - Propriedades do componente
 * @returns {JSX.Element} Botão renderizado
 */
export function CreateTaskButton({ onClick, disabled }: CreateTaskButtonProps) {
  return (
    <button 
    aria-label="Create Task"
    className="bg-white text-black cursor-pointer rounded-2xl p-0.5 px-3"
    onClick={onClick}
    disabled={disabled}
    >
      Create Task
    </button>
  )
}