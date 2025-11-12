import { vi } from "vitest";

export const defaultProps = {
    onCreateTaskClick: vi.fn(),
    tasks: [],
    onTaskSelect: vi.fn(),
    onDeleteTask: vi.fn(),
    onEditTask: vi.fn(),
};