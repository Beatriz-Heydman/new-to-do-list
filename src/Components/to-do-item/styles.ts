//Libs
import styled from "styled-components";

export const StyledToDoItem = styled.div`
  width: 100%;
  padding: 0.75rem;
  background-color: #008f75;
  display: flex;
  justify-content: space-between;
  border-radius: 0.5rem;
  color: #d5ffec;

  input[type="checkbox"]:checked {
    display: flex;
    border: solid 2px #69ffbc;
  }
`;
