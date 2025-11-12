import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import App from "../../../App";
import '@testing-library/jest-dom/vitest';
import userEvent from "@testing-library/user-event";

afterEach(() =>{
    cleanup()
})


describe('Task Cards component', () => {
    it('should open a card of the clicked task on TaskBar, render the correct title and checklists texts', 
    async () => {
        
        render(<App />)
        const createTaskButton = screen.getByText('Create Task');

        await userEvent.click(createTaskButton);

        const checklistInputTitle = screen.getByPlaceholderText('Task name');
        const checklistInput = screen.getByPlaceholderText('Checklist item');

        const addButton = screen.getByLabelText('Add');
        const saveButton = screen.getByLabelText('Save');

        await userEvent.type(checklistInputTitle, 'Caminhar');
        await userEvent.type(checklistInput, 'Andar 20km');

        await userEvent.click(addButton);
        await userEvent.click(saveButton);

        const task = screen.getByText('Caminhar');
        
        await userEvent.click(task);

        const titles = screen.getAllByText('Caminhar');

        expect(screen.getByTestId('task-card')).toBeInTheDocument();
        expect(titles).toHaveLength(2);
        expect(screen.getByText('Andar 20km')).toBeInTheDocument();
    });

    it('should minimize the task card when minimize button is clicked', async () => {
        render(<App />)
        const createTaskButton = screen.getByText('Create Task');

        await userEvent.click(createTaskButton);

        const checklistInputTitle = screen.getByPlaceholderText('Task name');
        const checklistInput = screen.getByPlaceholderText('Checklist item');

        const addButton = screen.getByLabelText('Add');
        const saveButton = screen.getByLabelText('Save');

        await userEvent.type(checklistInputTitle, 'Caminhar');
        await userEvent.type(checklistInput, 'Andar 20km');

        await userEvent.click(addButton);
        await userEvent.click(saveButton);

        const task = screen.getAllByText('Caminhar');
        await userEvent.click(task[0]);

        const minimizeButton = screen.getByLabelText('minimize');
        await userEvent.click(minimizeButton);

        expect(screen.queryByTestId('task-card')).not.toBeInTheDocument()
    });

    it('should mark the box, underline the checklist text and text turn into gray when checkbox is clicked',
        async () => {

        render(<App />)
        const createTaskButton = screen.getByText('Create Task');

        await userEvent.click(createTaskButton);

        const checklistInputTitle = screen.getByPlaceholderText('Task name');
        const checklistInput = screen.getByPlaceholderText('Checklist item');

        const addButton = screen.getByLabelText('Add');
        const saveButton = screen.getByLabelText('Save');

        await userEvent.type(checklistInputTitle, 'Caminhar');
        await userEvent.type(checklistInput, 'Andar 20km');

        await userEvent.click(addButton);
        await userEvent.click(saveButton);

        const task = screen.getAllByText('Caminhar');
        await userEvent.click(task[0]);

        const checkListText = screen.getByText('Andar 20km');
        const checkbox = screen.getByLabelText('checklist-checkbox');
        await userEvent.click(checkbox);

        expect(checkbox).toBeChecked();
        expect(checkListText).toHaveClass('line-through');
        expect(checkListText).toHaveClass('text-gray-500');
    });
})