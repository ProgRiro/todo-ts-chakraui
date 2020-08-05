import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Flex,
  Input,
} from "@chakra-ui/core";
import { Task } from "./Types";

type Props = {
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  tasks: Task[];
};

const TaskInput: React.FC<Props> = ({ setTasks, tasks }) => {
  const [inputTitle, setInputTitle] = useState<string>("");
  const [count, setCount] = useState<number>(tasks.length + 1);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTitle(e.target.value);
  };

  const handleSubmit = () => {
    setCount((prevCount) => prevCount + 1);

    const newTask: Task = {
      id: count,
      title: inputTitle,
      done: false,
    };

    setTasks([newTask, ...tasks]);
    setInputTitle("");
  };

  return (
    <Box py={50} mb={6}>
      <FormControl isRequired>
        <Flex w="60%" mx="auto" justify="space-around" alignItems="flex-end">
          <Box w="80%">
            <FormLabel htmlFor="todo">Your Todo</FormLabel>
            <Input
              id="todo"
              type="text"
              placeholder="ex )  Study TypeScript"
              value={inputTitle}
              onChange={handleInputChange}
              bg="gray.200"
              color="gray.900"
              _focus={{ bg: "white", borderColor: "blue.400" }}
            />
          </Box>
          <Button
            variantColor="green"
            onClick={handleSubmit}
            position="relative"
            top={-3}
            boxShadow="0 3px #888888"
            _hover={{ position: "relative", top: 0, boxShadow: "none" }}
          >
            Add
          </Button>
        </Flex>
      </FormControl>
    </Box>
  );
};

export default TaskInput;
