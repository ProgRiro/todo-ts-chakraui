import React from "react";
import { Button, Checkbox, ListItem, FormLabel } from "@chakra-ui/core";
import { Task } from "./Types";

type Props = {
  task: Task;
  handleDone: (task: Task) => void;
  handleDelete: (task: Task) => void;
};

const TaskItem: React.FC<Props> = ({ task, handleDone, handleDelete }) => {
  return (
    <ListItem
      display="flex"
      justifyContent="space-between"
      alignItems="flex-end"
      py={3}
      borderBottom="1px solid gray"
    >
      <FormLabel textDecoration={task.done ? "line-through" : "none"}>
        <Checkbox
          onChange={() => handleDone(task)}
          variantColor="green"
          defaultIsChecked={task.done}
          // isDisabled={task.done}
        >
          {task.title}
        </Checkbox>
      </FormLabel>
      <Button
        onClick={() => handleDelete(task)}
        variantColor="pink"
        position="relative"
        top={-3}
        boxShadow="0 3px #888888"
        _hover={{ position: "relative", top: 0, boxShadow: "none" }}
      >
        Delete
      </Button>
    </ListItem>
  );
};

export default TaskItem;
