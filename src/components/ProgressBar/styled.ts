import styled from "styled-components";

export const ProgressBarContainer = styled.div`
  width: 100%;
  background-color: #f2fbfa;
  border-radius: 15px;
  overflow: hidden;
  margin-top: 20px;
`;

export const ProgressBarFill = styled.div<{ value: number }>`
  height: 25px;
  width: ${(props) => props.value}%;
  background-color: var(--primary);
  border-radius: inherit;
  transition: width 0.5s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: white;
  font-weight: bold;
  font-size: 14px;
`;
