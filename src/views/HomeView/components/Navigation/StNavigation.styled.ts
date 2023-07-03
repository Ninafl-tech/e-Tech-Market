import styled from "styled-components";

export const StContent = styled.div`
  opacity: 1;
  background-color: blue;
  width: 1000px;
`;

export const StCategories = styled.div`
  &:hover ${StContent} {
    opacity: 0;
  }
`;