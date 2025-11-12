import type { CancelTaskButtonProps } from "../../../types";

/**
 * @fileoverview Componente de botão para cancelar edição de tarefas
 * @module CancelTaskButton
 */

/**
 * @typedef {Object} CancelTaskButtonProps
 * @property {() => void} onClick - Função callback executada ao cancelar
 */

/**
 * Botão de cancelar no modal de tarefas
 * @component
 * @param {CancelTaskButtonProps} props - Propriedades do componente
 * @returns {JSX.Element} Botão de cancelar renderizado
 */
export function CancelTaskButton({ onClick }: CancelTaskButtonProps) {
  return (
    <button 
        aria-label="Cancel"
        onClick={onClick}
        className="px-4 py-2 bg-red-600  hover:bg-red-700 text-white rounded-[10px]
         cursor-pointer transform active:scale-85 transition-transform duration-75
        "
        >
          Cancel
        </button>
  )
}
