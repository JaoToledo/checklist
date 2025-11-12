import { cleanup, render, screen } from '@testing-library/react';
import {afterEach, describe, expect, it, vi} from 'vitest';
import '@testing-library/jest-dom/vitest';
import { CreateTaskButton } from '../CreateTaskButton';
import userEvent from '@testing-library/user-event';

afterEach(() => {
  cleanup();
})

describe('CreateTaskButton Component', () => {

 it('should render the button with correct text', () => {
  render(<CreateTaskButton onClick={() => {}} />);
  
  expect(screen.getByText("Create Task")).toBeInTheDocument();
});

  it('should call onClick when button is clicked', async () => {
  const onClickMock = vi.fn();

  render(<CreateTaskButton onClick={onClickMock} />);
  const createTaskButton = screen.getByLabelText('Create Task');
  
  await userEvent.click(createTaskButton);
  expect(onClickMock).toHaveBeenCalledTimes(1)
 });

 it('should not call de button when clicked', async () => {
  const onClickMock = vi.fn();
  
  render(<CreateTaskButton onClick={onClickMock} disabled={true} />);
  const button = screen.getByLabelText("Create Task");

  await userEvent.click(button);
  expect(onClickMock).toHaveBeenCalledTimes(0);
 });

});