import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import '@testing-library/jest-dom/vitest';
import App from "../../../App";
import userEvent from "@testing-library/user-event";
import { CreateTaskModal } from "../ModalTask";


afterEach( () => {
    cleanup();
})

describe('ModalTasks component' , () => {
    it('should open the modal and render its elements correctly', async () => {
        render(<CreateTaskModal onClose={() => {}} onSave={() => {}} />)

        {/* Verifica a renderização dos elementos da modal */}

        expect(screen.getByPlaceholderText('Task name')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Checklist item')).toBeInTheDocument();
        expect(screen.getByLabelText('Save')).toBeInTheDocument();
        expect(screen.getByLabelText('Cancel')).toBeInTheDocument();
        expect(screen.getByLabelText('Add')).toBeInTheDocument();
        expect(screen.getByText('New Task')).toBeInTheDocument();
        expect(screen.getByText('Check Lists')).toBeInTheDocument();
    });

    it('should be added a new task on task list when button add is clicked', async () => {
        render(<CreateTaskModal onClose={() => {}} onSave={() => {}} />);

        const checkListInput = screen.getByPlaceholderText('Checklist item');
        const onAddButton = screen.getByLabelText('Add');

        await userEvent.type(checkListInput, 'Comprar pé de galinha');
        await userEvent.click(onAddButton);

        const checklists = screen.getAllByTestId('checklist-item');
        expect(checklists).toHaveLength(1);
        expect(screen.getByText('Comprar pé de galinha')).toBeInTheDocument();
    });

    it('modal should open when button Create Task is clicked and close when button Cancel is clicked ', async () => {
        render(<App />);
        expect(screen.queryByTestId("create-task-modal")).not.toBeInTheDocument();

        const openModal = screen.getByText('Create Task');
        await userEvent.click(openModal);
        
        expect(screen.getByTestId('create-task-modal')).toBeInTheDocument();

        const closeModal = screen.getByLabelText('Cancel');
        await userEvent.click(closeModal);

        expect(screen.queryByTestId('create-task-modal')).not.toBeInTheDocument();
    });

    it('should save the task created on the TaskBar after clicking on save button', async () => {
        render(<App/>);

        const openModal = screen.getByText('Create Task');
        await userEvent.click(openModal);
        
        expect(screen.getByTestId('create-task-modal')).toBeInTheDocument();

        const checklistInputTitle = screen.getByPlaceholderText('Task name');
        const checklistInput = screen.getByPlaceholderText('Checklist item');
        const addButton = screen.getByLabelText('Add');
        const saveButton = screen.getByLabelText('Save');

        await userEvent.type(checklistInputTitle, 'Terminar One Piece');
        await userEvent.type(checklistInput,'Assistir Ep 770');

        await userEvent.click(addButton);
        await userEvent.click(saveButton);

        expect(screen.queryByTestId('create-task-modal')).not.toBeInTheDocument()
        expect(screen.getByText('Terminar One Piece')).toBeInTheDocument()
    });
})     