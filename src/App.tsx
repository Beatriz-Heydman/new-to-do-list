//Libs
import { useState } from "react";
import { HiOutlineTrash } from "react-icons/hi";

//Components
import { Button } from "./Components/button";
import { Flex } from "./Components/flex";
import { Input } from "./Components/input";
import { ToDoItem } from "./Components/to-do-item";
import { Typography } from "./Components/typography";

function App() {
  const [inputValue, setInputValue] = useState("");

  const [toDos, setToDos] = useState<string[]>([]);

  return (
    <Flex direction="column" gap="2rem" className="to_do_list_container">
      <div className="container_input">
        <Typography fontSize="3rem" color="#d5ffec">
          Lista de tarefas
        </Typography>
        <Flex gap="2rem" style={{ width: "100%" }}>
          <Input
            style={{ width: "100%" }}
            value={inputValue}
            onChange={(event) => {
              setInputValue(event.currentTarget.value);
            }}
          />
          <Button
            onClick={() => {
              const newToDos = [...toDos, inputValue];

              if (inputValue.length > 0) {
                setToDos(newToDos);
              }

              setInputValue("");
            }}
          >
            Adicionar
          </Button>
        </Flex>
        <Flex direction="column" gap="1rem" style={{ width: "100%" }}>
          {toDos.map((todo, index) => (
            <ToDoItem text={todo} key={index}>
              <HiOutlineTrash
                color="#7e0000"
                cursor="pointer"
                fontSize="1.2rem"
                onClick={() => {
                  const newToDos = toDos.filter((item) => item !== todo);
                  setToDos(newToDos);
                }}
              />
            </ToDoItem>
          ))}
        </Flex>
      </div>
    </Flex>
  );
}

export default App;