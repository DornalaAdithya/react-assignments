# Country Explorer Application

This repository contains a functional React application that fetches, displays, and filters data about countries from a public API. It demonstrates practical usage of React Hooks for state management and side effects, along with component composition.

## Application Architecture and Features

This project is built using **Vite**, **React 19**, and styled with **Tailwind CSS**.

### 1. API Integration and Data Fetching
The core logic resides in `App.jsx`, which communicates with the external `restcountries.com` API.
*   **Asynchronous Fetching**: An `async function getCountriesData()` is defined to execute the `fetch` request (`https://restcountries.com/v3.1/all`).
*   **`useEffect` Hook**: The `getCountriesData` function is called inside a `useEffect` hook with an empty dependency array `[]`. This ensures the API call is made exactly once when the application initially mounts.

### 2. State Management
The application manages multiple pieces of complex state using the `useState` hook within `App.jsx`:
*   `countries`: Stores the array of country objects returned from the API.
*   `loading`: A boolean state used to display a conditional "Loading..." message while the fetch request is pending.
*   `error`: Captures and displays any network or API errors encountered during the fetch process.
*   `query`: Stores the current string typed into the search bar.

### 3. Dynamic Filtering
The application implements client-side filtering. As the user types into the `SearchBar` component, the `query` state is updated. 
The `App.jsx` component recalculates the `filterdCountries` array by checking if each country's `name.common` includes the `query` string (converted to lowercase for case-insensitive matching).

### 4. Component Hierarchy
*   **`App.jsx`**: The parent component holding state and fetching logic.
*   **`SearchBar.jsx`**: Receives the `setQuery` function as a prop to update the search state in the parent.
*   **`CountryList.jsx`**: Receives the `filterdCountries` array as a prop and maps over it to render the individual cards.
*   **`CountryCard.jsx`**: A presentation component that receives specific country details (flags, name, capital) as props and renders the UI using Tailwind CSS grid/flex classes.

## Setup Instructions

1.  Navigate into the project directory.
2.  Run `npm install` to install dependencies.
3.  Run `npm run dev` to start the Vite development server.
