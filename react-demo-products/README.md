# React Demo: Products

This folder contains a React assignment focused on rendering and managing a list of products within a user interface.

## Technologies Used

*   **React (v19)**: The core JavaScript library used to build the interactive, component-based user interface.
*   **Vite**: The build tool utilized to serve the application locally with incredibly fast Hot Module Replacement (HMR).
*   **Tailwind CSS**: Used to quickly and responsively style the product cards and layout directly within the JSX files using utility classes.

## Core Concepts Covered

*   **JSX**: A syntax extension for JavaScript that looks similar to XML or HTML. It is used with React to describe what the UI should look like.
*   **Props (Properties)**: Arguments passed into React components. They are how data flows downwards from a parent component to a child component, allowing for dynamic rendering of product details.
*   **List Rendering**: Using JavaScript array methods (like `.map()`) inside JSX to iterate over an array of product data and render a React component or HTML element for each item.
*   **Keys**: Special string attributes you need to include when creating lists of elements. Keys help React identify which items have changed, are added, or are removed, optimizing the rendering process.

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
