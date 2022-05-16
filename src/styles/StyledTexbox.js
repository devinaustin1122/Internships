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
  color: #757575;
  ${(props) =>
    props.invalid &&
    css`
      background-color: #f6e8e4;
      border: solid 1px #f6e8e4;
    `}

  &:focus {
    color: #757575;
  }
`;

export default StyledTextbox;
