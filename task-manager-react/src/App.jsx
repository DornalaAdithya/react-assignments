import TaskManager from "./components/TaskManager";

function App() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <header className="bg-gray-600 text-[clamp(28px,10vw,48px)] w-full text-center font-bold p-5">Task Manager</header>
      <TaskManager />
    </div>
  );
}

export default App;
