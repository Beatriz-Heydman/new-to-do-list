//Components
import { Flex } from "../flex";

//Styles
import { StyledToDoItem } from "./styles";

//Types
import { ToDoItemProps } from "./types";

export function ToDoItem({ text, children }: ToDoItemProps) {
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
      {children}
    </StyledToDoItem>
  );
}
