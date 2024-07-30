import { useContext } from "react";
import LoginStatus from "./auth/LoginStatus";
import TasksContext from "./tasks/taskContexts";
import useCounterStore from "./counter/store";

const NavBar = () => {
  const { tasks } = useContext(TasksContext);
  const counter = useCounterStore((s) => s.counter);

  console.log("Render Navbar");

  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">Counter: {counter}</span>
      <span className="badge text-bg-secondary">Tasks: {tasks.length}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
