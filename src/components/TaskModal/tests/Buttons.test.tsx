import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { AddTaskButton } from '../ModalButtons/AddTaskButton'
import '@testing-library/jest-dom/vitest';
import userEvent from "@testing-library/user-event";
import { CancelTaskButton } from "../ModalButtons/CancelTaskButton";
import { SaveTaskButton } from "../ModalButtons/SaveTaskButton";

afterEach( () => {
    cleanup()
})

describe('Add button component', () => {
    it('should render the button with correct text', () => {
        render(<AddTaskButton onAdd={() => {}} />)

        expect(screen.getByText('+')).toBeInTheDocument();
    });

    it('should call onAdd when button is clicked', async () => {
        const onAddMock = vi.fn();

        render(<AddTaskButton onAdd={onAddMock} />);
  
        const addButton = screen.getByLabelText('Add');
        await userEvent.click(addButton);

        expect(onAddMock).toHaveBeenCalledTimes(1);
    });
});

describe('Cancel button component', () => {
    it('should render the button with correct text', () => {
        render(<CancelTaskButton onClick={() => {}} />);
        const cancelTaskButton = screen.getByText('Cancel');

        expect(cancelTaskButton).toBeInTheDocument();
    });

    it('should call onClick when button is clicked', async () => {
        const onClickMock = vi.fn();
        render(<CancelTaskButton onClick={onClickMock} />)

        const cancelTaskButton = screen.getByLabelText('Cancel');
        await userEvent.click(cancelTaskButton);

        expect(onClickMock).toHaveBeenCalledTimes(1)
    });
});

describe('Save button component', () => {
    it('should render the button with correct text', () => {
        render(<SaveTaskButton onClick={() => {}} />);

        const saveTaskButton = screen.getByText('Save');
        expect(saveTaskButton).toBeInTheDocument();
    });

    it('should call onClick when button is clicked', async () => {
        const onClickMock = vi.fn();
        render(<SaveTaskButton onClick={onClickMock} />);

        const saveTaskButton = screen.getByLabelText('Save');
        await userEvent.click(saveTaskButton);

        expect(onClickMock).toHaveBeenCalledTimes(1);
    });
})