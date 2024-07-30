import { useReducer } from "react";
import "./App.css";
import PostList from "./react-query/PostList";
import TodoForm from "./react-query/TodoForm";
import TodoList from "./react-query/TodoList";
import Counter from "./state-management/counter/Counter";
import LoginStatus from "./state-management/auth/LoginStatus";
import TaskList from "./state-management/tasks/TaskList";
import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/HomePage";
import TaskProvider from "./state-management/tasks/TaskProvider";

function App() {
  return (
    <>
      {/* <TodoForm />
      <TodoList /> */}
      <Counter />
      {/* <TaskList /> */}

      <TaskProvider>
        <NavBar />
        <HomePage />
      </TaskProvider>
    </>
  );
}

export default App;
