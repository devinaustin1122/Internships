import styled, { css } from "styled-components";

const StyledBadge = styled.span`
  color: white;
  display: inline-block;
  border-radius: 50px;
  padding: 0.2rem 1rem;
  font-size: 0.9rem;
  margin-top: 0.2rem;
  ${(props) =>
    props.backgroundColor &&
    css`
      background-color: ${props.backgroundColor};
    `};
`;

export default StyledBadge;
