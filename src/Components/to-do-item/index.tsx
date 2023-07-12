//Components
import { HiOutlineTrash } from "react-icons/hi";
import { Flex } from "../flex";

//Styles
import { StyledToDoItem } from "./styles";

//Types
import { ToDoItemProps } from "./types";

export function ToDoItem({ text, onClickRemove }: ToDoItemProps) {
  return (
    <StyledToDoItem>
      <Flex gap="1rem">
        <input
          className="checkbox_custom"
          type="checkbox"
          style={{ scale: "1.5" }}
        />
        <span>{text}</span>
      </Flex>

      <HiOutlineTrash
        onClick={onClickRemove}
        color="#7e0000"
        cursor="pointer"
        fontSize="1.2rem"
      />
    </StyledToDoItem>
  );
}
