import type { SaveTaskButtonProps } from "../../../types";

/**
 * @fileoverview Componente de botão para salvar tarefas
 * @module SaveTaskButton
 */

/**
 * @typedef {Object} SaveTaskButtonProps
 * @property {() => void} onClick - Função callback executada ao clicar para salvar
 */

/**
 * Botão de salvar no modal de tarefas
 * @component
 * @param {SaveTaskButtonProps} props - Propriedades do componente
 * @returns {JSX.Element} Botão de salvar renderizado
 */
export function SaveTaskButton({ onClick }: SaveTaskButtonProps) {
  return (
    <button 
        aria-label="Save"
        onClick={onClick}
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-[10px]
       cursor-pointer transform active:scale-85 transition-transform duration-75
        "
        >
          Save
        </button>
  )
}
