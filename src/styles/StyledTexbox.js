import styled, { css } from "styled-components";

const StyledTextbox = styled.input`
  font-size: 1rem;
  font-weight: 300;
  border-radius: 10px;
  border: solid 1px #eeeeee;
  height: 3rem;
  padding: 1rem 1.5rem;
  margin: 0.8rem 0;
  width: 100%;
  ${(props) =>
    props.invalid &&
    css`
      background-color: #efc8cf;
      border: solid 1px #efc8cf;
    `}

  &:focus {
    color: black;
  }
`;

export default StyledTextbox;
