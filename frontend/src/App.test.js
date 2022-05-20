import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('Testing App.js',() => {
  test('render input task', () => {
    render(<App />);
    const field = screen.getByTestId('input-task');

    expect(field).toBeInTheDocument();
  });

  test('input recive value', () => {
    render(<App />);
    const field = screen.getByRole('textbox', { name: /task/i });
    const value = 'test';
    fireEvent.change(field, { target: { value } });

    expect(field.value).toBe(value);
  });

  test('render button TASK to create', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /task/i });

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('type', 'button');
  });

  test('onClick button created new task', () => {
    render(<App />);
    const field = screen.getByRole('textbox', { name: /task/i });
    const button = screen.getByRole('button', { name: /task/i });
    const value = 'test';
    
    fireEvent.change(field, { target: { value } });
    fireEvent.click(button);

    expect(screen.getByText(value)).toBeInTheDocument();
  });

  test('test method create write a few tasks at list', () => {
   const todoList = ['Arrumar a cama', 'Tomar banho', 'Estudar React'];
    render(<App />);
    const field = screen.getByRole('textbox', { name: /task/i });
    const button = screen.getByRole('button', { name: /task/i });

    todoList.forEach(task => {
      fireEvent.change(field, { target: { value: task } });
      fireEvent.click(button);
      expect(screen.getByText(task)).toBeInTheDocument();
    });
  });

  test('render button DELETE to delete at each item', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /delete/i });

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('type', 'button');
  });
});
