# Task Manager (React)

This folder contains a Task Manager assignment, a functional React application designed to handle creating, viewing, and managing tasks.

## Technologies Used

*   **React (v19)**: The library used to structure the view layer of the application and manage dynamic component updates.
*   **Vite**: The build environment powering the fast development cycle of this project.
*   **Tailwind CSS**: A utility-first styling framework used to design the task lists, buttons, and input forms.
*   **React Hook Form**: Integrated to handle the complexity of the task creation and editing forms, providing seamless data capture and validation.

## Core Concepts Covered

*   **State Management**: Utilizing React's `useState` hook to keep track of the application's data over time (e.g., the current list of tasks, or the input value of a new task). When state changes, React automatically re-renders the affected components.
*   **Event Handling**: Writing functions to respond to user interactions, such as clicking a "Delete" button or submitting the "Add Task" form (`onSubmit`, `onClick`, `onChange`).
*   **Controlled vs Uncontrolled Inputs**: Understanding how form inputs interact with React state. `React Hook Form` often leverages uncontrolled inputs under the hood for performance, bridging the gap with custom hooks.
*   **Component Composition**: Building complex UIs by assembling simpler, focused components together (e.g., placing a `TaskItem` component inside a `TaskList` component).

## How to Run

1.  Open your terminal and navigate to this folder.
2.  Install the required dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm run dev
    ```
4.  Open the provided `localhost` URL in your browser to view the application.
