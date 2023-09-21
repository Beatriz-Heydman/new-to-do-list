//Libs
import styled from "styled-components";

export const Button = styled.button`
  min-width: fit-content;
  background-color: #006956;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  outline: none;
  border: none;
  border-radius: 0.5rem;
  color: #d5ffec;
  cursor: pointer;
  transition: all ease 0.2s;

  &:hover {
    background-color: #007d66;
  }

  @media (max-width: 550px) {
    width: 100%;
  }
`;
