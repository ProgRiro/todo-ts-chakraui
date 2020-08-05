import React from "react";
import { Flex, List } from "@chakra-ui/core";
import TaskItem from "./TaskItem";
import { Task } from "./Types";

type Props = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

const TaskList: React.FC<Props> = ({ tasks, setTasks }) => {
  const handleDone = (task: Task) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === task.id ? { ...task, done: !task.done } : t))
    );
  };

  const handleDelete = (task: Task) => {
    setTasks((prev) => prev.filter((t) => t.id !== task.id));
  };

  return (
    <Flex>
      {tasks.length <= 0 ? (
        "登録されたTODOはありません。"
      ) : (
        <List
          display="flex"
          flexDirection="column"
          // alignItems="center"
          w="50%"
          mx="auto"
        >
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleDelete={handleDelete}
              handleDone={handleDone}
            />
          ))}
        </List>
      )}
    </Flex>
  );
};

export default TaskList;
