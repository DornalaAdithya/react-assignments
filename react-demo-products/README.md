# React Products Demo

This repository contains a React application demonstrating fundamental UI rendering techniques, specifically focusing on rendering lists of data through component composition.

## Application Architecture and Features

This project is scaffolded with **Vite**, built with **React 19**, and utilizes **Tailwind CSS** for rapid styling.

### 1. Component Modularity
The application is structured into clear, single-purpose components to ensure maintainability:
*   **`App.jsx`**: The root component that renders the main page layout, including a stylized header ("Products") and the main `Products` container.
*   **`Products.jsx`**: Acts as the container or parent component for the product data. It is responsible for mapping over the data source.
*   **`Product.jsx`**: A reusable presentational component responsible for formatting and displaying the details of a single, individual product.

### 2. List Rendering and Iteration
The core functionality of this assignment is demonstrating how React handles collections of data.
*   Within `Products.jsx`, the JavaScript `.map()` array method is utilized to iterate over a collection of product data. 
*   For every item in the array, a new `<Product />` component is instantiated and returned to the DOM.

### 3. Prop Passing and Keys
*   **Props**: Data is passed dynamically from the parent `Products.jsx` component down to the child `Product.jsx` component via props. This allows the `Product` component to be completely reusable, as it simply receives data (like image URLs, titles, and prices) and displays it.
*   **React Keys**: When mapping over the product array, a unique `key` prop is assigned to each `<Product />` component. This is a critical React concept that helps the reconciliation algorithm identify which items have changed, been added, or been removed, ensuring efficient re-renders.

### 4. Responsive Styling
The application heavily utilizes Tailwind CSS utility classes directly within the JSX elements to create a responsive, modern layout (e.g., using grid or flexbox classes within the `Products` container to align the individual cards).

## Setup Instructions

1.  Navigate into the project directory.
2.  Run `npm install` to install dependencies.
3.  Run `npm run dev` to start the Vite development server.
