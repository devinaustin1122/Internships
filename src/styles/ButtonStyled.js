import styled, { css } from "styled-components";

const ButtonStyled = styled.input.attrs({ type: "button" })`
  background-color: green;
  border: none;
  color: white;
  font-weight: 500;
  font-size: 1em;
  padding: 1em;
  box-shadow: 5px 5px 5px grey;
  ${(props) =>
    props.backgroundColor &&
    css`
      background-color: ${props.backgroundColor};
    `}
`;

export default ButtonStyled;
