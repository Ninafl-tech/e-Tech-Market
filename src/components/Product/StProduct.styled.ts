import { styled } from "styled-components";

export const Hidden = styled.div`
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
`;

export const Visible = styled.div`
  opacity: 1;
  transition: 0.5s ease;
  backface-visibility: hidden;
  background-color: #f7fafc;
`;

export const Container = styled.div`
  position: relative;

  &:hover ${Hidden} {
    opacity: 0.7;
  }
`;
export const Text = styled.div`
  background-color: #1677ff;
  color: white;
  font-size: 16px;
  padding: 16px 32px;
  border-radius: 6px;
`;
