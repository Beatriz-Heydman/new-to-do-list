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
  animation: scaleAnimation 0.3s;

  input[type="checkbox"]:checked {
    display: flex;
    border: solid 2px #69ffbc;
  }

  @keyframes scaleAnimation {
    0% {
      opacity: 0;
      scale: 0.5;
    }
    100% {
      opacity: 1;
      scale: 1;
    }
  }
`;
