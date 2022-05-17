import styled, { css } from "styled-components";

const StyledTextbox = styled.input`
  font-size: 1rem;
  font-weight: 300;
  border-radius: 10px;
  border: solid 1px #eeeeee;
  height: 3rem;
  padding-left: 1rem;
  margin: 0.8rem 0;
  width: 100%;
  color: #757575;
  background-color: var(--primary-color);
  ${(props) =>
    props.invalid &&
    css`
      background-color: #f6e8e4;
    `}

  &:focus {
    outline: none !important;
    border: 2px solid var(--secondary-color);
  }
`;

export default StyledTextbox;
