import "./App.css";
import { useTaskStore } from "./store/useTaskStore";
import CompletedTaskList from "./components/CompletedTaskList";
import TodoList from "./components/TodoList";
import Sidebar from "./components/SideBar";

function App() {
  const addTask = useTaskStore((state) => state.addTask);

  return (
    <div className="app">
      <header className="navbar">Ravn Challenge</header>
      <div className="main-layout">
        <aside className="sidebar">
          <Sidebar onSubmitTask={addTask} />
        </aside>
        <main className="todo">
          <TodoList />
        </main>
        <section className="completed">
          <CompletedTaskList />
        </section>
      </div>
    </div>
  );
}

export default App;
