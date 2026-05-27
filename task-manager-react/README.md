# React Task Manager

This repository contains a fully functional CRUD (Create, Read, Update, Delete) Task Manager application. It demonstrates advanced React state management and complex form handling using external libraries.

## Application Architecture and Features

This project is built using **Vite**, **React 19**, **Tailwind CSS**, and notably, the **React Hook Form** library.

### 1. Centralized State Management
The core logic of the application revolves around the `TaskManager.jsx` component, which acts as the "source of truth".
*   It utilizes the `useState` hook to maintain an array of task objects.
*   It defines specific handler functions (e.g., `addTask`, `deleteTask`, `toggleTaskStatus`) that mutate this state array.
*   These state-mutating functions are passed down as props to child components, ensuring that state is only ever updated predictably from the top down.

### 2. Advanced Form Handling with React Hook Form
The `AddTaskForm.jsx` component is responsible for capturing user input to create new tasks.
*   Instead of relying on standard controlled inputs (which trigger a re-render on every keystroke), this component utilizes `react-hook-form`.
*   The `useForm` hook is used to register inputs, drastically improving performance by leveraging uncontrolled components under the hood while still providing easy access to form data.
*   The `handleSubmit` function from the library is used to intercept the form submission, validate the data, and then pass the sanitized task object back up to the `TaskManager` via a prop callback.

### 3. Component Composition and Data Flow
The application follows a strict unidirectional data flow:
*   **`App.jsx`**: The root layout wrapper.
*   **`TaskManager.jsx`**: Holds the state (`tasks` array) and the business logic functions.
*   **`AddTaskForm.jsx`**: Receives an `onAddTask` callback prop to send new data up.
*   **`TaskList.jsx`**: Receives the `tasks` array as a prop and maps over it.
*   **`TaskItem.jsx`**: Receives individual task data and callbacks (like `onDelete`) as props. It uses Tailwind CSS to style the task display and conditionally format text (like strike-throughs for completed tasks).

## Setup Instructions

1.  Navigate into the project directory.
2.  Run `npm install` to install dependencies.
3.  Run `npm run dev` to start the Vite development server.
