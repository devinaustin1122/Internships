import styled, { css } from "styled-components";

const ButtonStyled = styled.input.attrs({ type: "button" })`
  width: 100%;
  background-color: var(--secondary-color);
  border: none;
  color: white;
  font-weight: 500;
  font-size: 1em;
  padding: 1em;
  margin: 1rem 0;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  ${(props) =>
    props.backgroundColor &&
    css`
      background-color: ${props.backgroundColor};
    `}

  &:hover {
    box-shadow: none;
  }
`;

export default ButtonStyled;
