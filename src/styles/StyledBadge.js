import styled, { css } from "styled-components";

const StyledBadge = styled.span`
  color: white;
  display: inline-block;
  border-radius: 50px;
  padding: 0.2rem 1rem;
  font-size: 0.9rem;
  margin-top: 0.2rem;
  background-color: black;
  ${(props) =>
    props.status === "Approved" &&
    css`
      background-color: #64cc6f;
    `};
  ${(props) =>
    props.status === "Pending" &&
    css`
      background-color: var(--accent-color);
    `};
`;

export default StyledBadge;
