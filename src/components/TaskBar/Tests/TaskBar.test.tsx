import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi} from "vitest";
import { TaskBar } from "../TaskBar";
import '@testing-library/jest-dom/vitest';
import { defaultProps } from "./contants";
import userEvent from "@testing-library/user-event";

afterEach(() => {
    cleanup()
})

describe('TaskBar component', () => {

    it('Should render the title with the correct text', () => {
        render(<TaskBar {...defaultProps} />);

        const title = screen.getByText("TODO LIST");
        expect(title).toBeInTheDocument();
    });

    it('should render the Create Task button', () => {
        render(<TaskBar {...defaultProps} />);

        const createTaskButton = screen.getByText('Create Task');
        expect(createTaskButton).toBeInTheDocument()
    });

    it('should call onClick when button is clicked', async () => {      
        const onClickMock = vi.fn();
        render (<TaskBar {...defaultProps} onCreateTaskClick={onClickMock} />);

        const createTaskButton = screen.getByText('Create Task');
        await userEvent.click(createTaskButton);

        expect(onClickMock).toHaveBeenCalledTimes(1);      
    });

    it('should render one task on TaskBar', () => {
        const mockTasks = [
            {id: "1", title: "Estudar",checklists: [], }
        ];

        render(<TaskBar {...defaultProps} tasks={mockTasks} />)
        mockTasks.forEach(task => {
            expect(screen.getByText(task.title)).toBeInTheDocument();
        });
    });

    it('should render multiple tasks on TaskBar', () => {
        const mockTasks = [
            { id: "1", title: "Estudar",checklists: [], },
            { id: "2",  title: "Lutar com um urso", checklists: [], },
            { id: "3", title: "Terminar este projeto maravilhoso <3",checklists: [], }
        ];

        render(<TaskBar {...defaultProps} tasks={mockTasks} />)
        mockTasks.forEach(task => {
            expect(screen.getByText(task.title)).toBeInTheDocument();
        });
    });

    it('should call the task when clicked', async ()  => {
        const mockTask = [
            {id: "1", title: "Chamar a task", checklists: [], },
        ];

        const mockSelectTask = vi.fn();
        render(<TaskBar {...defaultProps}
            tasks={mockTask}
            onTaskSelect={mockSelectTask} 
            />);

        await userEvent.click(screen.getByText('Chamar a task'));
        expect(mockSelectTask).toHaveBeenCalledTimes(1)
    });

    it('should call the edit button when clicked', async () => {  
        const mockTask = [
            {id: "1", title: "Editar a task", checklists: [], },
        ];

        const mockEditTask = vi.fn();
        render (<TaskBar {...defaultProps} 
            tasks={mockTask}
            onEditTask={mockEditTask} 
            /> );

            await userEvent.click(screen.getByLabelText('Edit Task'));
            expect(mockEditTask).toHaveBeenCalledTimes(1);
    });

    it('should call de delete button when clicked', async () => {
        const mockTask = [
            {id: "1", title: "Editar a task", checklists: [], },
        ];

        const mockDeleteTask = vi.fn();
        render (<TaskBar {...defaultProps} 
            tasks={mockTask}
            onDeleteTask={mockDeleteTask} 
            /> );

            await userEvent.click(screen.getByLabelText('Delete Task'));
            expect(mockDeleteTask).toHaveBeenCalledTimes(1);
    });
}); 