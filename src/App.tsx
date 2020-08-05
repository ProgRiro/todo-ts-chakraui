import React, { useState } from "react";
import "./App.css";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { Task } from "./components/Types";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

const initialState: Task[] = [
  {
    id: 2,
    title: "次にやるやつ",
    done: false,
  },
  {
    id: 1,
    title: "はじめにやるやつ",
    done: true,
  },
];

const App: React.FC = () => {
  const [tasks, setTasks] = useState(initialState);

  return (
    <div className="App">
      <ThemeProvider>
        <CSSReset />
        <TaskInput setTasks={setTasks} tasks={tasks} />
        <TaskList setTasks={setTasks} tasks={tasks} />
      </ThemeProvider>
    </div>
  );
};

export default App;
