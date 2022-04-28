import styled from "styled-components";

const TextboxStyled = styled.input.attrs({ type: "text" })`
  font-size: 0.9rem;
  font-weight: 300;
  color: grey;
  background-color: #f5f5f5;
  border-radius: 10px;
  border: solid 1px #eeeeee;
  height: 3rem;
  padding: 1rem;
  margin: 0.8rem 0;

  &:focus {
    color: black;
  }
`;

export default TextboxStyled;
